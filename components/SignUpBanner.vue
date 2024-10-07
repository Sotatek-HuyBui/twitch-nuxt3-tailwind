<template>
    <div
        class="fixed bottom-0 left-0 flex justify-between items-center p-1 sm:px-10 sm:py-5 right-0 bg-customPrimary-3 z-50"
    >
        <p
            v-if="$route.params.name"
            class="text-white text-[8px] sm:text-[18px]"
        >
            Sign up to experience the best of {{ $route.params.name }} Chat,
            follow or subcribe - Twitch is your oyster.
        </p>
        <p v-else class="text-white text-[8px] sm:text-[18px]">
            Join the Twitch community! Discover the best live streams anywhere.
        </p>
        <UButton
            variant="solid"
            color="white"
            @click="onShowRegisterModal"
            class="text-[8px] py-1 sm:text-[14px] dark:bg-white dark:text-black hover:bg-slate-100 dark:hover:bg-slate-100"
            >Sign up</UButton
        >
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['onShowRegisterModal']);
</script>
