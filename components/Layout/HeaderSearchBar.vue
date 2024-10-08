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
            class="p-2 text-sm font-medium h-full text-white bg-slate-200 dark:bg-slate-800 rounded-e-lg border dark:border-slate-800 hover:bg-customPrimary- focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-slate-900 dark:focus:ring-blue-800"
        >
            <svg
                v-if="colorMode.value !== 'dark'"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 50 50"
            >
                <path
                    d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"
                ></path>
            </svg>
            <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 50 50"
                style="fill: #ffffff"
            >
                <path
                    d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"
                ></path>
            </svg>
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
