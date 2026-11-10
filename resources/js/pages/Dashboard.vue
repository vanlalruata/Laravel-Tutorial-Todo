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

    <div class="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
        <!-- Welcome header -->
        <div class="flex items-center justify-between">
            <div>
                <h1 class="text-2xl sm:text-3xl font-bold text-slate-900">
                    Good Morning!
                </h1>
                <p class="text-slate-500 mt-1">
                    Here is your task overview for today.
                </p>
            </div>

            <a
                :href="tasksIndex().url"
                class="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition shadow-md shadow-indigo-200"
            >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                View All Tasks
            </a>
        </div>

        <!-- Stats cards -->
        <div class="grid gap-4 md:grid-cols-3">
            <div class="rounded-xl border border-sidebar-border/70 p-6 shadow-sm dark:border-sidebar-border bg-gradient-to-br from-indigo-500 to-purple-600 text-white relative overflow-hidden">
                <div class="absolute right-4 top-4 opacity-20">
                    <PlaceholderPattern class="w-16 h-16" />
                </div>
                <div class="relative z-10">
                    <p class="text-indigo-100 text-sm font-medium">Total Tasks</p>
                    <p class="text-3xl font-bold mt-2">{{ tasks?.length ?? 0 }}</p>
                </div>
            </div>

            <div class="rounded-xl border border-sidebar-border/70 p-6 shadow-sm dark:border-sidebar-border relative overflow-hidden">
                <div class="absolute right-4 top-4 opacity-10">
                    <PlaceholderPattern class="w-16 h-16" />
                </div>
                <div class="relative z-10">
                    <p class="text-amber-500 text-sm font-medium">Pending</p>
                    <p class="text-3xl font-bold mt-2 text-slate-900">
                        {{ tasks?.filter(t => !t.is_completed).length ?? 0 }}
                    </p>
                </div>
            </div>

            <div class="rounded-xl border border-sidebar-border/70 p-6 shadow-sm dark:border-sidebar-border relative overflow-hidden">
                <div class="absolute right-4 top-4 opacity-10">
                    <PlaceholderPattern class="w-16 h-16" />
                </div>
                <div class="relative z-10">
                    <p class="text-green-600 text-sm font-medium">Completed</p>
                    <p class="text-3xl font-bold mt-2 text-slate-900">
                        {{ tasks?.filter(t => t.is_completed).length ?? 0 }}
                    </p>
                </div>
            </div>
        </div>

        <!-- Quick add task -->
        <div class="rounded-xl border border-sidebar-border/70 p-6 shadow-sm dark:border-sidebar-border flex items-center gap-3">
            <svg class="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            <p class="text-slate-500 text-sm">
                Want to add a new task? Head over to your task manager.
            </p>
            <a
                :href="tasksIndex().url"
                class="ml-auto text-indigo-600 hover:text-indigo-700 text-sm font-medium"
            >
                View Tasks →
            </a>
        </div>

        <!-- Recent tasks -->
        <div class="flex-1 min-h-[300px] rounded-xl border border-sidebar-border/70 p-6 shadow-sm dark:border-sidebar-border relative overflow-hidden flex flex-col">
            <div class="flex items-center justify-between mb-4">
                <h3 class="font-semibold text-slate-900">Recent Tasks</h3>
                <span class="text-xs text-slate-400">{{ tasks?.length ?? 0 }} items</span>
            </div>

            <div v-if="tasks?.length === 0" class="flex-1 flex flex-col items-center justify-center text-center">
                <PlaceholderPattern class="w-24 h-24 opacity-30 mb-4" />
                <p class="text-slate-500 text-sm">No tasks yet. Add your first task!</p>
                <a
                    :href="tasksIndex().url"
                    class="mt-2 text-indigo-600 hover:text-indigo-700 text-sm font-medium"
                >
                    Add Task →
                </a>
            </div>

            <div v-else class="flex-1 overflow-y-auto space-y-3">
                <div
                    v-for="task in tasks.slice(0, 5)"
                    :key="task.id"
                    class="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition border border-transparent hover:border-sidebar-border/50 dark:hover:border-sidebar-border"
                >
                    <div class="w-2 h-2 rounded-full" :class="task.is_completed ? 'bg-green-500' : 'bg-amber-400'" />
                    <div class="flex-1 min-w-0">
                        <p class="text-sm text-slate-900 truncate">{{ task.title }}</p>
                        <p v-if="task.description" class="text-xs text-slate-500 truncate mt-0.5">{{ task.description }}</p>
                    </div>
                    <span
                        :class="task.is_completed
                            ? 'bg-green-100 text-green-700'
                            : 'bg-amber-100 text-amber-700'"
                        class="text-[10px] px-2 py-0.5 rounded-full font-medium"
                    >
                        {{ task.is_completed ? 'Completed' : 'Pending' }}
                    </span>
                </div>
                <a
                    v-if="tasks.length > 5"
                    class="px-3 py-2 rounded-lg text-sm text-indigo-600 hover:bg-indigo-50 transition"
                >
                    View all {{ tasks.length }} tasks →
                </a>
            </div>
        </div>
    </div>
</template>
