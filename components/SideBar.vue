<template>
    <div
        class="py-3 sidebar collapsed fixed h-full dark:bg-[#1F1F23] bg-[#EFEFF1]"
        :class="{ expanded: isOpen }"
    >
        <div v-if="token" class="flex items-center justify-between p-2">
            <p
                v-if="isOpen"
                class="font-medium uppercase text-[13px] text-[#0e0e10] dark:text-white"
            >
                {{ $t('For you') }}
            </p>
            <a-tooltip v-if="isOpen" title="Collapse" placement="right">
                <div
                    class="dark:hover:bg-slate-800 hover:bg-slate-200 p-2 rounded-md"
                >
                    <svgo-sidebar-collapse-close @click="toggleSideBar" />
                </div>
            </a-tooltip>
            <a-tooltip v-else title="Collapse" placement="right">
                <div
                    class="dark:hover:bg-slate-800 hover:bg-slate-200 p-2 rounded-md"
                >
                    <svgo-sidebar-collapse-open @click="toggleSideBar" />
                </div>
            </a-tooltip>
        </div>

        <!-- Following channels -->

        <div
            v-if="token && isOpen"
            class="flex items-center p-2"
            :class="{
                'justify-center': !isOpen,
                'justify-between': isOpen,
            }"
        >
            <p
                v-if="isOpen"
                class="font-medium uppercase text-[13px] text-[#0e0e10] dark:text-white"
            >
                {{ $t('Followed channels') }}
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
                    <svgo-sidebar-heart />
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
            <p
                v-if="isOpen"
                class="font-medium uppercase text-[13px] text-[#0e0e10] dark:text-white"
            >
                {{ $t('Recommended Channels') }}
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
                        <svgo-sidebar-collapse-close @click="toggleSideBar" />
                    </div>
                </a-tooltip>
                <a-tooltip v-else title="Collapse" placement="right">
                    <div
                        class="dark:hover:bg-slate-800 hover:bg-slate-200 p-2 rounded-md"
                    >
                        <svgo-sidebar-collapse-open @click="toggleSideBar" />
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
                    <svgo-sidebar-video />
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

onMounted(() => {
    const storedIsOpen = localStorage.getItem('isOpenSideBar');
    isOpen.value = storedIsOpen === 'true' || false;
});

const toggleSideBar = () => {
    isOpen.value = !isOpen.value;
    localStorage.setItem('isOpenSideBar', isOpen.value);
    toggleFromParent();
};
</script>
<style scoped>
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
    transition: all 0.5s ease; /* Smooth transition effect on width change */
}
</style>
