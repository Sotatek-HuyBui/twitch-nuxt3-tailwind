<template>
    <div class="flex mb-8 w-full">
        <img
            :src="item.avatar"
            class="w-[120px] h-[120px] rounded-full mr-6 border-2 cursor-pointer"
        />
        <div class="w-[50%]">
            <div class="flex justify-between items-center flex-1">
                <p
                    class="text-[18px] font-medium hover:text-customPrimary-1 cursor-pointer"
                >
                    {{ item.name }}
                </p>
                <UButton
                    variant="solid"
                    icon="i-heroicons-heart"
                    class="bg-customPrimary-1 hover:bg-customPrimary-2"
                    >Follow</UButton
                >
            </div>
            <p class="text-sm text-gray-500 mb-4">
                {{ formatNumber(item.followers) }} follwers
            </p>
            <p class="text-sm text-gray-500 mb-6">
                {{ item.description }}
            </p>
            <div v-if="item.latestVideos.length > 0" class="mb-6">
                <p class="text-sm text-gray-700 mb-2">
                    Latest from {{ item.name }}
                </p>
                <div class="flex">
                    <div
                        v-for="video in item.latestVideos"
                        class="mr-4 cursor-pointer"
                    >
                        <img :src="video.image" class="w-[100px] h-[70x]" />
                        <div
                            class="border-[1px] border-gray-300 border-t-0 py-1 rounded-bl-md rounded-br-md"
                        >
                            <p class="text-center text-[12px]">
                                {{ video.name }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="item?.nextStream?.time">
                <p class="text-sm text-gray-700 mb-2">Next stream</p>
                <div class="flex">
                    <div
                        class="border-[1px] border-gray-200 rounded-md p-2 min-w-[300px]"
                    >
                        <p class="text-[14px]">{{ item.nextStream.date }}</p>
                        <p class="text-[14px]">{{ item.nextStream.time }}</p>
                        <p class="text-sm text-gray-500 mb-2">
                            {{ item.nextStream.name }}
                        </p>
                        <UButton
                            type="submit"
                            class="bg-gray-200 items-center justify-center text-black hover:bg-gray-300"
                            icon="i-heroicons-bell"
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
</script>
