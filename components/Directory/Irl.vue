<template>
    <div>
        <DirectorySectionRecommendations
            header="Recommended IRL Categories"
            :items="categories"
        />
        <DirectorySectionLive
            header="Just Chatting"
            :items="lives"
            :directorySection="directorySection"
        />
        <DirectorySectionLive
            header="ASMR"
            :items="lives"
            :directorySection="directorySection"
        />
        <DirectorySectionLive
            header="Sports"
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
