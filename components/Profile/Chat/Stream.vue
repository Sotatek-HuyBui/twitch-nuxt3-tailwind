<template>
    <div class="w-full -z-50">
        <div
            class="bg-black h-[200px] sm:h-[700px] flex items-center justify-center w-full"
        >
            <!-- <p class="text-white">Currently Offline</p> -->
            <video class="w-full h-full" controls autoplay>
                <source
                    src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                />
                Your browser does not support HTML video.
            </video>
        </div>
        <div class="p-2 sm:p-10">
            <div class="flex justify-center items-center">
                <img
                    class="w-6 h-6 sm:w-20 sm:h-20 object-cover rounded-full"
                    src="https://images.pexels.com/photos/8885380/pexels-photo-8885380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
                <div class="flex-1 ml-4">
                    <div class="flex justify-between items-center">
                        <div class="flex items-center">
                            <p class="text-[12px] sm:text-[24px] font-bold">
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
                                        isFollowing &&
                                        colorMode.value === 'light'
                                    "
                                    src="@/assets/notification-bell.png"
                                    class="w-3 h-3 sm:w-5 sm:h-4 object-cover"
                                />
                                <img
                                    v-if="
                                        !isFollowing &&
                                        colorMode.value === 'light'
                                    "
                                    src="@/assets/bell.png"
                                    class="w-3 h-3 sm:w-4 sm:h-4 object-cover"
                                />
                                <img
                                    v-if="
                                        isFollowing &&
                                        colorMode.value === 'dark'
                                    "
                                    src="@/assets/notification-bell-white.png"
                                    class="w-3 h-3 sm:w-4 sm:h-4 object-cover"
                                />
                                <img
                                    v-if="
                                        !isFollowing &&
                                        colorMode.value === 'dark'
                                    "
                                    src="@/assets/bell-white.png"
                                    class="w-3 h-3 sm:w-4 sm:h-4 object-cover"
                                />
                            </div>
                            <UButton
                                @click="onClickFollowingButton"
                                variant="solid"
                                size="2xs"
                                icon="i-heroicons-star"
                                class="dark:text-white text-[6px] sm:text-[14px] sm:py-2 sm:w-[100px] w-[60px] bg-customPrimary-1 hover:bg-customPrimary-2 flex justify-center"
                                >Follow</UButton
                            >
                            <UButton
                                @click="onClickSubcribeButton"
                                color="white"
                                size="2xs"
                                variant="solid"
                                class="text-[6px] sm:text-[14px] sm:py-2 ml-2 flex justify-cente"
                                icon="i-heroicons-pencil-square"
                                >Subcribe</UButton
                            >
                            <UDropdown
                                :items="configItems"
                                :popper="{ placement: 'bottom-start' }"
                            >
                                <img
                                    src="~/assets/three-dot-menu.png"
                                    class="h-2 w-2 ml-1 sm:w-4 sm:h-4 cursor-pointer"
                                />
                            </UDropdown>
                        </div>
                    </div>
                    <p class="text-[8px] sm:text-sm">19.1M followers</p>
                </div>
            </div>
        </div>
        <div class="w-[1200px] mt-10">
            <p class="text-[12px] sm:text-[20px]">
                <b>About {{ $route.params.name }}</b>
            </p>
            <div
                class="rounded-md py-2 sm:py-4 flex justify-between items-center w-full"
            >
                <div>
                    <p class="text-[10px] sm:text-[14px]">
                        <b>19.1M</b> followers
                    </p>
                    <p class="text-[10px] sm:text-[14px]">
                        Ninja streams EVERYWHERE. Co-Founder @DrinkNutcase. CIO
                        @GameSquare $GAMEJust launched a BRAND NEW PODCAST AFK
                        W/ NINJA
                    </p>
                </div>
            </div>
        </div>
        <div
            class="mt-2 sm:mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 w-full"
        >
            <div v-for="(item, index) in dummySocialMedias" :key="index">
                <img :src="item.image" class="w-full mb-4 sm:mb-8" />
                <p class="text-[8px] sm:text-[14px]" v-if="index % 2 === 0">
                    {{ item.description }}
                </p>
                <img :src="item.socialImage" class="w-[full] my-2 sm:my-4" />
                <p class="text-[8px] sm:text-[14px]" v-if="index % 2 !== 0">
                    {{ item.description }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { dummySocialMedias } from '~/data/index.ts';
</script>
