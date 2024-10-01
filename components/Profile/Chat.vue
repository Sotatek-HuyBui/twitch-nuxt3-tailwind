<template>
    <div class="relative w-full">
        <div
            class="content-chat layout-collapsed overflow-y-auto h-full w-full pb-20"
        >
            <ProfileChatStream />
        </div>
        <ProfileChatInput :isOpen="isOpen" :toggleSideBar="toggleSideBar" />
    </div>
</template>
<script setup>
const isOpen = ref(true);

const toggleSideBar = () => {
    isOpen.value = false;
};
</script>

<style>
.content-chat {
    margin-right: 360px;
    transition: all 0.5s ease;
}
</style>
