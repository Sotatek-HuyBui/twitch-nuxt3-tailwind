<template>
    <div
        class="bg-white flex justify-between px-3 py-1 sm:py-2 border-b-2 border-gray-100 z-10"
    >
        <div class="flex-1 flex items-center">
            <NuxtLink to="/"
                ><img
                    src="~/assets/twitch.png"
                    class="w-4 h-4 sm:w-6 sm:h-6"
                    alt="Logo"
            /></NuxtLink>
            <p
                v-if="token"
                class="cursor-pointer ml-4 font-medium hover:text-customPrimary-1 text-[18px]"
                :class="{
                    'text-customPrimary-1 border-b border-customPrimary-1':
                        $route.path.includes('/directory/following'),
                }"
                @click="() => navigateTo('/directory/following')"
            >
                <span class="hidden sm:inline text-[14px]">Following</span>
                <UTooltip text="Following">
                    <img
                        src="~/assets/heart.png"
                        class="w-3 h-3 cursor-pointer inline sm:hidden mt-[-4px]"
                        alt="Three dot menu"
                    />
                </UTooltip>
            </p>
            <p
                class="mx-4 cursor-pointer font-medium hover:text-customPrimary-1 text-[18px]"
                @click="() => navigateTo('/directory')"
                :class="{
                    'text-customPrimary-1 border-b border-customPrimary-1':
                        $route.path.includes('/directory') &&
                        $route.params.directory !== 'following',
                }"
            >
                <span class="hidden sm:inline text-[14px]">Browse</span>
                <UTooltip text="Directory">
                    <img
                        src="~/assets/copy-document.png"
                        class="w-3 h-3 cursor-pointer inline sm:hidden mt-[-4px]"
                        alt="Three dot menu"
                    />
                </UTooltip>
            </p>
            <UDropdown
                :items="generalItems"
                :popper="{ placement: 'bottom-start' }"
            >
                <UTooltip text="More options">
                    <img
                        src="~/assets/three-dot-menu.png"
                        class="w-2 h-2 sm:w-3 sm:h-3 cursor-pointer"
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
            <UTooltip text="Prime gaming benefits">
                <img
                    src="~/assets/crown.png"
                    class="w-3 h-3 sm:w-4 sm:h-4 cursor-pointer mr-2 sm:mr-3"
                    alt="Logo"
                />
            </UTooltip>
            <UTooltip text="Notifications" v-if="token">
                <img
                    src="~/assets/bell.png"
                    class="w-3 h-3 sm:w-4 sm:h-4 cursor-pointer mr-2 sm:mr-3"
                    alt="Logo"
                />
            </UTooltip>
            <UTooltip text="Whispers" v-if="token">
                <img
                    src="~/assets/conversation.png"
                    class="w-3 h-3 sm:w-4 sm:h-4 cursor-pointer mr-2 sm:mr-3"
                    alt="Logo"
                />
            </UTooltip>
            <UTooltip text="Go Ad-Free for Free" v-if="token">
                <img
                    src="~/assets/battery.png"
                    class="w-3 h-3 sm:w-4 sm:h-4 cursor-pointer mr-2 sm:mr-3 block sm:hidden"
                    alt="Logo"
                />
            </UTooltip>
            <button
                v-if="token"
                type="button"
                @click="onShowLoginModal"
                class="hidden sm:flex items-center py-1 px-3 me-1 sm:me-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
                <img
                    src="~/assets/low-battery.png"
                    class="w-3 h-3 sm:w-4 sm:h-4 cursor-pointer mr-2 sm:mr-3"
                    alt="Logo"
                    v-if="token"
                />
                Go Ad-Free for Free
            </button>
            <button
                v-if="!token"
                type="button"
                @click="onShowLoginModal"
                class="py-1 w-[40px] sm:px-3 sm:w-[70px] me-1 sm:me-2 text-[5px] sm:text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
                Log In
            </button>
            <button
                v-if="!token"
                type="button"
                @click="onShowRegisterModal"
                class="py-1 w-[40px] sm:px-3 sm:w-[80px] me-1 sm:me-2 text-[5px] sm:text-sm font-medium text-white focus:outline-none bg-customPrimary-1 rounded-md border border-gray-200 hover:bg-customPrimary-2 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
                Sign Up
            </button>
            <UDropdown
                :items="configItems"
                :popper="{ placement: 'bottom-start' }"
            >
                <img
                    src="~/assets/profile-user.png"
                    class="w-3 h-3 sm:w-6 sm:h-6 cursor-pointer"
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

const { $locally }: any = useNuxtApp();
const token = $locally.getItem('token');
const isShowMobileSearchBar = ref(false);

const childComponentRef = ref<any>(null);

const onClickSearchButton = () => {
    isShowMobileSearchBar.value = !isShowMobileSearchBar.value;
};

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

const configItems = token
    ? [
          [
              {
                  label: 'Jamorant742',
                  click: () => {
                      navigateTo(`/jamorant742`);
                  },
              },
          ],
          [
              {
                  label: 'Video Producer',
              },
              {
                  label: 'Creator Dashboard',
              },
          ],
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
      ]
    : [
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
</script>
<style></style>
