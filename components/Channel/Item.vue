<template>
    <UTooltip
        text="Description will be displayed here!"
        :popper="{ arrow: true, placement: 'right' }"
    >
        <div
            class="flex justify-between p-1 mb-1 sm:px-1.5 sm:py-1 items-center cursor-pointer w-full hover:bg-[#f4f4f4] dark:hover:bg-[#2a2a2a]"
            @click="goToDetailPage(item?.name)"
        >
            <img
                :src="item.avatar"
                class="w-5 h-5 sm:w-8 sm:h-8 cursor-pointer rounded-full object-cover"
                :alt="item.name"
            />
            <div v-if="isOpen" class="flex-1 ms-2">
                <p class="text-xs font-medium">{{ item.name }}</p>
                <p class="text-xs text-slate-400">{{ item.description }}</p>
            </div>
            <div v-if="isOpen" class="flex items-center">
                <div
                    v-if="item.active"
                    class="rounded-full bg-[red] w-2 h-2 mr-1"
                ></div>
                <p class="text-xs">
                    {{ formatNumber(item?.followers / 1000) }}K
                </p>
            </div>
        </div>
    </UTooltip>
</template>
<script setup lang="ts">
const props = defineProps(['item', 'isOpen']);
const { formatNumber } = useUtils();

const goToDetailPage = (name: string) => {
    navigateTo(`/${name}`);
};
</script>
