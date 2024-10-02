<template>
    <div class="flex flex-col items-center">
        <div class="sm:w-[1200px] mb-4">
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
                <!-- <div>
                    <div v-for="item in socialMedias" class="flex">
                        <a
                            :href="item.url"
                            target="_blank"
                            class="hover:text-green-400"
                            >{{ item.name }}</a
                        >
                    </div>
                </div> -->
            </div>
        </div>
        <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 w-full"
        >
            <div v-for="(item, index) in dummySocialMedias" :key="index">
                <img :src="item.image" class="w-full mb-4 sm:mb-8" />
                <p
                    class="text-[8px] sm:text-[14px] dark:text-slate-300"
                    v-if="index % 2 === 0"
                >
                    {{ item.description }}
                </p>
                <img :src="item.socialImage" class="w-[full] my-2 sm:my-4" />
                <p
                    class="text-[8px] sm:text-[14px] dark:text-slate-300"
                    v-if="index % 2 !== 0"
                >
                    {{ item.description }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { dummySocialMedias } from '~/data/index.ts';
</script>
