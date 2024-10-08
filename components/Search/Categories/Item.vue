<template>
    <div
        class="flex mb-4 cursor-pointer"
        @click="
            navigateTo(`/directory/category/${item.name.split(' ').join('-')}`)
        "
    >
        <img :src="item.image" class="w-[120px] h-[240x] object-cover" />
        <div class="flex flex-col justify-center ml-10">
            <p class="font-medium text-[18px]">{{ item.name }}</p>
            <p class="text-gray-600 text-[14px] dark:text-slate-400">
                {{ formatNumber(item.viewers) }} viewers
            </p>
            <div class="flex items-center mt-2">
                <Tag v-for="tag in item.tag" :key="tag.id" :item="tag" />
            </div>
        </div>
    </div>
</template>

<script setup>
const { item } = defineProps(['item']);
const { formatNumber } = useUtils();
</script>
