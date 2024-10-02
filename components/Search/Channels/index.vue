<template>
    <div class="w-full">
        <div class="border-b-2 border-gray-100 dark:border-gray-800 pb-4 mb-4">
            <p class="font-medium text-[14px] sm:text-[20px]">Channels</p>
        </div>
        <SearchChannelsItem
            v-for="item in searchedChannels"
            :key="item.id"
            :item="item"
        />
        <UDivider
            class="mt-10 cursor-pointer"
            :label="isShowMore ? 'Show less' : 'Show more'"
            @click="toggleShowMore"
            :ui="{ label: 'text-customPrimary-1 text-[8px] sm:text-[14px]' }"
        />
    </div>
</template>

<script setup>
import { dummySearchedChannels } from '~/data/index.ts';
const isShowMore = ref(false);

const toggleShowMore = () => {
    isShowMore.value = !isShowMore.value;
};

const searchedChannels = computed(() => {
    if (isShowMore.value) return dummySearchedChannels;
    return dummySearchedChannels.slice(0, 2);
});
</script>
