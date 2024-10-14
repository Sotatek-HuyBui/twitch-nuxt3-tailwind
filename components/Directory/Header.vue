<template>
    <div>
        <p
            class="text-[24px] sm:text-[54px] font-bold capitalize m-0 font-special"
        >
            {{ $t('Browse') }}
        </p>
        <p
            class="text-[12px] sm:text-[24px] text-[#53535f] dark:text-[#adadb8] mb-4 font-special"
        >
            {{ renderDescription() }}
        </p>
        <div
            class="mt-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-col-6 2xl:grid-col-6 gap-1 sm:gap-1.5"
        >
            <template v-for="(item, index) in categories" :key="index">
                <div
                    v-if="currentDirectoryPath === item.path"
                    class="border-2 border-black p-0.5 rounded-md dark:border-slate-300"
                >
                    <div
                        class="bg-customPrimary-2 rounded-md flex px-1 sm:px-4 py-[1px] sm:py-1 w-full justify-between items-center relative hover:bg-customPrimary-1 cursor-pointer"
                        @click="goToDirectoryPath(item?.path)"
                    >
                        <p
                            class="text-white text-[12px] sm:text-[23px] font-medium"
                        >
                            {{ item.label }}
                        </p>
                        <img
                            :src="item.img"
                            class="w-7 h-7 sm:w-14 sm:h-14 absolute z-1 right-1"
                        />
                    </div>
                </div>
                <div
                    v-else
                    class="bg-customPrimary-2 rounded-md flex px-1 sm:px-2 py-[1px] sm:py-1 w-full justify-between items-center relative hover:bg-customPrimary-1 cursor-pointer"
                    @click="goToDirectoryPath(item?.path)"
                >
                    <p
                        class="text-white text-[12px] sm:text-[23px] font-medium"
                    >
                        {{ item.label }}
                    </p>
                    <img
                        :src="item.img"
                        class="w-7 h-7 sm:w-14 sm:h-14 absolute z-1 right-1"
                    />
                </div>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();
const categories = computed(() => [
    {
        label: t('Games'),
        path: 'games',
        img: 'https://static-cdn.jtvnw.net/c3-vg/verticals/gaming.svg',
    },
    {
        label: t('IRL'),
        path: 'irl',
        img: 'https://static-cdn.jtvnw.net/c3-vg/verticals/irl.svg',
    },
    {
        label: t('Music & DJs'),
        path: 'music & DJs',
        img: 'https://static-cdn.jtvnw.net/c3-vg/verticals/music.svg',
    },
    {
        label: t('Creative'),
        path: 'creative',
        img: 'https://static-cdn.jtvnw.net/c3-vg/verticals/creative.svg',
    },
    {
        label: 'Esports',
        path: 'esports',
        img: 'https://static-cdn.jtvnw.net/c3-vg/verticals/esports.svg',
    },
]);

const goToDirectoryPath = (path: string) => {
    navigateTo(`/directory/${path.split(' ').join('-')}`);
};

const { currentDirectoryPath } = defineProps(['currentDirectoryPath']);

const renderDescription = () => {
    switch (currentDirectoryPath) {
        case 'games':
            return t('Directory.Header.desc1');

        case 'irl':
            return t('Directory.Header.desc2');

        case 'music-&-DJs':
            return t('Directory.Header.desc3');

        case 'creative':
            return t('Directory.Header.desc4');

        case 'esports':
            return t('Directory.Header.desc5');

        default:
            return '';
            break;
    }
};
</script>
