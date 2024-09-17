<template>
    <div class="flex flex-col items-center">
        <div class="w-[1200px] mb-4">
            <p class="text-[20px]"><b>About Ninja</b></p>
            <div
                class="rounded-md py-4 flex justify-between items-center w-full"
            >
                <div>
                    <p><b>19.1M</b> followers</p>
                    <p>
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
                <img :src="item.image" class="w-full mb-8" />
                <p class="" v-if="index % 2 === 0">
                    {{ item.description }}
                </p>
                <img :src="item.socialImage" class="w-[full] my-4" />
                <p class="" v-if="index % 2 !== 0">
                    {{ item.description }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { dummySocialMedias } from '~/data/index.ts';
</script>
