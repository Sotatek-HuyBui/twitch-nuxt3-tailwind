<template>
    <div class="h-[400px] flex items-center justify-center">
        <!-- <UCarousel
            v-slot="{ item }"
            :items="items"
            :ui="{ item: 'basis-full' }"
            class="rounded-lg overflow-hidden"
            draggable
            arrows
        >
            <img
                :src="item"
                class="w-full h-[400px] object-cover"
                draggable="false"
            />
        </UCarousel> -->
        <p>Carousel will be displayed here!</p>
    </div>
</template>

<script setup lang="ts">
const items = [
    'https://images.pexels.com/photos/27774130/pexels-photo-27774130/free-photo-of-float.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/27593822/pexels-photo-27593822/free-photo-of-a-woman-is-looking-out-at-the-water-with-birds-flying-around.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3113541/pexels-photo-3113541.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1759409/pexels-photo-1759409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1038935/pexels-photo-1038935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/276374/pexels-photo-276374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];
</script>
