<template>
    <div>
        <DirectorySectionRecommendations
            :key="`DirectorySectionRecommendations-${locale}`"
            :header="$t('Directory.Game.desc1')"
            :items="categories"
        />
        <DirectorySectionLive
            :key="`DirectorySectionLive-${locale}`"
            :header="$t('Directory.Game.desc2')"
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
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();

watch(() => locale.value);
</script>
