<script setup lang="ts">
import type { Component } from 'vue';
import { computed, ref } from 'vue';
import { Head, Link, usePage } from '@inertiajs/vue3';
import {
    ArrowRight,
    ArrowUpRight,
    BellRing,
    CalendarDays,
    Check,
    CheckCircle2,
    ChevronDown,
    Clock,
    Flame,
    Inbox,
    Layers,
    Lock,
    Menu,
    Moon,
    Play,
    Plus,
    Quote,
    Repeat2,
    Star,
    Sun,
    TrendingUp,
    Users,
    X,
    Zap,
} from '@lucide/vue';
import { useAppearance } from '@/composables/useAppearance';
import { dashboard, home, login, register } from '@/routes';

type Feature = {
    icon: Component;
    title: string;
    description: string;
};

type Step = {
    title: string;
    description: string;
};

type Testimonial = {
    name: string;
    role: string;
    company: string;
    initials: string;
    quote: string;
};

type Faq = {
    question: string;
    answer: string;
};

type DemoTask = {
    title: string;
    project: string;
    due: string;
    done: boolean;
    tone: 'amber' | 'sky' | 'emerald';
};

const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
];

const valueProps = [
    'Free for personal use',
    'No credit card required',
    'Set up in under a minute',
];

const features: Feature[] = [
    {
        icon: Zap,
        title: 'Capture at the speed of thought',
        description:
            'Add tasks with a keystroke. Natural-language input understands dates, tags, and priorities as you type.',
    },
    {
        icon: Layers,
        title: 'Projects without the clutter',
        description:
            'Group work into projects and filter by tag, priority, or due date. Everything stays one click away.',
    },
    {
        icon: Repeat2,
        title: 'Habits that run themselves',
        description:
            'Daily standups, weekly reviews, monthly reports — set a recurrence once and never think about it again.',
    },
    {
        icon: BellRing,
        title: 'Reminders, not noise',
        description:
            'Quiet, time-aware nudges surface the right task at the right moment, without interrupting your focus.',
    },
    {
        icon: Users,
        title: 'Better together',
        description:
            'Share projects, assign tasks, and comment in context. Everyone works from the same up-to-date list.',
    },
    {
        icon: TrendingUp,
        title: 'Momentum you can see',
        description:
            'Track completions, streaks, and weekly progress so finishing feels as good as it looks.',
    },
];

const steps: Step[] = [
    {
        title: 'Capture everything',
        description:
            'Jot tasks down in plain language. Todo parses the details — due dates, projects, tags — and files them for you.',
    },
    {
        title: 'Organize your way',
        description:
            'Keep work in projects, tag the rest, and shape your day. Today, Upcoming, and Focus views keep the signal high.',
    },
    {
        title: 'Finish with confidence',
        description:
            'Check things off, watch your streak grow, and start tomorrow with a plan that is already in place.',
    },
];

const testimonials: Testimonial[] = [
    {
        name: 'Sarah Chen',
        role: 'Product designer',
        company: 'Northwind Studio',
        initials: 'SC',
        quote: 'Finally a todo app that gets out of the way. Natural-language capture alone saves me hours every week.',
    },
    {
        name: 'Marcus Reed',
        role: 'Engineering lead',
        company: 'Lumen Labs',
        initials: 'MR',
        quote: 'We moved the whole team over in an afternoon. Projects, assignments, and progress now live in one calm place.',
    },
    {
        name: 'Amara Okafor',
        role: 'Freelance writer',
        company: 'Independent',
        initials: 'AO',
        quote: 'I have tried everything. This is the first tool that helps me finish the day with a clear list and a clear head.',
    },
];

const faqs: Faq[] = [
    {
        question: 'Is Todo really free?',
        answer: 'Yes. Todo is free for personal use, with no ads and no credit card required. Create an account and start adding tasks in under a minute.',
    },
    {
        question: 'Can I use Todo with my team?',
        answer: 'Absolutely. Share projects, assign tasks to teammates, and follow progress in real time. Everyone works from the same up-to-date list.',
    },
    {
        question: 'What happens to my data?',
        answer: 'Your tasks belong to you. Data is encrypted in transit, never sold, and you can export or delete it at any time.',
    },
    {
        question: 'Does it work on my phone?',
        answer: 'Yes. The interface is responsive and keyboard-friendly, so it feels at home on your phone, tablet, and desktop.',
    },
];

const tagTones: Record<DemoTask['tone'], string> = {
    amber: 'bg-amber-50 text-amber-700 ring-amber-600/10 dark:bg-amber-400/10 dark:text-amber-300 dark:ring-amber-300/20',
    sky: 'bg-sky-50 text-sky-700 ring-sky-600/10 dark:bg-sky-400/10 dark:text-sky-300 dark:ring-sky-300/20',
    emerald:
        'bg-emerald-50 text-emerald-700 ring-emerald-600/10 dark:bg-emerald-400/10 dark:text-emerald-300 dark:ring-emerald-300/20',
};

