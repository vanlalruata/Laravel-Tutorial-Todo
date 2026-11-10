<script setup lang="ts">
import type { Component } from 'vue';
import { computed } from 'vue';
import { Head, Link, router, usePage } from '@inertiajs/vue3';
import {
    ArrowUpRight,
    Check,
    CheckCircle2,
    Clock3,
    Flame,
    Layers,
    TrendingDown,
    TrendingUp,
} from '@lucide/vue';
import {
    completionStreak,
    dueLabel,
    dueToneClass,
    formatLongDate,
    isDueToday,
    isOverdue,
    projectDotClass,
    weeklyActivity,
} from '@/lib/tasks';
import { dashboard } from '@/routes';
import { index as tasksIndex, toggle as toggleRoute } from '@/routes/tasks';
import type { Task } from '@/types';

const props = defineProps<{
    tasks: Task[];
}>();

defineOptions({
    layout: {
        breadcrumbs: [
            {
                title: 'Dashboard',
                href: dashboard(),
            },
        ],
    },
});

const page = usePage();

const firstName = computed(
    () => (page.props.auth.user?.name ?? 'there').split(' ')[0],
);

const greeting = computed(() => {
    const hour = new Date().getHours();

    if (hour < 12) {
        return 'Good morning';
    }

    if (hour < 18) {
        return 'Good afternoon';
    }

    return 'Good evening';
});

const todayLabel = formatLongDate();

const total = computed(() => props.tasks.length);
const pending = computed(
    () => props.tasks.filter((task) => !task.is_completed).length,
);
const completed = computed(
    () => props.tasks.filter((task) => task.is_completed).length,
);
const completionRate = computed(() =>
    total.value === 0 ? 0 : Math.round((completed.value / total.value) * 100),
);

const stats = computed<
    {
        label: string;
        value: number;
        hint: string;
        icon: Component;
        tile: string;
    }[]
>(() => [
    {
        label: 'Total tasks',
        value: total.value,
        hint: `${pending.value} still open`,
        icon: Layers,
        tile: 'bg-amber-50 text-amber-600 dark:bg-amber-400/10 dark:text-amber-300',
    },
    {
        label: 'Pending',
        value: pending.value,
        hint: pending.value === 0 ? 'Nothing left behind' : 'Waiting on you',
        icon: Clock3,
        tile: 'bg-sky-50 text-sky-600 dark:bg-sky-400/10 dark:text-sky-300',
    },
    {
        label: 'Completed',
        value: completed.value,
        hint: `${completionRate.value}% completion rate`,
        icon: CheckCircle2,
        tile: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-300',
    },
]);

const focusTasks = computed(() => {
    const dueSoon = props.tasks.filter(
        (task) =>
            !task.is_completed &&
            (isDueToday(task.due_at) || isOverdue(task.due_at)),
    );
    const rest = props.tasks.filter(
        (task) =>
            !task.is_completed &&
            !(isDueToday(task.due_at) || isOverdue(task.due_at)),
    );

    return [...dueSoon, ...rest].slice(0, 6);
});

const streak = computed(() => completionStreak(props.tasks));
const weekly = computed(() => weeklyActivity(props.tasks));

const maxDay = computed(() =>
    Math.max(1, ...weekly.value.days.map((day) => day.count)),
);

const deltaPercent = computed(() => {
    if (weekly.value.lastWeek === 0) {
        return weekly.value.thisWeek > 0 ? 100 : 0;
    }

    return Math.round(
        ((weekly.value.thisWeek - weekly.value.lastWeek) /
            weekly.value.lastWeek) *
            100,
    );
});

function barHeight(count: number): string {
    if (count === 0) {
        return '4px';
    }

    return `${Math.max(Math.round((count / maxDay.value) * 100), 12)}%`;
}

function toggleTask(task: Task) {
    router.patch(toggleRoute.url(task.id), {}, { preserveScroll: true });
}
</script>

