<template>
    <div
        @click="
            navigateTo(
                `/directory/all/tags?tag=${item.name.split(' ').join('-')}`
            )
        "
        class="cursor-pointer px-2 rounded-full bg-[#E7E7EA] hover:bg-[#dedee0] dark:hover:bg-[#333338] mr-1 dark:bg-[#29292E]"
    >
        <p
            class="text-[8px] sm:text-[12px] text-[#53535F] dark:text-[#A6A6B2] font-medium"
        >
            {{ item.name }}
        </p>
    </div>
</template>

<script setup>
const { item } = defineProps(['item']);
</script>
