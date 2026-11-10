<script setup lang="ts">
import type { Component } from 'vue';
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue';
import { Head, router, useForm } from '@inertiajs/vue3';
import {
    CalendarDays,
    Check,
    CheckCircle2,
    Clock3,
    Inbox,
    ListChecks,
    Pencil,
    Plus,
    Sparkles,
    Trash2,
    X,
} from '@lucide/vue';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import {
    dueLabel,
    dueToneClass,
    formatLongDate,
    formatShortDate,
    fromDateTimeLocal,
    isDueToday,
    isDueUpcoming,
    isOverdue,
    projectDotClass,
    projectNames,
    toDateTimeLocal,
} from '@/lib/tasks';
import {
    destroy as destroyRoute,
    index as tasksIndex,
    store as storeRoute,
    toggle as toggleRoute,
    update as updateRoute,
} from '@/routes/tasks';
import type { Task } from '@/types';

type ViewKey = 'all' | 'today' | 'upcoming' | 'inbox' | 'completed';

const props = defineProps<{
    tasks: Task[];
}>();

defineOptions({
    layout: {
        breadcrumbs: [
            {
                title: 'Tasks',
                href: tasksIndex(),
            },
        ],
    },
});

const todayLabel = formatLongDate();
const activeView = ref<ViewKey>('all');
const activeProject = ref<string | null>(null);

const projects = computed(() => projectNames(props.tasks));

const projectCounts = computed(() =>
    projects.value.map((project) => ({
        name: project,
        count: props.tasks.filter((task) => task.project === project).length,
    })),
);

function matchesView(task: Task, view: ViewKey): boolean {
    switch (view) {
        case 'today':
            return (
                isDueToday(task.due_at) ||
                (!task.is_completed && isOverdue(task.due_at))
            );
        case 'upcoming':
            return !task.is_completed && isDueUpcoming(task.due_at);
        case 'inbox':
            return task.project === null;
        case 'completed':
            return task.is_completed;
        default:
            return true;
    }
}

const views = computed<
    { key: ViewKey; label: string; icon: Component; count: number }[]
>(() => [
    {
        key: 'all',
        label: 'All tasks',
        icon: ListChecks,
        count: props.tasks.length,
    },
    {
        key: 'today',
        label: 'Today',
        icon: CalendarDays,
        count: props.tasks.filter((task) => matchesView(task, 'today')).length,
    },
    {
        key: 'upcoming',
        label: 'Upcoming',
        icon: Clock3,
        count: props.tasks.filter((task) => matchesView(task, 'upcoming'))
            .length,
    },
    {
        key: 'inbox',
        label: 'Inbox',
        icon: Inbox,
        count: props.tasks.filter((task) => matchesView(task, 'inbox')).length,
    },
    {
        key: 'completed',
        label: 'Completed',
        icon: CheckCircle2,
        count: props.tasks.filter((task) => task.is_completed).length,
    },
]);

const viewTasks = computed(() =>
    props.tasks.filter((task) => matchesView(task, activeView.value)),
);

const visibleTasks = computed(() =>
    activeProject.value
        ? viewTasks.value.filter((task) => task.project === activeProject.value)
        : viewTasks.value,
);

const currentView = computed(() =>
    views.value.find((view) => view.key === activeView.value)!,
);

const viewSubtitle = computed(() => {
    switch (activeView.value) {
        case 'today':
            return todayLabel;
        case 'upcoming':
            return 'Scheduled after today';
        case 'inbox':
            return 'Tasks without a project';
        case 'completed':
            return 'Everything you have finished';
        default:
            return todayLabel;
    }
});

const doneCount = computed(
    () => visibleTasks.value.filter((task) => task.is_completed).length,
);
const progressPercent = computed(() =>
    visibleTasks.value.length === 0
        ? 0
        : Math.round((doneCount.value / visibleTasks.value.length) * 100),
);

const composerOpen = ref(false);
const titleInput = ref<HTMLInputElement | null>(null);

