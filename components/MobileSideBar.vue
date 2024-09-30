<template>
    <div class="sidebar fixed h-full">
        <div class="flex flex-col items-center">
            <UTooltip
                text="Recommended Channels"
                :popper="{ arrow: true, placement: 'right' }"
            >
                <img
                    src="~/assets/camera.png"
                    class="w-3 h-3 cursor-pointer mt-3"
                    alt="Collapse"
                />
            </UTooltip>
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
</script>
<style>
.sidebar {
    width: 34px; /* Set the width of the sidebar */
    top: 38px; /* Adjust the top position to accommodate the header */
    left: 0;
    bottom: 0;
    background-color: #f8f8f8; /* Sidebar background color */
    transition: all 0.5s ease; /* Smooth transition effect on width change */
}
</style>
