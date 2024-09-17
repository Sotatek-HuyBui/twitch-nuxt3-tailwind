<template>
    <div class="w-[100%] flex relative overflow-hidden">
        <div class="overflow-y-auto h-full w-full">
            <ProfileHeader />
            <ProfileTabPane />
        </div>
    </div>
</template>

<script setup>
const nuxt = useNuxtApp();
</script>

<style>
.chat_bar {
    width: 340px; /* Set the width of the sidebar */
    top: 58px; /* Adjust the top position to accommodate the header */
    right: 0;
    bottom: 0;
    background-color: #f8f8f8; /* Sidebar background color */
}
</style>
