<template>
    <div class="w-full -z-50">
        <div
            class="bg-black h-[200px] sm:h-[400px] xl:h-[500px] 2xl:h-[700px] flex items-center justify-center w-full"
        >
            <!-- <p class="text-white">Currently Offline</p> -->
            <video
                class="w-full h-full object-cover"
                :poster="dummySliders[0].thumb"
                controls
                autoplay
            >
                <source :src="dummySliders[0].sources[0]" />
                Your browser does not support HTML video.
            </video>
        </div>
        <ProfileInteractionBar :onShowLoginModal="onShowLoginModal" />
        <div class="mt-10 overflow-x-hidden">
            <div class="flex items-center">
                <p class="text-[12px] sm:text-[20px]">
                    <b>About {{ $route.params.name }}</b>
                </p>
                <img
                    src="~/assets/checklist-purple.png"
                    class="w-2 h-2 sm:w-4 sm:h-4 ml-2"
                />
            </div>
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
            <div class="flex mb-4">
                <a
                    v-for="(item, index) in dummySocialMedias"
                    :key="index"
                    :href="item.url"
                    class="flex items-center mr-3"
                >
                    <img
                        :src="item.image"
                        class="w-4 h-4 mr-1 object-cover rounded-full"
                    />
                    <p class="text-[8px] sm:text-sm">{{ item.name }}</p>
                </a>
            </div>
        </div>
        <div
            class="mt-2 sm:mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 w-full"
        >
            <a
                href="https://www.youtube.com/watch?v=sC1_7GDADRU&list=RDsC1_7GDADRU&start_radio=1"
                target="_blank"
                v-for="(item, index) in dummySocialMedias"
                :key="index"
                class="cursor-pointer"
            >
                <img :src="item.image" class="w-full mb-4 sm:mb-8" />
                <p class="text-[8px] sm:text-[14px]" v-if="index % 2 === 0">
                    {{ item.description }}
                </p>
                <img :src="item.socialImage" class="w-[full] my-2 sm:my-4" />
                <p class="text-[8px] sm:text-[14px]" v-if="index % 2 !== 0">
                    {{ item.description }}
                </p>
            </a>
        </div>
    </div>
</template>

<script setup>
import { dummySliders, dummySocialMedias } from '~/data/index.ts';

const { onShowLoginModal } = defineProps(['onShowLoginModal']);
</script>
