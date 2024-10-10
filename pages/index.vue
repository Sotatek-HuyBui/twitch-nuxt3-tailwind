<template>
    <div class="flex-1 p-1 sm:p-6 home-container">
        <HomeSlider />
        <HomeSuggestedChannels />
        <HomeSuggestedCategories />
        <HomeSuggestedChannels :key="`HomeSuggestedChannels-${forceRenderlocale}`" :data="dummySuggestedForniteChannels"
            :title="$t('Pages.desc1')" />
        <HomeSuggestedChannels :key="`HomeSuggestedChannels222-${forceRenderlocale}`"
            :data="dummySuggestedMinecraftChannels" :title="$t('Pages.desc2')" />
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

import { useI18n } from 'vue-i18n';

useHead({
    title: 'Twitch',
});

const { locale } = useI18n();

const forceRenderlocale = ref(0);

watch(
    () => locale.value,
    (newLocale, oldLocale) => {
        console.log(`Ngôn ngữ đã thay đổi từ ${oldLocale} thành ${newLocale}`);
        forceRenderlocale.value += 1;
    }
);
</script>
