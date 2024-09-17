<template>
    <div class="mt-6">
        <div class="mb-6 flex items-center justify-between">
            <div v-if="queries?.filter" class="flex items-center">
                <p class="font-medium mr-2">Filtered by</p>
                <USelect
                    v-model="selectedOption"
                    :options="options"
                    placeholder="Options"
                    class="mr-2"
                    option-attribute="name"
                />
                <UInput
                    variant="outline"
                    placeholder="Type to search.."
                    class="border-black"
                />
            </div>
            <div class="flex items-center">
                <p class="font-medium mr-2">Sorted by</p>
                <USelect
                    v-model="selectedOption"
                    :options="options"
                    placeholder="Options"
                    class="mr-2"
                    option-attribute="name"
                />
            </div>
        </div>
        <div v-if="!queries?.filter" class="flex h-[240px]">
            <div
                class="rounded-md p-4 bg-customPrimary-1 h-full flex flex-col justify-between w-[150px]"
            >
                <p></p>
                <p class="text-white text-[26px] leading-8">Featured Clips</p>
                <UButton
                    color="white"
                    variant="solid"
                    class="w-[80px]"
                    @click="showAll"
                    >Show All</UButton
                >
            </div>
            <div class="h-full overflow-hidden ml-4 flex-1">
                <UCarousel
                    v-slot="{ item }"
                    :items="items"
                    class="rounded-lg flex flex-col"
                    arrows
                >
                    <div class="w-[280px] mr-2">
                        <img
                            :src="item"
                            class="w-full h-[170px] object-cover mr-2 rounded-md"
                            draggable="false"
                        />
                        <div class="mt-2 flex">
                            <img
                                :src="item"
                                class="w-[40px] h-[60px] object-cover mr-2 rounded-md"
                            />
                            <div class="flex-1">
                                <div
                                    class="flex justify-between items-center w-full"
                                >
                                    <p class="font-medium">10 out of 10</p>
                                    <UDropdown
                                        :items="videoItems"
                                        :popper="{ placement: 'bottom-start' }"
                                    >
                                        <UTooltip text="More options">
                                            <img
                                                src="~/assets/three-dot-menu.png"
                                                class="w-3 h-3 cursor-pointer"
                                                alt="Three dot menu"
                                            />
                                        </UTooltip>
                                    </UDropdown>
                                </div>
                                <div class="flex items-center">
                                    <p class="text-[12px] text-gray-500">
                                        Ninja
                                    </p>
                                    <img
                                        src="~/assets/check.png"
                                        class="w-3 h-3 ml-1"
                                    />
                                </div>
                                <p class="text-[12px] text-gray-500">
                                    Clip by Ja Morant
                                </p>
                            </div>
                        </div>
                    </div>
                </UCarousel>
            </div>
        </div>
        <DirectorySectionLive
            header="Art"
            :items="dummySuggestedChannels"
            :isFromVideoTab="true"
            v-if="!queries?.filter"
        />
        <div
            v-else
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 gap-4"
        >
            <HomeChannelItem
                v-for="(item, index) in dummySuggestedChannels"
                :key="item.id"
                :item="item"
            />
        </div>
    </div>
</template>

<script setup>
import { dummySuggestedChannels } from '@/data/index.ts';

const items = [
    'https://images.pexels.com/photos/27774130/pexels-photo-27774130/free-photo-of-float.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/27593822/pexels-photo-27593822/free-photo-of-a-woman-is-looking-out-at-the-water-with-birds-flying-around.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3113541/pexels-photo-3113541.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1759409/pexels-photo-1759409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1038935/pexels-photo-1038935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/276374/pexels-photo-276374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

const videoItems = [
    [
        {
            label: 'Report video',
        },
    ],
];

const options = [
    {
        name: 'Past Broadcats',
        value: 1,
    },
    {
        name: 'Highlights',
        value: 2,
    },
    {
        name: 'Clips',
        value: 3,
    },
    {
        name: 'Uploads',
        value: 4,
    },
];
const route = useRoute();

const { changeActiveTab } = defineProps(['changeActiveTab']);
const selectedOption = ref(1);
const queries = ref();

const showAll = () => {
    navigateTo({
        path: route.path,
        query: { featured: 'true', filter: 'clips', range: 'all' },
    });
};

watch(
    () => route.query,
    (newQuery) => {
        queries.value = newQuery;
    }
);
</script>
