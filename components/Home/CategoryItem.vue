<template>
    <div class="mb-4">
        <div
            class="stream rounded-md h-[120px] sm:h-[180px] xl:h-[190px] 2xl:h-[200px] cursor-pointer"
            @click="
                navigateTo(
                    `/directory/category/${item.name.split(' ').join('-')}`
                )
            "
        >
            <img
                class="w-full stream__thumbnail h-full object-cover mb-2 rounded-md"
                :src="item.image"
            />
        </div>
        <p
            class="line-clamp-1 text-[8px] sm:text-[14px] font-medium dark:text-white"
        >
            {{ item.name }}
        </p>
        <p class="text-gray-400 text-[6px] sm:text-[12px]">
            {{ $t('Viewer',  {count:reformatNumber(item.viewers)}, (item.viewers) ) }}
        </p>
        <div class="flex items-center mt-2">
            <Tag v-for="tag in item.tag" :key="tag.id" :item="tag" />
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['item']);

function reformatNumber(number: number): string {
  if (number >= 1000) {
    return parseFloat((number / 1000).toFixed(1)).toString() + 'K'; 
  }
  return number.toString(); 
}

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
    top: 3.5px;
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
