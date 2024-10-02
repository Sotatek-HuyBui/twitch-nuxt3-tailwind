<template>
    <div class="mt-0 sm:mt-6">
        <div class="flex h-[110px] sm:h-[240px]">
            <div
                class="rounded-md p-1.5 sm:p-4 bg-customPrimary-1 h-full flex flex-col justify-between w-[64px] sm:w-[150px]"
            >
                <p></p>
                <p
                    class="text-white text-[10px] sm:text-[26px] leading-4 sm:leading-8"
                >
                    Featured Clips
                </p>
                <UButton
                    color="white"
                    variant="solid"
                    class="w-[50px] sm:w-[80px] text-[8px] sm:text-[14px] flex justify-center p-1 dark:bg-white dark:text-black"
                    @click="changeActiveTab('4')"
                    >Show All</UButton
                >
            </div>
            <div class="h-full overflow-hidden ml-1 sm:ml-4 flex-1">
                <UCarousel
                    v-slot="{ item }"
                    :items="items"
                    class="rounded-lg flex flex-col"
                    arrows
                >
                    <div class="w-[120px] sm:w-[280px] mr-2">
                        <img
                            :src="item"
                            class="w-full h-[76px] sm:h-[170px] object-cover mr-2 rounded-md"
                            draggable="false"
                        />
                        <div class="mt-1 sm:mt-2 flex">
                            <img
                                :src="item"
                                class="w-[20px] h-[30px] sm:w-[40px] sm:h-[60px] object-cover mr-2 rounded-md"
                            />
                            <div class="flex-1">
                                <div
                                    class="flex justify-between items-center w-full"
                                >
                                    <p
                                        class="text-[8px] sm:text-sm font-medium dark:text-white"
                                    >
                                        10 out of 10
                                    </p>
                                    <UDropdown
                                        :items="videoItems"
                                        :popper="{ placement: 'bottom-start' }"
                                    >
                                        <UTooltip text="More options">
                                            <img
                                                src="~/assets/three-dot-menu.png"
                                                class="w-1.5 h-1.5 sm:w-3 sm:h-3 cursor-pointer"
                                                alt="Three dot menu"
                                            />
                                        </UTooltip>
                                    </UDropdown>
                                </div>
                                <div class="flex items-center">
                                    <p
                                        class="text-[6px] sm:text-[12px] text-gray-500 dark:text-white"
                                    >
                                        Ninja
                                    </p>
                                    <img
                                        src="~/assets/check.png"
                                        class="w-1.5 h-1.5 sm:w-3 sm:h-3 ml-1"
                                    />
                                </div>
                                <p
                                    class="text-[6px] sm:text-[12px] text-gray-500"
                                >
                                    Clip by {{ $route.params.name }}
                                </p>
                            </div>
                        </div>
                    </div>
                </UCarousel>
            </div>
        </div>
        <div class="mt-12">
            <p class="text-[12px] sm:text-[20px] font-medium dark:text-white">
                {{ $route.params.name }}'s recently streamed categories
            </p>
            <div class="flex mt-4">
                <div
                    v-for="item in categories"
                    :key="item.name"
                    class="mr-2 cursor-pointer"
                >
                    <img
                        :src="item.url"
                        class="h-[120px] sm:w-[180px] sm:h-[250px] rounded-md"
                    />
                    <p
                        class="text-[8px] sm:text-[14px] mt-2 dark:text-slate-300"
                    >
                        <b>{{ item.name }}</b>
                    </p>
                </div>
            </div>
        </div>
        <div class="mt-12">
            <p class="text-[12px] sm:text-[20px] font-medium dark:text-white">
                {{ $route.params.name }} suggests these streamers
            </p>
            <div class="flex mt-2 sm:mt-4">
                <div
                    v-for="item in suggestedStreamers"
                    :key="item.name"
                    class="mr-2 cursor-pointer flex flex-col justify-center items-center"
                >
                    <div
                        class="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] flex justify-center items-center p-1 border-2 rounded-full border-slate-600 border-solid"
                    >
                        <img
                            :src="item.url"
                            class="w-full h-full rounded-full"
                        />
                    </div>
                    <p class="mt-0 sm:mt-2">
                        <b
                            class="text-[8px] sm:text-[14px] mt-2 dark:text-white"
                            >{{ item.name }}</b
                        >
                    </p>
                    <p class="text-[6px] sm:text-[12px] text-gray-500">
                        {{ item.active ? 'Online' : 'Offline' }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const items = [
    'https://images.pexels.com/photos/27774130/pexels-photo-27774130/free-photo-of-float.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/27593822/pexels-photo-27593822/free-photo-of-a-woman-is-looking-out-at-the-water-with-birds-flying-around.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3113541/pexels-photo-3113541.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1759409/pexels-photo-1759409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1038935/pexels-photo-1038935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/276374/pexels-photo-276374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

const categories = [
    {
        name: 'Black Myth: Wukong',
        url: 'https://static-cdn.jtvnw.net/ttv-boxart/519291_IGDB-285x380.jpg',
    },
    {
        name: 'Fornite',
        url: 'https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg',
    },
    {
        name: 'Just Chatting',
        url: 'https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg',
    },
];

const suggestedStreamers = [
    {
        name: 'Ja Morant',
        url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/020b2022-5276-4f1b-af73-6eaa6f9d847c-profile_image-300x300.png',
        active: false,
    },
];

const videoItems = [
    [
        {
            label: 'Report video',
        },
    ],
];

const { changeActiveTab } = defineProps(['changeActiveTab']);
</script>
