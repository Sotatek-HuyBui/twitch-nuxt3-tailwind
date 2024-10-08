<template>
    <a-tooltip placement="right">
        <template #title>
            <span v-if="!isOpen" class="text-customPrimary-0"
                >{{ item.name }} . {{ item.description }} <br
            /></span>
            {{ item.tooltip }}
        </template>
        <div
            class="flex justify-between p-1 mb-1 sm:px-1.5 sm:py-1 items-center cursor-pointer w-full hover:bg-[#f4f4f4] dark:hover:bg-[#2a2a2a]"
            @click="goToDetailPage(item?.name, item.active)"
        >
            <img
                :src="item.avatar"
                class="w-5 h-5 sm:w-8 sm:h-8 cursor-pointer rounded-full object-cover"
                :alt="item.name"
                :class="{
                    grayscale: !item.active,
                }"
            />
            <div v-if="isOpen" class="flex-1 ms-2">
                <p class="text-xs font-medium">{{ item.name }}</p>
                <p v-if="item.active" class="text-xs text-slate-400">
                    {{ item.description }}
                </p>
            </div>
            <div v-if="isOpen && item.active" class="flex items-center">
                <div class="rounded-full bg-[red] w-2 h-2 mr-1"></div>
                <p class="text-xs">{{ item?.followers }}K</p>
            </div>
            <div v-if="isOpen && !item.active" class="flex items-center">
                <p class="text-[12px] text-slate-700 dark:text-slate-400">
                    Offline
                </p>
            </div>
        </div>
    </a-tooltip>
</template>
<script setup lang="ts">
const props = defineProps(['item', 'isOpen']);
const { formatNumber } = useUtils();

const goToDetailPage = (name: string, active: boolean) => {
    if (active) {
        navigateTo(`/${name}/chats`);
    } else {
        navigateTo(`/${name}`);
    }
};
</script>
