<template>
    <div v-if="item.isMe" class="flex items-center mb-2 justify-end">
        <p class="text-[12px] text-customPrimary-1 object-cover">
            {{ item.message }}
        </p>
        <img :src="item.avatar" class="w-8 h-8 rounded-full ml-2" />
    </div>
    <div v-else class="flex items-center mb-2">
        <img
            :src="item.avatar"
            class="w-8 h-8 rounded-full mr-2 object-cover"
        />
        <p class="text-[12px]">{{ item.message }}</p>
    </div>
</template>

<script setup>
const { item } = defineProps(['item']);
</script>
