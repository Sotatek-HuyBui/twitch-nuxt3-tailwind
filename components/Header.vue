<template>
    <div
        class="bg-white flex justify-between px-3 border-b-2 h-[52px] border-gray-200 dark:border-black z-50 dark:bg-[#18181B]">
        <div class="flex-1 flex items-center">
            <NuxtLink to="/"><img src="~/assets/twitch.png" class="w-4 h-4 sm:w-6 sm:h-6 mr-8" alt="Logo" /></NuxtLink>
            <div v-if="token" class="h-full flex items-center mr-8" :class="{
                ' border-b-2 border-customPrimary-1 dark:border-customPrimary-0':
                    $route.path.includes('/directory/following'),
            }">
                <p class="cursor-pointer font-semibold hover:text-customPrimary-1 dark:hover:text-customPrimary-0 text-[18px]"
                    :class="{
                        ' text-customPrimary-1  dark:text-customPrimary-0':
                            $route.path.includes('/directory/following'),
                    }" @click="() => navigateTo('/directory/following')">
                    <span class="hidden sm:inline text-[18px]">{{
                        $t('Following')
                        }}</span>
                    <UTooltip text="Following">
                        <img src="~/assets/heart.png" class="w-3 h-3 cursor-pointer inline sm:hidden mt-[-4px]"
                            alt="Three dot menu" />
                    </UTooltip>
                </p>
            </div>
            <div class="h-full flex items-center mr-8" :class="{
                'border-b-2 border-customPrimary-1 dark:border-customPrimary-0':
                    $route.path.includes('/directory') &&
                    $route.params.directory !== 'following',
            }">
                <p class="cursor-pointer font-semibold hover:text-customPrimary-1 dark:hover:text-customPrimary-0 text-[18px]"
                    @click="() => navigateTo('/directory')" :class="{
                        'text-customPrimary-1  dark:text-customPrimary-0':
                            $route.path.includes('/directory') &&
                            $route.params.directory !== 'following',
                    }">
                    <span class="hidden sm:inline xl:text-[18px]">{{
                        $t('Browse')
                        }}</span>
                </p>
            </div>
            <UTooltip text="Directory">
                <img src="~/assets/copy-document.png" class="w-3 h-3 cursor-pointer inline sm:hidden mt-[-4px]"
                    alt="Three dot menu" />
            </UTooltip>
            <UDropdown :items="generalItems" :popper="{ placement: 'bottom-start' }">
                <UTooltip text="More options"
                    class="p-2 rounded-md dark:hover:bg-darkButtonHover hover:bg-lightButtonHover">
                    <svgo-header-three-dot-menu />
                </UTooltip>
            </UDropdown>
        </div>
        <div class="flex-1 items-center justify-center hidden sm:flex">
            <LayoutHeaderSearchBar />
        </div>
        <div class="flex-1 flex items-center justify-end">
            <div class="relative sm:hidden">
                <svgo-header-btn-search
                    class="w-3 h-3 sm:hidden cursor-pointer mr-2 sm:mr-3 bg-gray-200 hover:bg-gray-300"
                    @click="onClickSearchButton" />
                <LayoutHeaderSearchBar v-if="isShowMobileSearchBar" ref="childComponentRef" />
            </div>
            <UTooltip text="Prime gaming benefits"
                class="dark:hover:bg-darkButtonHover hover:bg-lightButtonHover mr-2 sm:mr-3 p-2 rounded-md">
                <svgo-header-crown />
            </UTooltip>
            <UTooltip text="Notifications" v-if="token"
                class="dark:hover:bg-darkButtonHover hover:bg-lightButtonHover mr-2 sm:mr-3 p-2 rounded-md">
                <svgo-header-notification />
            </UTooltip>
            <UTooltip text="Whispers" v-if="token"
                class="dark:hover:bg-darkButtonHover hover:bg-lightButtonHover mr-2 sm:mr-3 p-2 rounded-md">
                <svgo-header-whisper />
            </UTooltip>
            <UTooltip text="Get bits" v-if="token"
                class="dark:hover:bg-darkButtonHover hover:bg-lightButtonHover mr-2 sm:mr-3 p-2 rounded-md">
                <svgo-header-get-bits />
            </UTooltip>
            <button v-if="token" type="button"
                class="hidden sm:flex items-center py-1 px-3 me-1 sm:me-2 text-sm font-medium text-gray-900 focus:outline-none bg-gray-200 rounded-md border border-gray-200 hover:bg-gray-300 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                <svgo-header-low-battery class="w-3 h-3 sm:w-4 sm:h-4 cursor-pointer mr-2 sm:mr-3" />
                {{ $t('Go Ad-Free for Free') }}
            </button>
            <button v-if="!token" type="button" @click="onShowLoginModal"
                class="py-1 w-[40px] sm:w-[60px] me-1 sm:me-2 text-[5px] sm:text-[13px] font-medium focus:outline-none bg-[#EDEDEF] rounded-md hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                {{ $t('Log in') }}
            </button>
            <button v-if="!token" type="button" @click="onShowRegisterModal"
                class="py-1 w-[40px] sm:w-[70px] me-1 sm:me-2 text-[5px] sm:text-[13px] font-medium text-white focus:outline-none bg-customPrimary-1 rounded-md border border-gray-200 hover:bg-customPrimary-2 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-customPrimary-2">
                {{ $t('Sign up') }}
            </button>
                <UDropdown v-model:open="isOpenMenu" :items="isOpenSubmenuLang ? submenuLang : configItems" :ui="{
                    padding: `${isOpenSubmenuLang
                        ? '[&:nth-child(2)]:p-2 p-[0rem]'
                        : '[&:nth-child(2)]:p-2'
                        }`,
                        transition: {
                        enterActiveClass: isOpenSubmenuLang ? 'transition  duration-50 transform' : null,
                        enterFromClass: isOpenSubmenuLang ? 'transform opacity-500 translate-x-[10px]' : null,
                        enterToClass: isOpenSubmenuLang ? 'transform opacity-100 translate-x-0' : null,
                        leaveActiveClass: isOpenSubmenuLang ? 'transition ease-in duration-500 transform translate-x-[-100%]' : null,
                        leaveFromClass: isOpenSubmenuLang ? 'transform opacity-100 translate-x-0' : null,
                        leaveToClass: isOpenSubmenuLang ? 'transform opacity-0 translate-x-[-100%]' : null,
                    },
                }">
                    <template #item="{ item }">
                        <div class="flex items-center w-full h-full">
                            <component :is="item.icon" class="fill-red w-2 sm:w-5 sm:h-5 cursor-pointer"
                                :fontControlled="false" v-if="item.icon && item.icon !== 'avatar'" />

                            <component :is="item.addIcon2"  
                            :class="[colorMode.value ? 'w-2 sm:w-3 sm:h-3 cursor-pointer' : 'w-2 sm:w-3 sm:h-3 cursor-pointer text-black']"
                                :fontControlled="false" v-if="item.addIcon2 && item.addIcon2 !== 'avatar'" />


                            <span class="truncate ml-2"> {{ item.label }}</span>

                            <component :is="item.addIcon"
                                class="ml-14 w-1 sm:w-4 sm:h-4 mt-0.5 cursor-pointer justify-end"
                                :fontControlled="false" v-if="item.addIcon && item.addIcon !== 'avatar'" />

                            <component :is="item.iconCheck"
                                class="ml-16 w-1 sm:w-4 sm:h-4 mt-0.5 cursor-pointer text-white" :fontControlled="false"
                                v-if="item.iconCheck && item.iconCheck !== 'avatar'" />

                            <component :is="item.iconCheck2" class="ml-20 sm:h-4 mt-0.5 cursor-pointer text-white"
                                :fontControlled="false" v-if="
                                    item.iconCheck2 && item.iconCheck2 !== 'avatar'
                                " />
                        </div>
                    </template>


                    <div v-if="!token">
                        <svgo-header-user-profile />
                    </div>
                    <img v-else
                        src="https://images.pexels.com/photos/27603834/pexels-photo-27603834/free-photo-of-ao-dai.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        class="w-3 h-3 sm:w-6 sm:h-6 cursor-pointer object-cover rounded-full" alt="Logo" />
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

