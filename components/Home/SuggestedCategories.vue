<template>
    <div>
        <p class="text-lg mb-4 font-medium">
            <a href="/" class="text-customPrimary-1">Categories</a> we think
            you'll like
        </p>
        <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1.5"
        >
            <HomeCategoryItem
                v-for="(item, index) in categories"
                :key="item.id"
                :item="item"
            />
        </div>
    </div>
</template>

<script setup>
const categories = ref([
    {
        id: 1,
        image: 'https://images.pexels.com/photos/28055801/pexels-photo-28055801/free-photo-of-a-woman-in-a-black-dress-is-standing-in-the-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: 'Just Chatting',
        viewers: 21000,
        tag: [
            { id: 1, name: 'English' },
            { id: 2, name: 'Fifa' },
        ],
    },
    {
        id: 2,
        image: 'https://images.pexels.com/photos/28055801/pexels-photo-28055801/free-photo-of-a-woman-in-a-black-dress-is-standing-in-the-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: 'Leage of Legends',
        viewers: 21000,
        tag: [
            { id: 1, name: 'English' },
            { id: 2, name: 'Fifa' },
        ],
    },
    {
        id: 3,
        image: 'https://images.pexels.com/photos/28055801/pexels-photo-28055801/free-photo-of-a-woman-in-a-black-dress-is-standing-in-the-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: 'Dota 2',
        viewers: 21000,
        tag: [
            { id: 1, name: 'English' },
            { id: 2, name: 'Fifa' },
        ],
    },
    {
        id: 4,
        image: 'https://images.pexels.com/photos/28055801/pexels-photo-28055801/free-photo-of-a-woman-in-a-black-dress-is-standing-in-the-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: 'Deadlock',
        viewers: 21000,
        tag: [
            { id: 1, name: 'English' },
            { id: 2, name: 'Fifa' },
        ],
    },
    {
        id: 5,
        image: 'https://images.pexels.com/photos/28055801/pexels-photo-28055801/free-photo-of-a-woman-in-a-black-dress-is-standing-in-the-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: 'Counter Striker',
        viewers: 21000,
        tag: [
            { id: 1, name: 'English' },
            { id: 2, name: 'Fifa' },
        ],
    },
    {
        id: 6,
        image: 'https://images.pexels.com/photos/28055801/pexels-photo-28055801/free-photo-of-a-woman-in-a-black-dress-is-standing-in-the-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: 'Counter Striker',
        viewers: 21000,
        tag: [
            { id: 1, name: 'English' },
            { id: 2, name: 'Fifa' },
        ],
    },
]);
</script>
