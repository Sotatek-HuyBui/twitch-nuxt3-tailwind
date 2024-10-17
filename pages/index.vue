<template>
    <div class="flex-1 p-1 sm:p-6 home-container">
        <HomeSlider />
        <HomeSuggestedChannels />
        <HomeSuggestedCategories />
        <HomeSuggestedChannels
            :key="`HomeSuggestedChannels-${locale}`"
            :data="dummySuggestedForniteChannels"
            :title="$t('Pages.desc1')"
        />
        <HomeSuggestedChannels
            :key="`HomeSuggestedChannels222-${locale}`"
            :data="dummySuggestedMinecraftChannels"
            :title="$t('Pages.desc2')"
        />
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
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();
</script>
