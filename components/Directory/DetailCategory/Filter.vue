<template>
    <div class="flex items-center justify-between mt-2 mb-8">
        <div class="flex">
            <USelect
                v-model="selectedLanguage"
                :options="languages"
                placeholder="Language"
                class="mr-2"
            />
            <UInput
                icon="i-heroicons-magnifying-glass-20-solid"
                size="sm"
                color="white"
                :trailing="false"
                placeholder="Search category tag..."
                v-model="search"
                v-if="activeTab === '1'"
            />
            <USelect
                v-model="selectedVideoOption"
                :options="videoOptions"
                placeholder="Video options"
                class="mr-2"
                option-attribute="name"
                v-if="activeTab === '2'"
            />
        </div>
        <div class="flex items-center justify-center">
            <p class="font-medium mr-2">Sort by</p>
            <USelect
                v-model="selectedOption"
                :options="options"
                placeholder="Options"
                class="mr-2"
                option-attribute="name"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
const languages = ['United States', 'Canada', 'Mexico'];
const options = [
    {
        name: 'Recommended For You',
        value: 1,
    },
    {
        name: 'Viewers (High to Low)',
        value: 2,
    },
    {
        name: 'Viewers (Low to High)',
        value: 3,
    },
    {
        name: 'Recently Started',
        value: 4,
    },
];
const videoOptions = [
    {
        name: 'All videos',
        value: 1,
    },
    {
        name: 'Past Broadcasts',
        value: 2,
    },
    {
        name: 'Highlights',
        value: 3,
    },
    {
        name: 'Uploads',
        value: 4,
    },
];

const selectedLanguage = ref();
const selectedOption = ref(1);
const selectedVideoOption = ref(1);
const search = ref('');
const { activeTab } = defineProps(['activeTab']);
</script>
