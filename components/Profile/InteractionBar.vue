<template>
    <div class="py-3">
        <ProfileChatUnfollowingModal
            v-model="isOpen"
            :onUnfollow="onUnfollow"
        />
        <ProfileChatUnsubcribeModal
            v-model="isOpenUnsubcribe"
            :onUnsubcribe="onUnsubcribe"
        />
        <div class="flex justify-center items-center">
            <div class="w-6 h-6 sm:w-[64px] sm:h-[64px] relative">
                <img
                    class="object-cover rounded-full w-full h-full"
                    :src="user.avatar"
                />
                <div
                    v-if="$route.params.tab === 'chats'"
                    class="absolute bottom-[-6px] left-3"
                >
                    <TagLive />
                </div>
            </div>
            <div class="flex-1 ml-4">
                <div class="flex justify-between items-center">
                    <div class="flex items-center">
                        <p
                            class="text-[12px] sm:text-[18px] font-bold cursor-pointer hover:underline"
                            @click="navigateTo(`/${$route.params.name}`)"
                        >
                            {{ $route.params.name }}
                        </p>
                        <img
                            src="~/assets/checklist-purple.png"
                            class="w-2 h-2 sm:w-4 sm:h-4 ml-2"
                        />
                    </div>

                    <div class="flex items-center">
                        <div
                            v-if="token && isFollowing"
                            class="flex items-center justify-center px-2 sm:px-3 py-1 sm:py-2 dark:bg-slate-700 bg-slate-200 rounded-md mr-2 cursor-pointer hover:bg-slate-300 w-10 sm:w-12"
                            @click="onClickNotifyButton"
                        >
                            <svgo-interaction-notification-bell />
                        </div>
                        <UButton
                            v-if="!isFollowing"
                            @click="onClickFollowButton"
                            variant="solid"
                            size="2xs"
                            icon="i-heroicons-heart"
                            class="dark:text-white text-[6px] sm:text-[12px] sm:py-2 sm:w-[80px] w-[60px] bg-customPrimary-1 dark:bg-customPrimary-1 hover:bg-customPrimary-2 dark:hover:bg-customPrimary-2 flex justify-center"
                            >Follow</UButton
                        >
                        <div
                            v-if="isFollowing"
                            @click="onClickFollowButton"
                            variant="solid"
                            size="2xs"
                            class="flex items-center justify-center px-2 sm:px-3 py-1 sm:py-2 dark:bg-slate-700 bg-slate-200 rounded-md cursor-pointer hover:bg-[#ffaaa8] w-10 sm:w-12"
                        >
                            <svgo-interaction-heart-favorite />
                        </div>
                        <UButton
                            v-if="token"
                            @click="message.info('Function is in progress!')"
                            color="white"
                            size="2xs"
                            variant="solid"
                            class="text-[6px] sm:text-[12px] sm:py-2 ml-2 flex justify-center items-center bg-slate-200 dark:bg-slate-800 hover:bg-slate-100"
                        >
                            <svgo-interaction-gift
                                class="w-4"
                                :fontControlled="false"
                            />
                            Gift a Sub
                            <img
                                src="~/assets/arrow-down.png"
                                class="h-2 w-2 ml-1 sm:w-[10px] sm:h-[10px] cursor-pointer"
                            />
                        </UButton>
                        <UButton
                            v-if="!isSubcribing"
                            @click="onClickSubcribeButton"
                            color="white"
                            size="2xs"
                            variant="solid"
                            class="text-[6px] sm:text-[12px] sm:py-2 ml-2 flex justify-center bg-slate-200 dark:bg-slate-800 hover:bg-slate-100"
                        >
                            <svgo-interaction-star
                                class="w-3.5 h-5"
                                :fontControlled="false" />
                            Subcribe
                            <img
                                src="~/assets/arrow-down.png"
                                class="h-2 w-2 ml-1 sm:w-[10px] sm:h-[10px] cursor-pointer"
                        /></UButton>
                        <UButton
                            v-else
                            @click="onClickSubcribeButton"
                            color="white"
                            size="2xs"
                            variant="solid"
                            class="text-[6px] sm:text-[14px] text-white sm:py-2 ml-2 w-[40px] flex justify-center bg-customPrimary-1 hover:bg-customPrimary-2"
                            icon="material-symbols-light:kid-star"
                        ></UButton>
                        <UTooltip
                            text="More options"
                            v-if="$route.params.tab !== 'chats'"
                        >
                            <UDropdown
                                :items="configItems"
                                :popper="{ placement: 'bottom-start' }"
                            >
                                <svgo-header-three-dot-menu
                                    class="h-2 w-2 ml-1 sm:w-4 sm:h-4 cursor-pointer"
                                />
                            </UDropdown>
                        </UTooltip>
                    </div>
                </div>
                <div>
                    <p
                        v-if="$route.params.tab === 'chats'"
                        class="text-[8px] sm:text-sm font-medium"
                    >
                        {{ user.tooltip }}
                    </p>
                    <p v-else class="text-[8px] sm:text-sm">
                        {{ user.viewers }} followers
                    </p>
                    <div
                        v-if="$route.params.tab === 'chats'"
                        class="flex items-center mt-[-8px] justify-between"
                    >
                        <div class="flex items-center">
                            <p
                                class="text-[8px] sm:text-sm text-customPrimary-1 dark:text-customPrimary-1 hover:underline cursor-pointer"
                                @click="
                                    navigateTo(
                                        `/directory/category/${user.description}`
                                    )
                                "
                            >
                                {{ user.description }}
                            </p>
                            <div class="flex items-center ml-2">
                                <Tag
                                    v-for="tag in user.badges"
                                    :key="tag.id"
                                    :item="tag"
                                />
                            </div>
                        </div>
                        <div class="flex items-center">
                            <svg
                                width="18"
                                height="17"
                                aria-hidden="true"
                                class="mr-[4px] mb-[3px]"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M5 7a5 5 0 1 1 6.192 4.857A2 2 0 0 0 13 13h1a3 3 0 0 1 3 3v2h-2v-2a1 1 0 0 0-1-1h-1a4 4 0 0 1-3-1.354A4 4 0 0 1 7 15H6a1 1 0 0 0-1 1v2H3v-2a3 3 0 0 1 3-3h1a2 2 0 0 0 1.808-1.143A5 5 0 0 1 5 7m5 3a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
                                    clip-rule="evenodd"
                                    :fill="
                                        colorMode.value === 'dark'
                                            ? '#ff8280'
                                            : '#971311'
                                    "
                                />
                            </svg>
                            <p
                                class="text-[8px] sm:text-sm mr-2 text-[#971311] dark:text-[#ff8280] font-medium"
                            >
                                {{ reformatNumberDot(user.followers) }}
                            </p>
                            <UTooltip text="Share" class="p-2 rounded-md">
                                <UButton
                                    type="submit"
                                    class="bg-white items-center justify-center dark:text-white text-black dark:bg-slate-900 dark:hover:bg-slate-800 hover:bg-slate-200"
                                    @click="
                                        message.info('Function is in progress!')
                                    "
                                >
                                    <svgo-interaction-share
                                        class="w-5 h-5"
                                        :fontControlled="false"
                                    />
                                </UButton>
                            </UTooltip>
                            <UTooltip text="More options">
                                <UDropdown
                                    :items="configItems"
                                    :popper="{ placement: 'bottom-start' }"
                                    class="dark:bg-slate-900 dark:hover:bg-slate-800 p-2 rounded-md"
                                >
                                    <svgo-header-three-dot-menu
                                        class="h-2 w-2 ml-1 sm:w-4 sm:h-4 cursor-pointer"
                                    />
                                </UDropdown>
                            </UTooltip>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {
    dummySocialMedias,
    dummySidebarChannels,
    dummySliders,
} from '~/data/index.ts';