const demoTasks: DemoTask[] = [
    {
        title: 'Ship the onboarding flow',
        project: 'Website redesign',
        due: 'Today',
        done: true,
        tone: 'amber',
    },
    {
        title: 'Review the Q4 roadmap with design',
        project: 'Product launch',
        due: '2:00 PM',
        done: true,
        tone: 'sky',
    },
    {
        title: 'Draft the launch announcement',
        project: 'Product launch',
        due: 'Today',
        done: false,
        tone: 'sky',
    },
    {
        title: "Reply to this week's customer feedback",
        project: 'Inbox',
        due: '4:30 PM',
        done: true,
        tone: 'amber',
    },
    {
        title: 'Book flights for the team offsite',
        project: 'Operations',
        due: 'Fri',
        done: false,
        tone: 'amber',
    },
    {
        title: 'Weekly review & planning',
        project: 'Personal',
        due: 'Sun',
        done: true,
        tone: 'emerald',
    },
];

const previewNav = [
    { label: 'Inbox', icon: Inbox, count: 3, active: false },
    { label: 'Today', icon: CalendarDays, count: 6, active: true },
    { label: 'Upcoming', icon: Clock, count: 0, active: false },
    { label: 'Completed', icon: CheckCircle2, count: 0, active: false },
];

const previewProjects = [
    { name: 'Website redesign', color: 'bg-amber-400' },
    { name: 'Product launch', color: 'bg-sky-400' },
    { name: 'Personal', color: 'bg-emerald-400' },
];

const weeklyActivity = [42, 68, 55, 78, 64, 92, 71];

const page = usePage();
const user = computed(() => page.props.auth.user);

const { resolvedAppearance, updateAppearance } = useAppearance();
const isDark = computed(() => resolvedAppearance.value === 'dark');
const toggleTheme = (): void =>
    updateAppearance(isDark.value ? 'light' : 'dark');

const mobileMenuOpen = ref(false);

const completedCount = computed(
    () => demoTasks.filter((task) => task.done).length,
);
const progressPercent = computed(() =>
    Math.round((completedCount.value / demoTasks.length) * 100),
);
const todayLabel = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
}).format(new Date());
const year = new Date().getFullYear();
</script>

