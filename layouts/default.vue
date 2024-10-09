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
                class="content layout-collapsed overflow-y-auto h-full w-full pb-20 relative bg-[lightBackgroundSlot] dark:bg-darkBackgroundSlot"
                :class="{ checkout: isOpen }"
            >
                <slot />
                <div
                    v-if="isShowVideo"
                    class="w-[300px] h-[180px] bg-red-700 fixed left-20 bottom-20 z-50"
                >
                    <video
                        class="w-full h-full object-cover"
                        :poster="dummySliders[0].thumb"
                        controls
                        autoplay
                    >
                        <source :src="dummySliders[0].sources[0]" />
                        Your browser does not support HTML video.
                    </video>
                    <img
                        @click="onCloseCornerVideo"
                        src="~/assets/close-white.png"
                        class="cursor-pointer absolute top-4 right-4 w-4 h-4"
                    />
                </div>
            </div>
        </div>
        <SignUpBanner
            v-if="!token"
            :onShowRegisterModal="onShowRegisterModal"
        />
    </div>
</template>

<script setup lang="ts">
import { dummySliders } from '~/data/index';
const { isShowingVideoCorner, hideVideoCorner } = useNavigateStore();
const isShowLoginModal = ref(false);
const isShowRegisterModal = ref(false);
const isOpen = ref(true);
const isShowVideo = ref(isShowingVideoCorner);
const { $locally }: any = useNuxtApp();
const token = $locally.getItem('token');

const onCloseCornerVideo = () => {
    isShowVideo.value = false;
    hideVideoCorner();
};

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
