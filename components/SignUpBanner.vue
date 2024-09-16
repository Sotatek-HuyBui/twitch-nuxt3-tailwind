<template>
    <div
        class="fixed bottom-0 left-0 flex justify-between items-center p-3 right-0 bg-customPrimary-3"
    >
        <p class="text-white text-[18px]">
            Join the Twitch community! Discover the best live streams anywhere.
        </p>
        <UButton variant="solid" color="white" @click="onShowLoginModal"
            >Sign Up</UButton
        >
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['onShowLoginModal']);
</script>
