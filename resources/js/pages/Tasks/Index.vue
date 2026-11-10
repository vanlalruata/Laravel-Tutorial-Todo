<script setup lang="ts">
import { ref, computed } from 'vue';
import { useForm, router } from '@inertiajs/vue3';
import { Check, ListChecks, Plus, Edit2, Trash2, Calendar } from '@lucide/vue';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Toaster } from '@/components/ui/sonner';

const props = defineProps<{
    tasks: Array<{
        id: number;
        title: string;
        description: string | null;
        is_completed: boolean;
        created_at: string;
    }>;
}>();

const form = useForm({
    title: '',
    description: '',
});

function addTask() {
    form.post('/tasks', {
        preserveScroll: true,

        onSuccess: () => {
            form.reset();
        },
    });
}

const activeFilter = ref('all');

const totalTasks = computed(() => props.tasks.length);

const completedTasks = computed(
    () => props.tasks.filter((task) => task.is_completed).length,
);

const pendingTasks = computed(
    () => props.tasks.filter((task) => !task.is_completed).length,
);

const filteredTasks = computed(() => {
    if (activeFilter.value === 'pending') {
        return props.tasks.filter((task) => !task.is_completed);
    }

    if (activeFilter.value === 'completed') {
        return props.tasks.filter((task) => task.is_completed);
    }

    return props.tasks;
});

function toggleTask(task: { id: number; is_completed: boolean }) {
    router.patch(
        `/tasks/${task.id}`,
        {},
        {
            preserveScroll: true,
        },
    );
}

const editingTaskId = ref<number | null>(null);

const editForm = useForm({
    title: '',
    description: '',
});

function startEditing(task: {
    id: number;
    title: string;
    description: string | null;
}) {
    editingTaskId.value = task.id;

    editForm.title = task.title;
    editForm.description = task.description ?? '';
}

function cancelEditing() {
    editingTaskId.value = null;
    editForm.reset();
    editForm.clearErrors();
}

function updateTask() {
    editForm.put(`/tasks/${editingTaskId.value}`, {
        preserveScroll: true,

        onSuccess: () => {
            cancelEditing();
        },
    });
}

function deleteTask(task: { id: number; title: string }) {
    if (!confirm(`Are you sure you want to delete "${task.title}"?`)) {
        return;
    }

    router.delete(`/tasks/${task.id}`, {
        preserveScroll: true,
    });
}

function formatDate(date: string) {
    return new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    });
}
</script>

