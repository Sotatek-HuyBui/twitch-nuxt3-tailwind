<template>
    <div>
        <p class="text-lg mb-4 font-medium">
            <a href="/" class="text-customPrimary-1">Categories</a> we think
            you'll like
        </p>
        <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-8 gap-1.5"
        >
            <HomeCategoryItem
                v-for="(item, index) in categories"
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
