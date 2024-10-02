<template>
    <div class="flex mb-8 w-[100%]">
        <img
            :src="item.avatar"
            class="w-[50px] h-[50px] sm:w-[120px] sm:h-[120px] rounded-full mr-4 sm:mr-6 border-2 cursor-pointer dark:border-gray-800"
        />
        <div class="w-[100%] sm:w-[50%] overflow-hidden">
            <div class="flex justify-between items-center">
                <p
                    class="text-[18px] font-medium hover:text-customPrimary-1 cursor-pointer"
                    @click="navigateTo(`/${item.name}`)"
                >
                    {{ item.name }}
                </p>
                <UButton
                    variant="solid"
                    icon="i-heroicons-heart"
                    class="bg-customPrimary-1 hover:bg-customPrimary-2 text-[10px] sm:text-[14px]"
                    @click="onClickButton"
                    >Follow</UButton
                >
            </div>
            <p
                class="text-[10px] sm:text-sm text-gray-500 mb-2 sm:mb-4 dark:text-slate-400"
            >
                {{ formatNumber(item.followers) }} follwers
            </p>
            <p
                class="text-[8px] sm:text-sm text-gray-500 mb-2 sm:mb-6 dark:text-slate-400"
            >
                {{ item.description }}
            </p>
            <div v-if="item.latestVideos.length > 0" class="mb-6">
                <p
                    class="text-[10px] sm:text-sm text-gray-700 mb-2 dark:text-slate-500"
                >
                    Latest from {{ item.name }}
                </p>
                <div class="flex">
                    <div
                        v-for="video in item.latestVideos"
                        class="mr-4 cursor-pointer"
                        @click="() => navigateTo(`/${item.name}/chats`)"
                    >
                        <img :src="video.image" class="w-[100px] h-[70x]" />
                        <div
                            class="border-[1px] border-gray-300 border-t-0 py-1 rounded-bl-md rounded-br-md dark:border-gray-800"
                        >
                            <p class="text-center text-[10px] sm:text-[12px]">
                                {{ video.name }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="item?.nextStream?.time">
                <p
                    class="text-[10px] sm:text-sm text-gray-700 mb-2 dark:text-slate-500"
                >
                    Next stream
                </p>
                <div class="flex">
                    <div
                        class="border-[1px] border-gray-200 rounded-md p-2 min-w-[300px] dark:border-gray-800"
                    >
                        <p class="text-[10px] sm:text-[14px]">
                            {{ item.nextStream.date }}
                        </p>
                        <p class="text-[10px] sm:text-[14px]">
                            {{ item.nextStream.time }}
                        </p>
                        <p class="text-sm text-gray-500 mb-2">
                            {{ item.nextStream.name }}
                        </p>
                        <UButton
                            type="submit"
                            class="bg-gray-200 items-center justify-center text-black hover:bg-gray-300 text-[10px] sm:text-[14px]"
                            icon="i-heroicons-bell"
                            @click="onClickButton"
                        >
                            Remind me
                        </UButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { item } = defineProps(['item']);
const { formatNumber } = useUtils();

const onClickButton = () => {
    message.info('Function is in progress!');
};
</script>
