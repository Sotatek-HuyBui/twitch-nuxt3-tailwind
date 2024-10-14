<template>
    <div>
        <DirectorySectionLive
            :key="`DirectorySectionLive-${locale}`"
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
watch(
    () => locale.value,
    (newLocale, oldLocale) => {
        locale.value += 1;
    }
);
</script>
