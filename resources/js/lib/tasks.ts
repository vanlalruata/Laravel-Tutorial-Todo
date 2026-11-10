import type { Task } from '@/types';

const projectTones = [
    'bg-amber-400',
    'bg-sky-400',
    'bg-emerald-400',
    'bg-violet-400',
    'bg-rose-400',
];

const dayMs = 86_400_000;

const shortDate = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
});

const longDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
});

const weekday = new Intl.DateTimeFormat('en-US', { weekday: 'short' });

const weekdayNarrow = new Intl.DateTimeFormat('en-US', { weekday: 'narrow' });

const time = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
});

const pad = (value: number): string => String(value).padStart(2, '0');

export function startOfDay(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function addDays(date: Date, amount: number): Date {
    const next = new Date(date);
    next.setDate(next.getDate() + amount);

    return next;
}

export function dayKey(date: Date): string {
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

export function dayDifference(
    date: Date,
    from = startOfDay(new Date()),
): number {
    return Math.round(
        (startOfDay(date).getTime() - startOfDay(from).getTime()) / dayMs,
    );
}

export function formatLongDate(date = new Date()): string {
    return longDate.format(date);
}

export function formatShortDate(value: string): string {
    return shortDate.format(new Date(value));
}

export function formatWeekday(date: Date): string {
    return weekdayNarrow.format(date);
}

export function hasTime(value: string): boolean {
    const date = new Date(value);

    return date.getHours() !== 0 || date.getMinutes() !== 0;
}

export function isDueToday(value: string | null): boolean {
    return value !== null && dayDifference(new Date(value)) === 0;
}

export function isOverdue(value: string | null): boolean {
    return value !== null && new Date(value).getTime() < Date.now();
}

export function isDueUpcoming(value: string | null): boolean {
    return value !== null && dayDifference(new Date(value)) > 0;
}

export function dueLabel(value: string): string {
    const date = new Date(value);
    const difference = dayDifference(date);

    if (difference < 0) {
        return shortDate.format(date);
    }

    if (difference === 0) {
        return hasTime(value) ? time.format(date) : 'Today';
    }

    if (difference === 1 && !hasTime(value)) {
        return 'Tomorrow';
    }

    if (difference < 7) {
        return weekday.format(date);
    }

    return shortDate.format(date);
}

export function dueToneClass(task: Task): string {
    if (!task.due_at) {
        return '';
    }

    if (task.is_completed) {
        return 'bg-slate-100 text-slate-500 ring-slate-200/70 dark:bg-white/5 dark:text-slate-400 dark:ring-white/10';
    }

    if (isOverdue(task.due_at)) {
        return 'bg-rose-50 text-rose-600 ring-rose-600/10 dark:bg-rose-400/10 dark:text-rose-300 dark:ring-rose-300/20';
    }

    if (isDueToday(task.due_at)) {
        return 'bg-amber-50 text-amber-700 ring-amber-600/10 dark:bg-amber-400/10 dark:text-amber-300 dark:ring-amber-300/20';
    }

    return 'bg-sky-50 text-sky-700 ring-sky-600/10 dark:bg-sky-400/10 dark:text-sky-300 dark:ring-sky-300/20';
}

export function projectDotClass(project: string): string {
    let hash = 0;

    for (let index = 0; index < project.length; index++) {
        hash += project.charCodeAt(index);
    }

    return projectTones[hash % projectTones.length];
}

export function projectNames(tasks: Task[]): string[] {
    return [
        ...new Set(
            tasks
                .map((task) => task.project)
                .filter((project): project is string => !!project),
        ),
    ].sort((a, b) => a.localeCompare(b));
}

export function toDateTimeLocal(value: string | null): string {
    if (!value) {
        return '';
    }

    const date = new Date(value);

    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

export function fromDateTimeLocal(value: string): string | null {
    return value ? new Date(value).toISOString() : null;
}

export function completionStreak(tasks: Task[]): {
    current: number;
    best: number;
} {
    const days = new Set(
        tasks
            .filter((task) => task.completed_at)
            .map((task) => dayKey(new Date(task.completed_at as string))),
    );

    if (days.size === 0) {
        return { current: 0, best: 0 };
    }

    const sorted = [...days].sort();
    let best = 1;
    let run = 1;

    for (let index = 1; index < sorted.length; index++) {
        const previous = new Date(`${sorted[index - 1]}T00:00:00`);
        const current = new Date(`${sorted[index]}T00:00:00`);

        run = dayDifference(current, previous) === 1 ? run + 1 : 1;
        best = Math.max(best, run);
    }

    let cursor = startOfDay(new Date());

    if (!days.has(dayKey(cursor))) {
        cursor = addDays(cursor, -1);
    }

    let current = 0;

    while (days.has(dayKey(cursor))) {
        current++;
        cursor = addDays(cursor, -1);
    }

    return { current, best: Math.max(best, current) };
}

export function weeklyActivity(tasks: Task[]): {
    days: { label: string; count: number; isToday: boolean }[];
    thisWeek: number;
    lastWeek: number;
} {
    const today = startOfDay(new Date());
    const completedDays = tasks
        .filter((task) => task.completed_at)
        .map((task) => dayKey(new Date(task.completed_at as string)));

    const days = Array.from({ length: 7 }, (_, index) => {
        const date = addDays(today, index - 6);

        return {
            label: formatWeekday(date),
            count: completedDays.filter((key) => key === dayKey(date)).length,
            isToday: index === 6,
        };
    });

    const lastWeekStart = addDays(today, -13);
    const lastWeekEnd = addDays(today, -7);

    return {
        days,
        thisWeek: days.reduce((total, day) => total + day.count, 0),
        lastWeek: completedDays.filter((key) => {
            const date = new Date(`${key}T00:00:00`);

            return date >= lastWeekStart && date <= lastWeekEnd;
        }).length,
    };
}
