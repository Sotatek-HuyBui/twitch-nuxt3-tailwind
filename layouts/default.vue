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
        <div
            class="w-[100%] flex relative mt-[40px] sm:mt-[50px] overflow-hidden"
        >
            <SideBar
                :toggleFromParent="toggleFromParent"
                class="hidden sm:block"
            />
            <MobileSideBar class="block sm:hidden" />
            <div
                class="content layout-collapsed p-1 overflow-y-auto h-full w-full pb-20"
                :class="{ checkout: isOpen }"
            >
                <slot />
            </div>
        </div>
        <SignUpBanner
            v-if="!token"
            :onShowRegisterModal="onShowRegisterModal"
        />
    </div>
</template>

<script setup lang="ts">
const isShowLoginModal = ref(false);
const isShowRegisterModal = ref(false);
const isOpen = ref(true);

const { $locally }: any = useNuxtApp();
const token = $locally.getItem('token');

const onShowLoginModal = () => {
    isShowLoginModal.value = true;
    isShowRegisterModal.value = false;
};

const onShowRegisterModal = () => {
    isShowRegisterModal.value = true;
    isShowLoginModal.value = false;
};

const toggleFromParent = () => {
    isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.content {
    margin-left: 240px; /* Adjust margin to accommodate the sidebar width */
    transition: all 0.5s ease; /* Smooth transition effect on width change */
}

.ant-modal .ant-modal-content {
    padding: 0;
}

.layout-collapsed {
    margin-left: 50px !important;
}

@media screen and (min-width: 640px) {
    .checkout {
        margin-left: 240px !important;
    }
}
@media screen and (max-width: 640px) {
    .layout-collapsed {
        margin-left: 20px !important;
    }
}
</style>
