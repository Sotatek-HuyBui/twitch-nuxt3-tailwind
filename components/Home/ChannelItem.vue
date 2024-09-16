<template>
    <div class="cursor-pointer relative">
        <img
            class="w-full h-[160px] object-cover mb-2 rounded-md"
            :src="item.image"
        />
        <div class="absolute bg-[red] rounded-sm px-2 py-1 top-2 left-2">
            <p class="text-[10px] text-white"><b>LIVE</b></p>
        </div>
        <div>
            <div class="flex justify-between items-center">
                <img
                    class="w-10 h-10 mr-4 object-cover rounded-full"
                    :src="item.avatar"
                />
                <div class="flex-1">
                    <p class="line-clamp-1">{{ item.name }}</p>
                    <p class="text-gray-400 text-[12px]">
                        {{ item.description }}
                    </p>
                    <div class="flex items-center mt-2">
                        <div
                            v-for="tag in item.tag"
                            :key="item.id"
                            class="py-1 p-2 rounded-full bg-slate-200 mr-2"
                        >
                            <p class="text-[11px]">{{ tag.name }}</p>
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
