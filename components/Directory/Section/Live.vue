<template>
    <div class="mb-8">
        <nuxt-link :to="url">
            <p class="mt-6 text-[18px] font-medium mb-1 text-customPrimary-1">
                {{ header || 'Default Items' }}
            </p>
        </nuxt-link>
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
        />
    </div>
</template>

<script setup>
const { header, items } = defineProps(['header', 'items']);

const route = useRoute();

const url = `/directory/${route.params.directory}/${header
    .split(' ')
    .join('-')}`;
</script>
