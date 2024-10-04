<template>
    <div>
        <p class="mt-6 text-[10px] sm:text-[18px] font-medium mb-1">
            {{ header || 'Default Items' }}
        </p>
        <div
            class="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-1 sm:gap-1.5"
        >
            <HomeCategoryItem
                v-for="(item, index) in items"
                :key="item.id"
                :item="item"
            />
        </div>
    </div>
</template>

<script setup>
const { header, items } = defineProps(['header', 'items']);
</script>
