<template>
    <div class="cursor-pointer relative mb-2" @click="onClick">
        <div class="stream rounded-md h-[100px] sm:h-[180px]">
            <img
                class="w-full h-full object-cover mb-2 rounded-md stream__thumbnail"
                :src="item.image"
            />
        </div>
        <div class="absolute bg-[red] rounded-sm px-2 py-1 top-2 left-3 z-10">
            <p class="text-[6px] sm:text-[10px] text-white"><b>LIVE</b></p>
        </div>
        <div>
            <div class="flex justify-between items-center">
                <img
                    class="w-6 h-6 mr-2 sm:w-10 sm:h-10 sm:mr-4 object-cover rounded-full"
                    :src="item.avatar"
                />
                <div class="flex-1">
                    <p
                        class="line-clamp-1 text-[8px] sm:text-[14px] dark:text-white"
                    >
                        {{ item.name }}
                    </p>
                    <p class="text-gray-400 text-[6px] sm:text-[12px]">
                        {{ item.description }}
                    </p>
                    <div class="flex items-center mt-2">
                        <div
                            v-for="tag in item.tag"
                            :key="item.id"
                            @click="
                                navigateTo(
                                    `/directory/all/tags?tag=${tag.name
                                        .split(' ')
                                        .join('-')}`
                                )
                            "
                            class="cursor-pointer p-1 py-[1px] sm:px-2 rounded-full bg-slate-200 dark:bg-slate-700 mr-2"
                        >
                            <p
                                class="text-[6px] sm:text-[10px] dark:text-white"
                            >
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
const { item } = defineProps(['item']);

const onClick = () => {
    navigateTo(`/${item.streamer}/chats`);
};
</script>

<style scoped>
.stream {
    position: relative;
    display: inline-block;
    background-color: #9147ff;
    width: 100%;
}

.stream:before,
.stream:after {
    content: '';
    display: block;
    background-color: #9147ff;
    width: 12px;
    height: 12px;
    position: absolute;
    transition: all 0.15s ease;
}

.stream:before {
    top: 3px;
    left: 0;
    transform-origin: top left;
    transform: rotate(-45deg) scale(0);
}

.stream:after {
    right: 4px;
    bottom: 0;
    transform-origin: bottom right;
    transform: rotate(45deg) scale(0);
}

.stream__thumbnail {
    display: block;
    transform: translate(0, 0);
    transition: all 0.15s ease;
    position: relative;
    z-index: 10;
}

.stream:hover .stream__thumbnail {
    transform: translate(6px, -6px);
}

.stream:hover:before {
    transform: rotate(-45deg) scale(1);
}

.stream:hover:after {
    transform: rotate(45deg) scale(1);
}
</style>
