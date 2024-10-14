<template>
    <div>
        <DirectorySectionRecommendations
            :key="`DirectorySectionRecommendations-${locale}`"
            :header="$t('Directory.Creative.desc1')"
            :items="categories"
        />
        <DirectorySectionLive
            :key="`DirectorySectionLive-${locale}`"
            :header="$t('Directory.Creative.desc2')"
            :items="lives"
            :directorySection="directorySection"
        />
        <DirectorySectionLive
            :header="$t('Directory.Creative.desc3')"
            :items="lives"
            :directorySection="directorySection"
        />
        <DirectorySectionLive
            :key="`DirectorySectionLive-${locale}`"
            :header="$t('Directory.Creative.desc4')"
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
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();

watch(
    () => locale.value,
    (newLocale, oldLocale) => {
        
    }
);
</script>
