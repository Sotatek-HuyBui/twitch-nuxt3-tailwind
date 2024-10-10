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

<script setup lang="ts">
const activeKey = ref('overview');
import { useI18n } from 'vue-i18n'; 

const { t, locale } = useI18n(); 
const tabs =  computed(() => [
    {
        key: 'overview',
        label: t('Directory.Following.desc1'),
    },
    {
        key: 'live',
        label: t('LIVE'),
    },
    {
        key: 'videos',
        label: 'Videos',
    },
    {
        key: 'categories',
        label: t('Directory.Following.desc3'),
    },
    {
        key: 'channels',
        label: t('Directory.Following.desc4'),
    },
]);
const changeLanguage = (newLocale: string) => {
    locale.value = newLocale;}
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
