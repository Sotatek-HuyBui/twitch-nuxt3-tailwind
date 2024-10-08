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
                        class="line-clamp-1 text-[8px] sm:text-[14px] mb-1 dark:text-white font-medium hover:text-customPrimary-1 dark:hover:text-customPrimary-0"
                    >
                        {{ item.name }}
                    </p>
                    <div class="flex items-center">
                        <p
                            class="line-clamp-1 text-[8px] sm:text-[14px] dark:text-[#8b8b8b] text-[#494949]"
                        >
                            {{ item.streamer }}
                        </p>
                        <img
                            src="~/assets/checklist-purple.png"
                            class="w-2 h-2 sm:w-4 sm:h-4 ml-2"
                        />
                    </div>

                    <p
                        class="text-[#494949] text-[6px] sm:text-[13px] dark:text-[#8b8b8b]"
                    >
                        {{ item.description }}
                    </p>
                    <div class="flex items-center mt-2">
                        <Tag
                            v-for="tag in item.tag"
                            :key="tag.id"
                            :item="tag"
                        />
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