const { $locally }: any = useNuxtApp();
const token = $locally.getItem('token');
const username = $locally.getItem('username');
const isShowMobileSearchBar = ref(false);
const colorMode = useColorMode();
const { t, locale, setLocale } = useI18n();

const activeLabel = ref('');

const languagesList = [
    { code: 'vi', key: 'Header.desc12' },
    { code: 'en', key: 'Header.desc11' },
    // { code: 'de', key: 'Header.desc13' },   
];
onMounted(() => {
    handleActiveSubmenu(String(locale.value));
});

watch(locale, (val) => {
    handleActiveSubmenu(val);
});

const handleActiveSubmenu = (lang: string) => {
    const currentLanguage = languagesList.find(language => lang === language.code);
    if (currentLanguage) {
        activeLabel.value = t(currentLanguage.key)
        return;
    }
};

const router = useRouter();

const onToggleLanguage = (lang: string) => {
    setLocale(lang);
};


const onToggleMode = () => {
    colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light';
};

const childComponentRef = ref<any>(null);

const onClickSearchButton = () => {
    isShowMobileSearchBar.value = !isShowMobileSearchBar.value;
};

const generalItems = computed(() => [
    [
        {
            label: t('Header.desc1'),
            click: () => {
                message.info('Function is in progress!');
            },
        },
        {
            label: t('Header.desc2'),
            click: () => {
                message.info('Function is in progress!');
            },
        },
        {
            label: t('Header.desc3'),
            click: () => {
                message.info('Function is in progress!');
            },
        },
        {
            label: t('Header.desc4'),
            click: () => {
                message.info('Function is in progress!');
            },
        },
        {
            label: t('Header.desc5'),
            click: () => {
                message.info('Function is in progress!');
            },
        },
    ],
    [
        {
            label: t('Header.desc6'),
            click: () => {
                console.log('Edit');
            },
        },
        {
            label: t('Header.desc7'),
            click: () => {
                message.info('Function is in progress!');
            },
        },
    ],
]);

