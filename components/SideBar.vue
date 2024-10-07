<template>
    <div
        class="px-1 py-3 sidebar collapsed fixed h-full dark:bg-[#1c1c1c]"
        :class="{ expanded: isOpen }"
    >
        <div v-if="token" class="flex items-center justify-between p-2">
            <p v-if="isOpen" class="font-medium uppercase text-[14px]">
                For you
            </p>
            <a-tooltip v-if="isOpen" title="Collapse" placement="right">
                <div
                    class="dark:hover:bg-slate-800 hover:bg-slate-200 p-2 rounded-md"
                >
                    <img
                        v-if="colorMode.value !== 'dark'"
                        src="~/assets/collapse-close.png"
                        class="w-4 h-4 cursor-pointer"
                        alt="Collapse"
                        @click="toggleSideBar"
                    />
                    <img
                        v-else
                        src="~/assets/collapse-close-white.png"
                        class="w-4 h-4 cursor-pointer"
                        alt="Collapse"
                        @click="toggleSideBar"
                    />
                </div>
            </a-tooltip>
            <a-tooltip v-else title="Collapse" placement="right">
                <div
                    class="dark:hover:bg-slate-800 hover:bg-slate-200 p-2 rounded-md"
                >
                    <img
                        v-if="colorMode.value !== 'dark'"
                        src="~/assets/collapse-open.png"
                        class="w-4 h-4 cursor-pointer"
                        alt="Collapse"
                        @click="toggleSideBar"
                    />
                    <img
                        v-else
                        src="~/assets/collapse-open-white.png"
                        class="w-4 h-4 cursor-pointer"
                        alt="Collapse"
                        @click="toggleSideBar"
                    />
                </div>
            </a-tooltip>
        </div>

        <!-- Following channels -->

        <div
            v-if="token"
            class="flex items-center p-2"
            :class="{
                'justify-center': !isOpen,
                'justify-between': isOpen,
            }"
        >
            <p v-if="isOpen" class="font-medium uppercase text-[14px]">
                Followed channels
            </p>
        </div>
        <div class="flex flex-col" v-if="token">
            <a-tooltip
                v-if="!isOpen"
                title="Followed Channels"
                placement="right"
            >
                <div
                    class="dark:hover:bg-slate-800 hover:bg-slate-200 py-2 rounded-md flex justify-center items-center mb-2"
                >
                    <img
                        v-if="colorMode.value !== 'dark'"
                        src="~/assets/heart.png"
                        class="w-4 h-4 cursor-pointer"
                        alt="Collapse"
                    />
                    <img
                        v-else
                        src="~/assets/heart-white.png"
                        class="w-4 h-4 cursor-pointer"
                        alt="Collapse"
                    />
                </div>
            </a-tooltip>
            <ChannelItem
                v-for="(item, index) in followedChannels"
                :key="item.id"
                :item="item"
                :isOpen="isOpen"
            />
        </div>

        <!-- Active channels -->
        <div
            class="flex items-center p-2"
            :class="{
                'justify-center': !isOpen,
                'justify-between': isOpen,
            }"
        >
            <p v-if="isOpen" class="font-medium uppercase text-[14px]">
                Recommnded Channels
            </p>
            <div v-if="!token">
                <a-tooltip
                    v-if="isOpen && !token"
                    title="Collapse"
                    placement="right"
                >
                    <div
                        class="dark:hover:bg-slate-800 hover:bg-slate-200 p-2 rounded-md"
                    >
                        <img
                            v-if="colorMode.value !== 'dark'"
                            src="~/assets/collapse-close.png"
                            class="w-4 h-4 cursor-pointer"
                            alt="Collapse"
                            @click="toggleSideBar"
                        />
                        <img
                            v-else
                            src="~/assets/collapse-close-white.png"
                            class="w-4 h-4 cursor-pointer"
                            alt="Collapse"
                            @click="toggleSideBar"
                        />
                    </div>
                </a-tooltip>
                <a-tooltip v-else title="Collapse" placement="right">
                    <div
                        class="dark:hover:bg-slate-800 hover:bg-slate-200 p-2 rounded-md"
                    >
                        <img
                            v-if="colorMode.value !== 'dark'"
                            src="~/assets/collapse-open.png"
                            class="w-4 h-4 cursor-pointer"
                            alt="Collapse"
                            @click="toggleSideBar"
                        />
                        <img
                            v-else
                            src="~/assets/collapse-open-white.png"
                            class="w-4 h-4 cursor-pointer"
                            alt="Collapse"
                            @click="toggleSideBar"
                        />
                    </div>
                </a-tooltip>
            </div>
        </div>
        <div class="flex flex-col">
            <a-tooltip
                v-if="!isOpen"
                title="Recommended Channels"
                placement="right"
            >
                <div
                    class="dark:hover:bg-slate-800 hover:bg-slate-200 py-2 rounded-md flex justify-center items-center mb-2"
                >
                    <img
                        v-if="colorMode.value !== 'dark'"
                        src="~/assets/video-camera.png"
                        class="w-4 h-4 cursor-pointer"
                        alt="Collapse"
                    />
                    <img
                        v-else
                        src="~/assets/video-camera-white.png"
                        class="w-4 h-4 cursor-pointer"
                        alt="Collapse"
                    />
                </div>
            </a-tooltip>
            <ChannelItem
                v-for="(item, index) in channels"
                :key="item.id"
                :item="item"
                :isOpen="isOpen"
            />
        </div>
    </div>
</template>
<script setup>
import { dummySidebarChannels, followedChannels } from '@/data/index.ts';
const channels = ref(dummySidebarChannels);
const { $locally } = useNuxtApp();
const token = $locally.getItem('token');

const isOpen = ref(true);
const { toggleFromParent } = defineProps(['toggleFromParent']);
const colorMode = useColorMode();

const toggleSideBar = () => {
    isOpen.value = !isOpen.value;
    toggleFromParent();
};
</script>
<style>
.collapsed {
    width: 54px !important;
}

.expanded {
    width: 240px !important;
}

.sidebar {
    width: 240px; /* Set the width of the sidebar */
    top: 46px; /* Adjust the top position to accommodate the header */
    left: 0;
    bottom: 0;
    background-color: #623535; /* Sidebar background color */
    transition: all 0.5s ease; /* Smooth transition effect on width change */
}
</style>
