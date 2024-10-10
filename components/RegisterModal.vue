<template>
    <div>
        <a-modal centered v-model:open="isOpen" :width="800" :footer="null">
            <div class="relative flex">
                <div class="relative flex-1 p-8 dark:bg-[#1d1d1d] rounded-l-md">
                    <div class="flex items-center justify-center">
                        <img
                            src="~/assets/twitch.png"
                            class="w-6 h-6"
                            alt="Logo"
                        />
                        <p class="ml-4 text-[24px] font-medium dark:text-white">
                            {{ $t('RegisterModal.desc1') }}
                        </p>
                    </div>
                    <img
                        @click="() => (isOpen = false)"
                        src="~/assets/close-white.png"
                        v-if="colorMode.value === 'dark'"
                        class="cursor-pointer absolute top-4 right-4 w-4 h-4 block sm:hidden"
                    />
                    <UForm
                        :state="state"
                        class="space-y-2 mt-8 flex flex-col justify-center"
                        @submit="onSubmit"
                    >
                        <UFormGroup :label="$t('RegisterModal.desc6')" name="email">
                            <UInput
                                v-model="state.username"
                                class="w-full"
                                :autofocus="true"
                            />
                        </UFormGroup>

                        <UFormGroup :label="$t('RegisterModal.desc7')" name="password">
                            <UInput v-model="state.password" type="password" />
                        </UFormGroup>

                        <UFormGroup :label="$t('RegisterModal.desc8')" name="dob">
                            <div class="flex">
                                <UInputMenu
                                    class="mx-2"
                                    :options="days"
                                    :placeholder="$t('RegisterModal.desc10')"
                                    v-model="daySelected"
                                />
                                <UInputMenu
                                    v-model="monthSelected"
                                    :options="months"
                                    placeholder="Month"
                                />
                                <UInputMenu
                                    :placeholder="$t('RegisterModal.desc11')"
                                    :options="years"
                                    v-model="yearSelected"
                                />
                            </div>
                        </UFormGroup>

                        <UFormGroup :label="$t('RegisterModal.desc9')" name="email">
                            <UInput v-model="state.email" class="w-full" />
                        </UFormGroup>

                        <div class="flex justify-center">
                            <UButton
                                :disabled="
                                    !state.username ||
                                    !state.password ||
                                    !state.email ||
                                    !state.dob
                                "
                                type="submit"
                                class="mt-2 bg-customPrimary-1 w-full items-center justify-center hover:bg-customPrimary-2"
                            >
                            {{ $t('RegisterModal.desc2') }}
                            </UButton>
                        </div>
                    </UForm>
                    <p
                        class="text-customPrimary-1 mt-4 text-sm text-center font-medium cursor-pointer"
                        @click="onShowLoginModal"
                    >
                    {{ $t('RegisterModal.desc3') }}
                    </p>
                </div>
                <div
                    class="dark:bg-[#000000] rounded-r-md dark:rounded-l-none flex-1 bg-slate-50 rounded-md hidden sm:flex flex-col items-center justify-center px-10"
                >
                    <img
                        src="~/assets/notification.png"
                        class="w-24 h-24 mb-3"
                    />
                    <p class="font-medium mb-2 text-[18px] dark:text-white">
                        {{ $t('RegisterModal.desc4') }}
                    </p>
                    <p class="text-center text-[12px] dark:text-slate-300">
                        {{ $t('RegisterModal.desc5') }}
                    </p>
                </div>
                <img
                    src="~/assets/close-white.png"
                    v-if="colorMode.value === 'dark'"
                    class="cursor-pointer absolute top-4 right-4 w-4 h-4"
                    @click="() => (isOpen = false)"
                />
            </div>
        </a-modal>
    </div>
</template>

<script setup lang="ts">
import { object, string, type InferType } from 'yup';
import type { FormSubmitEvent } from '#ui/types';
const { t, locale, locales, setLocale } = useI18n();

const schema = object({
    email: string().email('Invalid email').required('Required'),
    password: string()
        .min(8, 'Must be at least 8 characters')
        .required('Required'),
});

const months = [
    t('RegisterModal.desc12'),
    t('RegisterModal.desc13'),
    t('RegisterModal.desc14'),
    t('RegisterModal.desc15'),
    t('RegisterModal.desc16'),
    t('RegisterModal.desc17'),
    t('RegisterModal.desc18'),
    t('RegisterModal.desc19'),
    t('RegisterModal.desc20'),
    t('RegisterModal.desc21'),
    t('RegisterModal.desc22'),
    t('RegisterModal.desc23'),
];

const changeLanguage = (newLocale: string) => {
  locale.value = newLocale; 
};

const days = Array.from({ length: 31 }, (_, index) => (index + 1).toString());
const years = Array.from({ length: 2024 - 1900 + 1 }, (_, index) =>
    (index + 1900).toString()
);

const monthSelected = ref(months[0]);
const daySelected = ref();
const yearSelected = ref();

type Schema = InferType<typeof schema>;
const isOpen: any = defineModel();
const props = defineProps(['onShowLoginModal']);
const colorMode = useColorMode();

const state = reactive({
    username: undefined,
    password: undefined,
    email: undefined,
    dob: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
    // Do something with event.data
    console.log(event.data);
}
</script>

<style scoped>
.ant-modal .ant-modal-content {
    padding: 0;
}
</style>