const form = useForm({
    title: '',
    description: '',
    project: '',
    due_at: '',
});

function openComposer() {
    composerOpen.value = true;
    nextTick(() => titleInput.value?.focus());
}

function closeComposer() {
    composerOpen.value = false;
    form.reset();
    form.clearErrors();
}

function addTask() {
    form.transform((data) => ({
        title: data.title,
        description: data.description || null,
        project: data.project || null,
        due_at: fromDateTimeLocal(data.due_at),
    })).post(storeRoute.url(), {
        preserveScroll: true,
        onSuccess: () => {
            form.reset();
            composerOpen.value = false;
        },
    });
}

const editingId = ref<number | null>(null);

const editForm = useForm({
    title: '',
    description: '',
    project: '',
    due_at: '',
});

function startEditing(task: Task) {
    editingId.value = task.id;
    editForm.title = task.title;
    editForm.description = task.description ?? '';
    editForm.project = task.project ?? '';
    editForm.due_at = toDateTimeLocal(task.due_at);
    editForm.clearErrors();
}

function cancelEditing() {
    editingId.value = null;
    editForm.reset();
    editForm.clearErrors();
}

function saveEdit(task: Task) {
    editForm
        .transform((data) => ({
            title: data.title,
            description: data.description || null,
            project: data.project || null,
            due_at: fromDateTimeLocal(data.due_at),
        }))
        .put(updateRoute.url(task.id), {
            preserveScroll: true,
            onSuccess: () => cancelEditing(),
        });
}

function toggleTask(task: Task) {
    router.patch(toggleRoute.url(task.id), {}, { preserveScroll: true });
}

const deleteOpen = ref(false);
const taskToDelete = ref<Task | null>(null);

function removeTask(task: Task) {
    taskToDelete.value = task;
    deleteOpen.value = true;
}

function confirmDelete() {
    if (!taskToDelete.value) {
        return;
    }

    router.delete(destroyRoute.url(taskToDelete.value.id), {
        preserveScroll: true,
    });
}

function selectView(view: ViewKey) {
    activeView.value = view;
}

function toggleProject(project: string) {
    activeProject.value = activeProject.value === project ? null : project;
}

function handleShortcut(event: KeyboardEvent) {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        openComposer();
    }

    if (event.key === 'Escape' && composerOpen.value) {
        closeComposer();
    }
}

onMounted(() => window.addEventListener('keydown', handleShortcut));
onBeforeUnmount(() => window.removeEventListener('keydown', handleShortcut));

const fieldClass =
    'w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 dark:border-white/10 dark:bg-slate-950/60 dark:text-white dark:placeholder:text-slate-500';

const labelClass =
    'text-xs font-medium tracking-wide text-slate-500 dark:text-slate-400';
</script>

