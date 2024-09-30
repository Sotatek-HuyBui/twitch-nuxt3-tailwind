<template>
    <div>
        <a-tabs v-model:activeKey="activeKey">
            <a-tab-pane v-for="item in tabs" :key="item.key"
                ><template #tab>
                    <p class="text-[8px] sm:text-[16px]">{{ item.label }}</p>
                </template>
                <DirectoryFollowingTabPaneOverview
                    v-if="item.key === 'overview'"
                />
                <DirectoryFollowingTabPaneLive v-if="item.key === 'live'" />
                <DirectoryFollowingTabPaneVideo v-if="item.key === 'videos'" />
                <DirectoryFollowingTabPaneCategories
                    v-if="item.key === 'categories'"
                />
                <DirectoryFollowingTabPaneChannels
                    v-if="item.key === 'channels'"
                />
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script setup>
const activeKey = ref('overview');

const tabs = [
    {
        key: 'overview',
        label: 'Overview',
    },
    {
        key: 'live',
        label: 'Live',
    },
    {
        key: 'videos',
        label: 'Videos',
    },
    {
        key: 'categories',
        label: 'Categories',
    },
    {
        key: 'channels',
        label: 'Channels',
    },
];
</script>
