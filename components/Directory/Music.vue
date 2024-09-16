<template>
    <div>
        <DirectorySectionLive
            header="DJs"
            :items="lives"
            :directorySection="directorySection"
        />
        <DirectorySectionLive
            header="Techno"
            :items="lives"
            :directorySection="directorySection"
        />
        <DirectorySectionLive
            header="Signing"
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
