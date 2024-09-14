<template>
    <div class="sidebar collapsed fixed h-full" :class="{ expanded: isOpen }">
        <div
            class="flex items-center p-2"
            :class="{
                'justify-center': !isOpen,
                'justify-between': isOpen,
            }"
        >
            <p v-if="isOpen" class="font-medium">Recommnded Channels</p>
            <UTooltip
                v-if="isOpen"
                text="Collapse"
                :popper="{ arrow: true, placement: 'right' }"
            >
                <img
                    src="~/assets/collapse-close.png"
                    class="w-4 h-4 cursor-pointer"
                    alt="Collapse"
                    @click="toggleSideBar"
                />
            </UTooltip>
            <UTooltip
                v-if="!isOpen"
                text="Collapse"
                :popper="{ arrow: true, placement: 'right' }"
            >
                <img
                    src="~/assets/collapse-open.png"
                    class="w-4 h-4 cursor-pointer"
                    alt="Collapse"
                    @click="toggleSideBar"
                />
            </UTooltip>
        </div>
        <div class="flex flex-col">
            <ChannelItem
                v-for="(item, index) in channels"
                :key="item.id"
                :item="item"
                :isOpen="isOpen"
            />
        </div>
    </div>
</template>
<script setup lang="ts">
const channels = ref([
    {
        id: 1,
        avatar: 'https://images.pexels.com/photos/28167650/pexels-photo-28167650/free-photo-of-a-woman-in-traditional-clothing-standing-in-a-doorway.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: 'Dota-1',
        description: 'Dota 1',
        followers: 2000,
        active: true,
    },
    {
        id: 2,
        avatar: 'https://images.pexels.com/photos/28167650/pexels-photo-28167650/free-photo-of-a-woman-in-traditional-clothing-standing-in-a-doorway.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: 'Dota-2',
        description: 'Dota 2',
        followers: 1000,
        active: false,
    },
    {
        id: 3,
        avatar: 'https://images.pexels.com/photos/28167650/pexels-photo-28167650/free-photo-of-a-woman-in-traditional-clothing-standing-in-a-doorway.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: 'Dota-3',
        description: 'Dota 3',
        followers: 2000,
        active: true,
    },
    {
        id: 4,
        avatar: 'https://images.pexels.com/photos/28167650/pexels-photo-28167650/free-photo-of-a-woman-in-traditional-clothing-standing-in-a-doorway.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: 'Dota-4',
        description: 'Dota 4',
        followers: 4000,
        active: true,
    },
]);

const isOpen = ref(true);
const { toggleFromParent } = defineProps(['toggleFromParent']);

const toggleSideBar = () => {
    isOpen.value = !isOpen.value;
    toggleFromParent();
};
</script>
<style>
.collapsed {
    width: 50px !important;
}

.expanded {
    width: 240px !important;
}

.sidebar {
    width: 240px; /* Set the width of the sidebar */
    top: 46px; /* Adjust the top position to accommodate the header */
    left: 0;
    bottom: 0;
    background-color: #f8f8f8; /* Sidebar background color */
    background-color: #f8f8f8;
    transition: all 0.5s ease; /* Smooth transition effect on width change */
}
</style>
