<template>
    <div>
        <div class="border-b-2 border-gray-100 pb-4 mb-4 dark:border-gray-800">
            <p class="font-medium text-[14px] sm:text-[20px]">Categories</p>
        </div>
        <SearchCategoriesItem
            v-for="item in searchedCategories"
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
import { dummyCategories } from '~/data/index.ts';
const isShowMore = ref(false);

const toggleShowMore = () => {
    isShowMore.value = !isShowMore.value;
};

const searchedCategories = computed(() => {
    if (isShowMore.value) return dummyCategories;
    return dummyCategories.slice(0, 2);
});
</script>
