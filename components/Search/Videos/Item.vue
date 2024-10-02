<template>
    <div class="flex mb-4">
        <img
            :src="item.image"
            class="w-[120px] h-[80px] sm:w-[200px] sm:h-[100px] mr-2 object-cover rounded-md"
        />
        <div>
            <p class="font-medium text-[14px] sm:text-[18px]">
                {{ item.name }}
            </p>
            <p
                class="text-[10px] sm:text-[14px] text-gray-700 dark:text-slate-400"
            >
                {{ item.description }}
            </p>
            <div class="flex items-center">
                <p
                    class="text-[10px] sm:text-[14px] text-gray-700 dark:text-slate-400"
                >
                    {{ item.views }} views
                </p>
                <div class="w-1 h-1 rounded-full bg-slate-400 mx-2" />
                <p
                    class="text-[10px] sm:text-[14px] text-gray-700 dark:text-slate-400"
                >
                    {{ item.date }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
const { item } = defineProps(['item']);
</script>
