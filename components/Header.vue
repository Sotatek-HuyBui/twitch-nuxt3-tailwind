<template>
    <div
        class="bg-white dark:bg-black flex justify-between px-3 py-2 border-b-2 border-gray-100 z-10"
    >
        <div class="flex-1 flex items-center">
            <NuxtLink to="/"
                ><img src="~/assets/twitch.png" class="w-6 h-6" alt="Logo"
            /></NuxtLink>
            <p
                class="mx-6 cursor-pointer font-medium hover:text-customPrimary-1 text-[14px]"
                @click="() => navigateTo('/directory')"
            >
                Browse
            </p>
            <UDropdown
                :items="generalItems"
                :popper="{ placement: 'bottom-start' }"
            >
                <UTooltip text="More options">
                    <img
                        src="~/assets/three-dot-menu.png"
                        class="w-4 h-4 cursor-pointer"
                        alt="Three dot menu"
                    />
                </UTooltip>
            </UDropdown>
        </div>
        <div class="flex-1 flex items-center justify-center">
            <div class="relative w-[400px]">
                <input
                    type="search"
                    id="search-dropdown"
                    class="block py-1 px-2 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-customPrimary-1 focus:ring-customPrimary-1 focus:border-customPrimary-1 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                    placeholder="Search"
                    v-model="search"
                    @keyup.enter="onEnterKey"
                    @blur="onBlurInput"
                    @focus="onFocusInput"
                    autocomplete="off"
                />
                <button
                    :class="{ 'cursor-not-allowed': !search }"
                    @click="onSearch"
                    class="absolute top-0 end-0 py-1 px-1.5 text-sm font-medium h-full text-white bg-customPrimary-1 rounded-e-lg border border-customPrimary- hover:bg-customPrimary- focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    <svg
                        class="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                    <span class="sr-only">Search</span>
                </button>
                <div
                    v-if="isShowSearchHistory"
                    class="absolute pt-[40px] px-1 rounded-md w-[410px] bg-slate-50 top-[-5px] left-[-5px] right-0 z-[-1]"
                >
                    <div
                        class="flex items-center justify-between bg-slate-100 hover:bg-slate-200 mb-1 cursor-pointer p-2 rounded-md"
                        v-for="item in searchHistory"
                        :key="item"
                        @mousedown="onSelectSearchItem(item)"
                    >
                        <img
                            src="~/assets/time-left.png"
                            class="w-3 h-3 cursor-pointer"
                            alt="Three dot menu"
                        />
                        <p class="flex-1 ml-4">{{ item }}</p>

                        <button
                            type="button"
                            @mousedown.stop="onRemoveSearchItem(item)"
                            class="flex items-center me-2 text-sm font-medium text-gray-900 hover:bg-slate-300 p-1 rounded-md"
                        >
                            <img
                                src="~/assets/close.png"
                                class="w-4 h-4 cursor-pointer"
                                alt="Three dot menu"
                            />
                        </button>
                    </div>
                    <div
                        class="flex items-center justify-between bg-slate-100 hover:bg-slate-200 mb-1 cursor-pointer p-2 rounded-md"
                        v-if="searchHistory.length === 0"
                        @mousedown="onSelectSearchItem(search, true)"
                    >
                        <p class="flex-1 ml-4">
                            Go to <span class="font-medium">{{ search }}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex-1 flex items-center justify-end">
            <UTooltip text="Prime gaming benefits">
                <img
                    src="~/assets/crown.png"
                    class="w-4 h-4 cursor-pointer mr-3"
                    alt="Logo"
                />
            </UTooltip>
            <UTooltip text="Notifications" v-if="token">
                <img
                    src="~/assets/bell.png"
                    class="w-4 h-4 cursor-pointer mr-3"
                    alt="Logo"
                />
            </UTooltip>
            <UTooltip text="Whispers" v-if="token">
                <img
                    src="~/assets/conversation.png"
                    class="w-4 h-4 cursor-pointer mr-3"
                    alt="Logo"
                />
            </UTooltip>
            <button
                v-if="token"
                type="button"
                @click="onShowLoginModal"
                class="flex items-center py-1 px-3 me-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
                <img
                    src="~/assets/low-battery.png"
                    class="w-4 h-4 cursor-pointer mr-3"
                    alt="Logo"
                    v-if="token"
                />
                Go Ad-Free for Free
            </button>
            <button
                v-if="!token"
                type="button"
                @click="onShowLoginModal"
                class="py-1 px-3 me-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
                Log In
            </button>
            <button
                v-if="!token"
                type="button"
                @click="onShowRegisterModal"
                class="py-1 px-3 me-2 text-sm font-medium text-white focus:outline-none bg-customPrimary-1 rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
                Sign Up
            </button>
            <UDropdown
                :items="configItems"
                :popper="{ placement: 'bottom-start' }"
            >
                <img
                    src="~/assets/profile-user.png"
                    class="w-6 h-6 cursor-pointer"
                    alt="Logo"
                />
            </UDropdown>
        </div>
    </div>
</template>
<script setup lang="ts">
//@ts-ignore
const { onShowLoginModal, onShowRegisterModal } = defineProps([
    'onShowLoginModal',
    'onShowRegisterModal',
]);

const route = useRoute();
const router = useRouter();
const { term } = route.query;
const { $locally }: any = useNuxtApp();
const token = $locally.getItem('token');
const isShowSearchHistory = ref(false);
const search = ref<any>('');
const searchHistory = ref(
    JSON.parse($locally.getItem('searchHistory') || '[]')
);
const searchHistoryDefault = ref(
    JSON.parse($locally.getItem('searchHistory') || '[]')
);

const generalItems = [
    [
        {
            label: 'About',
        },
        {
            label: 'Advertisers',
        },
        {
            label: 'Blogs',
        },
        {
            label: 'Developers',
        },
        {
            label: 'Download Apps',
        },
    ],
    [
        {
            label: 'Accessibility Statement',
            click: () => {
                console.log('Edit');
            },
        },
        {
            label: 'Ad Choices',
        },
    ],
];

const configItems = [
    [
        {
            label: 'Language',
        },
        {
            label: 'Dark Theme',
        },
        {
            label: 'Labeled Content',
        },
    ],
    [
        {
            label: token ? 'Log out' : 'Log in',
            click: () => {
                if (token) {
                    $locally.removeItem('token');
                    window.location.reload();
                } else {
                    onShowLoginModal();
                }
            },
        },
    ],
];

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
