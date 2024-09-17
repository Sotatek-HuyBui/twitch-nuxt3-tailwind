<template>
    <div class="px-8">
        <a-tabs v-model:activeKey="activeKey" @change="changeActiveTab">
            <a-tab-pane key="1">
                <template #tab>
                    <p class="text-[16px]">Home</p>
                </template>
                <ProfileTabHome :changeActiveTab="changeActiveTab" />
            </a-tab-pane>
            <a-tab-pane key="2"
                ><template #tab>
                    <p class="text-[16px]">About</p>
                </template>
                <ProfileTabAbout />
            </a-tab-pane>
            <a-tab-pane key="3"
                ><template #tab>
                    <p class="text-[16px]">Schedule</p>
                </template>
                Schedule
            </a-tab-pane>
            <a-tab-pane key="4"
                ><template #tab>
                    <p class="text-[16px]">Videos</p>
                </template>
                <ProfileTabVideo />
            </a-tab-pane>
            <a-tab-pane key="5"
                ><template #tab>
                    <p class="text-[16px]">Chats</p>
                </template>
                Chats
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const activeKey = ref('1');

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