const isOpenMenu = ref(false);
const isOpenSubmenuLang = ref(false);

let configItems = computed(() => {
    return token
        ? [
            [
                {
                    label: username,
                    click: () => {
                        navigateTo(`/${username}`);
                    },
                    icon: 'avatar',
                },
            ],
            [
                {
                    label: t('Header.desc18'),
                    click: () => {
                        message.info('Function is in progress!');
                    },
                    icon: 'svgo-header-menu-channel',
                },
                {
                    label: t('Header.desc19'),
                    click: () => {
                        message.info('Function is in progress!');
                    },
                    icon: 'svgo-header-menu-video-producer',
                },
                {
                    label: t('Header.desc20'),
                    click: () => {
                        message.info('Function is in progress!');
                    },
                    icon: 'svgo-header-menu-creator-dashboard',
                },
                {
                    label: t('Header.desc21'),
                    click: () => {
                        message.info('Function is in progress!');
                    },
                    icon: 'svgo-header-menu-privacy-center',
                },
                {
                    label: t('Header.desc22'),
                    click: () => {
                        message.info('Function is in progress!');
                    },
                    icon: 'svgo-header-menu-safety',
                },
            ],
            [
                {
                    label: t('Header.desc23'),
                    click: () => {
                        message.info('Function is in progress!');
                    },
                    icon: 'svgo-header-menu-emote-atrribution',
                },
            ],
            [
                {
                    label: t('Header.desc24'),
                    click: () => {
                        message.info('Function is in progress!');
                    },
                    icon: 'svgo-header-menu-subscriptions',
                },
                {
                    label: t('Header.desc25'),
                    icon: 'svgo-header-menu-drop-rewards',
                    click: () => {
                        message.info('Function is in progress!');
                    },
                },
                {
                    label: t('Header.desc26'),
                    icon: 'svgo-header-menu-wallet',
                    click: () => {
                        message.info('Function is in progress!');
                    },
                },
            ],
            [
                {
                    label: t('Header.desc27'),
                    click: () => {
                        message.info('Function is in progress!');
                    },
                    icon: 'svgo-header-menu-setting',
                },
                {
                    label: t('Header.desc28'),
                    icon: 'svgo-header-menu-content-tuning',

                    click: () => {
                        message.info('Function is in progress!');
                    },
                },
                {
                    label: t('Language'),
                    click: () => {
                        isOpenSubmenuLang.value = true;
                        nextTick(() => {
                            isOpenMenu.value = true;
                        });
                    },
                    locked: true,
                    icon: 'svgo-header-menu-language',
                    addIcon: 'svgo-header-menu-angle-right-solid',

                },
                {
                    label:
                        colorMode.value === 'light'
                            ? t('Header.desc13')
                            : t('Header.desc14'),
                    click: () => {
                        onToggleMode();
                    },
                    icon: 'svgo-header-menu-theme',
                },
            ],
            [
                {
                    label: t('Header.desc16'),
                    click: () => {
                        $locally.removeItem('token');
                        $locally.removeItem('username');
                        window.location.reload();
                    },
                    icon: 'svgo-header-menu-logout',
                },
            ],
        ]
        : [
            [
                {
                    label: t('Language'),
                    click: () => {
                        isOpenSubmenuLang.value = true;
                        nextTick(() => {
                            isOpenMenu.value = true;
                        });
                    },
                    locked: true,
                    icon: 'svgo-header-menu-language',
                    addIcon: 'svgo-header-menu-angle-right-solid',
                },
                {
                    label:
                        colorMode.value === 'light'
                            ? t('Header.desc13')
                            : t('Header.desc14'),
                    click: () => {
                        onToggleMode();
                    },
                    icon: 'svgo-header-menu-theme',
                },

                {
                    label: t('Header.desc15'),
                    icon: 'svgo-header-menu-labeled-content',
                    click: () => {
                        message.info('Function is in progress!');
                    },
                },
            ],
            [
                {
                    label: t('Header.desc17'),
                    click: () => {
                        onShowLoginModal();
                    },
                    icon: 'svgo-header-menu-login',
                },
            ],
        ];
});

let submenuLang = computed(() => [
    [
        {
            label: t('Language'),
            click: () => {
                isOpenSubmenuLang.value = false;
                nextTick(() => {
                    isOpenMenu.value = true;
                });
            },
            addIcon2: 'svgo-header-menu-angle-left-solid',
            class: colorMode.value ? ' rounded-none font-[600] item-between' : ' bg-[#efeff1] rounded-none text-black font-[600] item-between',
        }
    ],
    [
        ...languagesList.map((language) => ({
            label: t(language.key),
            code: language.code,
            click: () => {
                activeLabel.value = t(language.key);
                isOpenSubmenuLang.value = false;
                onToggleLanguage(language.code);
            },
            class: `${activeLabel.value === t(language.key)
                ? 'bg-[#9147ff] text-white'
                : null
                }`,
            iconCheck: activeLabel.value === t(language.key)
                ? 'svgo-header-menu-check-solid'
                : null,
        }))
    ],
]);


</script>
<style></style>
