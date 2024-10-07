<template>
    <div class="flex-1 pl-5 sm:p-4">
        <DirectoryHeader />
        <DirectoryTabPane />
    </div>
</template>
<script setup>
const route = useRoute();

useHead({
    title: 'All Categories -  Twitch',
});
</script>
