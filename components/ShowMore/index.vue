<template>
    <UDivider class="mt-3 cursor-pointer">
        <UButton
            type="submit"
            class="bg-lightBackgroundSlot shadow-none outline-none hover:text-black hover:bg-[#dedee0] items-center justify-center text-customPrimary-1 dark:text-customPrimary-0 dark:bg-[#121212] dark:hover:text-white dark:hover:bg-[#333338]"
            @click="onClick"
        >
            {{ isShowMore ? 'Show more' : 'Show All' }}
            <svg
                v-if="isShowMore"
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
            <svg
                v-else
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="none"
                viewBox="0 0 24 24"
            >
                <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m9 5 7 7-7 7"
                />
            </svg>
        </UButton>
    </UDivider>
</template>

<script setup>
const { isShowMore, onClickButton } = defineProps([
    'isShowMore',
    'onClickButton',
]);

const onClick = () => {
    if (onClickButton) {
        onClickButton();
    } else {
        message.info('Function is in progress!');
    }
};
</script>
