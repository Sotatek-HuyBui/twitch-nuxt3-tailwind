<script setup lang="ts">
import { useCounterStore } from '~/stores/myStore';
const store = useCounterStore();
</script>

<template>
    <div class="flex-1 p-1 sm:p-4 home-container">
        <HomeSlider />
        <HomeSuggestedChannels />
        <HomeSuggestedCategories />
    </div>
</template>
<style>
@media screen and (max-width: 640px) {
    .home-container {
        margin-left: 20px !important;
    }
}
</style>
