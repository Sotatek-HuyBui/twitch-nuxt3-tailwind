<template>
    <div
        class="cursor-pointer mb-4"
        @click="
            navigateTo(`/directory/category/${item.name.split(' ').join('-')}`)
        "
    >
        <img
            class="w-full h-[120px] sm:h-[250px] object-cover mb-2 rounded-md"
            :src="item.image"
        />
        <p class="line-clamp-1 text-[8px] sm:text-[14px] font-medium">
            {{ item.name }}
        </p>
        <p class="text-gray-400 text-[6px] sm:text-[12px]">
            {{ item.viewers / 1000 }}K viewers
        </p>
        <div class="flex items-center mt-2">
            <div
                v-for="tag in item.tag"
                :key="item.id"
                class="p-1 py-[1px] sm:p-2 rounded-full bg-slate-200 mr-2"
            >
                <p class="text-[6px] sm:text-[11px]">{{ tag.name }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['item']);
</script>
