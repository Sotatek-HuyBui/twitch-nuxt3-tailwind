<template>
    <div
        class="bg-white flex justify-between px-3 border-b-2 h-[52px] border-gray-200 dark:border-black z-50 dark:bg-[#18181B]"
    >
        <div class="flex-1 flex items-center">
            <NuxtLink to="/"
                ><img
                    src="~/assets/twitch.png"
                    class="w-4 h-4 sm:w-6 sm:h-6 mr-8"
                    alt="Logo"
            /></NuxtLink>
            <div
                v-if="token"
                class="h-full flex items-center mr-8"
                :class="{
                    ' border-b-2 border-customPrimary-1 dark:border-customPrimary-0':
                        $route.path.includes('/directory/following'),
                }"
            >
                <p
                    class="cursor-pointer font-medium hover:text-customPrimary-1 dark:hover:text-customPrimary-0 text-[18px]"
                    :class="{
                        ' text-customPrimary-1  dark:text-customPrimary-0':
                            $route.path.includes('/directory/following'),
                    }"
                    @click="() => navigateTo('/directory/following')"
                >
                    <span class="hidden sm:inline text-[18px]">{{ $t('Following') }}</span>
                    <UTooltip text="Following">
                        <img
                            src="~/assets/heart.png"
                            class="w-3 h-3 cursor-pointer inline sm:hidden mt-[-4px]"
                            alt="Three dot menu"
                        />
                    </UTooltip>
                </p>
            </div>
            <div
                class="h-full flex items-center mr-8"
                :class="{
                    'border-b-2 border-customPrimary-1 dark:border-customPrimary-0':
                        $route.path.includes('/directory') &&
                        $route.params.directory !== 'following',
                }"
            >
                <p
                    class="cursor-pointer font-medium hover:text-customPrimary-1 dark:hover:text-customPrimary-0 text-[18px]"
                    @click="() => navigateTo('/directory')"
                    :class="{
                        'text-customPrimary-1  dark:text-customPrimary-0':
                            $route.path.includes('/directory') &&
                            $route.params.directory !== 'following',
                    }"
                >
                    <span class="hidden sm:inline xl:text-[18px]"> {{ $t('Browse') }}</span>
                </p>
            </div>
            <UTooltip text="Directory">
                <img
                    src="~/assets/copy-document.png"
                    class="w-3 h-3 cursor-pointer inline sm:hidden mt-[-4px]"
                    alt="Three dot menu"
                />
            </UTooltip>
            <UDropdown
                :items="generalItems"
                :popper="{ placement: 'bottom-start' }"
            >
                <UTooltip
                    text="More options"
                    class="p-2 rounded-md dark:hover:bg-darkButtonHover hover:bg-lightButtonHover"
                >
                    <img
                        v-if="colorMode.value !== 'dark'"
                        src="~/assets/three-dot-menu.png"
                        class="w-2 h-2 sm:w-4 sm:h-4 cursor-pointer"
                        alt="Three dot menu"
                    />
                    <img
                        v-else
                        src="~/assets/three-dots-menu-white.png"
                        class="w-2 h-2 sm:w-4 sm:h-4 cursor-pointer"
                        alt="Three dot menu"
                    />
                </UTooltip>
            </UDropdown>
        </div>
        <div class="flex-1 items-center justify-center hidden sm:flex">
            <LayoutHeaderSearchBar />
        </div>
        <div class="flex-1 flex items-center justify-end">
            <div class="relative sm:hidden">
                <img
                    src="~/assets/search.png"
                    class="w-3 h-3 sm:hidden cursor-pointer mr-2 sm:mr-3"
                    alt="Logo"
                    @click="onClickSearchButton"
                />
                <LayoutHeaderSearchBar
                    v-if="isShowMobileSearchBar"
                    ref="childComponentRef"
                />
            </div>
            <UTooltip
                text="Prime gaming benefits"
                class="dark:hover:bg-darkButtonHover hover:bg-lightButtonHover mr-2 sm:mr-3 p-2 rounded-md"
            >
                <svg
                    v-if="colorMode.value !== 'dark'"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                    version="1.1"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:svgjs="http://svgjs.dev/svgjs"
                >
                    <g transform="matrix(1,0,0,1,0,0)">
                        <g id="_01_align_center" data-name="01 align center">
                            <path
                                d="M21,21.707H3a3,3,0,0,1-3-3V2.293l6,6,6-6,6,6,6-6V18.707A3,3,0,0,1,21,21.707ZM2,7.121V18.707a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V7.121l-4,4-6-6-6,6Z"
                                fill="#525252"
                                fill-opacity="1"
                                data-original-color="#000000ff"
                                stroke="none"
                                stroke-opacity="1"
                            />
                        </g>
                    </g>
                </svg>
                <!-- <img
                    v-else
                    src="~/assets/crown-white.png"
                    class="w-3 h-3 sm:w-4 sm:h-4 mt-1 cursor-pointer"
                    alt="Logo"
                /> -->
                <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                    version="1.1"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:svgjs="http://svgjs.dev/svgjs"
                >
                    <g transform="matrix(1,0,0,1,0,0)">
                        <g id="_01_align_center" data-name="01 align center">
                            <path
                                d="M21,21.707H3a3,3,0,0,1-3-3V2.293l6,6,6-6,6,6,6-6V18.707A3,3,0,0,1,21,21.707ZM2,7.121V18.707a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V7.121l-4,4-6-6-6,6Z"
                                fill="#bfbfbf"
                                fill-opacity="1"
                                data-original-color="#000000ff"
                                stroke="none"
                                stroke-opacity="1"
                            />
                        </g>
                    </g>
                </svg>
            </UTooltip>
            <UTooltip
                text="Notifications"
                v-if="token"
                class="dark:hover:bg-darkButtonHover hover:bg-lightButtonHover mr-2 sm:mr-3 p-2 rounded-md"
            >
                <img
                    v-if="colorMode.value !== 'dark'"
                    src="~/assets/bell.png"
                    class="w-3 h-3 sm:w-4 sm:h-4 cursor-pointer"
                    alt="Logo"
                />
                <img
                    v-else
                    src="~/assets/bell-white.png"
                    class="w-3 h-3 sm:w-4 sm:h-4 cursor-pointer"
                    alt="Logo"
                />
            </UTooltip>
            <UTooltip
                text="Whispers"
                v-if="token"
                class="dark:hover:bg-darkButtonHover hover:bg-lightButtonHover mr-2 sm:mr-3 p-2 rounded-md"
            >
                <img
                    v-if="colorMode.value !== 'dark'"
                    src="~/assets/conversation.png"
                    class="w-3 h-3 sm:w-4 sm:h-4 cursor-pointer"
                    alt="Logo"
                />
                <img
                    v-else
                    src="~/assets/conversation-white.png"
                    class="w-3 h-3 sm:w-4 sm:h-4 cursor-pointer"
                    alt="Logo"
                />
            </UTooltip>
            <UTooltip
                text="Get bids"
                v-if="token"
                class="dark:hover:bg-darkButtonHover hover:bg-lightButtonHover mr-2 sm:mr-3 p-2 rounded-md"
            >
                <img
                    v-if="colorMode.value !== 'dark'"
                    src="~/assets/shield.png"
                    class="w-4 h-4 sm:w-4 sm:h-4 cursor-pointer"
                    alt="Logo"
                />
                <img
                    v-else
                    src="~/assets/shield-white.png"
                    class="w-4 h-4 sm:w-4 sm:h-4 cursor-pointer"
                    alt="Logo"
                />
            </UTooltip>
            <button
                v-if="token"
                type="button"
                class="hidden sm:flex items-center py-1 px-3 me-1 sm:me-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
                <img
                    v-if="
                        (token && colorMode.value === 'light') ||
                        colorMode.value === 'system'
                    "
                    src="~/assets/low-battery.png"
                    class="w-3 h-3 sm:w-4 sm:h-4 cursor-pointer mr-2 sm:mr-3"
                    alt="Logo"
                />
                <img
                    v-if="token && colorMode.value !== 'light'"
                    src="~/assets/low-battery-white.png"
                    class="w-3 h-3 sm:w-4 sm:h-4 cursor-pointer mr-2 sm:mr-3"
                    alt="Logo"
                />
                {{ $t('Go Ad-Free for Free') }}
            </button>
            <button
                v-if="!token"
                type="button"
                @click="onShowLoginModal"
                class="py-1 w-[40px] sm:w-[60px] me-1 sm:me-2 text-[5px] sm:text-[13px] font-medium focus:outline-none bg-[#EDEDEF] rounded-md hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
                {{ $t('Log in') }}
            </button>
            <button
                v-if="!token"
                type="button"
                @click="onShowRegisterModal"
                class="py-1 w-[40px] sm:w-[70px] me-1 sm:me-2 text-[5px] sm:text-[13px] font-medium text-white focus:outline-none bg-customPrimary-1 rounded-md border border-gray-200 hover:bg-customPrimary-2 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-customPrimary-2"
            >
            {{ $t('Sign up') }}            </button>
            <UDropdown
                :items="configItems"
                :popper="{ placement: 'bottom-start' }"
            >
                <div v-if="!token">
                    <ColorScheme placeholder="" tag="span">
												<template #placeholder>
													<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-6"></div>
												</template>
                        <img
                            :src="isLightTheme ? '/images/profile-user.png' : '/images/profile-user-white.png'"
                            class="w-3 h-3 sm:w-6 sm:h-6 cursor-pointer"
                            alt="Logo"
                        />
                    </ColorScheme>
                </div>
                <img
                    v-else
                    src="https://images.pexels.com/photos/27603834/pexels-photo-27603834/free-photo-of-ao-dai.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    class="w-3 h-3 sm:w-6 sm:h-6 cursor-pointer object-cover rounded-full"
                    alt="Logo"
                />
            </UDropdown>
        </div>
    </div>
