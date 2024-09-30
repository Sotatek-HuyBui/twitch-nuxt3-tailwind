<template>
    <div>
        <p class="font-medium text-[12px] sm:text-[18px] mb-2">Live channels</p>
        <div class="flex">
            <div
                v-for="item in items"
                :key="item.name"
                class="mr-2 py-2 px-1 sm:p-4 border-[1px] border-gray-200 rounded-md flex-1 sm:w-[250px] pb-2 sm:pb-6"
            >
                <img
                    :src="item.image"
                    class="w-[30px] h-[30px] sm:w-[100px] sm:h-[100px] object-cover"
                />
                <p
                    class="font-medium text-[12px] sm:text-[18px] mx-1 sm:mx-2 mt-1 sm:mt-2"
                >
                    {{ item.name }}
                </p>
                <p
                    class="text-slate-500 mt-1 sm:mt-2 text-[6px] sm:text-[14px]"
                >
                    {{ item.description }}
                </p>
            </div>
        </div>
    </div>
</template>
<script setup>
const items = [
    {
        image: 'https://assets.twitch.tv/assets/follow-c22fbebf35e27ad73776.svg',
        name: 'Follow',
        description: 'Enjoying a channel? Follow it!',
    },
    {
        image: 'https://assets.twitch.tv/assets/notification-06539816563ad315e881.svg',
        name: 'Get Notified',
        description: "We'll let you know when it goes live.",
    },
    {
        image: 'https://assets.twitch.tv/assets/channel-ec8dce84cd76c2c37224.svg',
        name: 'Watch',
        description: 'Come back and catch the live action.',
    },
];
</script>
