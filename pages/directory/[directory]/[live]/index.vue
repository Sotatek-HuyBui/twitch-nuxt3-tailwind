<template>
    <div class="p-4">
        <div v-if="$route.params.directory === 'all'">
            <DirectoryHeader />
            <DirectoryTabPane />
        </div>
        <div v-else-if="$route.params.directory !== 'category'">
            <p class="font-semibold text-[14px] sm:text-[30px] mb-10">
                {{ $route.params.live }}
            </p>
            <div
                class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-1 sm:gap-4"
            >
                <HomeChannelItem
                    v-for="(item, index) in channels"
                    :key="item.id"
                    :item="item"
                />
            </div>
        </div>

        <div v-else>
            <DirectoryDetailCategory />
        </div>
    </div>
</template>

<script setup>
import { dummySuggestedChannels } from '@/data/index.ts';
const channels = ref(dummySuggestedChannels);
</script>
