<template>
    <div>
        <div class="px-20 py-10 flex items-center justify-center">
            <div
                class="w-[300px] h-[300px] p-4 bg-slate-100 mr-10 flex flex-col justify-center rounded-md"
            >
                <div class="bg-black px-2 py-[2px] rounded-md w-14 mb-2">
                    <p class="text-white text-[10px]">OFFLINE</p>
                </div>
                <b class="text-[24px] leading-7 mb-10">
                    Ninja made a
                    <span class="text-customPrimary-1">highlight</span> of a
                    recent Fortnite stream
                </b>
                <UButton
                    color="purple"
                    variant="solid"
                    icon="i-heroicons-bell"
                    class="w-[180px]"
                >
                    Turn on notifications
                </UButton>
            </div>
            <div class="w-[500px] h-[300px]">
                <UCarousel
                    v-slot="{ item }"
                    :items="items"
                    :ui="{ item: 'basis-full' }"
                    class="rounded-lg overflow-hidden"
                    draggable
                    indicators
                    @change="onChange"
                >
                    <img
                        :src="item"
                        class="w-full h-[300px] object-cover"
                        draggable="false"
                    />
                </UCarousel>
            </div>
        </div>
        <div class="p-10">
            <div class="flex justify-center items-center">
                <img
                    class="w-20 h-20 object-cover rounded-full"
                    src="https://images.pexels.com/photos/8885380/pexels-photo-8885380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
                <div class="flex-1 ml-4">
                    <div class="flex justify-between items-center">
                        <div class="flex items-center">
                            <p class="text-[24px] font-bold">Ninja</p>
                            <img
                                src="~/assets/check.png"
                                class="w-4 h-4 ml-1"
                            />
                        </div>

                        <div class="flex items-center">
                            <UButton
                                variant="solid"
                                icon="i-heroicons-star"
                                class="bg-customPrimary-1"
                                >Follow</UButton
                            >
                            <UButton
                                color="white"
                                variant="solid"
                                class="mx-3"
                                icon="i-heroicons-pencil-square"
                                >Subcribe</UButton
                            >
                            <UDropdown
                                :items="configItems"
                                :popper="{ placement: 'bottom-start' }"
                            >
                                <img
                                    src="~/assets/three-dot-menu.png"
                                    class="w-4 h-4 cursor-pointer"
                                />
                            </UDropdown>
                        </div>
                    </div>
                    <p class="text-sm">19.1M followers</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const configItems = [
    [
        {
            label: 'Report Channel',
        },
    ],
    [
        {
            label: 'Share',
        },
    ],
];

const items = [
    'https://images.pexels.com/photos/27774130/pexels-photo-27774130/free-photo-of-float.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/27593822/pexels-photo-27593822/free-photo-of-a-woman-is-looking-out-at-the-water-with-birds-flying-around.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3113541/pexels-photo-3113541.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1759409/pexels-photo-1759409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1038935/pexels-photo-1038935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/276374/pexels-photo-276374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

const onChange = (page: number) => {
    console.log('🚀 ~ onSelectPage ~ page:', page);
};
</script>