<template>
    <Head title="Tasks" />

    <div class="flex flex-1 flex-col gap-6 p-4 sm:p-6 lg:p-8">
        <div
            class="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
        >
            <div>
                <h1
                    class="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white"
                >
                    {{ currentView.label }}
                </h1>
                <p class="mt-1.5 text-sm text-slate-500 dark:text-slate-400">
                    {{ viewSubtitle }}
                </p>
            </div>

            <div class="flex items-center gap-4">
                <div class="hidden text-right sm:block">
                    <p
                        class="text-sm font-medium text-slate-700 dark:text-slate-200"
                    >
                        {{ doneCount }} of {{ visibleTasks.length }} done
                    </p>
                    <div
                        class="mt-2 h-1.5 w-40 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10"
                    >
                        <div
                            class="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500 transition-[width] duration-500"
                            :style="{ width: `${progressPercent}%` }"
                        ></div>
                    </div>
                </div>

                <button
                    type="button"
                    class="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-slate-900/10 transition-colors hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
                    @click="openComposer"
                >
                    <Plus class="size-4" />
                    New task
                </button>
            </div>
        </div>

        <div class="grid gap-6 lg:grid-cols-[16rem_1fr]">
            <aside class="hidden flex-col gap-5 lg:flex">
                <div
                    class="rounded-2xl border border-slate-200/80 bg-white p-2.5 shadow-sm shadow-slate-900/5 dark:border-white/10 dark:bg-slate-900"
                >
                    <p
                        class="px-3 pt-2 pb-2 text-[11px] font-semibold tracking-[0.14em] text-slate-400 uppercase dark:text-slate-500"
                    >
                        Views
                    </p>
                    <button
                        v-for="view in views"
                        :key="view.key"
                        type="button"
                        class="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors"
                        :class="
                            activeView === view.key
                                ? 'bg-amber-50 font-semibold text-amber-700 dark:bg-amber-400/10 dark:text-amber-300'
                                : 'font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white'
                        "
                        @click="selectView(view.key)"
                    >
                        <component :is="view.icon" class="size-4 shrink-0" />
                        <span class="flex-1 text-left">{{ view.label }}</span>
                        <span
                            class="text-xs tabular-nums"
                            :class="
                                activeView === view.key
                                    ? 'text-amber-600 dark:text-amber-300'
                                    : 'text-slate-400 dark:text-slate-500'
                            "
                        >
                            {{ view.count }}
                        </span>
                    </button>
                </div>

                <div
                    v-if="projectCounts.length"
                    class="rounded-2xl border border-slate-200/80 bg-white p-2.5 shadow-sm shadow-slate-900/5 dark:border-white/10 dark:bg-slate-900"
                >
                    <p
                        class="px-3 pt-2 pb-2 text-[11px] font-semibold tracking-[0.14em] text-slate-400 uppercase dark:text-slate-500"
                    >
                        Projects
                    </p>
                    <button
                        v-for="project in projectCounts"
                        :key="project.name"
                        type="button"
                        class="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors"
                        :class="
                            activeProject === project.name
                                ? 'bg-amber-50 font-semibold text-amber-700 dark:bg-amber-400/10 dark:text-amber-300'
                                : 'font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white'
                        "
                        @click="toggleProject(project.name)"
                    >
                        <span
                            class="size-2 shrink-0 rounded-full"
                            :class="projectDotClass(project.name)"
                        ></span>
                        <span class="flex-1 truncate text-left">
                            {{ project.name }}
                        </span>
                        <span
                            class="text-xs text-slate-400 tabular-nums dark:text-slate-500"
                        >
                            {{ project.count }}
                        </span>
                    </button>
                </div>

                <div
                    v-else
                    class="rounded-2xl border border-dashed border-slate-200 p-5 text-center dark:border-white/10"
                >
                    <p class="text-xs leading-relaxed text-slate-400">
                        Add a project to any task to group your work here.
                    </p>
                </div>
            </aside>

            <div
                class="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm shadow-slate-900/5 dark:border-white/10 dark:bg-slate-900"
            >
                <div
                    class="flex flex-col gap-3 border-b border-slate-100 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 dark:border-white/5"
                >
                    <div class="flex flex-wrap items-center gap-2">
                        <h2
                            class="text-sm font-semibold text-slate-900 dark:text-white"
                        >
                            {{ currentView.label }}
                        </h2>
                        <span
                            class="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-500 dark:bg-white/10 dark:text-slate-300"
                        >
                            {{ visibleTasks.length }}
                        </span>
                        <span
                            v-if="activeProject"
                            class="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700 dark:bg-amber-400/10 dark:text-amber-300"
                        >
                            {{ activeProject }}
                            <button
                                type="button"
                                aria-label="Clear project filter"
                                class="transition-colors hover:text-amber-900 dark:hover:text-amber-200"
                                @click="activeProject = null"
                            >
                                <X class="size-3" />
                            </button>
                        </span>
                    </div>

                    <div class="flex w-full flex-col gap-2 lg:hidden">
                        <div class="grid grid-cols-2 gap-2 sm:grid-cols-5">
                            <button
                                v-for="view in views"
                                :key="view.key"
                                type="button"
                                class="rounded-full border px-3 py-1.5 text-xs font-medium transition-colors"
                                :class="
                                    activeView === view.key
                                        ? 'border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-300/20 dark:bg-amber-400/10 dark:text-amber-300'
                                        : 'border-slate-200 bg-white text-slate-500 hover:text-slate-900 dark:border-white/10 dark:bg-transparent dark:text-slate-400 dark:hover:text-white'
                                "
                                @click="selectView(view.key)"
                            >
                                {{ view.label }}
                                <span class="ml-1 tabular-nums opacity-60">{{
                                    view.count
                                }}</span>
                            </button>
                        </div>
                        <select
                            v-if="projects.length"
                            v-model="activeProject"
                            class="w-full rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 outline-none focus:border-amber-500 sm:w-auto sm:self-start dark:border-white/10 dark:bg-slate-950 dark:text-slate-300"
                        >
                            <option :value="null">All projects</option>
                            <option
                                v-for="project in projects"
                                :key="project"
                                :value="project"
                            >
                                {{ project }}
                            </option>
                        </select>
                    </div>
                </div>

                <div
                    v-if="visibleTasks.length"
                    class="divide-y divide-slate-100 dark:divide-white/5"
                >
                    <div
                        v-for="task in visibleTasks"
                        :key="task.id"
                        class="px-2 py-1.5 sm:px-3"
                    >
                        <form
                            v-if="editingId === task.id"
                            class="grid gap-3 rounded-xl bg-slate-50/70 p-3 sm:p-4 dark:bg-white/5"
                            @submit.prevent="saveEdit(task)"
                            @keydown.esc="cancelEditing"
                        >
                            <div class="grid gap-2">
                                <label :class="labelClass">Title</label>
                                <input
                                    v-model="editForm.title"
                                    type="text"
                                    :class="fieldClass"
                                    required
                                />
                                <p
                                    v-if="editForm.errors.title"
                                    class="text-xs text-red-600 dark:text-red-400"
                                >
                                    {{ editForm.errors.title }}
                                </p>
                            </div>
                            <div class="grid gap-3 sm:grid-cols-2">
                                <div class="grid gap-2">
                                    <label :class="labelClass">Project</label>
                                    <input
                                        v-model="editForm.project"
                                        type="text"
                                        list="task-projects"
                                        placeholder="e.g. Website redesign"
                                        :class="fieldClass"
                                    />
                                </div>
                                <div class="grid gap-2">
                                    <label :class="labelClass">Due</label>
                                    <input
                                        v-model="editForm.due_at"
                                        type="datetime-local"
                                        :class="fieldClass"
                                    />
                                </div>
                            </div>
                            <div class="grid gap-2">
                                <label :class="labelClass">Notes</label>
                                <textarea
                                    v-model="editForm.description"
                                    rows="2"
                                    placeholder="Add details (optional)"
                                    :class="fieldClass"
                                ></textarea>
                            </div>
                            <div class="flex justify-end gap-2">
                                <button
                                    type="button"
                                    class="rounded-xl px-3 py-2 text-sm font-medium text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white"
                                    @click="cancelEditing"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    :disabled="editForm.processing"
                                    class="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800 disabled:opacity-60 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
                                >
                                    Save changes
                                </button>
                            </div>
                        </form>

                        <div
                            v-else
                            class="group flex items-start gap-3 rounded-xl px-2 py-2.5 transition-colors hover:bg-slate-50 sm:gap-4 sm:px-3 dark:hover:bg-white/5"
                        >
                            <button
                                type="button"
                                class="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md border-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
                                :class="
                                    task.is_completed
                                        ? 'border-amber-500 bg-amber-500 text-white dark:border-amber-400 dark:bg-amber-400 dark:text-slate-950'
                                        : 'border-slate-300 hover:border-amber-500 hover:bg-amber-50 dark:border-slate-600 dark:hover:border-amber-400 dark:hover:bg-amber-400/10'
                                "
                                :aria-label="
                                    task.is_completed
                                        ? `Reopen ${task.title}`
                                        : `Complete ${task.title}`
                                "
                                :aria-pressed="task.is_completed"
                                @click="toggleTask(task)"
                            >
                                <Check
                                    v-if="task.is_completed"
                                    class="size-3.5"
                                    :stroke-width="3"
                                />
                            </button>

                            <div class="min-w-0 flex-1">
                                <p
                                    class="text-sm font-medium break-words"
                                    :class="
                                        task.is_completed
                                            ? 'text-slate-400 line-through dark:text-slate-500'
                                            : 'text-slate-900 dark:text-white'
                                    "
                                >
                                    {{ task.title }}
                                </p>
                                <div
                                    class="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 dark:text-slate-400"
                                >
                                    <span
                                        v-if="task.project"
                                        class="inline-flex items-center gap-1.5 font-medium"
                                    >
                                        <span
                                            class="size-1.5 rounded-full"
                                            :class="
                                                projectDotClass(task.project)
                                            "
                                        ></span>
                                        {{ task.project }}
                                    </span>
                                    <span
                                        v-if="task.project && task.description"
                                        class="text-slate-300 dark:text-slate-600"
                                        >·</span
                                    >
                                    <span
                                        v-if="task.description"
                                        class="max-w-[24rem] truncate"
                                    >
                                        {{ task.description }}
                                    </span>
                                    <span
                                        v-if="
                                            !task.project && !task.description
                                        "
                                    >
                                        Added
                                        {{ formatShortDate(task.created_at) }}
                                    </span>
                                </div>
                            </div>

                            <span
                                v-if="task.due_at"
                                class="mt-0.5 inline-flex shrink-0 items-center rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 ring-inset"
                                :class="dueToneClass(task)"
                            >
                                {{ dueLabel(task.due_at) }}
                            </span>

                            <div
                                class="flex shrink-0 items-center gap-0.5 opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100 sm:focus-within:opacity-100"
                            >
                                <button
                                    type="button"
                                    class="flex size-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-white/10 dark:hover:text-white"
                                    :aria-label="`Edit ${task.title}`"
                                    @click="startEditing(task)"
                                >
                                    <Pencil class="size-4" />
                                </button>
                                <button
                                    type="button"
                                    class="flex size-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-500/10 dark:hover:text-rose-400"
                                    :aria-label="`Delete ${task.title}`"
                                    @click="removeTask(task)"
                                >
                                    <Trash2 class="size-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    v-else
                    class="flex flex-col items-center justify-center gap-3 px-6 py-16 text-center"
                >
                    <span
                        class="flex size-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-500 dark:bg-amber-400/10 dark:text-amber-300"
                    >
                        <Sparkles class="size-6" />
                    </span>
                    <p
                        class="text-sm font-semibold text-slate-900 dark:text-white"
                    >
                        Nothing here yet
                    </p>
                    <p
                        class="max-w-xs text-sm leading-relaxed text-slate-500 dark:text-slate-400"
                    >
                        Add a task or switch views to see the rest of your list.
                    </p>
                    <button
                        type="button"
                        class="mt-1 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
                        @click="openComposer"
                    >
                        <Plus class="size-4" />
                        Add a task
                    </button>
                </div>

                <div
                    class="border-t border-slate-100 p-3 sm:p-4 dark:border-white/5"
                >
                    <button
                        v-if="!composerOpen"
                        type="button"
                        class="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-slate-200"
                        @click="openComposer"
                    >
                        <span
                            class="flex size-5 items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-slate-400 dark:border-slate-600"
                        >
                            <Plus class="size-3" />
                        </span>
                        Add a task...
                        <span
                            class="ml-auto hidden items-center gap-1 sm:flex"
                            aria-hidden="true"
                        >
                            <kbd
                                class="rounded-md border border-slate-200 bg-white px-1.5 py-0.5 text-[10px] font-medium text-slate-400 dark:border-white/10 dark:bg-white/5 dark:text-slate-500"
                                >⌘</kbd
                            >
                            <kbd
                                class="rounded-md border border-slate-200 bg-white px-1.5 py-0.5 text-[10px] font-medium text-slate-400 dark:border-white/10 dark:bg-white/5 dark:text-slate-500"
                                >K</kbd
                            >
                        </span>
                    </button>

                    <form
                        v-else
                        class="grid gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 p-3 sm:p-4 dark:border-white/10 dark:bg-white/5"
                        @submit.prevent="addTask"
                    >
                        <input
                            ref="titleInput"
                            v-model="form.title"
                            type="text"
                            placeholder="What needs to be done?"
                            :class="fieldClass"
                            required
                        />
                        <p
                            v-if="form.errors.title"
                            class="text-xs text-red-600 dark:text-red-400"
                        >
                            {{ form.errors.title }}
                        </p>
                        <div class="grid gap-3 sm:grid-cols-2">
                            <input
                                v-model="form.project"
                                type="text"
                                list="task-projects"
                                placeholder="Project (optional)"
                                :class="fieldClass"
                            />
                            <input
                                v-model="form.due_at"
                                type="datetime-local"
                                :class="fieldClass"
                            />
                        </div>
                        <textarea
                            v-model="form.description"
                            rows="2"
                            placeholder="Notes (optional)"
                            :class="fieldClass"
                        ></textarea>
                        <div class="flex items-center justify-end gap-2">
                            <button
                                type="button"
                                class="rounded-xl px-3 py-2 text-sm font-medium text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white"
                                @click="closeComposer"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                :disabled="form.processing"
                                class="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800 disabled:opacity-60 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
                            >
                                <Check class="size-4" />
                                Add task
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <datalist id="task-projects">
            <option
                v-for="project in projects"
                :key="project"
                :value="project"
            />
        </datalist>

        <AlertDialog
            :open="deleteOpen"
            @update:open="(open) => (deleteOpen = open)"
        >
            <AlertDialogContent
                class="gap-0 overflow-hidden rounded-2xl border-slate-200/80 bg-white p-0 shadow-2xl shadow-slate-900/10 dark:border-white/10 dark:bg-slate-900"
            >
                <AlertDialogHeader class="gap-3 p-6">
                    <div
                        class="flex size-11 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 ring-1 ring-rose-600/10 dark:bg-rose-400/10 dark:text-rose-400 dark:ring-rose-400/20"
                    >
                        <Trash2 class="size-5" />
                    </div>
                    <div class="space-y-1.5">
                        <AlertDialogTitle
                            class="text-base font-semibold text-slate-900 dark:text-white"
                        >
                            Delete task?
                        </AlertDialogTitle>
                        <AlertDialogDescription
                            class="text-sm leading-relaxed text-slate-500 dark:text-slate-400"
                        >
                            <span
                                class="font-medium text-slate-700 dark:text-slate-200"
                            >
                                "{{ taskToDelete?.title }}"
                            </span>
                            will be permanently removed. This action can't be
                            undone.
                        </AlertDialogDescription>
                    </div>
                </AlertDialogHeader>
                <AlertDialogFooter
                    class="border-t border-slate-100 bg-slate-50/70 px-6 py-4 dark:border-white/5 dark:bg-white/[0.03]"
                >
                    <AlertDialogCancel
                        class="h-10 rounded-xl border-slate-200 bg-white px-4 text-sm font-medium text-slate-600 shadow-none hover:bg-slate-50 hover:text-slate-900 dark:border-white/10 dark:bg-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
                    >
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                        class="h-10 rounded-xl bg-rose-600 px-4 text-sm font-semibold text-white shadow-sm shadow-rose-600/20 hover:bg-rose-700 focus-visible:ring-rose-600/30"
                        @click="confirmDelete"
                    >
                        Delete task
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    </div>
</template>
