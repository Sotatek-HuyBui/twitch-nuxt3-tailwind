<template>
    <div>
        <a-modal centered v-model:open="isOpen" :width="800" :footer="null">
            <div class="flex">
                <div class="relative flex-1 p-8">
                    <div class="flex items-center justify-center">
                        <img
                            src="~/assets/twitch.png"
                            class="w-6 h-6"
                            alt="Logo"
                        />
                        <p class="ml-4 text-[24px] font-medium">
                            Join Twicth today
                        </p>
                    </div>
                    <UForm
                        :state="state"
                        class="space-y-2 mt-8 flex flex-col justify-center"
                        @submit="onSubmit"
                    >
                        <UFormGroup label="Username" name="email">
                            <UInput v-model="state.username" class="w-full" />
                        </UFormGroup>

                        <UFormGroup label="Password" name="password">
                            <UInput v-model="state.password" type="password" />
                        </UFormGroup>

                        <UFormGroup label="Date of birth" name="dob">
                            <div class="flex">
                                <UInputMenu
                                    v-model="monthSelected"
                                    :options="months"
                                    placeholder="Month"
                                />
                                <UInput
                                    v-model="state.password"
                                    class="mx-2"
                                    placeholder="Day"
                                />
                                <UInput
                                    v-model="state.password"
                                    placeholder="Year"
                                />
                            </div>
                        </UFormGroup>

                        <UFormGroup label="Email" name="email">
                            <UInput v-model="state.email" class="w-full" />
                        </UFormGroup>

                        <div class="flex justify-center">
                            <UButton
                                type="submit"
                                class="mt-2 bg-customPrimary-1 w-full items-center justify-center hover:bg-customPrimary-2"
                            >
                                Sign up
                            </UButton>
                        </div>
                    </UForm>
                    <p
                        class="text-customPrimary-1 mt-4 text-sm text-center font-medium cursor-pointer"
                        @click="onShowLoginModal"
                    >
                        Have an account? Log in
                    </p>
                </div>
                <div
                    class="flex-1 bg-slate-50 rounded-md hidden sm:flex flex-col items-center justify-center px-10"
                >
                    <img
                        src="~/assets/notification.png"
                        class="w-24 h-24 mb-3"
                    />
                    <p class="font-medium mb-2 text-[18px]">
                        Plan ahead for the hype
                    </p>
                    <p class="text-center text-[12px]">
                        Get notified about upcoming streams ahead of time so you
                        can plan your snacks accordingly 😏
                    </p>
                </div>
            </div>
        </a-modal>
    </div>
</template>

<script setup lang="ts">
import { object, string, type InferType } from 'yup';
import type { FormSubmitEvent } from '#ui/types';

const schema = object({
    email: string().email('Invalid email').required('Required'),
    password: string()
        .min(8, 'Must be at least 8 characters')
        .required('Required'),
});

const months = [
    'January',
    'Febuary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const monthSelected = ref(months[0]);

type Schema = InferType<typeof schema>;
const isOpen: any = defineModel();
const props = defineProps(['onShowLoginModal']);

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
