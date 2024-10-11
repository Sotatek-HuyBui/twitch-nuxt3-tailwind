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
                class="content layout-collapsed overflow-y-auto h-full w-full pb-20 relative bg-lightBackgroundSlot dark:bg-darkBackgroundSlot"
                :class="{ checkout: isOpen }"
            >
                <slot />
                <div
                    v-if="isShowVideo && isOpen"
                    class="w-[280px] h-[160px] bg-red-700 fixed left-[15.5rem] bottom-[4.5rem] z-50 group"
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

                    <div
                        class="cursor-pointer bg-black bg-opacity-65 text-nowrap absolute top-0 left-0 right-0 flex justify-between items-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                        <div class="ml-2 text-sm text-white">
                            Watching {{ userName }}
                        </div>
                        <svgo-default-btn-close
                            @click="onCloseCornerVideo"
                            class="cursor-pointer text-white w-7 h-7 mr-2 transition duration-300 hover:bg-white hover:bg-opacity-30 p-1 rounded"
                            :fontControlled="false"
                        />
                    </div>
                </div>
                <div
                    v-if="isShowVideo && !isOpen"
                    class="w-[280px] h-[160px] bg-red-700 fixed left-[4rem] bottom-[4.5rem] z-50 group"
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

                    <div
                        class="cursor-pointer bg-black bg-opacity-65 text-nowrap absolute top-0 left-0 right-0 flex justify-between items-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                        <div class="ml-2 text-sm text-white">
                            Watching {{ dummySuggestedChannels[0].streamer }}
                        </div>
                        <svgo-default-btn-close
                            @click="onCloseCornerVideo"
                            class="cursor-pointer text-white w-7 h-7 mr-2 transition duration-300 hover:bg-white hover:bg-opacity-30 p-1 rounded"
                            :fontControlled="false"
                        />
                    </div>
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
import {
    dummySidebarChannels,
    dummySliders,
    dummySuggestedChannels,
} from '~/data/index';
const route = useRoute();
const { isShowingVideoCorner, hideVideoCorner } = useNavigateStore();
const isShowLoginModal = ref(false);
const isShowRegisterModal = ref(false);
const isOpen = ref(true);
const accountLive = ref('');
const isShowVideo = ref(isShowingVideoCorner);
const { $locally }: any = useNuxtApp();
const token = $locally.getItem('token');
const userStore = useUserStore();
const userName = computed(() => userStore.value.name);

onMounted(() => {
    const storedIsOpen = localStorage.getItem('isOpenSideBar');
    isOpen.value = storedIsOpen === 'true' || false;
});

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
