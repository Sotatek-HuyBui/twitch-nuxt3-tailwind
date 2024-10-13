<template>
    <div>
        <a-modal centered v-model:open="isOpen" :width="500" :footer="null">
            <div class="flex">
                <div
                    class="relative flex-1 px-[30px] py-[30px] dark:bg-[#18181b]"
                >
                    <div class="flex items-center justify-center">
                        <img
                            src="~/assets/twitch.png"
                            class="w-11 h-13"
                            alt="Logo"
                        />
                        <p
                            class="ml-3 text-[#0E0E10] text-[24px] font-special font-serif dark:text-white"
                        >
                            {{ $t('LoginModal.desc7') }}
                        </p>
                    </div>
                    <img
                        @click="() => (isOpen = false)"
                        src="~/assets/close-white.png"
                        class="cursor-pointer absolute top-5 right-4 w-4 h-4 block sm:hidden"
                    />

                    <a-form
                        :model="state"
                        @submit="onSubmit"
                        layout="vertical"
                        class="space-y-2 flex flex-col justify-center"
                    >
                        <div
                            :class="{ 'dark-mode': colorMode.value === 'dark' }"
                        >
                            <a-form-item
                                :label="t('LoginModal.desc5')"
                                name="email"
                                class="mb-[7px] my-5 label-bold"
                            >
                                <a-input
                                    v-model:value="state.email"
                                    :autofocus="true"
                                    class="h-[28.5px] w-[440px] pb-2 pl-2 custom-input"
                                />
                            </a-form-item>

                            <a-form-item
                                :label="t('LoginModal.desc6')"
                                name="password"
                                class="relative label-bold"
                            >
                                <a-input
                                    v-model:value="state.password"
                                    :type="showPassword ? 'text' : 'password'"
                                    class="h-[28px] w-[440px] pb-2"
                                />
                                <div
                                    v-if="showPassword"
                                    class="absolute right-2 top-[6px]"
                                >
                                    <svgo-popup-eye-close
                                        @click="onTogglePassword"
                                        class="w-5 h-5 cursor-pointer"
                                        :fontControlled="false"
                                    />
                                </div>
                                <div v-else class="absolute right-2 top-[6px]">
                                    <svgo-popup-eye-open
                                        @click="onTogglePassword"
                                        class="w-5 h-5 cursor-pointer"
                                        :fontControlled="false"
                                    />
                                </div>
                            </a-form-item>
                        </div>
                        <a
                            href="https://www.twitch.tv/user/account-recovery"
                            target="_blank"
                            class="text-[13px] text-customPrimary-1 cursor-pointer hover:text-customPrimary-2"
                        >
                            {{ $t('LoginModal.desc1') }}
                        </a>

                        <div class="flex justify-center">
                            <a-button
                                :disabled="!state.email || !state.password"
                                type="primary"
                                htmlType="submit"
                                class="mt-3 bg-[#9147ff] w-full rounded items-center justify-center hover:bg-[#9147ff] font-semibold dark:text-white disabled:bg-[#ADADB838] disabled:cursor-not-allowed"
                            >
                                {{ $t('Log in') }}
                            </a-button>
                        </div>
                    </a-form>
                    <p
                        class="text-[#5C16C5] mt-6 h-[30px] text-[14px] text-center font-medium cursor-pointer"
                        @click="onShowRegisterModal"
                    >
                        {{ $t('LoginModal.desc2') }}
                    </p>
                </div>
            </div>
        </a-modal>
    </div>
</template>

<script setup lang="ts">
import { object, string, type InferType } from 'yup';
import type { FormSubmitEvent } from 'ant-design-vue';
import { v4 as uuidv4 } from 'uuid';
const { t, locale, locales, setLocale } = useI18n();

const changeLanguage = (newLocale: string) => {
    locale.value = newLocale;
};

const schema = object({
    email: string().email('Invalid email').required('Required'),
    password: string()
        .min(8, 'Must be at least 8 characters')
        .required('Required'),
});

type Schema = InferType<typeof schema>;
const isOpen: any = defineModel();
const props = defineProps(['onShowRegisterModal']);
const colorMode = useColorMode();
const showPassword = ref(false);

const state = reactive({
    email: undefined,
    password: undefined,
});

const onTogglePassword = () => (showPassword.value = !showPassword.value);

async function onSubmit(event: FormSubmitEvent<Schema>) {
    // Do something with event.data
    try {
        localStorage.setItem('token', uuidv4());
        localStorage.setItem('username', state.email);
        window.location.reload();
    } catch (error) {
        console.error(error);
    }
}
</script>

<style>
.ant-modal .ant-modal-content {
    padding: 0px !important;
    border-radius: 4px !important;
}
.ant-modal-wrap.ant-modal-centered {
    background-color: #000000d9 !important;
}
.ant-input {
    border-color: #0e0e10;
    border-width: 1px !important;
    border-radius: 4px !important;
}

.ant-input-affix-wrapper {
    border-width: 2px !important;
    border-radius: 4px !important;
}
.label-bold .ant-form-item-label > label {
    font-weight: 600;
    font-size: 13.5px;
    font-family: Roobert, Inter, Helvetica Neue, sans-serif;
}
.label-bold .ant-form-item-label {
    padding-bottom: 4px;
}

.ant-input:hover {
    border-color: rgba(50, 50, 57, 0.62) !important;
    box-shadow: 0 0 0 2px rgba(50, 50, 57, 0.62);
}

.ant-input:focus {
    border-color: #772ce8 !important;
    box-shadow: 0 0 0 2px #772ce8;
}
.dark-mode .ant-form-item-label > label {
    color: white !important;
}
.dark-mode .ant-form-item-control-input-content {
    background-color: #e8f0fe !important;
}
</style>
