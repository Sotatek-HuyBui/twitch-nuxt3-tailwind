<template>
    <div
        class="fixed bottom-0 left-0 flex justify-between items-center p-1 sm:p-3 right-0 bg-customPrimary-3"
    >
        <p class="text-white text-[8px] sm:text-[18px]">
            Join the Twitch community! Discover the best live streams anywhere.
        </p>
        <UButton
            variant="solid"
            color="white"
            @click="onShowLoginModal"
            class="text-[8px] py-1 sm:text-[14px] sm:py-3"
            >Sign Up</UButton
        >
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['onShowLoginModal']);
</script>
