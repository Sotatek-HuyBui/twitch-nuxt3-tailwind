<template>
    <div class="relative w-full flex">
        <LoginModal
            v-model="isShowLoginModal"
            :onShowRegisterModal="onShowRegisterModal"
        />
        <RegisterModal
            v-model="isShowRegisterModal"
            :onShowLoginModal="onShowLoginModal"
        />
        <div
            class="content relative w-full overflow-y-auto h-full pb-20 bg-slate=900"
            :class="{ 'layout-collapsed': !isOpen }"
        >
            <ProfileChatStream />
        </div>
        <div v-if="!isOpen" class="absolute top-2 right-2 z-50">
            <img
                src="~/assets/collapse-close-white.png"
                class="w-4 h-4 cursor-pointer z-50"
                alt="Collapse"
                @click="toggleSideBar"
            />
        </div>
        <ProfileChatInput
            :isOpen="isOpen"
            :toggleSideBar="toggleSideBar"
            :onShowLoginModal="onShowLoginModal"
            v-if="isOpen"
        />
    </div>
</template>
<script setup>
const isOpen = ref(true);
const isShowLoginModal = ref(false);
const isShowRegisterModal = ref(false);
const colorMode = useColorMode();

const onShowLoginModal = () => {
    isShowLoginModal.value = true;
    isShowRegisterModal.value = false;
};

const onShowRegisterModal = () => {
    isShowRegisterModal.value = true;
    isShowLoginModal.value = false;
};

const toggleSideBar = () => {
    isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.content {
    padding-right: 360px; /* Adjust margin to accommodate the sidebar width */
    transition: all 0.5s ease; /* Smooth transition effect on width change */
}

.layout-collapsed {
    padding-right: 0px !important;
}
</style>
