<template>
    <div class="dark:bg-slate-900">
        <div
            class="flex w-full justify-between items-center border-b-[1px] border-b-slate-200 dark:border-b-slate-800 p-3"
        >
            <UInput
                icon="i-heroicons-magnifying-glass-20-solid"
                size="sm"
                color="white"
                :trailing="false"
                placeholder="Filter..."
                class="w-full"
                v-model="search"
                :ui="{ icon: { trailing: { pointer: '' } } }"
                name="search"
            >
                <template #trailing>
                    <UButton
                        v-show="search !== ''"
                        color="gray"
                        variant="link"
                        icon="i-heroicons-x-mark-20-solid"
                        :padded="false"
                        @click="search = ''"
                    />
                </template>
            </UInput>
        </div>
        <div
            v-for="item in data"
            class="border-b-[1px] border-b-slate-200 dark:border-b-slate-800 p-3 w-full"
        >
            <div class="w-full">
                <div class="flex justify-between items-center w-full mb-2">
                    <div class="flex items-center">
                        <img :src="item.icon" class="w-4 h-4 mr-2" />
                        <p class="m-0">{{ item.name }}</p>
                    </div>
                    <div class="flex items-center">
                        <UTooltip
                            :text="item.tooltip"
                            :popper="{ arrow: true, placement: 'bottom' }"
                            class="w-full"
                        >
                            <img
                                v-if="colorMode.value === 'light'"
                                src="~/assets/information.png"
                                class="w-4 h-4 mr-2"
                            />
                            <img
                                v-else
                                src="~/assets/information-white.png"
                                class="w-4 h-4 mr-2"
                            />
                        </UTooltip>
                        <div v-if="item.isShowChildren">
                            <img
                                v-if="colorMode.value === 'light'"
                                src="~/assets/arrow-up.png"
                                class="w-4 h-4 mr-2 cursor-pointer"
                                @click="onToggleGroup(item.id)"
                            />
                            <img
                                v-else
                                src="~/assets/arrow-up-white.png"
                                class="w-4 h-4 mr-2 cursor-pointer"
                                @click="onToggleGroup(item.id)"
                            />
                        </div>
                        <div v-else>
                            <img
                                v-if="colorMode.value === 'light'"
                                src="~/assets/arrow-down.png"
                                class="w-4 h-4 mr-2 cursor-pointer"
                                @click="onToggleGroup(item.id)"
                            />
                            <img
                                v-else
                                src="~/assets/arrow-down-white.png"
                                class="w-4 h-4 mr-2 cursor-pointer"
                                @click="onToggleGroup(item.id)"
                            />
                        </div>
                    </div>
                </div>
                <div
                    v-for="child in item.children"
                    v-if="item.isShowChildren"
                    class="relative"
                >
                    <p
                        class="font-medium hover:underline cursor-pointer py-1 -z-1"
                        @click="onToggleGroupItem(item.id, child.id)"
                    >
                        {{ child.name }}
                    </p>
                    <div
                        v-if="child.isShowingDetail"
                        class="z-2 absolute w-full top-8 left-0 right-0 rounded-md bg-slate-200 shadow-md z-10"
                    >
                        <div class="relative w-full h-[60px]">
                            <img
                                class="w-full h-full object-cover rounded-t-md"
                                :src="item.background_image"
                            />
                            <div class="flex absolute left-2 top-2 right-2">
                                <img
                                    class="w-10 h-10 rounded-full mr-2 object-cover"
                                    :src="item.avatar"
                                />
                                <div class="flex justify-between flex-1">
                                    <p class="text-white">{{ item.name }}</p>
                                    <img
                                        src="~/assets/close-white.png"
                                        class="w-4 h-4 mr-2 cursor-pointer"
                                        @click="onCloseGroupItem"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="bg-white p-2 rounded-b-md">
                            <p class="text-sm mb-3 font-medium">BADGES</p>
                            <div class="flex">
                                <div v-for="badge in child.badges">
                                    <UTooltip
                                        :text="badge.name"
                                        :popper="{
                                            arrow: true,
                                            placement: 'top',
                                        }"
                                    >
                                        <div
                                            class="flex items-center justify-center p-1 border border-slate-200 mr-1 rounded-md"
                                        >
                                            <img
                                                :src="badge.icon"
                                                class="w-5 h-5"
                                            />
                                        </div>
                                    </UTooltip>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            v-if="data.length === 0"
            class="border-b-[1px] border-b-slate-200 dark:border-b-slate-800 p-3"
        >
            <p class="text-sm text-slate-800">
                Sorry, we couldn't find anyone named "{{ search }}". Only some
                members of the community are listed here.
            </p>
        </div>
    </div>
</template>
<script setup>
import { dummyGroups } from '@/data/index.ts';
const colorMode = useColorMode();
const data = ref(dummyGroups);
const defaultData = ref(dummyGroups);
const search = ref('');

const onToggleGroup = (targetId) => {
    data.value = data.value.map((item) => {
        if (item.id === targetId) {
            return { ...item, isShowChildren: !item.isShowChildren };
        }
        return item;
    });
};

const onCloseGroupItem = () => {
    data.value = data.value.map((item) => {
        const updatedChildten = item.children.map((child) => {
            return { ...child, isShowingDetail: false };
        });
        return { ...item, children: updatedChildten };
    });
};

const onToggleGroupItem = (groupId, groupItemId) => {
    data.value = data.value.map((item) => {
        if (item.id === groupId) {
            const updatedChildren = item.children.map((child) => {
                if (child.id === groupItemId) {
                    return {
                        ...child,
                        isShowingDetail: !child.isShowingDetail,
                    };
                } else {
                    return { ...child, isShowingDetail: false };
                }
            });
            return { ...item, children: updatedChildren };
        } else {
            const updatedChildren = item.children.map((child) => {
                return { ...child, isShowingDetail: false };
            });
            return { ...item, children: updatedChildren };
        }
    });
};

watch(
    () => search.value,
    () => {
        console.log(111);
        if (!search.value) {
            data.value = defaultData.value;
        }

        data.value = defaultData.value
            .map((item) => {
                const updatedChildren = item.children.filter((child) =>
                    child.name
                        .toLowerCase()
                        .includes(search.value.toLowerCase())
                );
                return { ...item, children: updatedChildren };
            })
            .filter((item) => item.children.length > 0);
    }
);
</script>
