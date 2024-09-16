<template>
    <div>
        <DirectorySectionRecommendations
            header="Recommended Games"
            :items="categories"
        />
        <DirectorySectionLive
            header="Team FPS & Battle Royales"
            :items="lives"
        />
        <DirectorySectionLive header="Party & Social Games" :items="lives" />
        <DirectorySectionLive header="MOBA Games" :items="lives" />
    </div>
</template>

<script setup>
import { dummyCategories, dummySuggestedChannels } from '@/data/index.ts';

const categories = ref(dummyCategories);
const lives = ref(dummySuggestedChannels);
</script>
