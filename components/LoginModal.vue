<template>
    <div>
        <UModal v-model="isOpen">
            <div class="p-8 relative">
                <div class="absolute right-6 top-6">
                    <img
                        src="~/assets/close.png"
                        class="w-4 h-4 cursor-pointer"
                        @click="
                            () => {
                                isOpen = false;
                            }
                        "
                    />
                </div>
                <div class="flex items-center justify-center">
                    <img src="~/assets/twitch.png" class="w-6 h-6" alt="Logo" />
                    <p class="ml-4 text-[24px] font-medium">Login to Twicth</p>
                </div>
                <UForm
                    :state="state"
                    class="space-y-2 mt-8 flex flex-col justify-center"
                    @submit="onSubmit"
                >
                    <UFormGroup label="Username" name="email">
                        <UInput
                            v-model="state.email"
                            class="w-full focus:outline-none"
                        />
                    </UFormGroup>

                    <UFormGroup label="Password" name="password">
                        <UInput v-model="state.password" type="password" />
                    </UFormGroup>
                    <p class="text-[12px] text-customPrimary-1">
                        Trouble logging in?
                    </p>

                    <div class="flex justify-center">
                        <UButton
                            type="submit"
                            class="mt-2 bg-customPrimary-1 w-full items-center justify-center hover:bg-customPrimary-2"
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
        </UModal>
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

const state = reactive({
    email: undefined,
    password: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
    // Do something with event.data
    try {
        console.log(event.data);
        localStorage.setItem('token', uuidv4());
        window.location.reload();
    } catch (error) {
        console.error(error);
    }
}
</script>
