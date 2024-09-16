<template>
    <div
        class="cursor-pointer mb-4"
        @click="
            navigateTo(`/directory/category/${item.name.split(' ').join('-')}`)
        "
    >
        <img
            class="w-full h-[250px] object-cover mb-2 rounded-md"
            :src="item.image"
        />
        <p class="line-clamp-1 text-[14px] font-medium">{{ item.name }}</p>
        <p class="text-gray-400 text-[12px]">
            {{ item.viewers / 1000 }}K viewers
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
</template>

<script setup lang="ts">
const props = defineProps(['item']);
</script>