const route = useRoute();
const colorMode = useColorMode();
const { $locally } = useNuxtApp();
const token = $locally.getItem('token');
const { onShowLoginModal } = defineProps(['onShowLoginModal']);
const isFollowing = ref(false);
const isSubcribing = ref(false);
const isOpen = ref(false);
const isOpenUnsubcribe = ref(false);
const userStore = useUserStore();

const configItems = [
    [
        {
            label: 'Report video',
        },
    ],
];

const onUnfollow = () => {
    isFollowing.value = false;
    isOpen.value = false;
};

const onUnsubcribe = () => {
    isSubcribing.value = false;
    isOpenUnsubcribe.value = false;
};

const onClickFollowButton = () => {
    if (token) {
        isFollowing.value = !isFollowing.value;
        // if (!isFollowing.value) {
        // } else {
        //     isOpen.value = true;
        // }
    } else {
        onShowLoginModal();
    }
};

const onClickSubcribeButton = () => {
    if (token) {
        isSubcribing.value = !isSubcribing.value;
        // if (!isSubcribing.value) {
        // } else {
        //     isOpenUnsubcribe.value = true;
        // }
    } else {
        onShowLoginModal();
    }
};

const user = dummySidebarChannels.find(
    (item) => item.name === route.params.name
);
onMounted(() => {
    const user = dummySidebarChannels.find(
        (item) => item.name === route.params.name
    );
    if (user) {
        userStore.value.name = user.name;
    }
});
</script>
