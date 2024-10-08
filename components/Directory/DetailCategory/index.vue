<template>
    <div>
        <div class="flex">
            <img
                :src="targetCategory.image"
                class="w-[80px] h-[110px] sm:w-[150px] sm:h-[200px] mr-4 sm:mr-8"
            />
            <div class="flex flex-col justify-center">
                <p class="font-semibold text-[18px] sm:text-[34px]">
                    {{ targetCategory.name }}
                </p>
                <div class="flex items-center">
                    <p class="text-[8px] sm:text-[14px]">
                        <span class="font-medium"
                            >{{ targetCategory.viewers }}K</span
                        >
                        Viewers
                    </p>
                    <div
                        class="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-black mx-1 sm:mx-3"
                    />
                    <p class="text-[8px] sm:text-[14px]">
                        <span class="font-medium"
                            >{{ targetCategory.followers }}K</span
                        >
                        Followers
                    </p>
                    <div
                        class="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-black mx-1 sm:mx-3"
                    />
                    <div class="flex items-center ml-2">
                        <Tag
                            v-for="tag in targetCategory.tag"
                            :key="tag.id"
                            :item="tag"
                        />
                    </div>
                </div>
                <p
                    v-if="targetCategory.description.length >= 150"
                    class="text-[8px] sm:text-[14px] text-slate-700 mt-2 w-[500px] cursor-pointer dark:text-slate-400"
                >
                    {{ targetCategory.description.slice(0, 150) }}...
                    <!-- <span
                        class="text-customPrimary-1 hover:underline dark:text-customPrimary-0"
                        >More</span
                    > -->
                </p>
                <p
                    v-else
                    class="text-[8px] sm:text-[14px] text-slate-700 mt-2 w-[500px]"
                >
                    {{ targetCategory.description }}
                </p>
                <UButton
                    variant="solid"
                    class="bg-customPrimary-1 dark:bg-customPrimary-1 text-white w-[70px] sm:w-[90px] mt-6 text-[8px] sm:text-[14px] flex justify-center p-1 dark:text-white"
                    icon="i-heroicons-heart"
                    @click="onFollow"
                    >Follow</UButton
                >
            </div>
        </div>
        <DirectoryDetailCategoryTabPane />
    </div>
</template>

<script setup>
import { dummyCategories } from '@/data/index.ts';

const route = useRoute();

const targetCategory = dummyCategories.find(
    (item) => item.name === route.params.live.split('-').join(' ')
);

const onFollow = () => {
    message.info('Function is in progress!');
};
</script>
