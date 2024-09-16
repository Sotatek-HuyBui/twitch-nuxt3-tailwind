<template>
    <div>
        <p class="mt-6 text-[18px] font-medium mb-1">
            {{ header || 'Default Items' }}
        </p>
        <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 2xl:grid-cols-10 gap-2"
        >
            <HomeCategoryItem
                v-for="(item, index) in items.slice(0, 6)"
                :key="item.id"
                :item="item"
            />
        </div>
    </div>
</template>

<script setup>
const { header, items } = defineProps(['header', 'items']);
</script>
