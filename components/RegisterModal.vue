<template>
    <div>
        <a-modal centered v-model:open="isOpen" :width="500" :footer="null">
            <div class="relative flex">
                <div
                    class="relative flex-1 px-[30px] py-[30px] dark:!bg-[#18181b] rounded-l-md"
                >
                    <div class="flex items-center justify-center">
                        <img
                            src="~/assets/twitch.png"
                            class="w-11 h-13"
                            alt="Logo"
                        />
                        <p class="ml-4 text-[24px] font-medium dark:text-white">
                            Join Twitch today
                        </p>
                    </div>
                    <img
                        @click="() => (isOpen = false)"
                        src="~/assets/close-white.png"
                        v-if="colorMode.value === 'dark'"
                        class="cursor-pointer absolute top-4 right-4 w-4 h-4 block sm:hidden"
                    />

                    <a-form
                        :model="state"
                        @submit="onSubmit"
                        layout="vertical"
                        class="space-y-2 mt-8 flex flex-col justify-center"
                    >
                        <a-form-item
                            label="Username"
                            class="!mt-[7px] my-5 label-bold relative transition-all duration-200"
                            :class="isInputFocused ? 'mb-[45px]' : 'mb-[7px]'"
                        >
                            <a-input
                                v-model:value="state.username"
                                :autofocus="true"
                                @focus="isInputFocused = true"
                                @blur="isInputFocused = false"
                            />
                            <transition
                                enter-active-class="transition-all duration-200 ease-out"
                                enter-from-class="opacity-0 -translate-y-2"
                                enter-to-class="opacity-100 translate-y-0"
                                leave-active-class="transition-all duration-200 ease-in"
                                leave-from-class="opacity-100 translate-y-0"
                                leave-to-class="opacity-0 -translate-y-2"
                            >
                                <div
                                    v-if="isInputFocused"
                                    class="absolute left-0 mt-1 text-[12.5px] text-[#53535F]"
                                >
                                    This is the name people will know you by on
                                    Twitch. You can always change it later.
                                </div>
                            </transition>
                        </a-form-item>

                        <a-form-item
                            label="Password"
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

                        <a-form-item
                            label="Date of Birth"
                            class="!mt-[21px] label-bold"
                        >
                            <div class="grid grid-cols-5 gap-2">
                                <a-select
                                    v-model:value="monthSelected"
                                    placeholder="Month"
                                    :bordered="false"
                                    class="col-span-3 h-[28.5px] !border !border-[#000000d9] rounded flex items-center"
                                >
                                    <a-select-option
                                        v-for="month in months"
                                        :key="month"
                                        :value="month"
                                        class="flex items-center !text-black"
                                    >
                                        {{ month }}
                                    </a-select-option>
                                </a-select>
                                <a-select
                                    v-model:value="daySelected"
                                    placeholder="Day"
                                    :bordered="false"
                                    class="col-span-1 h-[28.5px] !border !border-[#000000d9] rounded flex items-center"
                                >
                                    <a-select-option
                                        v-for="day in days"
                                        :key="day"
                                        :value="day"
                                        class="flex items-center"
                                        >{{ day }}</a-select-option
                                    >
                                </a-select>
                                <a-select
                                    v-model:value="yearSelected"
                                    placeholder="Year"
                                    :bordered="false"
                                    class="col-span-1 h-[28.5px] !border !border-[#000000d9] rounded flex items-center"
                                >
                                    <a-select-option
                                        v-for="year in years"
                                        :key="year"
                                        :value="year"
                                        class="flex items-center"
                                        >{{ year }}</a-select-option
                                    >
                                </a-select>
                            </div>
                        </a-form-item>

                        <div
                            class="grid grid-cols-5 gap-2 !mt-[30px] max-h-[4rem]"
                        >
                            <a-form-item
                                :label="useEmail ? '' : 'Phone number'"
                                :class="useEmail ? 'col-span-5' : 'col-span-2'"
                                class="label-bold mb-0"
                            >
                                <a-select
                                    v-if="!useEmail"
                                    v-model:value="selectedCountryCode"
                                    :bordered="false"
                                    class="h-[28.5px] !border !border-[#000000d9] rounded flex items-center"
                                >
                                    <a-select-option
                                        v-for="country in countryCodes"
                                        :key="country.code"
                                        :value="country.code"
                                        class="flex items-center"
                                    >
                                        {{ country.code }} ({{
                                            country.country
                                        }})
                                    </a-select-option>
                                </a-select>
                                <div v-else>
                                    <div
                                        class="mb-[5.7px] col-span-1 flex justify-between label-bold cursor-pointer"
                                    >
                                        <p
                                            class="text-[13.5px] font-semibold font-special"
                                            font-
                                        >
                                            Email
                                        </p>
                                        <p @click="toggleUseEmail">
                                            Use phone number instead
                                        </p>
                                    </div>
                                    <a-input
                                        v-model:value="state.email"
                                        :autofocus="true"
                                        type="email"
                                        class="h-[28.5px]"
                                    />
                                </div>
                            </a-form-item>

                            <a-form-item
                                v-if="!useEmail"
                                name="phoneNumber"
                                class="col-span-3 label-bold"
                            >
                                <div
                                    class="mb-[5.7px] flex justify-end label-bold cursor-pointer"
                                    @click="toggleUseEmail"
                                >
                                    Use email instead
                                </div>
                                <a-input
                                    v-model:value="state.phoneNumber"
                                    :autofocus="true"
                                    type="tel"
                                    class="h-[28.5px] pb-2 pl-2 custom-input"
                                />
                            </a-form-item>
                        </div>

                        <p
                            v-if="!useEmail"
                            class="text-[13px] text-gray-500 mt-2"
                        >
                            Twitch may use your phone number to call or send
                            text messages with information regarding your
                            account.
                        </p>

                        <p class="text-[13px] text-gray-500 !mt-4">
                            By clicking Sign Up, you are agreeing to Twitch's
                            <a
                               class="text-[#5C16C5] underline hover:text-[#5C16C5] hover:underline"
                                href="https://www.twitch.tv/p/vi-vn/legal/terms-of-service/"
                            >
                                Terms of Service</a
                            >
                            and are acknowledging our
                            <a
                            class="text-[#5C16C5] underline hover:text-[#5C16C5] hover:underline"
                                href="https://www.twitch.tv/p/vi-vn/legal/privacy-notice/"
                                >Privacy Notice</a
                            >
                            applies.
                        </p>

                        <div class="flex justify-center !mt-6">
                            <a-button
                                type="primary"
                                class="w-full  !border-none"
                                :disabled="
                                    !state.username ||
                                    !state.password ||
                                    !state.email ||
                                    !state.dob
                                "
                                @click="onSubmit"
                            >
                                Sign up
                            </a-button>
                        </div>
                    </a-form>

                    <p
                        class="text-customPrimary-1 mt-4 text-sm text-center font-medium cursor-pointer"
                        @click="onShowLoginModal"
                    >
                        Have an account? Log in
                    </p>
                </div>
            </div>
        </a-modal>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useColorMode } from '@vueuse/core';

