<template>
    <div class="cursor-pointer relative mb-2">
        <img
            class="w-full h-[100px] sm:h-[180px] object-cover mb-2 rounded-md"
            :src="item.image"
        />
        <div class="absolute bg-[red] rounded-sm px-2 py-1 top-2 left-2">
            <p class="text-[6px] sm:text-[10px] text-white"><b>LIVE</b></p>
        </div>
        <div>
            <div class="flex justify-between items-center">
                <img
                    class="w-6 h-6 mr-2 sm:w-10 sm:h-10 sm:mr-4 object-cover rounded-full"
                    :src="item.avatar"
                />
                <div class="flex-1">
                    <p class="line-clamp-1 text-[8px] sm:text-[14px]">
                        {{ item.name }}
                    </p>
                    <p class="text-gray-400 text-[6px] sm:text-[12px]">
                        {{ item.description }}
                    </p>
                    <div class="flex items-center mt-2">
                        <div
                            v-for="tag in item.tag"
                            :key="item.id"
                            class="p-1 py-[1px] sm:p-1 rounded-full bg-slate-200 mr-2"
                        >
                            <p class="text-[6px] sm:text-[10px]">
                                {{ tag.name }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['item']);
</script>
