<template>
    <div class="mt-6">
        <a-tabs v-model:activeKey="activeKey">
            <a-tab-pane v-for="item in tabs" :key="item.key">
                <template #tab>
                    <p class="text-[10px] sm:text-[16px]">{{ item.name }}</p>
                </template>
                <DirectoryDetailCategoryFilter :activeTab="activeKey" />
                <div
                    class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-1 sm:gap-4"
                >
                    <HomeChannelItem
                        v-for="(item, index) in channels.slice(
                            0,
                            isShowMore ? 10 : 5
                        )"
                        :key="item.id"
                        :item="item"
                    />
                </div>
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script setup>
import { dummyCategories, dummySuggestedChannels } from '@/data/index.ts';
const activeKey = ref('1');
const categories = ref(dummyCategories);
const channels = ref(dummySuggestedChannels);

const tabs = [
    {
        key: '1',
        name: 'Live channels',
    },
    {
        key: '2',
        name: 'Videos',
    },
    {
        key: '3',
        name: 'Clips',
    },
];
</script>