const months = [
    'January',
    'February',
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
const days = Array.from({ length: 31 }, (_, index) => (index + 1).toString());
const years = Array.from({ length: 2024 - 1900 + 1 }, (_, index) =>
    (index + 1900).toString()
);
const useEmail = ref(false);
const selectedCountryCode = ref('+84');

const countryCodes = [
    { code: '+84', country: 'Vietnam' },
    { code: '+1', country: 'USA' },
    { code: '+81', country: 'Japan' },
    { code: '+82', country: 'South Korea' },
    { code: '+66', country: 'Thailand' },
];
const toggleUseEmail = () => {
    useEmail.value = !useEmail.value;
    if (useEmail.value) {
        state.phoneNumber = '';
    } else {
        state.email = '';
    }
};

const showPassword = ref(false);
const isInputFocused = ref(true);
const monthSelected = ref();
const daySelected = ref();
const yearSelected = ref();

const isOpen: any = defineModel();
const colorMode = useColorMode();

const onTogglePassword = () => (showPassword.value = !showPassword.value);

const state = reactive({
    username: '',
    password: '',
    email: '',
    dob: '',
});

function onSubmit() {
    // Handle form submission
    console.log(state);
}
</script>

<style>
.ant-modal .ant-modal-content {
    padding: 0;
}
.ant-select:hover {
    border-color: rgba(50, 50, 57, 0.62) !important;
    box-shadow: 0 0 0 2px rgba(50, 50, 57, 0.62);
}
.ant-select:focus-within {
    border-color: #772ce8 !important;
    box-shadow: 0 0 0 2px #772ce8;
}
.ant-select-selection-placeholder {
    color: black !important;
}
</style>
