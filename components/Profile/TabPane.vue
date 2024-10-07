<template>
    <div class="px-2">
        <a-tabs v-model:activeKey="activeKey" @change="changeActiveTab">
            <a-tab-pane v-for="item in tabs" :key="item.key">
                <template #tab>
                    <p class="text-[8px] sm:text-[16px] dark:text-white">
                        {{ item.name }}
                    </p>
                </template>

                <ProfileTabHome
                    v-if="item.key === '1'"
                    :changeActiveTab="changeActiveTab"
                />
                <ProfileTabAbout v-if="item.key === '2'" />
                <ProfileTabVideo v-if="item.key === '4'" />
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const activeKey = ref('1');

const tabs = [
    {
        key: '1',
        name: 'Home',
    },
    {
        key: '2',
        name: 'About',
    },
    {
        key: '3',
        name: 'Schedule',
    },
    {
        key: '4',
        name: 'Videos',
    },
    {
        key: '5',
        name: 'Chats',
    },
];

const changeActiveTab = (targetKey: string) => {
    activeKey.value = targetKey;

    let url = `/${route.params.name}/`;
    switch (targetKey) {
        case '1':
            url += '';
            break;
        case '2':
            url += 'about';
            break;
        case '3':
            url += 'schedule';
            break;
        case '4':
            url += 'videos';
            break;
        case '5':
            url += 'chats';

        default:
            break;
    }

    navigateTo(url);
};

onMounted(() => {
    const tab = route.params.tab;
    switch (tab) {
        case 'home':
            activeKey.value = '1';
            break;
        case 'about':
            activeKey.value = '2';
            break;
        case 'schedule':
            activeKey.value = '3';
            break;
        case 'videos':
            activeKey.value = '4';
            break;
        case 'chats':
            activeKey.value = '5';
            break;

        default:
            break;
    }
});
</script>
