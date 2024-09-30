<template>
    <div
        class="hidden input-bar fixed bg-white border border-l-[1px] sm:flex flex-col expanded-input"
        v-if="isOpen"
    >
        <div
            class="flex justify-between items-center p-3 border border-b-[1px] border-l-0"
        >
            <UTooltip
                v-if="isOpen"
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
            <p class="text-[14px] font-medium">STREAM CHAT</p>
            <img
                src="~/assets/user.png"
                class="w-4 h-4 cursor-pointer"
                alt="Collapse"
                @click="toggleSideBar"
            />
        </div>
        <div class="flex-1 p-4">Welcome to the chat room!</div>
        <div class="p-4">
            <UInput
                class="w-full focus:outline-none"
                placeholder="Enter something.."
                icon="i-heroicons-camera-solid"
            />
            <div class="flex justify-end items-center mt-4">
                <UTooltip
                    v-if="isOpen"
                    text="Turn on the shield mode"
                    :popper="{ arrow: true, placement: 'right' }"
                >
                    <img
                        src="~/assets/shield.png"
                        class="w-4 h-4 cursor-pointer mr-3"
                        alt="Collapse"
                    />
                </UTooltip>
                <UTooltip
                    v-if="isOpen"
                    text="Mod view"
                    :popper="{ arrow: true, placement: 'right' }"
                >
                    <img
                        src="~/assets/sword.png"
                        class="w-4 h-4 cursor-pointer mr-3"
                        alt="Collapse"
                    />
                </UTooltip>
                <UTooltip
                    v-if="isOpen"
                    text="Chat highlight settings"
                    :popper="{ arrow: true, placement: 'right' }"
                >
                    <img
                        src="~/assets/favorite.png"
                        class="w-4 h-4 cursor-pointer mr-3"
                        alt="Collapse"
                    />
                </UTooltip>
                <UTooltip
                    v-if="isOpen"
                    text="Chat settings"
                    :popper="{ arrow: true, placement: 'right' }"
                >
                    <img
                        src="~/assets/settings.png"
                        class="w-4 h-4 cursor-pointer mr-3"
                        alt="Collapse"
                    />
                </UTooltip>
                <UButton
                    variant="solid"
                    class="bg-customPrimary-1 text-white w-[70px] items-center justify-center"
                    >Chat</UButton
                >
            </div>
        </div>
    </div>
</template>

<script setup>
const isOpen = ref(true);
const { toggleFromParent } = defineProps(['toggleFromParent']);

const toggleSideBar = () => {
    isOpen.value = !isOpen.value;
    toggleFromParent();
};
</script>

<style>
.collapsed-input {
    width: 0px !important;
}

.expanded-input {
    width: 350px !important;
}

.input-bar {
    top: 46px; /* Adjust the top position to accommodate the header */
    right: 0;
    bottom: 0;
    transition: all 0.5s ease; /* Smooth transition effect on width change */
}
</style>