<template>
    <Head title="Dashboard" />

    <div class="flex flex-1 flex-col gap-6 p-4 sm:p-6 lg:p-8">
        <div
            class="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
        >
            <div>
                <p
                    class="text-sm font-medium text-amber-600 dark:text-amber-400"
                >
                    {{ todayLabel }}
                </p>
                <h1
                    class="mt-1 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white"
                >
                    {{ greeting }}, {{ firstName }}
                </h1>
                <p class="mt-1.5 text-sm text-slate-500 dark:text-slate-400">
                    <template v-if="pending">
                        {{ pending }} tasks to finish — you are
                        {{ completionRate }}% through your list.
                    </template>
                    <template v-else-if="total">
                        Everything is checked off. Enjoy the clear head.
                    </template>
                    <template v-else>
                        Your list is empty — add your first task to get started.
                    </template>
                </p>
            </div>

            <Link
                :href="tasksIndex()"
                class="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-slate-900/10 transition-colors hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
            >
                Open task board
                <ArrowUpRight class="size-4" />
            </Link>
        </div>

        <div class="grid gap-4 sm:grid-cols-3">
            <div
                v-for="stat in stats"
                :key="stat.label"
                class="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm shadow-slate-900/5 dark:border-white/10 dark:bg-slate-900"
            >
                <div class="flex items-start justify-between gap-4">
                    <div>
                        <p
                            class="text-sm font-medium text-slate-500 dark:text-slate-400"
                        >
                            {{ stat.label }}
                        </p>
                        <p
                            class="mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white"
                        >
                            {{ stat.value }}
                        </p>
                        <p
                            class="mt-1 text-xs text-slate-400 dark:text-slate-500"
                        >
                            {{ stat.hint }}
                        </p>
                    </div>
                    <span
                        class="flex size-10 shrink-0 items-center justify-center rounded-xl"
                        :class="stat.tile"
                    >
                        <component :is="stat.icon" class="size-5" />
                    </span>
                </div>
            </div>
        </div>

        <div class="grid gap-6 lg:grid-cols-3">
            <section
                class="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm shadow-slate-900/5 lg:col-span-2 dark:border-white/10 dark:bg-slate-900"
            >
                <div
                    class="flex items-center justify-between border-b border-slate-100 px-5 py-4 dark:border-white/5"
                >
                    <div>
                        <h2
                            class="text-sm font-semibold text-slate-900 dark:text-white"
                        >
                            Today's focus
                        </h2>
                        <p
                            class="mt-0.5 text-xs text-slate-500 dark:text-slate-400"
                        >
                            {{ todayLabel }}
                        </p>
                    </div>
                    <span
                        class="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-500 dark:bg-white/10 dark:text-slate-300"
                    >
                        {{ focusTasks.length }} open
                    </span>
                </div>

                <div
                    v-if="focusTasks.length"
                    class="divide-y divide-slate-100 dark:divide-white/5"
                >
                    <div
                        v-for="task in focusTasks"
                        :key="task.id"
                        class="flex items-center gap-3 px-4 py-3.5 transition-colors hover:bg-slate-50 sm:px-5 dark:hover:bg-white/5"
                    >
                        <button
                            type="button"
                            class="flex size-5 shrink-0 items-center justify-center rounded-md border-2 border-slate-300 transition-colors hover:border-amber-500 hover:bg-amber-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 dark:border-slate-600 dark:hover:border-amber-400 dark:hover:bg-amber-400/10"
                            :aria-label="`Complete ${task.title}`"
                            @click="toggleTask(task)"
                        >
                            <Check
                                class="size-3.5 text-transparent"
                                :stroke-width="3"
                            />
                        </button>

                        <div class="min-w-0 flex-1">
                            <p
                                class="text-sm font-medium break-words text-slate-900 dark:text-white"
                            >
                                {{ task.title }}
                            </p>
                            <div
                                class="mt-0.5 flex flex-wrap items-center gap-x-2 text-xs text-slate-500 dark:text-slate-400"
                            >
                                <span
                                    v-if="task.project"
                                    class="inline-flex items-center gap-1.5 font-medium"
                                >
                                    <span
                                        class="size-1.5 rounded-full"
                                        :class="projectDotClass(task.project)"
                                    ></span>
                                    {{ task.project }}
                                </span>
                                <span
                                    v-if="task.description"
                                    class="max-w-[18rem] truncate"
                                >
                                    {{ task.description }}
                                </span>
                            </div>
                        </div>

                        <span
                            v-if="task.due_at"
                            class="hidden shrink-0 items-center rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 ring-inset sm:inline-flex"
                            :class="dueToneClass(task)"
                        >
                            {{ dueLabel(task.due_at) }}
                        </span>
                    </div>
                </div>

                <div
                    v-else
                    class="flex flex-col items-center justify-center gap-2 px-6 py-14 text-center"
                >
                    <span
                        class="flex size-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-500 dark:bg-emerald-400/10 dark:text-emerald-300"
                    >
                        <CheckCircle2 class="size-6" />
                    </span>
                    <p
                        class="text-sm font-semibold text-slate-900 dark:text-white"
                    >
                        Inbox zero
                    </p>
                    <p
                        class="max-w-xs text-sm text-slate-500 dark:text-slate-400"
                    >
                        Nothing is waiting on you right now. Add a task whenever
                        you are ready.
                    </p>
                </div>

                <div
                    class="flex items-center justify-between border-t border-slate-100 bg-slate-50/60 px-5 py-3 dark:border-white/5 dark:bg-white/5"
                >
                    <p class="text-xs text-slate-500 dark:text-slate-400">
                        Showing {{ focusTasks.length }} of {{ pending }} open
                        tasks
                    </p>
                    <Link
                        :href="tasksIndex()"
                        class="inline-flex items-center gap-1 text-xs font-semibold text-amber-600 transition-colors hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300"
                    >
                        View all tasks
                        <ArrowUpRight class="size-3.5" />
                    </Link>
                </div>
            </section>

            <div class="flex flex-col gap-6">
                <div
                    class="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm shadow-slate-900/5 dark:border-white/10 dark:bg-slate-900"
                >
                    <div class="flex items-center gap-3">
                        <span
                            class="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-500 dark:bg-amber-400/10 dark:text-amber-300"
                        >
                            <Flame class="size-5" />
                        </span>
                        <div>
                            <p
                                class="text-sm font-semibold text-slate-900 dark:text-white"
                            >
                                {{
                                    streak.current > 0
                                        ? `${streak.current}-day streak`
                                        : 'Start a streak'
                                }}
                            </p>
                            <p
                                class="text-xs text-slate-500 dark:text-slate-400"
                            >
                                Personal best · {{ streak.best }} days
                            </p>
                        </div>
                    </div>
                    <p
                        class="mt-4 text-xs leading-relaxed text-slate-500 dark:text-slate-400"
                    >
                        {{
                            streak.current > 0
                                ? 'Complete one task today to keep the streak alive.'
                                : 'Complete a task today to start a new streak.'
                        }}
                    </p>
                </div>

                <div
                    class="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm shadow-slate-900/5 dark:border-white/10 dark:bg-slate-900"
                >
                    <div class="flex items-start justify-between gap-3">
                        <div>
                            <p
                                class="text-sm font-semibold text-slate-900 dark:text-white"
                            >
                                This week
                            </p>
                            <p
                                class="mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white"
                            >
                                {{ weekly.thisWeek }}
                            </p>
                            <p
                                class="text-xs text-slate-500 dark:text-slate-400"
                            >
                                tasks completed
                            </p>
                        </div>
                        <span
                            v-if="weekly.thisWeek || weekly.lastWeek"
                            class="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold"
                            :class="
                                deltaPercent >= 0
                                    ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-300'
                                    : 'bg-rose-50 text-rose-600 dark:bg-rose-400/10 dark:text-rose-300'
                            "
                        >
                            <component
                                :is="
                                    deltaPercent >= 0
                                        ? TrendingUp
                                        : TrendingDown
                                "
                                class="size-3.5"
                            />
                            {{ deltaPercent >= 0 ? '+' : ''
                            }}{{ deltaPercent }}%
                        </span>
                    </div>

                    <div class="mt-5">
                        <div class="flex h-20 items-end gap-1.5">
                            <div
                                v-for="(day, index) in weekly.days"
                                :key="index"
                                class="flex h-full flex-1 items-end"
                            >
                                <div
                                    class="w-full rounded-md transition-colors"
                                    :class="
                                        day.isToday
                                            ? 'bg-amber-500'
                                            : 'bg-amber-200 dark:bg-amber-400/30'
                                    "
                                    :style="{ height: barHeight(day.count) }"
                                ></div>
                            </div>
                        </div>
                        <div class="mt-2 flex gap-1.5">
                            <span
                                v-for="(day, index) in weekly.days"
                                :key="index"
                                class="flex-1 text-center text-[10px]"
                                :class="
                                    day.isToday
                                        ? 'font-semibold text-slate-700 dark:text-slate-200'
                                        : 'text-slate-400 dark:text-slate-500'
                                "
                            >
                                {{ day.label }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
