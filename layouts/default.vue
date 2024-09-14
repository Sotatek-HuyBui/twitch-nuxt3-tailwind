<template>
    <div class="default_layout relative overflow-hidden">
        <LoginModal
            v-model="isShowLoginModal"
            :onShowRegisterModal="onShowRegisterModal"
        />
        <RegisterModal
            v-model="isShowRegisterModal"
            :onShowLoginModal="onShowLoginModal"
        />
        <Header
            class="fixed w-full top-0"
            :onShowLoginModal="onShowLoginModal"
            :onShowRegisterModal="onShowRegisterModal"
        />
        <div class="w-[100%] flex relative mt-[58px] overflow-hidden">
            <SideBar :toggleFromParent="toggleFromParent" />
            <div
                class="content layout-collapsed p-2 overflow-y-auto h-full w-full pb-20"
                :class="{ checkout: isOpen }"
            >
                <slot />
            </div>
        </div>
        <SignUpBanner :onShowLoginModal="onShowLoginModal" />
    </div>
</template>

<script setup lang="ts">
const isShowLoginModal = ref(false);
const isShowRegisterModal = ref(false);
const isOpen = ref(true);

const onShowLoginModal = () => {
    isShowLoginModal.value = true;
    isShowRegisterModal.value = false;
};

const onShowRegisterModal = () => {
    isShowRegisterModal.value = true;
    isShowLoginModal.value = false;
};

const toggleFromParent = () => {
    console.log('hehe   ');
    isOpen.value = !isOpen.value;
};
</script>

<style>
.content {
    margin-left: 240px; /* Adjust margin to accommodate the sidebar width */
    transition: all 0.5s ease; /* Smooth transition effect on width change */
}

.layout-collapsed {
    margin-left: 60px !important;
}

.checkout {
    margin-left: 240px !important;
}
</style>
