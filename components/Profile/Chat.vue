<template>
    <div class="relative w-full">
        <div class="content-chat overflow-y-auto h-full w-full pb-20">
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

<style scoped>
.content-chat {
    padding-right: 360px;
}
</style>
