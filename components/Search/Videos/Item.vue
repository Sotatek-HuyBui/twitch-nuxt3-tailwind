<template>
    <div class="flex mb-4">
        <img
            :src="item.image"
            class="w-[200px] h-[100px] mr-2 object-cover rounded-md"
        />
        <div>
            <p class="font-medium text-[18px]">{{ item.name }}</p>
            <p class="text-[14px] text-gray-700">{{ item.description }}</p>
            <div class="flex items-center">
                <p class="text-[14px] text-gray-700">{{ item.views }} views</p>
                <div class="w-1 h-1 rounded-full bg-slate-400 mx-2" />
                <p class="text-[14px] text-gray-700">{{ item.date }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const { item } = defineProps(['item']);
</script>
