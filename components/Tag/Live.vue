<template>
    <div class="bg-[red] rounded-md px-[6px] py-0 z-10">
        <p
            class="text-[6px] sm:text-[14px] text-white font-medium text-center"
            :class="{
                'sm:text-[8px]': isSmallText,
            }"
        >
            LIVE
        </p>
    </div>
</template>

<script setup>
const { isSmallText } = defineProps(['isSmallText']);
</script>
