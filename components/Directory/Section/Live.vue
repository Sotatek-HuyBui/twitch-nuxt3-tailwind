<template>
    <div class="mb-8">
        <nuxt-link v-if="!isFromVideoTab" :to="url">
            <p
                class="text-[18px] font-medium mt-6 mb-2"
                :class="{ 'text-customPrimary-1': !isFromVideoTab }"
            >
                {{ header || 'Default Items' }}
            </p>
        </nuxt-link>
        <div v-else class="flex items-center mt-6 mb-1">
            <p
                class="text-[18px] font-medium mr-4"
                :class="{ 'text-customPrimary-1': !isFromVideoTab }"
            >
                {{ header || 'Default Items' }}
            </p>
            <p
                v-if="isFromVideoTab"
                class="text-customPrimary-1 text-[12px] cursor-pointer"
                @click="viewAll"
            >
                View all >
            </p>
        </div>
        <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 gap-4"
        >
            <HomeChannelItem
                v-for="(item, index) in items.slice(0, 3)"
                :key="item.id"
                :item="item"
            />
        </div>
        <UDivider
            class="mt-6 cursor-pointer"
            label="Show all"
            @click="navigateTo(url)"
            v-if="!isFromVideoTab"
        />
    </div>
</template>

<script setup>
const { header, items, isFromVideoTab } = defineProps([
    'header',
    'items',
    'isFromVideoTab',
]);

const route = useRoute();

const url = `/directory/${route.params.directory}/${header
    .split(' ')
    .join('-')}`;

const viewAll = () => {
    navigateTo({
        path: route.params.directory,
        query: { filter: 'archives', sort: 'time' },
    });
};
</script>
