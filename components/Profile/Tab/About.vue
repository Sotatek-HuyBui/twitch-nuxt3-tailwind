<template>
    <div class="">
        <div class="mb-4">
            <p class="text-[14px] sm:text-[20px] dark:text-white">
                <b>About {{ $route.params.name }}</b>
            </p>
            <div
                class="rounded-md py-2 sm:py-4 flex justify-between items-center w-full"
            >
                <div>
                    <p class="text-[10px] sm:text-[14px] dark:text-slate-300">
                        <b>19.1M</b> followers
                    </p>
                    <p class="text-[10px] sm:text-[14px] dark:text-slate-300">
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
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 w-full"
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
import { dummySocialMedias } from '~/data/index.ts';
</script>
