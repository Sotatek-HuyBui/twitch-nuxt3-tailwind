<template>
    <div>
        <div class="border-b-2 border-gray-100 pb-4 mb-4">
            <p class="font-medium text-[14px] sm:text-[20px]">Videos</p>
        </div>
        <SearchVideosItem
            v-for="item in searchedVideos"
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
import { dummySearchedVideos } from '~/data/index.ts';
const isShowMore = ref(false);

const toggleShowMore = () => {
    isShowMore.value = !isShowMore.value;
};

const searchedVideos = computed(() => {
    if (isShowMore.value) return dummySearchedVideos;
    return dummySearchedVideos.slice(0, 2);
});
</script>
