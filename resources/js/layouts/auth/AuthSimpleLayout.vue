<script setup lang="ts">
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';
import { Check, CheckCircle2, Moon, Star, Sun } from '@lucide/vue';
import { useAppearance } from '@/composables/useAppearance';
import { home } from '@/routes';

defineProps<{
    title?: string;
    description?: string;
}>();

const { resolvedAppearance, updateAppearance } = useAppearance();
const isDark = computed(() => resolvedAppearance.value === 'dark');
const toggleTheme = (): void =>
    updateAppearance(isDark.value ? 'light' : 'dark');

const valueProps = [
    'Free for personal use',
    'No credit card required',
    'Set up in under a minute',
];

const year = new Date().getFullYear();
</script>

<template>
    <div
        class="relative min-h-svh bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100"
    >
        <button
            type="button"
            :aria-label="
                isDark ? 'Switch to light mode' : 'Switch to dark mode'
            "
            class="fixed top-4 right-4 z-50 flex size-9 items-center justify-center rounded-xl border border-slate-200/80 bg-white/80 text-slate-500 shadow-sm backdrop-blur transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white"
            @click="toggleTheme"
        >
            <Sun v-if="isDark" class="size-4" />
            <Moon v-else class="size-4" />
        </button>

        <div class="grid min-h-svh lg:grid-cols-2">
            <aside
                class="relative hidden overflow-hidden bg-slate-950 p-12 text-white lg:flex lg:flex-col lg:justify-between xl:p-16"
            >
                <div
                    class="auth-grid absolute inset-0 opacity-50"
                    aria-hidden="true"
                ></div>
                <div
                    class="pointer-events-none absolute -top-32 -left-24 size-96 rounded-full bg-amber-500/20 blur-3xl"
                    aria-hidden="true"
                ></div>
                <div
                    class="pointer-events-none absolute -right-24 -bottom-32 size-96 rounded-full bg-orange-600/20 blur-3xl"
                    aria-hidden="true"
                ></div>

                <Link
                    :href="home()"
                    aria-label="Todo home"
                    class="relative z-10 flex w-fit items-center gap-2.5 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400"
                >
                    <span
                        class="flex size-9 items-center justify-center rounded-xl bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20"
                    >
                        <Check class="size-5" :stroke-width="3" />
                    </span>
                    <span class="text-lg font-semibold tracking-tight">
                        Todo<span class="text-amber-400">.</span>
                    </span>
                </Link>

                <div class="relative z-10 max-w-md">
                    <h2
                        class="text-4xl leading-[1.15] font-semibold tracking-tight xl:text-5xl"
                    >
                        Turn your to-do list<br />
                        <span
                            class="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent"
                        >
                            into done.
                        </span>
                    </h2>
                    <p class="mt-5 text-base leading-relaxed text-slate-300">
                        Capture, organize, and finish what matters — in one calm
                        workspace that never gets in your way.
                    </p>
                    <ul class="mt-8 space-y-3">
                        <li
                            v-for="item in valueProps"
                            :key="item"
                            class="flex items-center gap-3 text-sm text-slate-300"
                        >
                            <CheckCircle2
                                class="size-5 shrink-0 text-emerald-400"
                            />
                            {{ item }}
                        </li>
                    </ul>
                </div>

                <figure
                    class="relative z-10 max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                >
                    <div class="mb-3 flex items-center gap-1">
                        <Star
                            v-for="i in 5"
                            :key="i"
                            class="size-4 fill-amber-400 text-amber-400"
                        />
                    </div>
                    <blockquote class="text-sm leading-relaxed text-slate-200">
                        “Finally a todo app that gets out of the way.
                        Natural-language capture alone saves me hours every
                        week.”
                    </blockquote>
                    <figcaption class="mt-4 flex items-center gap-3">
                        <span
                            class="flex size-9 items-center justify-center rounded-full bg-amber-400/15 text-xs font-semibold text-amber-300"
                        >
                            SC
                        </span>
                        <span>
                            <span class="block text-sm font-medium text-white">
                                Sarah Chen
                            </span>
                            <span class="block text-xs text-slate-400">
                                Product designer, Northwind Studio
                            </span>
                        </span>
                    </figcaption>
                </figure>
            </aside>

            <main
                class="relative flex min-h-svh flex-col overflow-hidden lg:min-h-0"
            >
                <div
                    class="auth-grid pointer-events-none absolute inset-0"
                    aria-hidden="true"
                ></div>
                <div
                    class="pointer-events-none absolute -top-24 right-0 size-80 rounded-full bg-amber-400/10 blur-3xl dark:bg-amber-500/10"
                    aria-hidden="true"
                ></div>
                <div
                    class="pointer-events-none absolute -bottom-24 left-0 size-80 rounded-full bg-orange-400/10 blur-3xl dark:bg-orange-600/10"
                    aria-hidden="true"
                ></div>

                <div
                    class="relative flex flex-1 items-center justify-center px-4 py-12 sm:px-8"
                >
                    <div class="w-full max-w-md">
                        <div class="mb-6 flex justify-center lg:hidden">
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
                                <span
                                    class="text-lg font-semibold tracking-tight"
                                >
                                    Todo<span
                                        class="text-amber-500 dark:text-amber-400"
                                        >.</span
                                    >
                                </span>
                            </Link>
                        </div>

                        <div
                            class="rise rounded-3xl border border-slate-200/80 bg-white/95 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-sm sm:p-8 dark:border-white/10 dark:bg-slate-900/80"
                        >
                            <div class="mb-8 space-y-2 text-center">
                                <h1
                                    class="text-2xl font-semibold tracking-tight"
                                >
                                    {{ title }}
                                </h1>
                                <p
                                    class="text-sm leading-relaxed text-slate-500 dark:text-slate-400"
                                >
                                    {{ description }}
                                </p>
                            </div>
                            <slot />
                        </div>

                        <p
                            class="mt-6 text-center text-xs text-slate-500 dark:text-slate-500"
                        >
                            <Link
                                :href="home()"
                                class="font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                            >
                                ← Back to home
                            </Link>
                        </p>
                    </div>
                </div>

                <footer
                    class="relative px-6 pb-6 text-center text-xs text-slate-400 dark:text-slate-600"
                >
                    © {{ year }} Todo. All rights reserved.
                </footer>
            </main>
        </div>
    </div>
</template>

<style scoped>
.auth-grid {
    background-image:
        linear-gradient(to right, rgb(15 23 42 / 0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgb(15 23 42 / 0.05) 1px, transparent 1px);
    background-size: 56px 56px;
    mask-image: radial-gradient(
        ellipse 80% 70% at 50% 40%,
        black 35%,
        transparent 100%
    );
    -webkit-mask-image: radial-gradient(
        ellipse 80% 70% at 50% 40%,
        black 35%,
        transparent 100%
    );
}

.dark .auth-grid {
    background-image:
        linear-gradient(to right, rgb(255 255 255 / 0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgb(255 255 255 / 0.05) 1px, transparent 1px);
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

@media (prefers-reduced-motion: reduce) {
    .rise {
        animation: none;
    }
}
</style>
