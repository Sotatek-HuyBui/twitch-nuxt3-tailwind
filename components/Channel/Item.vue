<template>
    <a-tooltip placement="right">
        <template #title>
            <span
                v-if="!isOpen"
                class="text-customPrimary-1 dark:text-customPrimary-0"
                >{{ item.name }} . {{ item.description }} <br
            /></span>
            {{ item.tooltip }}
        </template>
        <div
            class="flex justify-between p-1 sm:px-1.5 sm:py-1 items-center cursor-pointer w-full hover:bg-[#E6E6EA] dark:hover:bg-[#26262C]"
            @click="goToDetailPage(item?.name, item.active)"
        >
            <div :class="{ 'flex justify-center w-full': !isOpen }">
                <img
                    :src="item.avatar"
                    class="w-5 h-5 sm:w-[30px] sm:h-[30px] cursor-pointer rounded-full object-cover"
                    :alt="item.name"
                    :class="{
                        grayscale: !item.active,
                    }"
                />
            </div>
            <div v-if="isOpen" class="flex-1 ms-2">
                <div class="flex justify-between">
                    <p
                        class="text-[14px] font-medium text-[#1f1f23] dark:text-[#dedee3]"
                    >
                        {{ item.name }}
                    </p>
                    <div v-if="isOpen && item.active" class="flex items-center">
                        <div class="rounded-full bg-[red] w-2 h-2 mr-1"></div>
                        <p class="text-[13px]">
                            {{ reformatNumber(item?.followers) }}
                        </p>
                    </div>
                    <div
                        v-if="isOpen && !item.active"
                        class="flex items-center"
                    >
                        <p
                            class="text-[12px] text-slate-700 dark:text-slate-400"
                        >
                            Offline
                        </p>
                    </div>
                </div>
                <p
                    v-if="item.active"
                    class="text-[14px] text-[#4a4a55] dark:text-[#adadb8] font-light mt-[-4px]"
                >
                    {{ item.description }}
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
