<template>
    <div>
        <DirectorySectionRecommendations
            header="Recommended Creative Categories"
            :items="categories"
        />
        <DirectorySectionLive
            header="Art"
            :items="lives"
            :directorySection="directorySection"
        />
        <DirectorySectionLive
            header="Markers and Crafting"
            :items="lives"
            :directorySection="directorySection"
        />
        <DirectorySectionLive
            header="Software and Game Developments"
            :items="lives"
            :directorySection="directorySection"
        />
    </div>
</template>

<script setup>
import { dummyCategories, dummySuggestedChannels } from '@/data/index.ts';

const categories = ref(dummyCategories);
const lives = ref(dummySuggestedChannels);
const directorySection = defineProps(['directorySection']);
</script>
