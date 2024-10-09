<template>
    <div>
        <div class="border-b-2 border-gray-100 pb-4 mb-4 dark:border-gray-800">
            <p class="font-medium text-[14px] sm:text-[20px]">Videos</p>
        </div>
        <SearchVideosItem
            v-for="item in searchedVideos"
            :key="item.id"
            :item="item"
        />
        <ShowMore
            v-if="!isShowMore"
            :isShowMore="true"
            :onClickButton="toggleShowMore"
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
