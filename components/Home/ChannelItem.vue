<template>
    <div class="relative mb-2" @click="onClick">
        <div class="stream rounded-md h-[100px] sm:h-[180px]">
            <div
                class="w-full h-full mb-2 rounded-md stream__thumbnail relative"
            >
                <img
                    class="w-full h-full object-cover rounded-md cursor-pointer"
                    :src="item.image"
                />
                <div class="absolute top-2 left-3">
                    <TagLive />
                </div>
                <div
                    class="absolute bg-[#2e2e2e] rounded-sm px-[6px] py-0 bottom-2 left-3 z-10 bg-opacity-70"
                >
                    <p class="text-[6px] sm:text-[14px] text-white text-center">
                        {{ reformatNumber(item.viewers) }} {{ $t('viewers') }}
                    </p>
                </div>
            </div>
        </div>
        <div>
            <div class="flex">
                <img
                    class="w-6 h-6 mr-1 sm:w-10 sm:h-10 sm:mr-2 object-cover rounded-full cursor-pointer"
                    @click="navigateTo(`/${item.streamer}`)"
                    :src="item.avatar"
                />
                <div class="flex-1">
                    <UTooltip :text="item.name">
                        <p
                            class="cursor-pointer line-clamp-1 text-[8px] sm:text-[14px] mb-1 dark:text-white font-semibold hover:text-customPrimary-1 dark:hover:text-customPrimary-0.5"
                        >
                            {{ item.name }}
                        </p>
                    </UTooltip>
                    <div class="flex items-center">
                        <p
                            class="line-clamp-1 text-[8px] sm:text-[14px] dark:text-[#8b8b8b] text-[#494949] cursor-pointer"
                            @click="navigateTo(`/${item.streamer}`)"
                        >
                            {{ item.streamer }}
                        </p>
                        <img
                            v-if="colorMode.value !== 'dark'"
                            src="~/assets/checklist-purple.png"
                            class="w-2 h-2 sm:w-3 sm:h-3 ml-[3px]"
                        />
                        <img
                            v-else
                            src="~/assets/checklist-black.png"
                            class="w-2 h-2 sm:w-3 sm:h-3 ml-[3px]"
                        />
                    </div>

                    <p
                        class="text-[#494949] cursor-pointer text-[6px] sm:text-[13px] dark:text-[#8b8b8b] hover:text-customPrimary-1 dark:hover:text-customPrimary-0.5"
                        @click="
                            navigateTo(
                                `/directory/category/${item.description
                                    .split(' ')
                                    .join('-')}`
                            )
                        "
                    >
                        {{ item.description }}
                    </p>
                    <div class="flex items-center mt-2 flex-wrap">
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
const colorMode = useColorMode();
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
