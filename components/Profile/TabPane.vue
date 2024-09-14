<template>
    <div class="px-8">
        <UTabs :items="items" v-model="selected">
            <template #default="{ item, index, selected }">
                <span
                    class="truncate"
                    :class="[
                        selected &&
                            'text-customPrimary-1 dark:text-primary-400',
                    ]"
                    >{{ item.label }}</span
                >
            </template>
            <template #home="{ item }">
                <ProfileTabHome @change-tab="handleTabChange" />
            </template>
            <template #about="{ item }">
                <ProfileTabAbout />
            </template>
            <template #video="{ item }">
                <ProfileTabVideo />
            </template>
        </UTabs>
    </div>
</template>

<script setup lang="ts">
const items = [
    {
        label: 'Home',
        slot: 'home',
    },
    {
        label: 'About',
        slot: 'about',
    },
    {
        label: 'Schedule',
        content: 'Finally, this is the content for Tab3',
    },
    {
        label: 'Video',
        slot: 'video',
    },
    {
        label: 'Chat',
        content: 'Finally, this is the content for Tab3',
    },
];

const route = useRoute();
const router = useRouter();
const activeTab = ref(0);

const selected = computed({
    get() {
        const index = items.findIndex((item) => item.label === route.query.tab);
        if (index === -1) {
            return 0;
        }

        return index;
    },
    set(value) {
        // Hash is specified here to prevent the page from scrolling to the top
        router.replace({
            query: { tab: items[value].label },
            // hash: '1',
        });
    },
});

const handleTabChange = (tabName) => {
    const scheduleTab = items.findIndex((item) => item.label === tabName);
    if (scheduleTab !== -1) {
        selected.value = scheduleTab;
    }
};
</script>
