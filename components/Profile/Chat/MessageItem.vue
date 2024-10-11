<template>
    <div class="relative">
        <!-- <div
            v-if="item.isMe"
            class="flex items-center mb-1 justify-end hover:bg-slate-50 cursor-pointer dark:hover:bg-slate-800 rounded-md p-1"
            @click="onToggleShowDetail(item.id)"
        >
            <p
                class="text-[12px] text-customPrimary-1 object-cover dark:text-fuchsia-400"
            >
                {{ item.message }}
            </p>
            <img :src="item.avatar" class="w-8 h-8 rounded-full ml-2" />
        </div> -->
        <div
            class="flex items-center mb-1 hover:bg-[#F2F2F2] cursor-pointer dark:hover:bg-[#3D3D40] py-1 px-2 rounded-md"
            @click="onToggleShowDetail(item.id)"
        >
            <!-- <img
                :src="item.avatar"
                class="w-8 h-8 rounded-full mr-2 object-cover"
            /> -->
            <p class="text-[14px]">
                <span
                    class="font-medium text-customPrimary-1"
                    :style="{ color: randomColor }"
                    >{{ item?.isMe ? username : item.sender.name }}</span
                >: {{ item.message }}
            </p>
        </div>
        <div
            v-if="item.isShowingDetail"
            class="z-2 absolute w-full top-8 left-0 right-0 rounded-md bg-slate-200 shadow-md z-10 dark:bg-slate-800"
        >
            <div class="relative w-full h-[60px]">
                <img
                    class="w-full h-full object-cover rounded-t-md"
                    :src="item.sender.background_image"
                />
                <div class="flex absolute left-2 top-2 right-2">
                    <img
                        class="w-10 h-10 rounded-full mr-2 object-cover"
                        :src="item.avatar"
                    />
                    <div class="flex justify-between flex-1">
                        <p class="text-white">
                            {{ item?.isMe ? username : item.sender.name }}
                        </p>
                        <img
                            src="~/assets/close-white.png"
                            class="w-4 h-4 mr-2 cursor-pointer"
                            @click="onCloseShowingDetail"
                        />
                    </div>
                </div>
            </div>
            <div class="bg-white p-2 rounded-b-md dark:bg-slate-800">
                <p class="text-sm mb-3 font-medium">BADGES</p>
                <div class="flex">
                    <div v-for="badge in item.sender.badges">
                        <UTooltip
                            :text="badge.name"
                            :popper="{
                                arrow: true,
                                placement: 'top',
                            }"
                        >
                            <div
                                class="flex items-center justify-center p-1 border border-slate-200 mr-1 rounded-md"
                            >
                                <img :src="badge.icon" class="w-5 h-5" />
                            </div>
                        </UTooltip>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { $locally } = useNuxtApp();
const username = $locally.getItem('username');
const { item, onToggleShowDetail } = defineProps([
    'item',
    'onToggleShowDetail',
    'onCloseShowingDetail',
]);

const colors = [
    '#8A2BE2',
    '#3CB371',
    '#FF4500',
    '#4169E1',
    '#FF1493',
    '#00FFFF',
    '#DC143C',
    '#8B008B',
    '#DAA520',
    '#FFD700',
];

const randomIndex = Math.floor(Math.random() * colors.length);
const randomColor = colors[randomIndex];
</script>