<template>
    <Head title="The calm workspace for getting things done">
        <meta
            name="description"
            content="Todo is a fast, focused workspace for personal tasks and team projects. Capture in seconds, organize without clutter, and finish what matters."
        />
    </Head>

    <div
        id="top"
        class="min-h-screen overflow-x-clip bg-white text-slate-900 selection:bg-amber-200/70 dark:bg-slate-950 dark:text-slate-100 dark:selection:bg-amber-400/30"
    >
        <header class="fixed inset-x-0 top-0 z-50">
            <div class="mx-auto max-w-7xl px-4 pt-3 sm:px-6 lg:px-8">
                <nav
                    aria-label="Primary"
                    class="flex h-16 items-center justify-between gap-4 rounded-2xl border border-slate-200/80 bg-white/85 px-4 shadow-sm shadow-slate-900/5 backdrop-blur-xl sm:px-6 dark:border-white/10 dark:bg-slate-900/80"
                >
                    <Link
                        :href="home()"
                        aria-label="Todo home"
                        class="flex items-center gap-2.5 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500"
                    >
                        <span
                            class="flex size-9 items-center justify-center rounded-xl bg-slate-900 text-white shadow-md shadow-slate-900/20 dark:bg-amber-400 dark:text-slate-950"
                        >
                            <Check class="size-5" :stroke-width="3" />
                        </span>
                        <span class="text-lg font-semibold tracking-tight">
                            Todo<span class="text-amber-500 dark:text-amber-400"
                                >.</span
                            >
                        </span>
                    </Link>

                    <div class="hidden items-center gap-1 md:flex">
                        <a
                            v-for="link in navLinks"
                            :key="link.href"
                            :href="link.href"
                            class="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
                        >
                            {{ link.label }}
                        </a>
                    </div>

                    <div class="flex items-center gap-2 sm:gap-3">
                        <button
                            type="button"
                            :aria-label="
                                isDark
                                    ? 'Switch to light mode'
                                    : 'Switch to dark mode'
                            "
                            class="flex size-9 items-center justify-center rounded-xl border border-slate-200/80 bg-white/70 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white"
                            @click="toggleTheme"
                        >
                            <Sun v-if="isDark" class="size-4" />
                            <Moon v-else class="size-4" />
                        </button>

                        <template v-if="user">
                            <Link
                                :href="dashboard()"
                                class="hidden items-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-slate-800 sm:inline-flex dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
                            >
                                Dashboard
                                <ArrowUpRight class="size-4" />
                            </Link>
                        </template>
                        <template v-else>
                            <Link
                                :href="login()"
                                class="hidden rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950 sm:inline-flex dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
                            >
                                Log in
                            </Link>
                            <Link
                                :href="register()"
                                class="hidden items-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-slate-900/10 transition-colors hover:bg-slate-800 sm:inline-flex dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
                            >
                                Get started
                                <ArrowRight class="size-4" />
                            </Link>
                        </template>

                        <button
                            type="button"
                            :aria-expanded="mobileMenuOpen"
                            aria-controls="mobile-menu"
                            :aria-label="
                                mobileMenuOpen ? 'Close menu' : 'Open menu'
                            "
                            class="flex size-9 items-center justify-center rounded-xl border border-slate-200/80 bg-white/70 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950 md:hidden dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
                            @click="mobileMenuOpen = !mobileMenuOpen"
                        >
                            <X v-if="mobileMenuOpen" class="size-5" />
                            <Menu v-else class="size-5" />
                        </button>
                    </div>
                </nav>

                <div
                    v-if="mobileMenuOpen"
                    id="mobile-menu"
                    class="mt-2 rounded-2xl border border-slate-200/80 bg-white/95 p-3 shadow-xl shadow-slate-900/10 backdrop-blur-xl md:hidden dark:border-white/10 dark:bg-slate-900/95"
                >
                    <div class="space-y-1">
                        <a
                            v-for="link in navLinks"
                            :key="link.href"
                            :href="link.href"
                            class="block rounded-xl px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/5"
                            @click="mobileMenuOpen = false"
                        >
                            {{ link.label }}
                        </a>
                    </div>

                    <div
                        class="mt-2 space-y-2 border-t border-slate-200/80 pt-3 dark:border-white/10"
                    >
                        <template v-if="user">
                            <Link
                                :href="dashboard()"
                                class="flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white dark:bg-white dark:text-slate-950"
                            >
                                Open dashboard
                                <ArrowUpRight class="size-4" />
                            </Link>
                        </template>
                        <template v-else>
                            <Link
                                :href="login()"
                                class="block rounded-xl px-4 py-2.5 text-center text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/5"
                            >
                                Log in
                            </Link>
                            <Link
                                :href="register()"
                                class="flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white dark:bg-white dark:text-slate-950"
                            >
                                Get started free
                                <ArrowRight class="size-4" />
                            </Link>
                        </template>
                    </div>
                </div>
            </div>
        </header>

        <main>
            <section
                class="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-28"
            >
                <div
                    class="pointer-events-none absolute inset-0 overflow-hidden"
                    aria-hidden="true"
                >
                    <div
                        class="hero-grid absolute inset-x-0 top-0 h-[42rem]"
                    ></div>
                    <div
                        class="absolute top-[-22rem] left-1/2 h-[42rem] w-[60rem] -translate-x-1/2 rounded-full bg-amber-200/60 blur-3xl dark:bg-amber-500/10"
                    ></div>
                    <div
                        class="absolute top-32 -right-40 size-96 rounded-full bg-orange-200/50 blur-3xl dark:bg-orange-500/10"
                    ></div>
                    <div
                        class="absolute bottom-0 -left-32 size-80 rounded-full bg-rose-100/60 blur-3xl dark:bg-rose-500/5"
                    ></div>
                </div>

                <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div class="mx-auto max-w-3xl text-center">
                        <a
                            href="#features"
                            class="rise inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-amber-50/80 py-1.5 pr-4 pl-1.5 text-sm font-medium text-amber-900 shadow-sm backdrop-blur transition-colors hover:bg-amber-100/80 dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-amber-100 dark:hover:bg-amber-400/15"
                        >
                            <span
                                class="rounded-full bg-amber-500 px-2.5 py-0.5 text-[10px] font-semibold tracking-[0.14em] text-white uppercase"
                            >
                                New
                            </span>
                            Smart suggestions for your day
                            <ArrowRight
                                class="size-4 text-amber-600 dark:text-amber-300"
                            />
                        </a>

                        <h1
                            class="rise rise-delay-1 mt-7 text-5xl leading-[1.02] font-semibold tracking-tighter text-slate-950 sm:text-6xl lg:text-7xl dark:text-white"
                        >
                            Turn your to-do list
                            <span
                                class="block bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 bg-clip-text pb-1 text-transparent dark:from-amber-300 dark:via-orange-300 dark:to-rose-300"
                            >
                                into done.
                            </span>
                        </h1>

                        <p
                            class="rise rise-delay-2 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl dark:text-slate-300"
                        >
                            A fast, focused workspace for everything on your
                            plate. Capture tasks in seconds, keep projects under
                            control, and end every day with a clear head.
                        </p>

                        <div
                            class="rise rise-delay-3 mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
                        >
                            <Link
                                v-if="user"
                                :href="dashboard()"
                                class="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-slate-900/20 transition-all hover:-translate-y-0.5 hover:bg-slate-800 sm:w-auto dark:bg-amber-400 dark:text-slate-950 dark:shadow-amber-400/20 dark:hover:bg-amber-300"
                            >
                                Open your dashboard
                                <ArrowRight
                                    class="size-4 transition-transform group-hover:translate-x-0.5"
                                />
                            </Link>
                            <Link
                                v-else
                                :href="register()"
                                class="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-slate-900/20 transition-all hover:-translate-y-0.5 hover:bg-slate-800 sm:w-auto dark:bg-amber-400 dark:text-slate-950 dark:shadow-amber-400/20 dark:hover:bg-amber-300"
                            >
                                Start for free
                                <ArrowRight
                                    class="size-4 transition-transform group-hover:translate-x-0.5"
                                />
                            </Link>
                            <a
                                href="#how-it-works"
                                class="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl border border-slate-200 bg-white/70 px-6 py-3.5 text-base font-semibold text-slate-700 backdrop-blur transition-colors hover:border-slate-300 hover:bg-white sm:w-auto dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:hover:border-white/25 dark:hover:bg-white/10"
                            >
                                <span
                                    class="flex size-6 items-center justify-center rounded-full bg-slate-900/5 text-slate-600 dark:bg-white/10 dark:text-slate-300"
                                >
                                    <Play class="size-3 fill-current" />
                                </span>
                                See how it works
                            </a>
                        </div>

                        <ul
                            class="rise rise-delay-4 mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500 dark:text-slate-400"
                        >
                            <li
                                v-for="point in valueProps"
                                :key="point"
                                class="flex items-center gap-1.5"
                            >
                                <CheckCircle2
                                    class="size-4 text-emerald-500 dark:text-emerald-400"
                                />
                                {{ point }}
                            </li>
                        </ul>
                    </div>

                    <div
                        class="rise rise-delay-4 relative mx-auto mt-16 max-w-5xl sm:mt-20"
                    >
                        <div
                            class="absolute inset-x-8 top-10 -bottom-6 rounded-[2rem] bg-gradient-to-r from-amber-300/50 via-orange-300/40 to-rose-300/40 blur-2xl dark:from-amber-500/20 dark:via-orange-500/15 dark:to-rose-500/15"
                            aria-hidden="true"
                        ></div>

                        <div
                            class="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 shadow-2xl shadow-slate-900/10 backdrop-blur"
                            aria-hidden="true"
                        >
                            <div
                                class="flex items-center gap-2 border-b border-slate-200/70 bg-slate-50/80 px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]"
                            >
                                <span
                                    class="size-2.5 rounded-full bg-rose-400/90"
                                ></span>
                                <span
                                    class="size-2.5 rounded-full bg-amber-400/90"
                                ></span>
                                <span
                                    class="size-2.5 rounded-full bg-emerald-400/90"
                                ></span>
                                <div
                                    class="mx-auto hidden w-64 items-center justify-center gap-2 rounded-md border border-slate-200/80 bg-white px-3 py-1 text-[11px] font-medium text-slate-400 sm:flex dark:border-white/10 dark:bg-slate-950/60 dark:text-slate-500"
                                >
                                    <Lock class="size-3" />
                                    app.todo.app/today
                                </div>
                            </div>

                            <div class="grid lg:grid-cols-[15rem_1fr]">
                                <aside
                                    class="hidden border-r border-slate-200/70 bg-slate-50/50 p-4 lg:block dark:border-white/10 dark:bg-white/[0.02]"
                                >
                                    <div
                                        class="flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white px-3 py-2 dark:border-white/10 dark:bg-white/5"
                                    >
                                        <span
                                            class="flex size-7 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 text-[11px] font-semibold text-white"
                                        >
                                            JD
                                        </span>
                                        <div class="min-w-0">
                                            <p
                                                class="truncate text-xs font-semibold"
                                            >
                                                Jordan Davis
                                            </p>
                                            <p
                                                class="truncate text-[10px] text-slate-500 dark:text-slate-400"
                                            >
                                                Personal workspace
                                            </p>
                                        </div>
                                    </div>

                                    <div class="mt-5 space-y-1 text-sm">
                                        <div
                                            v-for="item in previewNav"
                                            :key="item.label"
                                            class="flex items-center gap-2.5 rounded-lg px-3 py-2 font-medium"
                                            :class="
                                                item.active
                                                    ? 'bg-amber-50 text-amber-900 dark:bg-amber-400/10 dark:text-amber-200'
                                                    : 'text-slate-600 dark:text-slate-400'
                                            "
                                        >
                                            <component
                                                :is="item.icon"
                                                class="size-4"
                                            />
                                            {{ item.label }}
                                            <span
                                                v-if="item.count"
                                                class="ml-auto rounded-full bg-slate-200/70 px-1.5 py-0.5 text-[10px] font-semibold text-slate-600 dark:bg-white/10 dark:text-slate-300"
                                            >
                                                {{ item.count }}
                                            </span>
                                        </div>
                                    </div>

                                    <p
                                        class="mt-6 px-3 text-[10px] font-semibold tracking-[0.16em] text-slate-400 uppercase dark:text-slate-500"
                                    >
                                        Projects
                                    </p>
                                    <div class="mt-2 space-y-1">
                                        <div
                                            v-for="project in previewProjects"
                                            :key="project.name"
                                            class="flex items-center gap-2.5 rounded-lg px-3 py-1.5 text-sm text-slate-600 dark:text-slate-400"
                                        >
                                            <span
                                                class="size-2 rounded-full"
                                                :class="project.color"
                                            ></span>
                                            {{ project.name }}
                                        </div>
                                    </div>
                                </aside>

                                <div class="min-w-0">
                                    <div
                                        class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/70 px-5 py-4 sm:px-6 dark:border-white/10"
                                    >
                                        <div>
                                            <h3
                                                class="text-xl font-semibold tracking-tight text-slate-950 dark:text-white"
                                            >
                                                Today
                                            </h3>
                                            <p
                                                class="mt-0.5 text-xs text-slate-500 dark:text-slate-400"
                                            >
                                                {{ todayLabel }}
                                            </p>
                                        </div>
                                        <div class="flex items-center gap-3">
                                            <div class="text-right">
                                                <p
                                                    class="text-xs font-medium text-slate-500 dark:text-slate-400"
                                                >
                                                    {{ completedCount }} of
                                                    {{ demoTasks.length }} done
                                                </p>
                                                <div
                                                    class="mt-1.5 h-1.5 w-32 overflow-hidden rounded-full bg-slate-200/80 dark:bg-white/10"
                                                >
                                                    <div
                                                        class="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500"
                                                        :style="{
                                                            width: `${progressPercent}%`,
                                                        }"
                                                    ></div>
                                                </div>
                                            </div>
                                            <span
                                                class="rounded-full bg-slate-900 px-3 py-1.5 text-[11px] font-semibold text-white dark:bg-white dark:text-slate-950"
                                            >
                                                + New task
                                            </span>
                                        </div>
                                    </div>

                                    <div
                                        class="divide-y divide-slate-100 px-2 py-2 sm:px-3 dark:divide-white/5"
                                    >
                                        <div
                                            v-for="task in demoTasks"
                                            :key="task.title"
                                            class="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-slate-50 dark:hover:bg-white/[0.03]"
                                        >
                                            <span
                                                class="flex size-5 shrink-0 items-center justify-center rounded-md border"
                                                :class="
                                                    task.done
                                                        ? 'border-amber-500 bg-amber-500 text-white'
                                                        : 'border-slate-300 bg-white dark:border-slate-600 dark:bg-slate-900'
                                                "
                                            >
                                                <Check
                                                    v-if="task.done"
                                                    class="size-3"
                                                    :stroke-width="3"
                                                />
                                            </span>
                                            <div class="min-w-0 flex-1">
                                                <p
                                                    class="truncate text-sm font-medium"
                                                    :class="
                                                        task.done
                                                            ? 'text-slate-400 line-through dark:text-slate-500'
                                                            : 'text-slate-800 dark:text-slate-100'
                                                    "
                                                >
                                                    {{ task.title }}
                                                </p>
                                                <p
                                                    class="truncate text-[11px] text-slate-400 dark:text-slate-500"
                                                >
                                                    {{ task.project }}
                                                </p>
                                            </div>
                                            <span
                                                class="hidden rounded-full px-2 py-0.5 text-[10px] font-medium ring-1 sm:inline-flex"
                                                :class="tagTones[task.tone]"
                                            >
                                                {{ task.due }}
                                            </span>
                                        </div>
                                    </div>

                                    <div
                                        class="flex items-center gap-3 border-t border-slate-200/70 px-5 py-3.5 sm:px-6 dark:border-white/10"
                                    >
                                        <span
                                            class="flex size-5 items-center justify-center rounded-md border border-dashed border-slate-300 text-slate-400 dark:border-slate-600 dark:text-slate-500"
                                        >
                                            <Plus class="size-3" />
                                        </span>
                                        <span
                                            class="text-sm text-slate-400 dark:text-slate-500"
                                        >
                                            Add a task…
                                        </span>
                                        <span
                                            class="ml-auto rounded-md border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[10px] font-medium text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400"
                                        >
                                            ⌘ K
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            class="absolute top-20 -left-8 hidden w-52 -rotate-3 xl:block"
                            aria-hidden="true"
                        >
                            <div
                                class="animate-float rounded-2xl border border-slate-200/80 bg-white/95 p-4 shadow-xl shadow-slate-900/10 backdrop-blur dark:border-white/10 dark:bg-slate-900/95"
                            >
                                <div class="flex items-center gap-3">
                                    <span
                                        class="flex size-10 items-center justify-center rounded-xl bg-amber-100 text-amber-600 dark:bg-amber-400/15 dark:text-amber-300"
                                    >
                                        <Flame class="size-5" />
                                    </span>
                                    <div>
                                        <p
                                            class="text-sm font-semibold text-slate-950 dark:text-white"
                                        >
                                            12-day streak
                                        </p>
                                        <p
                                            class="text-[11px] text-slate-500 dark:text-slate-400"
                                        >
                                            Personal best · 21 days
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            class="absolute -right-6 bottom-10 hidden w-52 rotate-3 xl:block"
                            aria-hidden="true"
                        >
                            <div
                                class="animate-float rounded-2xl border border-slate-200/80 bg-white/95 p-4 shadow-xl shadow-slate-900/10 backdrop-blur dark:border-white/10 dark:bg-slate-900/95"
                            >
                                <div class="flex items-center justify-between">
                                    <p
                                        class="text-xs font-medium text-slate-500 dark:text-slate-400"
                                    >
                                        This week
                                    </p>
                                    <span
                                        class="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-300"
                                    >
                                        +18%
                                    </span>
                                </div>
                                <p
                                    class="mt-1 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white"
                                >
                                    82%
                                </p>
                                <div class="mt-3 flex h-12 items-end gap-1.5">
                                    <div
                                        v-for="(
                                            height, index
                                        ) in weeklyActivity"
                                        :key="index"
                                        class="flex-1 rounded-sm"
                                        :class="
                                            index === 5
                                                ? 'bg-amber-500 dark:bg-amber-400'
                                                : 'bg-amber-200/80 dark:bg-amber-400/25'
                                        "
                                        :style="{ height: `${height}%` }"
                                    ></div>
                                </div>
                                <p
                                    class="mt-2 text-[11px] text-slate-400 dark:text-slate-500"
                                >
                                    tasks completed
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                aria-label="Technology stack"
                class="border-y border-slate-200/70 bg-slate-50/60 dark:border-white/5 dark:bg-white/[0.02]"
            >
                <div
                    class="mx-auto flex max-w-7xl flex-col items-center gap-5 px-4 py-8 sm:px-6 lg:flex-row lg:justify-between lg:px-8"
                >
                    <p
                        class="text-xs font-semibold tracking-[0.18em] text-slate-400 uppercase dark:text-slate-500"
                    >
                        Built with the tools you already trust
                    </p>
                    <div
                        class="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-semibold text-slate-400 dark:text-slate-500"
                    >
                        <span
                            class="transition-colors hover:text-red-500 dark:hover:text-red-400"
                            >Laravel</span
                        >
                        <span
                            class="transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
                            >Vue</span
                        >
                        <span
                            class="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                            >TypeScript</span
                        >
                        <span
                            class="transition-colors hover:text-sky-500 dark:hover:text-sky-400"
                            >Tailwind CSS</span
                        >
                        <span
                            class="transition-colors hover:text-violet-600 dark:hover:text-violet-400"
                            >Inertia</span
                        >
                    </div>
                </div>
            </section>

            <section
                id="features"
                aria-labelledby="features-heading"
                class="scroll-mt-28 py-24 sm:py-32"
            >
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div class="mx-auto max-w-2xl text-center">
                        <p
                            class="text-xs font-semibold tracking-[0.18em] text-amber-600 uppercase dark:text-amber-400"
                        >
                            Features
                        </p>
                        <h2
                            id="features-heading"
                            class="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white"
                        >
                            Everything you need to stay in flow
                        </h2>
                        <p
                            class="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300"
                        >
                            Powerful where it matters, invisible everywhere
                            else. Todo keeps the mechanics out of your way.
                        </p>
                    </div>

                    <div class="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        <article
                            v-for="feature in features"
                            :key="feature.title"
                            class="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-xl hover:shadow-slate-900/5 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-amber-400/30"
                        >
                            <div
                                class="flex size-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600 ring-1 ring-amber-100 transition-colors group-hover:bg-amber-500 group-hover:text-white dark:bg-amber-400/10 dark:text-amber-300 dark:ring-amber-400/20 dark:group-hover:bg-amber-400 dark:group-hover:text-slate-950"
                            >
                                <component :is="feature.icon" class="size-5" />
                            </div>
                            <h3
                                class="mt-5 text-base font-semibold text-slate-950 dark:text-white"
                            >
                                {{ feature.title }}
                            </h3>
                            <p
                                class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
                            >
                                {{ feature.description }}
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section
                id="how-it-works"
                aria-labelledby="how-it-works-heading"
                class="scroll-mt-28 border-y border-slate-200/70 bg-slate-50/60 py-24 sm:py-32 dark:border-white/5 dark:bg-white/[0.02]"
            >
                <div
                    class="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-24 lg:px-8"
                >
                    <div class="lg:sticky lg:top-32">
                        <p
                            class="text-xs font-semibold tracking-[0.18em] text-amber-600 uppercase dark:text-amber-400"
                        >
                            How it works
                        </p>
                        <h2
                            id="how-it-works-heading"
                            class="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white"
                        >
                            From scattered to shipped in three steps
                        </h2>
                        <p
                            class="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300"
                        >
                            No complex setup. No learning curve. Just a clear
                            place for everything you need to do — and a simple
                            rhythm for getting it done.
                        </p>
                        <Link
                            v-if="user"
                            :href="dashboard()"
                            class="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 dark:text-white"
                        >
                            Open your dashboard
                            <ArrowRight
                                class="size-4 transition-transform group-hover:translate-x-0.5"
                            />
                        </Link>
                        <Link
                            v-else
                            :href="register()"
                            class="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 dark:text-white"
                        >
                            Create your free account
                            <ArrowRight
                                class="size-4 transition-transform group-hover:translate-x-0.5"
                            />
                        </Link>
                    </div>

                    <div class="relative">
                        <div
                            class="absolute top-6 left-6 h-[calc(100%-3rem)] w-px bg-gradient-to-b from-amber-300 via-slate-200 to-transparent dark:from-amber-400/40 dark:via-white/10"
                            aria-hidden="true"
                        ></div>
                        <ol class="space-y-10">
                            <li
                                v-for="(step, index) in steps"
                                :key="step.title"
                                class="relative flex gap-5 sm:gap-6"
                            >
                                <span
                                    class="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-sm font-semibold text-slate-950 shadow-sm dark:border-white/10 dark:bg-slate-900 dark:text-white"
                                >
                                    {{ String(index + 1).padStart(2, '0') }}
                                </span>
                                <div class="pt-1">
                                    <h3
                                        class="text-lg font-semibold text-slate-950 dark:text-white"
                                    >
                                        {{ step.title }}
                                    </h3>
                                    <p
                                        class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
                                    >
                                        {{ step.description }}
                                    </p>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </section>

            <section
                id="testimonials"
                aria-labelledby="testimonials-heading"
                class="scroll-mt-28 py-24 sm:py-32"
            >
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div class="mx-auto max-w-2xl text-center">
                        <p
                            class="text-xs font-semibold tracking-[0.18em] text-amber-600 uppercase dark:text-amber-400"
                        >
                            Testimonials
                        </p>
                        <h2
                            id="testimonials-heading"
                            class="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white"
                        >
                            Loved by people who get things done
                        </h2>
                        <p
                            class="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300"
                        >
                            Designers, engineers, and founders use Todo to keep
                            the day moving.
                        </p>
                    </div>

                    <div class="mt-14 grid gap-5 md:grid-cols-3">
                        <figure
                            v-for="testimonial in testimonials"
                            :key="testimonial.name"
                            class="relative flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8 dark:border-white/10 dark:bg-white/[0.03]"
                        >
                            <Quote
                                class="absolute top-6 right-6 size-6 text-amber-200 dark:text-amber-400/30"
                                aria-hidden="true"
                            />
                            <div class="flex items-center gap-1 text-amber-500">
                                <Star
                                    v-for="star in 5"
                                    :key="star"
                                    class="size-4 fill-current"
                                    aria-hidden="true"
                                />
                            </div>
                            <blockquote
                                class="mt-5 flex-1 text-sm leading-relaxed text-slate-700 sm:text-base dark:text-slate-200"
                            >
                                “{{ testimonial.quote }}”
                            </blockquote>
                            <figcaption class="mt-6 flex items-center gap-3">
                                <span
                                    class="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-xs font-semibold text-white"
                                >
                                    {{ testimonial.initials }}
                                </span>
                                <div>
                                    <p
                                        class="text-sm font-semibold text-slate-950 dark:text-white"
                                    >
                                        {{ testimonial.name }}
                                    </p>
                                    <p
                                        class="text-xs text-slate-500 dark:text-slate-400"
                                    >
                                        {{ testimonial.role }} ·
                                        {{ testimonial.company }}
                                    </p>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </section>

            <section
                id="faq"
                aria-labelledby="faq-heading"
                class="scroll-mt-28 border-t border-slate-200/70 py-24 sm:py-32 dark:border-white/5"
            >
                <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <div class="text-center">
                        <p
                            class="text-xs font-semibold tracking-[0.18em] text-amber-600 uppercase dark:text-amber-400"
                        >
                            FAQ
                        </p>
                        <h2
                            id="faq-heading"
                            class="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white"
                        >
                            Questions, answered
                        </h2>
                        <p
                            class="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300"
                        >
                            Everything you might want to know before getting
                            started.
                        </p>
                    </div>

                    <div class="mt-10 space-y-3">
                        <details
                            v-for="faq in faqs"
                            :key="faq.question"
                            class="group rounded-2xl border border-slate-200/80 bg-white px-5 py-4 transition-colors open:border-amber-200 dark:border-white/10 dark:bg-white/[0.03] dark:open:border-amber-400/30"
                        >
                            <summary
                                class="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-slate-900 dark:text-white"
                            >
                                {{ faq.question }}
                                <ChevronDown
                                    class="size-5 shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-180"
                                />
                            </summary>
                            <p
                                class="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
                            >
                                {{ faq.answer }}
                            </p>
                        </details>
                    </div>
                </div>
            </section>

            <section class="pb-24 sm:pb-32">
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div
                        class="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-16 text-center shadow-2xl ring-1 shadow-slate-950/30 ring-white/10 sm:px-16 sm:py-20"
                    >
                        <div
                            class="pointer-events-none absolute inset-0"
                            aria-hidden="true"
                        >
                            <div
                                class="absolute -top-24 -left-24 size-72 rounded-full bg-amber-500/25 blur-3xl"
                            ></div>
                            <div
                                class="absolute -right-16 -bottom-24 size-80 rounded-full bg-orange-600/20 blur-3xl"
                            ></div>
                        </div>

                        <div class="relative">
                            <h2
                                class="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
                            >
                                Ready to turn your list into done?
                            </h2>
                            <p
                                class="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
                            >
                                Join Todo today and give every task a home. Free
                                forever for personal use.
                            </p>

                            <div
                                class="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
                            >
                                <template v-if="user">
                                    <Link
                                        :href="dashboard()"
                                        class="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-slate-950 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-slate-100 sm:w-auto"
                                    >
                                        Open your dashboard
                                        <ArrowRight
                                            class="size-4 transition-transform group-hover:translate-x-0.5"
                                        />
                                    </Link>
                                </template>
                                <template v-else>
                                    <Link
                                        :href="register()"
                                        class="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-slate-950 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-slate-100 sm:w-auto"
                                    >
                                        Create your free account
                                        <ArrowRight
                                            class="size-4 transition-transform group-hover:translate-x-0.5"
                                        />
                                    </Link>
                                    <Link
                                        :href="login()"
                                        class="inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/10 sm:w-auto"
                                    >
                                        Log in
                                    </Link>
                                </template>
                            </div>

                            <p class="mt-6 text-xs text-slate-400">
                                Free for personal use · No credit card required
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <footer class="border-t border-slate-200/70 dark:border-white/5">
            <div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
                <div class="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
                    <div class="max-w-sm">
                        <Link
                            :href="home()"
                            aria-label="Todo home"
                            class="inline-flex items-center gap-2.5"
                        >
                            <span
                                class="flex size-9 items-center justify-center rounded-xl bg-slate-900 text-white shadow-md shadow-slate-900/20 dark:bg-amber-400 dark:text-slate-950"
                            >
                                <Check class="size-5" :stroke-width="3" />
                            </span>
                            <span class="text-lg font-semibold tracking-tight">
                                Todo<span
                                    class="text-amber-500 dark:text-amber-400"
                                    >.</span
                                >
                            </span>
                        </Link>
                        <p
                            class="mt-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400"
                        >
                            The calm workspace for getting things done. Capture,
                            organize, and finish — without the clutter.
                        </p>
                    </div>

                    <div>
                        <h2
                            class="text-sm font-semibold text-slate-950 dark:text-white"
                        >
                            Product
                        </h2>
                        <ul class="mt-4 space-y-2.5">
                            <li v-for="link in navLinks" :key="link.href">
                                <a
                                    :href="link.href"
                                    class="text-sm text-slate-500 transition-colors hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
                                >
                                    {{ link.label }}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2
                            class="text-sm font-semibold text-slate-950 dark:text-white"
                        >
                            Account
                        </h2>
                        <ul class="mt-4 space-y-2.5">
                            <li v-if="user">
                                <Link
                                    :href="dashboard()"
                                    class="text-sm text-slate-500 transition-colors hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
                                >
                                    Dashboard
                                </Link>
                            </li>
                            <template v-else>
                                <li>
                                    <Link
                                        :href="login()"
                                        class="text-sm text-slate-500 transition-colors hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
                                    >
                                        Log in
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        :href="register()"
                                        class="text-sm text-slate-500 transition-colors hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
                                    >
                                        Create account
                                    </Link>
                                </li>
                            </template>
                            <li>
                                <a
                                    href="#top"
                                    class="text-sm text-slate-500 transition-colors hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
                                >
                                    Back to top
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div
                    class="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-200/70 pt-6 text-sm text-slate-500 sm:flex-row dark:border-white/5 dark:text-slate-400"
                >
                    <p>&copy; {{ year }} Todo. All rights reserved.</p>
                    <p>Built with Laravel, Inertia &amp; Vue.</p>
                </div>
            </div>
        </footer>
    </div>
