<template>
    <div
        class="fixed bottom-0 left-0 flex justify-between items-center p-1 sm:px-5 sm:py-3 right-0 bg-customPrimary-3 z-[9999]"
    >
        <div class="flex items-center">
            <img
                src="https://assets.twitch.tv/assets/coolcat-edacb6fbd813ce2f0272.png"
                class="w-10 h-10 mr-3"
            />
            <p
                v-if="$route.params.name"
                class="text-white text-[8px] sm:text-[19px]"
            >
                <b>
                    Sign up to experience the best of
                    {{ $route.params.name }}</b
                >
                Chat, follow or subcribe - Twitch is your oyster.
            </p>
            <p v-else class="text-white text-[8px] sm:text-[19px]">
                <span class="font-medium">Join the Twitch community!</span>
                Discover the best live streams anywhere.
            </p>
        </div>
        <UButton
            variant="solid"
            color="white"
            @click="onShowRegisterModal"
            class="text-[8px] py-1 sm:text-[14px] text-black dark:bg-white dark:text-black hover:bg-slate-100 dark:hover:bg-slate-100 mr-10"
            >Sign Up</UButton
        >
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['onShowRegisterModal']);
</script>
