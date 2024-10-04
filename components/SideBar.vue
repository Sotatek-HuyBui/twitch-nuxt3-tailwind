<template>
    <div
        class="p-1 sidebar collapsed fixed h-full dark:bg-[#1c1c1c]"
        :class="{ expanded: isOpen }"
    >
        <div
            class="flex items-center p-2"
            :class="{
                'justify-center': !isOpen,
                'justify-between': isOpen,
            }"
        >
            <p v-if="isOpen" class="font-medium">Recommnded Channels</p>
            <UTooltip
                v-if="isOpen"
                text="Collapse"
                :popper="{ arrow: true, placement: 'bottom' }"
                class="z-50"
            >
                <img
                    v-if="
                        colorMode.value === 'light' ||
                        colorMode.value === 'system'
                    "
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
            </UTooltip>
            <UTooltip
                v-if="!isOpen"
                text="Collapse"
                :popper="{ arrow: true, placement: 'bottom' }"
            >
                <img
                    v-if="
                        colorMode.value === 'light' ||
                        colorMode.value === 'system'
                    "
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
            </UTooltip>
        </div>
        <div class="flex flex-col">
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
import { dummySidebarChannels } from '@/data/index.ts';
const channels = ref(dummySidebarChannels);

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