</template>

<style scoped>
.hero-grid {
    background-image:
        linear-gradient(to right, rgb(15 23 42 / 0.055) 1px, transparent 1px),
        linear-gradient(to bottom, rgb(15 23 42 / 0.055) 1px, transparent 1px);
    background-size: 56px 56px;
    mask-image: radial-gradient(
        ellipse 72% 58% at 50% 0%,
        black 42%,
        transparent 100%
    );
    -webkit-mask-image: radial-gradient(
        ellipse 72% 58% at 50% 0%,
        black 42%,
        transparent 100%
    );
}

.dark .hero-grid {
    background-image:
        linear-gradient(to right, rgb(255 255 255 / 0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgb(255 255 255 / 0.05) 1px, transparent 1px);
}

summary::-webkit-details-marker {
    display: none;
}

@keyframes rise-in {
    from {
        opacity: 0;
        transform: translateY(18px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.rise {
    animation: rise-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
}

.rise-delay-1 {
    animation-delay: 0.08s;
}

.rise-delay-2 {
    animation-delay: 0.16s;
}

.rise-delay-3 {
    animation-delay: 0.24s;
}

.rise-delay-4 {
    animation-delay: 0.32s;
}

@keyframes float-y {
    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

.animate-float {
    animation: float-y 7s ease-in-out infinite;
}

:global(html) {
    scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
    :global(html) {
        scroll-behavior: auto;
    }

    .rise,
    .animate-float {
        animation: none;
    }
}
</style>
