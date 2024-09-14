<template>
    <div class="mt-4">
        <p class="text-lg mb-4 font-medium">
            <a href="/" class="text-customPrimary-1">Live channels</a> we think
            you'll like
        </p>
        <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 gap-4"
        >
            <HomeChannelItem
                v-for="(item, index) in channels.slice(0, isShowMore ? 10 : 5)"
                :key="item.id"
                :item="item"
            />
        </div>
        <UDivider
            class="mt-10 cursor-pointer"
            :label="isShowMore ? 'Show less' : 'Show more'"
            @click="toggleShowMore"
        />
    </div>
</template>

<script setup>
const channels = ref([
    {
        id: 1,
        image: 'https://images.pexels.com/photos/7046987/pexels-photo-7046987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        avatar: 'https://images.pexels.com/photos/28114092/pexels-photo-28114092/free-photo-of-meta-gaming.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: 'RERUN: MOUZ vs. Rooster - ESL Pro League Season 20 - Group C',
        description: 'Counter-Strike',
        tag: [
            { id: 1, name: 'English 1' },
            { id: 2, name: 'Fifa' },
        ],
    },
    {
        id: 2,
        avatar: 'https://images.pexels.com/photos/28114092/pexels-photo-28114092/free-photo-of-meta-gaming.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        image: 'https://images.pexels.com/photos/7046987/pexels-photo-7046987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: 'WATCHING DEBATE??! BEGINS+NEWS/REACTS/DRAMA @StarforgeSystems @MadMushroomGG @MythicTalent @OTKnetwork NEW YT@AsmongoldShorts1',
        description: 'Just chatting',
        tag: [
            { id: 1, name: 'English' },
            { id: 2, name: 'Fifa' },
        ],
    },
    {
        id: 3,
        avatar: 'https://images.pexels.com/photos/28114092/pexels-photo-28114092/free-photo-of-meta-gaming.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        image: 'https://images.pexels.com/photos/7046987/pexels-photo-7046987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: '1437 start rank 1 end',
        description: 'Team fighting Tactics',
        tag: [
            { id: 1, name: 'English' },
            { id: 2, name: 'Fifa' },
        ],
    },
    {
        id: 4,
        avatar: 'https://images.pexels.com/photos/28114092/pexels-photo-28114092/free-photo-of-meta-gaming.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        image: 'https://images.pexels.com/photos/7046987/pexels-photo-7046987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: 'Thanos',
        description: 'Dota 4',
        tag: [
            { id: 1, name: 'English' },
            { id: 2, name: 'Fifa' },
        ],
    },
    {
        id: 5,
        avatar: 'https://images.pexels.com/photos/28114092/pexels-photo-28114092/free-photo-of-meta-gaming.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        image: 'https://images.pexels.com/photos/7046987/pexels-photo-7046987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: 'FC Online',
        description: 'FC Online',
        tag: [
            { id: 1, name: 'English' },
            { id: 2, name: 'Fifa' },
        ],
    },
    {
        id: 6,
        avatar: 'https://images.pexels.com/photos/28114092/pexels-photo-28114092/free-photo-of-meta-gaming.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        image: 'https://images.pexels.com/photos/7046987/pexels-photo-7046987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: 'FC Online',
        description: 'FC Online',
        tag: [
            { id: 1, name: 'English' },
            { id: 2, name: 'Fifa' },
        ],
    },
]);

const isShowMore = ref(false);

const toggleShowMore = () => {
    isShowMore.value = !isShowMore.value;
};
</script>
