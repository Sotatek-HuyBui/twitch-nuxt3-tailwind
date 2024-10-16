<template>
    <div class="flex items-center justify-between mt-2 mb-8">
        <div class="flex items-center">
            <USelect
                size="sm"
                v-model="selectedLanguage"
                :options="languages"
                placeholder="Language"
                class="mr-2 text-[6px] w-[100px]"
                v-if="activeTab === '2'"
            />
            <UInput
                icon="i-heroicons-magnifying-glass-20-solid"
                size="sm"
                color="white"
                :trailing="false"
                placeholder="Search category tag..."
                v-model="search"
            />

            <div
                v-if="$route.query.tag"
                class="rounded-full bg-slate-200 mr-1 dark:bg-slate-700 ml-2 h-[24px] flex items-center px-2"
            >
                <p
                    class="text-[8px] sm:text-[14px] dark:text-white font-medium m-0"
                >
                    {{ $route.query.tag }}
                </p>
                <img
                    v-if="colorMode.value !== 'dark'"
                    class="w-2 h-2 ml-2 cursor-pointer"
                    @click="onRemoveTag"
                    src="@/assets/close.png"
                />
                <img
                    v-else
                    class="w-2 h-2 ml-2 cursor-pointer"
                    @click="onRemoveTag"
                    src="@/assets/close-white.png"
                />
            </div>
        </div>
        <div class="flex items-center justify-center">
            <p class="hidden sm:-text[14px] font-medium">Sort by</p>
            <USelect
                v-model="selectedOption"
                :options="options"
                placeholder="Options"
                class="mx-2"
                option-attribute="name"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
const languages = ['United States', 'Canada', 'Mexico'];
import { useI18n } from 'vue-i18n';

const { t} = useI18n();
const options = computed(() => [
    {
        name: t('Directory.Tab.desc1'),
        value: 1,
    },
    {
        name: t('Directory.Tab.desc2'),
        value: 2,
    },
    {
        name: t('Directory.Tab.desc3'),
        value: 3,
    },
    {
        name: t('Directory.Tab.desc4'),
        value: 4,
    },
]);

const selectedLanguage = ref();
const selectedOption = ref(1);
const search = ref('');
const { activeTab } = defineProps(['activeTab']);
const colorMode = useColorMode();
const route = useRoute();

const onRemoveTag = () => {
    navigateTo(`/directory/${route.params.directory}`);
};
</script>
