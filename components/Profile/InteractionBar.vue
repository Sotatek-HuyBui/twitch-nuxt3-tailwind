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
            <div class="w-6 h-6 sm:w-20 sm:h-20 relative">
                <img
                    class="object-cover rounded-full w-full h-full"
                    :src="user.avatar"
                />
                <div
                    v-if="$route.params.tab === 'chats'"
                    class="flex items-center justify-center bg-red-600 px-1 absolute bottom-[-10px] rounded-md w-6 sm:w-12 left-4"
                >
                    <p class="text-white text-sm font-medium m-0">Live</p>
                </div>
            </div>
            <div class="flex-1 ml-4">
                <div class="flex justify-between items-center">
                    <div class="flex items-center">
                        <p
                            class="text-[12px] sm:text-[24px] font-bold cursor-pointer"
                            @click="navigateTo(`/${$route.params.name}`)"
                        >
                            {{ $route.params.name }}
                        </p>
                        <img
                            src="~/assets/check.png"
                            class="w-2 h-2 sm:w-4 sm:h-4 ml-1"
                        />
                    </div>

                    <div class="flex items-center">
                        <div
                            v-if="token"
                            class="flex items-center justify-center p-1 sm:p-2 dark:bg-slate-700 bg-slate-200 rounded-md mr-2 cursor-pointer hover:bg-slate-300"
                            @click="onClickNotifyButton"
                        >
                            <img
                                v-if="
                                    isFollowing && colorMode.value === 'light'
                                "
                                src="@/assets/notification-bell.png"
                                class="w-3 h-3 sm:w-5 sm:h-4 object-cover"
                            />
                            <img
                                v-if="
                                    !isFollowing && colorMode.value === 'light'
                                "
                                src="@/assets/bell.png"
                                class="w-3 h-3 sm:w-4 sm:h-4 object-cover"
                            />
                            <img
                                v-if="isFollowing && colorMode.value === 'dark'"
                                src="@/assets/notification-bell-white.png"
                                class="w-3 h-3 sm:w-4 sm:h-4 object-cover"
                            />
                            <img
                                v-if="
                                    !isFollowing && colorMode.value === 'dark'
                                "
                                src="@/assets/bell-white.png"
                                class="w-3 h-3 sm:w-4 sm:h-4 object-cover"
                            />
                        </div>
                        <UButton
                            v-if="!isFollowing"
                            @click="onClickFollowButton"
                            variant="solid"
                            size="2xs"
                            icon="i-heroicons-star"
                            class="dark:text-white text-[6px] sm:text-[12px] sm:py-2 sm:w-[80px] w-[60px] bg-customPrimary-1 hover:bg-customPrimary-2 flex justify-center"
                            >Follow</UButton
                        >
                        <UButton
                            v-else
                            @click="onClickFollowButton"
                            variant="solid"
                            size="2xs"
                            icon="ic:outline-favorite"
                            class="dark:text-white text-[6px] sm:text-[14px] sm:py-2 w-[40px] bg-customPrimary-1 hover:bg-customPrimary-2 flex justify-center"
                        ></UButton>
                        <UButton
                            v-if="!isSubcribing"
                            @click="onClickSubcribeButton"
                            color="white"
                            size="2xs"
                            variant="solid"
                            class="text-[6px] sm:text-[12px] sm:py-2 ml-2 flex justify-center"
                            icon="i-heroicons-pencil-square"
                            >Subcribe</UButton
                        >
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
                                <img
                                    v-if="colorMode.value !== 'dark'"
                                    src="~/assets/three-dot-menu.png"
                                    class="h-2 w-2 ml-1 sm:w-4 sm:h-4 cursor-pointer"
                                />
                                <img
                                    v-else
                                    src="~/assets/three-dots-menu-white.png"
                                    class="h-2 w-2 ml-1 sm:w-4 sm:h-4 cursor-pointer"
                                />
                            </UDropdown>
                        </UTooltip>
                    </div>
                </div>
                <div>
                    <p
                        v-if="$route.params.tab === 'chats'"
                        class="text-[8px] sm:text-sm font-medium mt-2"
                    >
                        {{ user.tooltip }}
                    </p>
                    <p v-else class="text-[8px] sm:text-sm">
                        {{ user.followers }} followers
                    </p>
                    <div
                        v-if="$route.params.tab === 'chats'"
                        class="flex items-center mt-3 justify-between"
                    >
                        <div class="flex items-center">
                            <p
                                class="text-[8px] sm:text-sm text-customPrimary-1"
                            >
                                {{ user.description }}
                            </p>
                            <div class="flex items-center ml-2">
                                <div
                                    v-for="tag in user.badges"
                                    :key="tag"
                                    @click="
                                        navigateTo(
                                            `/directory/all/tags?tag=${tag.name
                                                .split(' ')
                                                .join('-')}`
                                        )
                                    "
                                    class="cursor-pointer py-0.5 px-2 rounded-full bg-slate-200 mr-1 dark:bg-slate-700"
                                >
                                    <p
                                        class="text-[8px] sm:text-[10px] dark:text-white font-medium"
                                    >
                                        {{ tag.name }}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <p class="text-[8px] sm:text-sm mr-2">
                                {{ user.followers }} followers
                            </p>
                            <UTooltip text="Share">
                                <UButton
                                    type="submit"
                                    class="bg-slate-400 items-center justify-center hover:bg-customPrimary-2 dark:text-white"
                                    icon="ph:upload-simple-fill"
                                    @click="
                                        message.info('Function is in progress!')
                                    "
                                >
                                </UButton>
                            </UTooltip>
                            <UTooltip text="More options">
                                <UDropdown
                                    :items="configItems"
                                    :popper="{ placement: 'bottom-start' }"
                                >
                                    <img
                                        v-if="colorMode.value !== 'dark'"
                                        src="~/assets/three-dot-menu.png"
                                        class="h-2 w-2 ml-1 sm:w-4 sm:h-4 cursor-pointer"
                                    />
                                    <img
                                        v-else
                                        src="~/assets/three-dots-menu-white.png"
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
        if (!isFollowing.value) {
            isFollowing.value = !isFollowing.value;
        } else {
            isOpen.value = true;
        }
    } else {
        onShowLoginModal();
    }
};

const onClickSubcribeButton = () => {
    if (token) {
        if (!isSubcribing.value) {
            isSubcribing.value = !isSubcribing.value;
        } else {
            isOpenUnsubcribe.value = true;
        }
    } else {
        onShowLoginModal();
    }
};

const user = dummySidebarChannels.find(
    (item) => item.name === route.params.name
);
</script>
