<template>
    <div>
        <p
            class="text-[24px] sm:text-[54px] font-bold capitalize mb-[10px] font-special leading-[65px] text-[#0E0E10] dark:text-[#EFEFF1]"
        >
            {{ $route.params.directory || 'Browse' }}
        </p>
        <p
            class="text-[12px] sm:text-[24px] text-[#53535f] dark:text-[#adadb8] mb-4 font-special font-semibold leading-[29px]"
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
const categories = ref([
    {
        label: 'Games',
        path: 'games',
        img: 'https://static-cdn.jtvnw.net/c3-vg/verticals/gaming.svg',
    },
    {
        label: 'IRL',
        path: 'irl',
        img: 'https://static-cdn.jtvnw.net/c3-vg/verticals/irl.svg',
    },
    {
        label: 'Music & DJs',
        path: 'music & DJs',
        img: 'https://static-cdn.jtvnw.net/c3-vg/verticals/music.svg',
    },
    {
        label: 'Creative',
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
            return 'Live streams of all your favorite games, from shooters to platformers and everything in between!';

        case 'irl':
            return 'The home for everything from working out to exploring the world to chatting and beyond!';

        case 'music-&-DJs':
            return 'Your favorite DJs, live artist performances, music production, and special events!';

        case 'creative':
            return 'A place to share creativity through painting, cooking, programming, and more!';

        case 'esports':
            return 'Live tournaments, match highlights, and your favorite pro players all in one place!';

        default:
            return '';
            break;
    }
};
</script>
