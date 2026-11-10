<script lang="ts" setup>
import type { ToasterProps } from 'vue-sonner';
import {
    CircleCheckIcon,
    InfoIcon,
    Loader2Icon,
    OctagonXIcon,
    TriangleAlertIcon,
    XIcon,
} from '@lucide/vue';
import { Toaster as Sonner } from 'vue-sonner';
import { useAppearance } from '@/composables/useAppearance';
import { cn } from '@/lib/utils';

import 'vue-sonner/style.css';

const props = withDefaults(defineProps<ToasterProps>(), {
    position: 'top-right',
    richColors: true,
    closeButton: true,
    duration: 4000,
    offset: 16,
});

const { resolvedAppearance } = useAppearance();

const toastOptions = {
    classNames: {
        toast: 'rounded-xl border border-black/5 shadow-lg shadow-black/10 backdrop-blur-sm dark:border-white/10',
        title: 'text-sm font-semibold',
        description: 'text-xs opacity-80',
        actionButton: 'rounded-lg text-xs font-medium',
        cancelButton: 'rounded-lg text-xs font-medium',
        closeButton: 'rounded-md',
    },
};
</script>

<template>
    <Sonner
        v-bind="props"
        :theme="resolvedAppearance"
        :toast-options="toastOptions"
        :class="cn('toaster group', props.class)"
        :style="{
            '--normal-bg': 'var(--popover)',
            '--normal-text': 'var(--popover-foreground)',
            '--normal-border': 'var(--border)',
            '--border-radius': 'var(--radius)',
        }"
    >
        <template #success-icon>
            <CircleCheckIcon class="size-4" />
        </template>
        <template #info-icon>
            <InfoIcon class="size-4" />
        </template>
        <template #warning-icon>
            <TriangleAlertIcon class="size-4" />
        </template>
        <template #error-icon>
            <OctagonXIcon class="size-4" />
        </template>
        <template #loading-icon>
            <div>
                <Loader2Icon class="size-4 animate-spin" />
            </div>
        </template>
        <template #close-icon>
            <XIcon class="size-4" />
        </template>
    </Sonner>
</template>
