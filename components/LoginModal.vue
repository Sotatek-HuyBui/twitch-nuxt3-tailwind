<template>
    <div>
        <a-modal centered v-model:open="isOpen" :width="800" :footer="null">
            <div class="flex">
                <div class="relative flex-1 p-8 dark:bg-[#1d1d1d] rounded-l-md">
                    <div class="flex items-center justify-center">
                        <img
                            src="~/assets/twitch.png"
                            class="w-6 h-6"
                            alt="Logo"
                        />
                        <p class="ml-4 text-[24px] font-medium dark:text-white">
                            Login to Twicth
                        </p>
                    </div>
                    <img
                        @click="() => (isOpen = false)"
                        src="~/assets/close-white.png"
                        v-if="colorMode.value === 'dark'"
                        class="cursor-pointer absolute top-5 right-4 w-4 h-4 block sm:hidden"
                    />
                    <UForm
                        :state="state"
                        class="space-y-2 mt-8 flex flex-col justify-center"
                        @submit="onSubmit"
                    >
                        <UFormGroup label="Username" name="email">
                            <UInput
                                v-model="state.email"
                                class="w-full focus:outline-none"
                                :autofocus="true"
                            />
                        </UFormGroup>

                        <UFormGroup
                            label="Password"
                            name="password"
                            class="relative"
                        >
                            <UInput
                                v-model="state.password"
                                :type="showPassword ? 'text' : 'password'"
                            />
                            <div
                                v-if="showPassword"
                                class="absolute right-2 top-3"
                            >
                                <img
                                    @click="onTogglePassword"
                                    v-if="colorMode.value === 'light'"
                                    src="~/assets/hide.png"
                                    class="w-3 h-3 cursor-pointer"
                                />
                                <img
                                    @click="onTogglePassword"
                                    v-else
                                    src="~/assets/hide-white.png"
                                    class="w-3 h-3 cursor-pointer"
                                />
                            </div>
                            <div v-else class="absolute right-2 top-3">
                                <img
                                    @click="onTogglePassword"
                                    v-if="colorMode.value === 'light'"
                                    src="~/assets/show.png"
                                    class="w-3 h-3 cursor-pointer"
                                />
                                <img
                                    @click="onTogglePassword"
                                    v-else
                                    src="~/assets/show-white.png"
                                    class="w-3 h-3 cursor-pointer"
                                />
                            </div>
                        </UFormGroup>
                        <a
                            href="https://www.twitch.tv/user/account-recovery"
                            target="_blank"
                            class="text-[12px] text-customPrimary-1 cursor-pointer hover:text-customPrimary-2"
                        >
                            Trouble logging in?
                        </a>

                        <div class="flex justify-center">
                            <UButton
                                :disabled="!state.email || !state.password"
                                type="submit"
                                class="mt-2 bg-customPrimary-1 w-full items-center justify-center hover:bg-customPrimary-2 dark:text-white"
                            >
                                Log in
                            </UButton>
                        </div>
                    </UForm>
                    <p
                        class="text-customPrimary-1 mt-4 text-sm text-center font-medium cursor-pointer"
                        @click="onShowRegisterModal"
                    >
                        Don't have an account? Sign up
                    </p>
                </div>
                <div
                    class="rounded-r-md relative hidden sm:flex flex-1 bg-slate-50 rounded-md flex-col items-center justify-center px-10 dark:bg-[#000000] dark:rounded-l-none"
                >
                    <img
                        src="~/assets/notification.png"
                        class="w-24 h-24 mb-3"
                    />
                    <p class="font-medium mb-2 text-[18px] dark:text-white">
                        Plan ahead for the hype
                    </p>
                    <p class="text-center text-[12px] dark:text-slate-300">
                        Get notified about upcoming streams ahead of time so you
                        can plan your snacks accordingly 😏
                    </p>
                    <img
                        @click="() => (isOpen = false)"
                        src="~/assets/close-white.png"
                        v-if="colorMode.value === 'dark'"
                        class="cursor-pointer absolute top-4 right-4 w-4 h-4"
                    />
                </div>
            </div>
        </a-modal>
    </div>
</template>

<script setup lang="ts">
import { object, string, type InferType } from 'yup';
import type { FormSubmitEvent } from '#ui/types';
//@ts-ignore
import { v4 as uuidv4 } from 'uuid';

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
}
</style>
