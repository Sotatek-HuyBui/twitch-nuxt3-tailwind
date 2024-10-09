<template>
    <UDivider class="mt-3 cursor-pointer">
        <UButton
            type="submit"
            class="bg-white shadow-none outline-none hover:text-black hover:bg-[#dedee0] items-center justify-center text-customPrimary-1 dark:text-customPrimary-0 dark:bg-[#121212] dark:hover:text-white dark:hover:bg-[#333338]"
            @click="onClickButton || message.info('Function is in progress!')"
        >
            {{ isShowMore ? 'Show more' : 'Show All' }}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
            >
                <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="m19 9l-7 6l-7-6"
                ></path>
            </svg>
        </UButton>
    </UDivider>
</template>

<script setup>
const { isShowMore, onClickButton } = defineProps([
    'isShowMore',
    'onClickButton',
]);
</script>
