<template>
    <div class="mb-8">
        <nuxt-link v-if="!isFromVideoTab" :to="url">
            <p
                class="text-[18px] font-medium mt-6 mb-2 dark:text-customPrimary-0 dark:hover:text-customPrimary-0.5 hover:underline"
                :class="{ 'text-customPrimary-1': !isFromVideoTab }"
            >
                {{ header || 'Default Items' }}
            </p>
        </nuxt-link>
        <div v-else class="flex items-center mt-6 mb-1">
            <p
                class="text-[12px] sm:text-[18px] font-medium mr-2 sm:mr-4 dark:text-slate-300"
                :class="{ 'text-customPrimary-1': !isFromVideoTab }"
            >
                {{ header || 'Default Items' }}
            </p>
            <p
                v-if="isFromVideoTab"
                class="text-customPrimary-1 text-[8px] sm:text-[12px] cursor-pointer"
                @click="viewAll"
            >
                View all >
            </p>
        </div>
        <div
            class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-1 sm:gap-4"
        >
            <HomeChannelItem
                v-for="(item, index) in items.slice(0, 5)"
                :key="item.id"
                :item="item"
            />
        </div>
        <ShowMore v-if="!isFromVideoTab" :isShowMore="true" />
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
