<template>
    <div>
        <DirectorySectionRecommendations
            :key="`DirectorySectionRecommendations-${forceRenderlocale}`"
            :header="$t('Directory.Creative.desc1')"
            :items="categories"
        />
        <DirectorySectionLive
            :key="`DirectorySectionLive-${forceRenderlocale}`"
            :header="$t('Directory.Creative.desc2')"
            :items="lives"
            :directorySection="directorySection"
        />
        <DirectorySectionLive
            :key="`DirectorySectionLive-${forceRenderlocale}`"
            h
            :header="$t('Directory.Creative.desc3')"
            :items="lives"
            :directorySection="directorySection"
        />
        <DirectorySectionLive
            :key="`DirectorySectionLive-${forceRenderlocale}`"
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

const forceRenderlocale = ref(0);

watch(
    () => locale.value,
    (newLocale, oldLocale) => {
        console.log(`Ngôn ngữ đã thay đổi từ ${oldLocale} thành ${newLocale}`);
        forceRenderlocale.value += 1;
    }
);
</script>
