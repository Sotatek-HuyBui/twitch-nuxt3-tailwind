<template>
    <div>
        <DirectorySectionRecommendations :key="`DirectorySectionRecommendations-${forceRenderlocale}`"
            :header="$t('Directory.Game.desc1')" :items="categories" />
        <DirectorySectionLive :key="`DirectorySectionLive-${forceRenderlocale}`" :header="$t('Directory.Game.desc2')"
            :items="lives" />
        <DirectorySectionLive header="Party & Social Games" :items="lives" />
        <DirectorySectionLive header="MOBA Games" :items="lives" />
    </div>
</template>

<script setup>
import { dummyCategories, dummySuggestedChannels } from '@/data/index.ts';

const categories = ref(dummyCategories);
const lives = ref(dummySuggestedChannels);
import { useI18n } from 'vue-i18n';
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
