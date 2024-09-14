<template>
    <div class="mt-6">
        <div class="flex h-[240px]">
            <div
                class="rounded-md p-4 bg-customPrimary-1 h-full flex flex-col justify-between w-[160px]"
            >
                <p></p>
                <p class="text-white text-[26px] leading-8">Featured Clips</p>
                <UButton
                    color="white"
                    variant="solid"
                    icon="i-heroicons-arrow-up-right-16-solid"
                    class="w-[110px]"
                    @click="changeActiveTab"
                    >Show All</UButton
                >N
            </div>
            <div class="h-full overflow-hidden ml-4 flex-1">
                <UCarousel
                    v-slot="{ item }"
                    :items="items"
                    class="rounded-lg flex flex-col"
                    arrows
                >
                    <div class="w-[240px] mr-6">
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
                            <div>
                                <p class="font-medium">10 out of 10</p>
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
        <div class="mt-12">
            <p class="text-[20px] font-medium">
                Ninja's recently streamed Categories
            </p>
            <div class="flex mt-4">
                <div
                    v-for="item in categories"
                    :key="item.name"
                    class="mr-2 cursor-pointer"
                >
                    <img
                        :src="item.url"
                        class="w-[180px] h-[250px] rounded-md"
                    />
                    <p class="mt-2">
                        <b>{{ item.name }}</b>
                    </p>
                </div>
            </div>
        </div>
        <div class="mt-12">
            <p class="text-[20px] font-medium">
                Ninja suggests these streamers
            </p>
            <div class="flex mt-4">
                <div
                    v-for="item in suggestedStreamers"
                    :key="item.name"
                    class="mr-2 cursor-pointer flex flex-col justify-center items-center"
                >
                    <div
                        class="w-[90px] h-[90px] flex justify-center items-center p-1 border-2 rounded-full border-slate-600 border-solid"
                    >
                        <img
                            :src="item.url"
                            class="w-full h-full rounded-full"
                        />
                    </div>
                    <p class="mt-2">
                        <b>{{ item.name }}</b>
                    </p>
                    <p class="text-[12px] text-gray-500">
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

const emits = defineEmits(['change-tab']);

const changeActiveTab = () => {
    console.log(11);
    emits('change-tab', 'Video'); // Emit an event to change the active tab to index 4
};
</script>
