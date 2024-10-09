<template>
    <div class="flex-1 p-1 sm:p-6 home-container">
        <HomeSlider />
        <HomeSuggestedChannels />
        <HomeSuggestedCategories />
        <HomeSuggestedChannels
            :data="dummySuggestedForniteChannels"
            title="Recommended Fornite Channels"
        />
        <HomeSuggestedChannels
            :data="dummySuggestedMinecraftChannels"
            title="Recommended MineCraft Channels"
        />
    </div>
</template>
<style>
@media screen and (max-width: 640px) {
    .home-container {
        margin-left: 20px !important;
    }
}
</style>

<script setup>
import {
    dummySuggestedForniteChannels,
    dummySuggestedMinecraftChannels,
} from '@/data/index.ts';
useHead({
    title: 'Twitch',
});
</script>
