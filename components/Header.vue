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
                    <span class="hidden sm:inline text-[18px]">Following</span>
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
                    <span class="hidden sm:inline xl:text-[18px]">Browse</span>
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
                <svgo-header-crown />
            </UTooltip>
            <UTooltip
                text="Notifications"
                v-if="token"
                class="dark:hover:bg-darkButtonHover hover:bg-lightButtonHover mr-2 sm:mr-3 p-2 rounded-md"
            >
                <svgo-header-notification />
            </UTooltip>
            <UTooltip
                text="Whispers"
                v-if="token"
                class="dark:hover:bg-darkButtonHover hover:bg-lightButtonHover mr-2 sm:mr-3 p-2 rounded-md"
            >
                <svgo-header-whisper />
            </UTooltip>
            <UTooltip
                text="Get bits"
                v-if="token"
                class="dark:hover:bg-darkButtonHover hover:bg-lightButtonHover mr-2 sm:mr-3 p-2 rounded-md"
            >
                <svgo-header-get-bits />
            </UTooltip>
            <button
                v-if="token"
                type="button"
                class="hidden sm:flex items-center py-1 px-3 me-1 sm:me-2 text-sm font-medium text-gray-900 focus:outline-none bg-gray-200 rounded-md border border-gray-200 hover:bg-gray-300 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
                <svgo-header-low-battery
                    class="w-3 h-3 sm:w-4 sm:h-4 cursor-pointer mr-2 sm:mr-3"
                />
                Go Ad-Free for Free
            </button>
            <button
                v-if="!token"
                type="button"
                @click="onShowLoginModal"
                class="py-1 w-[40px] sm:w-[60px] me-1 sm:me-2 text-[5px] sm:text-[13px] font-medium focus:outline-none bg-[#EDEDEF] rounded-md hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
                Log In
            </button>
            <button
                v-if="!token"
                type="button"
                @click="onShowRegisterModal"
                class="py-1 w-[40px] sm:w-[70px] me-1 sm:me-2 text-[5px] sm:text-[13px] font-medium text-white focus:outline-none bg-customPrimary-1 rounded-md border border-gray-200 hover:bg-customPrimary-2 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-customPrimary-2"
            >
                Sign Up
            </button>
            <UDropdown
                :items="configItems"
                :popper="{ placement: 'bottom-start' }"
            >
                <template #item="{ item }">
                    <component
                        :is="item.icon"
                        class="w-2 sm:w-5 sm:h-5 cursor-pointer"
                        :fontControlled="false"
                        v-if="item.icon !== 'avatar'"
                    />
                    <img
                        v-else
                        src="https://images.pexels.com/photos/27603834/pexels-photo-27603834/free-photo-of-ao-dai.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        class="w-3 h-3 sm:w-6 sm:h-6 cursor-pointer object-cover rounded-full"
                        alt="Logo"
                    />
                    <span class="truncate">{{ item.label }}</span>
                </template>
                <div v-if="!token">
                    <svgo-header-user-profile />
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
import { setLocale } from 'yup';

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
const { locale, locales } = useI18n();

const onToggleMode = () => {
    colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light';
};

const childComponentRef = ref<any>(null);

const onClickSearchButton = () => {
    isShowMobileSearchBar.value = !isShowMobileSearchBar.value;
};

const generalItems = [
    [
        {
            label: 'About',
            click: () => {
                message.info('Function is in progress!');
            },
        },
        {
            label: 'Advertisers',
            click: () => {
                message.info('Function is in progress!');
            },
        },
        {
            label: 'Blogs',
            click: () => {
                message.info('Function is in progress!');
            },
        },
        {
            label: 'Developers',
            click: () => {
                message.info('Function is in progress!');
            },
        },
        {
            label: 'Download Apps',
            click: () => {
                message.info('Function is in progress!');
            },
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
            click: () => {
                message.info('Function is in progress!');
            },
        },
    ],
];

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
                      label: 'Channel',
                      click: () => {
                          message.info('Function is in progress!');
                      },
                      icon: 'svgo-header-menu-channel',
                  },
                  {
                      label: 'Video Producer',
                      click: () => {
                          message.info('Function is in progress!');
                      },
                      icon: 'svgo-header-menu-video-producer',
                  },
                  {
                      label: 'Creator Dashboard',
                      click: () => {
                          message.info('Function is in progress!');
                      },
                      icon: 'svgo-header-menu-creator-dashboard',
                  },
                  {
                      label: 'Privacy Center',
                      click: () => {
                          message.info('Function is in progress!');
                      },
                      icon: 'svgo-header-menu-privacy-center',
                  },
                  {
                      label: 'Safety',
                      click: () => {
                          message.info('Function is in progress!');
                      },
                      icon: 'svgo-header-menu-safety',
                  },
              ],
              [
                  {
                      label: 'Emote Atrribution',
                      click: () => {
                          message.info('Function is in progress!');
                      },
                      icon: 'svgo-header-menu-emote-atrribution',
                  },
              ],
              [
                  {
                      label: 'Subscriptions',
                      click: () => {
                          message.info('Function is in progress!');
                      },
                      icon: 'svgo-header-menu-subscriptions',
                  },
                  {
                      label: 'Drops & Rewards',
                      icon: 'svgo-header-menu-drop-rewards',
                      click: () => {
                          message.info('Function is in progress!');
                      },
                  },
                  {
                      label: 'Wallet',
                      icon: 'svgo-header-menu-wallet',
                      click: () => {
                          message.info('Function is in progress!');
                      },
                  },
              ],
              [
                  {
                      label: 'Settings',
                      click: () => {
                          message.info('Function is in progress!');
                      },
                      icon: 'svgo-header-menu-setting',
                  },
                  {
                      label: 'Content Tuning',
                      icon: 'svgo-header-menu-content-tuning',

                      click: () => {
                          message.info('Function is in progress!');
                      },
                  },
                  {
                      label: 'Language',
                      click: () => {
                          message.info('Function is in progress!');
                      },
                      icon: 'svgo-header-menu-language',
                  },
                  {
                      label:
                          colorMode.value === 'light'
                              ? 'Dark Theme'
                              : 'Light Theme',
                      click: () => {
                          onToggleMode();
                      },
                      icon: 'svgo-header-menu-theme',
                  },
              ],
              [
                  {
                      label: 'Log out',
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
                      label: `Language - ${
                          locale.value === 'en' ? 'English' : 'Vietnamese'
                      }`,
                      click: () => {
                          if (locale.value === 'en') {
                              setLocale('vi');
                          } else {
                              console.log(111);
                              setLocale('en');
                              console.log(locale);
                          }
                      },
                      icon: 'svgo-header-menu-language',
                  },
                  {
                      label:
                          colorMode.value === 'light'
                              ? 'Dark Theme'
                              : 'Light Theme',
                      click: () => {
                          onToggleMode();
                      },
                      icon: 'svgo-header-menu-theme',
                  },

                  {
                      label: 'Labeled Content',
                      icon: 'svgo-header-menu-labeled-content',
                      click: () => {
                          message.info('Function is in progress!');
                      },
                  },
              ],
              [
                  {
                      label: 'Log in',
                      click: () => {
                          onShowLoginModal();
                      },
                      icon: 'svgo-header-menu-login',
                  },
              ],
          ];
});
</script>
<style></style>