<template>
    <div class="min-h-screen bg-slate-50 text-slate-800">
        <Toaster />

        <!-- Header -->
        <header class="border-b border-slate-200 bg-white">
            <div class="mx-auto max-w-6xl px-6 py-6">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <div
                            class="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-xl text-white shadow-lg shadow-indigo-200"
                        >
                            <ListChecks class="h-6 w-6" />
                        </div>
                        <div>
                            <h1
                                class="text-xl font-bold tracking-tight text-slate-900"
                            >
                                Daily Task Manager
                            </h1>
                            <p class="text-xs text-slate-500">
                                Stay organized and productive
                            </p>
                        </div>
                    </div>

                    <div
                        class="hidden items-center gap-2 text-sm text-slate-500 sm:flex"
                    >
                        <span class="h-2 w-2 rounded-full bg-green-500"></span>
                        Online
                    </div>
                </div>
            </div>
        </header>

        <!-- Main content -->
        <main class="mx-auto max-w-6xl px-6 py-8">
            <!-- Stats cards -->
            <div class="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
                <!-- Total tasks -->
                <Card>
                    <CardHeader
                        class="flex flex-row items-center justify-between space-y-0 pb-2"
                    >
                        <CardTitle class="text-sm font-medium text-slate-500"
                            >Total Tasks</CardTitle
                        >
                        <ListChecks class="h-4 w-4 text-slate-400" />
                    </CardHeader>
                    <CardContent>
                        <div class="flex items-baseline gap-1">
                            <span class="text-4xl font-bold text-slate-900">{{
                                totalTasks
                            }}</span>
                            <span class="text-sm text-slate-500">tasks</span>
                        </div>
                        <p class="mt-2 text-xs text-slate-400">
                            All your tasks
                        </p>
                    </CardContent>
                </Card>

                <!-- Pending tasks -->
                <Card>
                    <CardHeader
                        class="flex flex-row items-center justify-between space-y-0 pb-2"
                    >
                        <CardTitle class="text-sm font-medium text-slate-500"
                            >Pending</CardTitle
                        >
                        <Calendar class="h-4 w-4 text-slate-400" />
                    </CardHeader>
                    <CardContent>
                        <div class="flex items-baseline gap-1">
                            <span class="text-4xl font-bold text-amber-600">{{
                                pendingTasks
                            }}</span>
                            <span class="text-sm text-slate-500">tasks</span>
                        </div>
                        <p class="mt-2 text-xs text-slate-400">
                            Tasks to complete
                        </p>
                    </CardContent>
                </Card>

                <!-- Completed tasks -->
                <Card>
                    <CardHeader
                        class="flex flex-row items-center justify-between space-y-0 pb-2"
                    >
                        <CardTitle class="text-sm font-medium text-slate-500"
                            >Completed</CardTitle
                        >
                        <Check class="h-4 w-4 text-slate-400" />
                    </CardHeader>
                    <CardContent>
                        <div class="flex items-baseline gap-1">
                            <span class="text-4xl font-bold text-green-600">{{
                                completedTasks
                            }}</span>
                            <span class="text-sm text-slate-500">tasks</span>
                        </div>
                        <p class="mt-2 text-xs text-slate-400">
                            Successfully completed
                        </p>
                    </CardContent>
                </Card>
            </div>

            <!-- Add task form -->
            <Card class="mb-10">
                <CardHeader>
                    <CardTitle class="text-lg font-bold text-slate-900"
                        >Add a new task</CardTitle
                    >
                    <CardDescription class="text-sm text-slate-500">
                        What would you like to accomplish today?
                    </CardDescription>
                </CardHeader>
                <CardContent class="pt-0">
                    <form
                        @submit.prevent="addTask"
                        class="grid grid-cols-1 items-end gap-6 sm:grid-cols-12"
                    >
                        <div class="sm:col-span-8">
                            <Label
                                class="mb-2 block text-sm font-medium text-slate-700"
                            >
                                Task title
                            </Label>
                            <Input
                                v-model="form.title"
                                type="text"
                                placeholder="e.g. Prepare Q4 presentation"
                                class="w-full rounded-xl border border-slate-300 px-4 py-3 transition outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                            />
                            <p
                                v-if="form.errors.title"
                                class="mt-1 text-sm text-red-500"
                            >
                                {{ form.errors.title }}
                            </p>
                        </div>

                        <div class="sm:col-span-4">
                            <Label
                                class="mb-2 block text-sm font-medium text-slate-700"
                            >
                                Description (Optional)
                            </Label>
                            <textarea
                                v-model="form.description"
                                rows="3"
                                placeholder="Add details..."
                                class="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 transition outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                            ></textarea>
                            <p
                                v-if="form.errors.description"
                                class="mt-1 text-sm text-red-500"
                            >
                                {{ form.errors.description }}
                            </p>
                        </div>

                        <div
                            class="flex gap-2 sm:col-span-12 sm:col-start-1 sm:col-end-13"
                        >
                            <button
                                type="submit"
                                :disabled="form.processing"
                                class="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-200/50 transition hover:from-indigo-700 hover:to-purple-700"
                            >
                                <Plus class="h-4 w-4" />
                                <span v-if="form.processing">Adding...</span>
                                <span v-else>Create Task</span>
                            </button>
                        </div>
                    </form>
                </CardContent>
            </Card>

            <!-- Task list -->
            <Card class="overflow-hidden">
                <CardHeader
                    class="flex flex-col gap-4 border-b border-slate-100 pb-4 sm:flex-row sm:items-center sm:justify-between"
                >
                    <div>
                        <CardTitle class="text-lg font-bold text-slate-900"
                            >Your Tasks</CardTitle
                        >
                        <CardDescription class="text-sm text-slate-500">
                            Keep track of everything you need to do.
                        </CardDescription>
                    </div>

                    <!-- Filter pills -->
                    <div class="flex flex-wrap gap-2">
                        <button
                            @click="activeFilter = 'all'"
                            :class="[
                                'all rounded-lg px-4 py-2 text-sm font-medium shadow-sm transition',
                                activeFilter === 'all'
                                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                                    : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900',
                            ]"
                        >
                            All
                        </button>

                        <button
                            @click="activeFilter = 'pending'"
                            :class="[
                                'all rounded-lg px-4 py-2 text-sm font-medium shadow-sm transition',
                                activeFilter === 'pending'
                                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                                    : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900',
                            ]"
                        >
                            Pending
                        </button>

                        <button
                            @click="activeFilter = 'completed'"
                            :class="[
                                'all rounded-lg px-4 py-2 text-sm font-medium shadow-sm transition',
                                activeFilter === 'completed'
                                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                                    : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900',
                            ]"
                        >
                            Completed
                        </button>
                    </div>
                </CardHeader>

                <CardContent class="pt-0">
                    <!-- Empty state -->
                    <div
                        v-if="filteredTasks.length === 0"
                        class="p-12 text-center"
                    >
                        <div
                            class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100"
                        >
                            <ListChecks class="h-8 w-8 text-indigo-600" />
                        </div>

                        <h4 class="mb-2 font-semibold text-slate-900">
                            No tasks found
                        </h4>
                        <p class="mb-6 text-sm text-slate-500">
                            {{
                                activeFilter === 'all'
                                    ? 'Add a new task to get started.'
                                    : activeFilter === 'pending'
                                      ? 'No pending tasks. Great job!'
                                      : 'No completed tasks yet.'
                            }}
                        </p>

                        <button
                            @click="activeFilter = 'all'"
                            class="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white shadow-md shadow-indigo-200 transition hover:bg-indigo-700"
                        >
                            <Plus class="h-4 w-4" />
                            Add Task
                        </button>
                    </div>

                    <!-- Task items -->
                    <div v-else class="divide-y divide-slate-100">
                        <div
                            v-for="task in filteredTasks"
                            :key="task.id"
                            class="p-6 transition hover:bg-slate-50/50"
                        >
                            <!-- EDIT MODE -->
                            <div v-if="editingTaskId === task.id">
                                <form
                                    @submit.prevent="updateTask"
                                    class="space-y-4"
                                >
                                    <div class="grid grid-cols-2 gap-4">
                                        <div>
                                            <Label
                                                class="mb-2 block text-sm font-medium text-slate-700"
                                            >
                                                Title
                                            </Label>
                                            <Input
                                                v-model="editForm.title"
                                                type="text"
                                                class="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                                            />
                                            <p
                                                v-if="editForm.errors.title"
                                                class="mt-1 text-sm text-red-500"
                                            >
                                                {{ editForm.errors.title }}
                                            </p>
                                        </div>

                                        <div>
                                            <Label
                                                class="mb-2 block text-sm font-medium text-slate-700"
                                            >
                                                Status
                                            </Label>
                                            <Badge
                                                :class="[
                                                    task.is_completed
                                                        ? 'bg-green-100 text-green-700'
                                                        : 'bg-amber-100 text-amber-700',
                                                ]"
                                            >
                                                {{
                                                    task.is_completed
                                                        ? 'Completed'
                                                        : 'Pending'
                                                }}
                                            </Badge>
                                        </div>
                                    </div>

                                    <Label
                                        class="mb-2 block text-sm font-medium text-slate-700"
                                    >
                                        Description
                                    </Label>
                                    <textarea
                                        v-model="editForm.description"
                                        rows="2"
                                        class="w-full resize-none rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                                    ></textarea>
                                    <p
                                        v-if="editForm.errors.description"
                                        class="mt-1 text-sm text-red-500"
                                    >
                                        {{ editForm.errors.description }}
                                    </p>

                                    <div class="flex gap-2 pt-4">
                                        <button
                                            type="submit"
                                            :disabled="editForm.processing"
                                            class="flex-1 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-md shadow-indigo-100 transition hover:bg-indigo-700"
                                        >
                                            Save Changes
                                        </button>

                                        <button
                                            type="button"
                                            @click="cancelEditing"
                                            class="rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-200"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>

                            <!-- NORMAL MODE -->
                            <div v-else class="flex items-start gap-4">
                                <!-- Completion checkbox -->
                                <button
                                    @click="toggleTask(task)"
                                    :aria-label="
                                        task.is_completed
                                            ? 'Mark as pending'
                                            : 'Mark as completed'
                                    "
                                    :class="[
                                        'mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold transition-all',
                                        task.is_completed
                                            ? 'border-green-500 bg-green-500 text-white'
                                            : 'border-slate-300 hover:border-indigo-500 hover:bg-indigo-50',
                                    ]"
                                >
                                    <span v-if="task.is_completed">
                                        <Check class="h-3 w-3" />
                                    </span>
                                </button>

                                <!-- Task information -->
                                <div class="min-w-0 flex-1">
                                    <div
                                        class="mb-2 flex flex-wrap items-center gap-2"
                                    >
                                        <h4
                                            :class="[
                                                'font-semibold break-words',
                                                task.is_completed
                                                    ? 'text-slate-400 line-through'
                                                    : 'text-slate-800',
                                            ]"
                                        >
                                            {{ task.title }}
                                        </h4>

                                        <Badge
                                            :class="[
                                                task.is_completed
                                                    ? 'border border-green-200 bg-green-100 text-green-700'
                                                    : 'border border-amber-200 bg-amber-100 text-amber-700',
                                            ]"
                                        >
                                            {{
                                                task.is_completed
                                                    ? 'Completed'
                                                    : 'Pending'
                                            }}
                                        </Badge>
                                    </div>

                                    <p
                                        v-if="task.description"
                                        class="mb-3 text-sm break-words text-slate-500"
                                    >
                                        {{ task.description }}
                                    </p>

                                    <div
                                        class="flex items-center gap-3 text-xs text-slate-400"
                                    >
                                        <Calendar class="h-3 w-3" />
                                        <span
                                            >Created
                                            {{
                                                formatDate(task.created_at)
                                            }}</span
                                        >
                                    </div>
                                </div>

                                <!-- Action buttons -->
                                <div class="flex shrink-0 items-center gap-2">
                                    <button
                                        @click="startEditing(task)"
                                        title="Edit task"
                                        class="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-indigo-50 hover:text-indigo-600"
                                    >
                                        <Edit2 class="h-4 w-4" />
                                    </button>

                                    <button
                                        @click="deleteTask(task)"
                                        title="Delete task"
                                        class="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-red-50 hover:text-red-600"
                                    >
                                        <Trash2 class="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Footer -->
                    <div
                        class="border-t border-slate-100 bg-slate-50 px-6 py-4"
                    >
                        <p class="text-center text-xs text-slate-500">
                            Showing {{ filteredTasks.length }} of
                            {{ totalTasks }} tasks
                        </p>
                    </div>
                </CardContent>
            </Card>

            <!-- Footer note -->
            <p class="mt-10 text-center text-xs text-slate-400">
                Built with Laravel, Vue.js, Inertia.js and Tailwind CSS.
            </p>
        </main>
    </div>
</template>
