<template>
    <div class="bg-[#EB0400] rounded-md px-[6px] py-0 z-10">
        <p
            class="text-[6px] sm:text-[13px] text-white font-normal text-center leading-[20px]"
            :class="{
                'sm:text-[6px]': isSmallText,
            }"
        >
            LIVE
        </p>
    </div>
</template>

<script setup>
const { isSmallText } = defineProps(['isSmallText']);
</script>
