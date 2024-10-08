<template>
    <div class="mt-4">
        <p
            v-if="title"
            class="text-[10px] mb-2 sm:text-lg sm:mb-4 font-medium dark:text-white"
        >
            {{ title }}
        </p>
        <p
            v-else
            class="text-[10px] mb-2 sm:text-lg sm:mb-4 font-medium dark:text-white"
        >
            <a
                href="/directory/all"
                class="text-customPrimary-2 hover:underline dark:text-customPrimary-0"
                >Live channels</a
            >
            we think you'll like
        </p>
        <div
            class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-1 sm:gap-4"
        >
            <HomeChannelItem
                v-for="(item, index) in channels.slice(0, isShowMore ? 10 : 5)"
                :key="item.id"
                :item="item"
            />
        </div>
        <UDivider
            v-if="!isShowMore"
            class="mt-4 sm:mt-10 cursor-pointer"
            @click="toggleShowMore"
        >
            <UButton
                type="submit"
                class="bg-white shadow-none outline-none hover:text-black hover:bg-[#dedee0] items-center justify-center text-customPrimary-1 dark:text-customPrimary-0 dark:bg-[#121212] dark:hover:text-white dark:hover:bg-[#333338]"
                @click="message.info('Function is in progress!')"
            >
                {{ isShowMore ? 'Show less' : 'Show more' }}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="m19 9l-7 6l-7-6"
                    ></path>
                </svg>
            </UButton>
        </UDivider>
        <div
            v-else
            class="f-full h-[0.5px] bg-slate-200 dark:bg-[#272727] mt-2 mb-6"
        ></div>
    </div>
</template>

<script setup>
import { dummySuggestedChannels } from '@/data/index.ts';
const { data, title } = defineProps(['data', 'title']);
const channels = ref(data || dummySuggestedChannels);

const isShowMore = ref(false);

const toggleShowMore = () => {
    isShowMore.value = !isShowMore.value;
};
</script>
