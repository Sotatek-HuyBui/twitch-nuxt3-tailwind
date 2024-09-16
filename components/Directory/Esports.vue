<template>
    <div>
        <DirectorySectionLive
            header="Pro Players"
            :items="lives"
            :directorySection="directorySection"
        />
        <DirectorySectionLive
            header="Valorant"
            :items="lives"
            :directorySection="directorySection"
        />
        <DirectorySectionLive
            header="CS:GO"
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
