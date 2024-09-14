<script setup lang="ts">
import { useCounterStore } from '~/stores/myStore';
const store = useCounterStore();
</script>

<template>
    <div class="flex-1 p-4">
        <HomeSlider />
        <HomeSuggestedChannels />
        <HomeSuggestedCategories />
    </div>
</template>
