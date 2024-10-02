<template>
    <div
        class="hidden input-bar fixed bg-white border border-l-[1px] sm:flex flex-col expanded-input dark:border-gray-800"
        v-if="isOpen"
    >
        <div
            class="flex justify-between items-center p-3 border border-b-[1px] border-l-0 dark:bg-slate-900 dark:border-gray-800"
        >
            <!-- <UTooltip
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
            </UTooltip> -->
            <p class="text-[14px] font-medium">STREAM CHAT</p>
            <img
                src="~/assets/user.png"
                class="w-4 h-4 cursor-pointer"
                alt="Collapse"
            />
        </div>
        <div class="flex-1 p-4 message-list overflow-auto dark:bg-slate-900">
            <p v-if="!messages.length">Welcome to the chat!</p>
            <ProfileChatMessageItem
                v-for="item in messages"
                :key="item.id"
                :item="item"
            />
        </div>
        <div class="p-4 dark:bg-slate-900" :class="{ 'pb-20': !token }">
            <input
                type="search"
                class="block py-1 px-2 w-full z-20 text-[8px] sm:text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-customPrimary-1 focus:ring-customPrimary-1 focus:border-customPrimary-1 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Enter something.."
                v-model="messageInput"
                @keyup.enter="handleEnterKey"
                autocomplete="off"
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
                    :disabled="!messageInput"
                    @click="onSendMessage(true)"
                    variant="solid"
                    class="bg-customPrimary-1 text-white w-[70px] items-center justify-center dark:text-white"
                    >Chat</UButton
                >
            </div>
        </div>
    </div>
</template>

<script setup>
import { dummyAvatars } from '@/data/index';
const { isOpen, toggleSideBar } = defineProps(['isOpen', 'toggleSideBar']);
const { $locally } = useNuxtApp();
const token = $locally.getItem('token');

const messageInput = ref('');
const messages = ref([
    {
        id: 1,
        avatar: 'https://images.pexels.com/photos/27603834/pexels-photo-27603834/free-photo-of-ao-dai.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        message: 'Hello every body!',
        isMe: true,
    },
]);

const handleEnterKey = (event) => {
    if (event.key === 'Enter' && messageInput.value) {
        onSendMessage(true);
    }
};

const generateRandomString = () => {
    const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;

    const length = Math.floor(Math.random() * 30) + 1;

    for (let i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
    }

    return result;
};

const onSendMessage = (isMe, message) => {
    messages.value = [
        ...messages.value,
        {
            id: messages.value.length + 1,
            avatar: dummyAvatars[Math.floor(Math.random() * 5)],
            message: message || messageInput.value,
            isMe: isMe,
        },
    ];
    messageInput.value = '';
};

onMounted(() => {
    setInterval(() => {
        onSendMessage(false, generateRandomString());
    }, 15000);
});
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
.message-list::-webkit-scrollbar {
    width: 0;
    height: 0;
}
</style>
