<template>
    <div
        class="absolute w-[200px] top-4 sm:top-0 sm:relative sm:w-[400px] flex"
    >
        <input
            type="search"
            id="search-dropdown"
            class="block w-full px-2 z-20 text-[8px] h-[36px] sm:text-[14px] border border-slate-500 hover:border-slate-500 hover:border-2 dark:border-slate-500 dark:hover:border-slate-500 dark:focus:border-customPrimary-0 rounded-l-md focus:border-4 focus:outline-none focus:border-customPrimary-1"
            placeholder="Search"
            v-model="search"
            @keyup.enter="onEnterKey"
            @blur="onBlurInput"
            @focus="onFocusInput"
            autocomplete="off"
        />
        <!-- text-gray-900 bg-gray-50 rounded-l-md border border-gray-300 focus:outline-customPrimary-2 focus:border-2 focus:border-customPrimary-2 dark:bg-gray-700 dark:text-white -->
        <button
            :class="{ 'cursor-not-allowed': !search }"
            @click="onSearch"
            class="p-[0.6rem] text-sm font-medium h-full  bg-gray-200 hover:bg-gray-300 dark:bg-slate-800 rounded-e-lg border dark:border-slate-800 hover:bg-customPrimary- focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-slate-900 dark:focus:ring-blue-800"
        >
            <svgo-header-btn-search-light v-if="colorMode.value !== 'dark'" />
            <svgo-header-btn-search-dark v-else />
            <span class="sr-only">Search</span>
        </button>
        <div
            v-if="isShowSearchHistory"
            class="absolute pt-[40px] sm:pt-[50px] px-1 rounded-md w-[210px] sm:w-[410px] bg-slate-50 dark:bg-slate-900 top-[-5px] left-[-5px] right-0 z-[-1]"
        >
            <div
                class="flex items-center justify-between bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 hover:bg-slate-200 mb-1 cursor-pointer p-2 rounded-md"
                v-for="item in searchHistory"
                :key="item"
                @mousedown="onSelectSearchItem(item)"
            >
                <img
                    src="~/assets/history.png"
                    class="w-2 h-2 sm:w-4 sm:h-4 cursor-pointer"
                    alt="Three dot menu"
                />
                <p
                    class="flex-1 ml-4 text-[10px] sm:text-[16px] text-customPrimary-1"
                >
                    {{ item }}
                </p>

                <button
                    type="button"
                    @mousedown.stop="onRemoveSearchItem(item)"
                    class="flex items-center me-2 text-sm font-medium text-gray-900 hover:bg-slate-300 dark:hover:bg-slate-800 p-1 rounded-md"
                >
                    <img
                        v-if="$colorMode.value !== 'dark'"
                        src="~/assets/close.png"
                        class="w-2 h-2 sm:w-4 sm:h-4 cursor-pointer"
                        alt="Three dot menu"
                    />
                    <img
                        v-else
                        src="~/assets/close-white.png"
                        class="w-2 h-2 sm:w-4 sm:h-4 cursor-pointer"
                        alt="Three dot menu"
                    />
                </button>
            </div>
            <div
                class="flex items-center justify-between bg-slate-100 hover:bg-slate-200 mb-1 cursor-pointer p-2 rounded-md dark:bg-slate-900 dark:hover:bg-slate-800"
                v-if="searchHistory.length === 0 && search"
                @mousedown="onSelectSearchItem(search, true)"
            >
                <p class="flex-1 ml-4">
                    Go to <span class="font-medium">{{ search }}</span>
                </p>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const colorMode = useColorMode();
const route = useRoute();
const router = useRouter();
const { term } = route.query;
const { $locally }: any = useNuxtApp();
const isShowSearchHistory = ref(false);
const search = ref<any>('');
const searchHistory = ref(
    JSON.parse($locally.getItem('searchHistory') || '[]')
);
const searchHistoryDefault = ref(
    JSON.parse($locally.getItem('searchHistory') || '[]')
);

const onBlurInput = () => (isShowSearchHistory.value = false);

const onFocusInput = () => (isShowSearchHistory.value = true);

const onRemoveSearchItem = (name: string) => {
    const newList = searchHistoryDefault.value.filter(
        (item: any) => item !== name && item
    );
    searchHistory.value = searchHistoryDefault.value.filter(
        (item: any) => item !== name && item
    );
    searchHistoryDefault.value = searchHistoryDefault.value.filter(
        (item: any) => item !== name && item
    );
    $locally.setItem('searchHistory', JSON.stringify(newList));
};

const onSearch = () => {
    navigateTo({
        path: '/search',
        query: { term: search.value },
    });
    if (!searchHistoryDefault.value.includes(search.value) && search.value) {
        searchHistoryDefault.value.unshift(search.value);
        $locally.setItem(
            'searchHistory',
            JSON.stringify(searchHistoryDefault.value)
        );
    }
    search.value = '';
    onBlurInput();
};

const onSelectSearchItem = (searchInput: string, isAddToHistory?: boolean) => {
    if (isAddToHistory) {
        searchHistoryDefault.value.unshift(searchInput);
        $locally.setItem(
            'searchHistory',
            JSON.stringify(searchHistoryDefault.value)
        );
    }
    navigateTo({
        path: '/search',
        query: { term: searchInput },
    });
    search.value = '';
    onBlurInput();
};

const onEnterKey = (event: any) => {
    if (event.key === 'Enter' && search.value) {
        navigateTo({ path: '/search', query: { term: search.value } });
        if (
            !searchHistoryDefault.value.includes(search.value) &&
            search.value
        ) {
            searchHistoryDefault.value.unshift(search.value);
            $locally.setItem(
                'searchHistory',
                JSON.stringify(searchHistoryDefault.value)
            );
        }
        search.value = '';
        onBlurInput();
    }
};

watch(
    () => search.value,
    (search: string) => {
        searchHistory.value = searchHistoryDefault.value.filter(
            (item: any) =>
                item.toLowerCase().includes(search.toLowerCase()) ||
                search.toLowerCase().includes(item.toLowerCase())
        );
    }
);

onMounted(() => {
    search.value = term || '';
    if (!searchHistoryDefault.value.includes(term) && term) {
        searchHistoryDefault.value.unshift(term);
        $locally.setItem(
            'searchHistory',
            JSON.stringify(searchHistoryDefault.value)
        );
    }
});

defineExpose({
    onFocusInput,
});

router.afterEach((to, from) => {
    if (!to.fullPath.includes('search')) {
        search.value = '';
    }
    if (to.query.term) {
        search.value = to.query.term;
    }
});
</script>
<style></style>
