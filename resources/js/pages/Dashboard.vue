<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import PlaceholderPattern from '@/components/PlaceholderPattern.vue';
import { dashboard } from '@/routes';
import { index as tasksIndex } from '@/routes/tasks';

const props = defineProps<{
    tasks: Array<{
        id: number;
        title: string;
        description: string | null;
        is_completed: boolean;
        created_at: string;
    }>;
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
</script>

<template>
    <Head title="Dashboard" />

    <div
        class="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4"
    >
        <!-- Welcome header -->
        <div class="flex items-center justify-between">
            <div>
                <h1 class="text-2xl font-bold text-slate-900 sm:text-3xl">
                    Good Morning!
                </h1>
                <p class="mt-1 text-slate-500">
                    Here is your task overview for today.
                </p>
            </div>

            <a
                :href="tasksIndex().url"
                class="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-md shadow-indigo-200 transition hover:bg-indigo-700"
            >
                <svg
                    class="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                </svg>
                View All Tasks
            </a>
        </div>

        <!-- Stats cards -->
        <div class="grid gap-4 md:grid-cols-3">
            <div
                class="relative overflow-hidden rounded-xl border border-sidebar-border/70 bg-gradient-to-br from-indigo-500 to-purple-600 p-6 text-white shadow-sm dark:border-sidebar-border"
            >
                <div class="absolute top-4 right-4 opacity-20">
                    <PlaceholderPattern class="h-16 w-16" />
                </div>
                <div class="relative z-10">
                    <p class="text-sm font-medium text-indigo-100">
                        Total Tasks
                    </p>
                    <p class="mt-2 text-3xl font-bold">
                        {{ tasks?.length ?? 0 }}
                    </p>
                </div>
            </div>

            <div
                class="relative overflow-hidden rounded-xl border border-sidebar-border/70 p-6 shadow-sm dark:border-sidebar-border"
            >
                <div class="absolute top-4 right-4 opacity-10">
                    <PlaceholderPattern class="h-16 w-16" />
                </div>
                <div class="relative z-10">
                    <p class="text-sm font-medium text-amber-500">Pending</p>
                    <p class="mt-2 text-3xl font-bold text-slate-900">
                        {{ tasks?.filter((t) => !t.is_completed).length ?? 0 }}
                    </p>
                </div>
            </div>

            <div
                class="relative overflow-hidden rounded-xl border border-sidebar-border/70 p-6 shadow-sm dark:border-sidebar-border"
            >
                <div class="absolute top-4 right-4 opacity-10">
                    <PlaceholderPattern class="h-16 w-16" />
                </div>
                <div class="relative z-10">
                    <p class="text-sm font-medium text-green-600">Completed</p>
                    <p class="mt-2 text-3xl font-bold text-slate-900">
                        {{ tasks?.filter((t) => t.is_completed).length ?? 0 }}
                    </p>
                </div>
            </div>
        </div>

        <!-- Quick add task -->
        <div
            class="flex items-center gap-3 rounded-xl border border-sidebar-border/70 p-6 shadow-sm dark:border-sidebar-border"
        >
            <svg
                class="h-6 w-6 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                />
            </svg>
            <p class="text-sm text-slate-500">
                Want to add a new task? Head over to your task manager.
            </p>
            <a
                :href="tasksIndex().url"
                class="ml-auto text-sm font-medium text-indigo-600 hover:text-indigo-700"
            >
                View Tasks →
            </a>
        </div>

        <!-- Recent tasks -->
        <div
            class="relative flex min-h-[300px] flex-1 flex-col overflow-hidden rounded-xl border border-sidebar-border/70 p-6 shadow-sm dark:border-sidebar-border"
        >
            <div class="mb-4 flex items-center justify-between">
                <h3 class="font-semibold text-slate-900">Recent Tasks</h3>
                <span class="text-xs text-slate-400"
                    >{{ tasks?.length ?? 0 }} items</span
                >
            </div>

            <div
                v-if="tasks?.length === 0"
                class="flex flex-1 flex-col items-center justify-center text-center"
            >
                <PlaceholderPattern class="mb-4 h-24 w-24 opacity-30" />
                <p class="text-sm text-slate-500">
                    No tasks yet. Add your first task!
                </p>
                <a
                    :href="tasksIndex().url"
                    class="mt-2 text-sm font-medium text-indigo-600 hover:text-indigo-700"
                >
                    Add Task →
                </a>
            </div>

            <div v-else class="flex-1 space-y-3 overflow-y-auto">
                <div
                    v-for="task in tasks.slice(0, 5)"
                    :key="task.id"
                    class="flex items-center gap-3 rounded-lg border border-transparent p-3 transition hover:border-sidebar-border/50 hover:bg-slate-50 dark:hover:border-sidebar-border"
                >
                    <div
                        class="h-2 w-2 rounded-full"
                        :class="
                            task.is_completed ? 'bg-green-500' : 'bg-amber-400'
                        "
                    />
                    <div class="min-w-0 flex-1">
                        <p class="truncate text-sm text-slate-900">
                            {{ task.title }}
                        </p>
                        <p
                            v-if="task.description"
                            class="mt-0.5 truncate text-xs text-slate-500"
                        >
                            {{ task.description }}
                        </p>
                    </div>
                    <span
                        :class="
                            task.is_completed
                                ? 'bg-green-100 text-green-700'
                                : 'bg-amber-100 text-amber-700'
                        "
                        class="rounded-full px-2 py-0.5 text-[10px] font-medium"
                    >
                        {{ task.is_completed ? 'Completed' : 'Pending' }}
                    </span>
                </div>
                <a
                    v-if="tasks.length > 5"
                    class="rounded-lg px-3 py-2 text-sm text-indigo-600 transition hover:bg-indigo-50"
                >
                    View all {{ tasks.length }} tasks →
                </a>
            </div>
        </div>
    </div>
</template>
