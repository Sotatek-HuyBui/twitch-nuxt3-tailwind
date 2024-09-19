<template>
    <div class="flex mb-4">
        <img :src="item.image" class="w-[120px] h-[240x] object-cover" />
        <div class="flex flex-col justify-center ml-10">
            <p class="font-medium text-[18px]">{{ item.name }}</p>
            <p class="text-gray-600 text-[14px]">
                {{ formatNumber(item.viewers) }} viewers
            </p>
            <div class="flex items-center mt-2">
                <div
                    v-for="tag in item.tag"
                    :key="item.id"
                    class="py-0.5 px-2 rounded-full bg-slate-200 mr-2"
                >
                    <p class="text-[11px]">{{ tag.name }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { item } = defineProps(['item']);
const { formatNumber } = useUtils();
</script>
