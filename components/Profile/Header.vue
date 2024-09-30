<template>
    <div>
        <div
            class="py-10 flex sm:items-center sm:justify-center flex-col-reverse sm:flex-row"
        >
            <div
                class="w-[100%] h-[100px] sm:w-[300px] sm:h-[300px] p-4 bg-slate-100 mr-6 flex flex-col justify-center rounded-md"
            >
                <div
                    class="bg-black px-2 py-[2px] rounded-md w-10 sm:w-14 mb-2"
                >
                    <p class="text-white text-[6px] sm:text-[10px]">OFFLINE</p>
                </div>
                <b
                    class="text-[10px] leading-4 sm:text-[24px] sm:leading-7 mb-2 sm:mb-10"
                >
                    Ninja made a
                    <span class="text-customPrimary-1">highlight</span> of a
                    recent Fortnite stream
                </b>
                <UButton
                    color="purple"
                    variant="solid"
                    icon="i-heroicons-bell"
                    class="text-[8px] py-1 sm:text-[14px] sm:py-3 sm:w-[180px] w-[130px]"
                >
                    Turn on notifications
                </UButton>
            </div>
            <div
                class="w-[100%] h-[150px] sm:w-[500px] sm:h-[300px] sm:mb-0 mb-2"
            >
                <UCarousel
                    v-slot="{ item }"
                    :items="items"
                    :ui="{ item: 'basis-full' }"
                    class="rounded-md overflow-hidden"
                    draggable
                    @change="onChange"
                >
                    <img
                        :src="item"
                        class="w-full h-[150px] sm:h-[300px] object-cover"
                        draggable="false"
                    />
                </UCarousel>
            </div>
        </div>
        <div class="p-2 sm:p-10">
            <div class="flex justify-center items-center">
                <img
                    class="w-6 h-6 sm:w-20 sm:h-20 object-cover rounded-full"
                    src="https://images.pexels.com/photos/8885380/pexels-photo-8885380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
                <div class="flex-1 ml-4">
                    <div class="flex justify-between items-center">
                        <div class="flex items-center">
                            <p class="text-[12px] sm:text-[24px] font-bold">
                                Ninja
                            </p>
                            <img
                                src="~/assets/check.png"
                                class="w-2 h-2 sm:w-4 sm:h-4 ml-1"
                            />
                        </div>

                        <div class="flex items-center">
                            <UButton
                                variant="solid"
                                size="2xs"
                                icon="i-heroicons-star"
                                class="text-[6px] sm:text-[14px] sm:py-2 sm:w-[100px] w-[60px] bg-customPrimary-1 flex justify-center"
                                >Follow</UButton
                            >
                            <UButton
                                color="white"
                                size="2xs"
                                variant="solid"
                                class="text-[6px] sm:text-[14px] sm:py-2 ml-2 flex justify-cente"
                                icon="i-heroicons-pencil-square"
                                >Subcribe</UButton
                            >
                            <UDropdown
                                :items="configItems"
                                :popper="{ placement: 'bottom-start' }"
                            >
                                <img
                                    src="~/assets/three-dot-menu.png"
                                    class="h-2 w-2 ml-1 sm:w-4 sm:h-4 cursor-pointer"
                                />
                            </UDropdown>
                        </div>
                    </div>
                    <p class="text-[8px] sm:text-sm">19.1M followers</p>
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
