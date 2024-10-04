<template>
    <div
        class="fixed bottom-0 left-0 flex justify-between items-center p-1 sm:p-3 right-0 bg-customPrimary-3"
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
            class="text-[8px] py-1 sm:text-[14px]"
            >Sign up</UButton
        >
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['onShowRegisterModal']);
</script>
