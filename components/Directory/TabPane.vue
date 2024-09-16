<template>
    <div class="mt-6">
        <a-tabs v-model:activeKey="activeKey">
            <a-tab-pane key="1">
                <template #tab>
                    <p class="text-[16px]">Categories</p>
                </template>
                <DirectoryTabFilter :activeTab="activeKey" />
                <div
                    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-8 gap-1.5"
                >
                    <HomeCategoryItem
                        v-for="(item, index) in categories"
                        :key="item.id"
                        :item="item"
                    />
                </div>
            </a-tab-pane>
            <a-tab-pane key="2"
                ><template #tab>
                    <p class="text-[16px]">Live Channels</p>
                </template>
                <DirectoryTabFilter :activeTab="activeKey" />
                <div
                    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 gap-4"
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

<script setup lang="ts">
import { dummyCategories, dummySuggestedChannels } from '@/data/index.ts';
const activeKey = ref('1');
const categories = ref(dummyCategories);
const channels = ref(dummySuggestedChannels);
</script>
