<template>
    <div class="mt-4">
        <p
            class="text-[10px] mb-2 sm:text-lg sm:mb-4 font-medium dark:text-white"
        >
            <a href="/" class="text-customPrimary-1">Live channels</a> we think
            you'll like
        </p>
        <div
            class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-1 sm:gap-4"
        >
            <HomeChannelItem
                v-for="(item, index) in channels.slice(0, isShowMore ? 10 : 5)"
                :key="item.id"
                :item="item"
            />
        </div>
        <UDivider
            class="mt-4 sm:mt-10 cursor-pointer"
            :label="isShowMore ? 'Show less' : 'Show more'"
            @click="toggleShowMore"
            :ui="{ label: 'text-customPrimary-1 text-[8px] sm:text-[14px]' }"
        />
    </div>
</template>

<script setup>
import { dummySuggestedChannels } from '@/data/index.ts';
const channels = ref(dummySuggestedChannels);

const isShowMore = ref(false);

const toggleShowMore = () => {
    isShowMore.value = !isShowMore.value;
};
</script>
