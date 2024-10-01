<template>
    <div class="overflow-y-auto w-full">
        <div
            class="bg-black h-[200px] sm:h-[700px] flex items-center justify-center"
        >
            <!-- <p class="text-white">Currently Offline</p> -->
            <video class="w-full h-full" controls autoplay>
                <source
                    src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                />
                Your browser does not support HTML video.
            </video>
        </div>
        <div class="w-[1200px] mt-10">
            <p class="text-[12px] sm:text-[20px]"><b>About you</b></p>
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
