<template>
    <div class="mt-6">
        <a-tabs v-model:activeKey="activeKey" class="w-full">
            <a-tab-pane v-for="item in tabs" :key="item.key"
                ><template #tab>
                    <p
                        class="text-[8px] sm:text-[16px]"
                        @click="onClickTab(item)"
                    >
                        {{ item.label }}
                    </p>
                </template>
                <DirectoryTabFilter :activeTab="activeKey" />
                <div
                    v-if="item.key === '2'"
                    class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-1 sm:gap-4"
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
                <div
                    v-else
                    class="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-10 gap-1 sm:gap-2"
                >
                    <HomeCategoryItem
                        v-for="(item, index) in categories"
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

const route = useRoute();
const activeKey = ref(route.params?.directory === 'all' ? '2' : '1');
const categories = ref(dummyCategories);
const channels = ref(dummySuggestedChannels);

console.log(route.params);

const tabs = [
    {
        key: '1',
        label: 'Categories',
    },
    {
        key: '2',
        label: 'Live Channels',
    },
];

const onClickTab = (item) => {
    if (item.key === '2') {
        navigateTo('/directory/all');
    } else {
        navigateTo('/directory');
    }
};
</script>
<style scoped>
.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn p {
    /* color: #9147ff !important; */
    font-weight: 500;
}
</style>