</template>
<script setup lang="ts">
// import { setLocale } from 'yup';

//@ts-ignore
const { onShowLoginModal, onShowRegisterModal } = defineProps([
    'onShowLoginModal',
    'onShowRegisterModal',
]);
import { useI18n } from 'vue-i18n'; 
const { $locally }: any = useNuxtApp();
const token = $locally.getItem('token');
const username = $locally.getItem('username');
const isShowMobileSearchBar = ref(false);
const colorMode = useColorMode();
<<<<<<< Updated upstream
const { locale, locales, setLocale } = useI18n();

=======
const { t, locale, locales, setLocale } = useI18n();
>>>>>>> Stashed changes
// const savedLocale = localStorage.getItem('locale');
// if (savedLocale) {
const router = useRouter();
const onToggleLanguage = () => {
<<<<<<< Updated upstream
    let newLocale;
    locale.value === 'en' ? setLocale('vi') : setLocale('en')
}
=======
    
    locale.value === 'en' ? setLocale('vi') : setLocale('en')
};
>>>>>>> Stashed changes

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

let configItems = computed(() => {
    return token
        ? [
              [
                  {
                      label: username,
                      click: () => {
                          navigateTo(`/${username}`);
                      },
                  },
              ],
              [
                  {
                      label: t('Header.desc8'),
                      click: () => {
                          message.info('Function is in progress!');
                      },
                      icon: 'material-symbols:auto-videocam-rounded',
                  },
                  {
                      label: t('Header.desc9'),
                      icon: 'material-symbols:dashboard',
                      click: () => {
                          message.info('Function is in progress!');
                      },
                  },
              ],
              [
                  {
                    label: `${t('Header.desc10')} - ${locale.value === 'en' ? t('Header.desc11') : t('Header.desc12')
                      }`,
                      click: () => {
                         onToggleLanguage();
                      },
                      icon: 'material-symbols:globe',
                  },
                  {
                      label:
                          colorMode.value === 'light'
                              ? t('Header.desc13')
                              : t('Header.desc14'),
                      click: () => {
                          onToggleMode();
                      },
                      icon:
                          colorMode.value === 'light'
                              ? 'material-symbols:dark-mode-outline'
                              : 'material-symbols-light:sunny',
                  },
                  {
                      label: t('Header.desc15'),
                      icon: 'material-symbols:earthquake',

                      click: () => {
                          message.info('Function is in progress!');
                      },
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
                      icon: 'tabler:login',
                  },
              ],
          ]
        : [
              [
                  {
                      label: `${t('Header.desc10')} - ${ locale.value === 'en' ? t('Header.desc11') : t('Header.desc12')
                      }`,
                      click: () => {
                         onToggleLanguage();
                      },
                      icon: 'material-symbols:globe',
                  },
                  {
                      label:
                          colorMode.value === 'light'
                              ? t('Header.desc13')
                              : t('Header.desc14'),
                      click: () => {
                          onToggleMode();
                      },
                      icon:
                          colorMode.value === 'light'
                              ? 'material-symbols:dark-mode-outline'
                              : 'material-symbols-light:sunny',
                  },
                  {
                      label: t('Header.desc15'),
                      icon: 'material-symbols:earthquake',
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
                      icon: 'ic:baseline-log-in',
                  },
              ],
          ];
});

const changeLanguage = (newLocale: string) => {
  locale.value = newLocale; 
};

const isLightTheme = computed(() => {
    return colorMode.value === 'light'
});
</script>
<style></style>
