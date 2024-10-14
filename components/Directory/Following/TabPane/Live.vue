<template>
    <div>
        <p class="font-medium text-[12px] sm:text-[18px] mb-2 dark:text-white">
            {{ $t('Live channels') }}
        </p>
        <div class="flex">
            <div
                v-for="item in items"
                :key="item.name"
                class="mr-2 py-2 px-1 sm:p-4 border-[1px] border-gray-200 rounded-md sm:w-[250px] pb-2 sm:pb-6 dark:border-slate-800"
            >
                <img
                    :src="item.image"
                    class="w-[30px] h-[30px] sm:w-[100px] sm:h-[100px] object-cover"
                />
                <p
                    class="font-medium text-[12px] sm:text-[18px] mx-1 sm:mx-2 mt-1 sm:mt-2 dark:text-white"
                >
                    {{ item.name }}
                </p>
                <p
                    class="text-slate-500 mt-1 sm:mt-2 text-[6px] sm:text-[14px]"
                >
                    {{ item.description }}
                </p>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();
const items = computed(() => [
    {
        image: 'https://assets.twitch.tv/assets/follow-c22fbebf35e27ad73776.svg',
        name: t('Directory.Following.desc2'),
        description: t('Directory.Following.desc5'),
    },
    {
        image: 'https://assets.twitch.tv/assets/notification-06539816563ad315e881.svg',
        name: t('Directory.Following.desc6'),
        description: t('Directory.Following.desc7'),
    },
    {
        image: 'https://assets.twitch.tv/assets/channel-ec8dce84cd76c2c37224.svg',
        name: t('Directory.Following.desc8'),
        description: t('Directory.Following.desc9'),
    },
]);

</script>
