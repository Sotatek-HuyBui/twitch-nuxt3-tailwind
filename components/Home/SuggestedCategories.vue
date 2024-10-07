<template>
    <div class="mt-4 sm:mt-0">
        <p class="text-[10px] mb-2 sm:text-lg sm:mb-4 font-medium">
            <a
                href="/directory"
                class="text-customPrimary-2 hover:underline dark:text-customPrimary-0"
                >Categories</a
            >
            we think you'll like
        </p>
        <div
            class="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-10 gap-1 sm:gap-2"
        >
            <HomeCategoryItem
                v-for="(item, index) in categories.slice(0, 6)"
                :key="item.id"
                :item="item"
            />
        </div>
    </div>
</template>

<script setup>
import { dummyCategories } from '@/data/index.ts';
const categories = ref(dummyCategories);
</script>
