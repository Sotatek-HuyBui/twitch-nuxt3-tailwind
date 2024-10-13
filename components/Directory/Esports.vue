<template>
    <div>
        <DirectorySectionLive
            :key="`DirectorySectionLive-${forceRenderlocale}`"
            :header="$t('Directory.Esports.desc1')"
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
