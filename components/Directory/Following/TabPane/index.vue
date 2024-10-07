<template>
    <div>
        <a-tabs v-model:activeKey="activeKey">
            <a-tab-pane v-for="item in tabs" :key="item.key"
                ><template #tab>
                    <p class="text-[8px] sm:text-[16px] dakr:text-white">
                        {{ item.label }}
                    </p>
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

<style scoped>
.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn p {
    /* color: #9147ff !important; */
}

.ant-tabs .ant-tabs-ink-bar {
    position: absolute !important;
    background-color: #b05050 !important;
    pointer-events: none;
}
</style>
