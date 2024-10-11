<template>
    <div class="mt-4">
        <p
            v-if="title"
            class="text-[10px] sm:text-lg font-semibold dark:text-white"
        >
            {{ title }}
        </p>
        <p v-else class="text-[10px] sm:text-lg font-semibold dark:text-white">
            <a
                href="/directory/all"
                class="text-customPrimary-2 hover:underline dark:text-customPrimary-0"
                >Live channels</a
            >
            we think you'll like
        </p>
        <div
            class="mt-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-1 sm:gap-4"
        >
            <HomeChannelItem
                v-for="(item, index) in channels.slice(0, isShowMore ? 10 : 5)"
                :key="item.id"
                :item="item"
            />
        </div>
        <ShowMore
            v-if="!isShowMore"
            :isShowMore="!isShowAll"
            :onClickButton="toggleShowMore"
        />

        <div
            v-else
            class="f-full h-[0.5px] bg-slate-200 dark:bg-[#272727] mt-2 mb-6"
        ></div>
    </div>
</template>

<script setup>
import { dummySuggestedChannels } from '@/data/index.ts';
const { data, title, isShowAll } = defineProps(['data', 'title', 'isShowAll']);
const channels = ref(data || dummySuggestedChannels);

const isShowMore = ref(false);

const toggleShowMore = () => {
    if (isShowAll) {
        message.info('Function is in progress!');
    } else {
        isShowMore.value = !isShowMore.value;
    }
};
</script>
