<template>
    <div
        class="hidden input-bar fixed bg-white border border-l-[1px] sm:flex flex-col expanded-input dark:border-gray-800"
        v-if="isOpen"
    >
        <div
            class="flex justify-between p-3 items-center border border-b-[1px] border-l-0 dark:bg-[#1c1c1c] dark:border-gray-800"
        >
            <UTooltip
                v-if="isOpen"
                text="Collapse"
                :popper="{ arrow: true, placement: 'right' }"
                class="p-2 rounded-md dark:hover:bg-slate-800 hover:bg-slate-200"
            >
                <img
                    v-if="colorMode.value !== 'dark'"
                    src="~/assets/collapse-open.png"
                    class="w-4 h-4 cursor-pointer"
                    alt="Collapse"
                    @click="toggleSideBar"
                />
                <img
                    v-else
                    src="~/assets/collapse-open-white.png"
                    class="w-4 h-4 cursor-pointer"
                    alt="Collapse"
                    @click="toggleSideBar"
                />
            </UTooltip>
            <p class="text-[14px] font-medium">STREAM CHAT</p>
            <div v-if="isShowMessages">
                <UTooltip
                    text="Commnunity"
                    :popper="{ arrow: true, placement: 'right' }"
                    class="p-2 rounded-md dark:hover:bg-slate-800 hover:bg-slate-200"
                >
                    <img
                        v-if="
                            colorMode.value === 'light' ||
                            colorMode.value === 'system'
                        "
                        src="~/assets/user.png"
                        class="w-4 h-4 cursor-pointer"
                        @click="toggleShowMessage"
                    />
                    <img
                        v-else
                        src="~/assets/user-white.png"
                        class="w-4 h-4 cursor-pointer"
                        @click="toggleShowMessage"
                    />
                </UTooltip>
            </div>
            <div v-else>
                <UTooltip
                    text="Go back to chat"
                    :popper="{ arrow: true, placement: 'right' }"
                >
                    <img
                        v-if="
                            colorMode.value === 'light' ||
                            colorMode.value === 'system'
                        "
                        src="~/assets/conversation.png"
                        class="w-4 h-4 cursor-pointer"
                        @click="toggleShowMessage"
                    />
                    <img
                        v-else
                        src="~/assets/conversation-white.png"
                        class="w-4 h-4 cursor-pointer"
                        @click="toggleShowMessage"
                    />
                </UTooltip>
            </div>
        </div>
        <div
            class="flex-1 p-0 message-list overflow-auto dark:bg-[#1c1c1c]"
            :class="{ 'p-4': isShowMessages }"
        >
            <p v-if="!messages.length && isShowMessages">
                Welcome to the chat!
            </p>
            <ProfileChatMessageItem
                v-if="isShowMessages"
                v-for="item in messages"
                :key="item.id"
                :item="item"
                :onToggleShowDetail="onToggleShowDetail"
                :onCloseShowingDetail="onCloseShowingDetail"
            />
            <ProfileChatGroup v-else />
        </div>
        <div
            v-if="isShowMessages"
            class="p-4 dark:bg-[#1c1c1c]"
            :class="{ 'pb-20': !token }"
        >
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
                        v-if="colorMode.value !== 'dark'"
                        src="~/assets/shield.png"
                        class="w-4 h-4 cursor-pointer mr-3"
                        alt="Collapse"
                    />
                    <img
                        v-else
                        src="~/assets/shield-white.png"
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
                        v-if="colorMode.value !== 'dark'"
                        src="~/assets/sword.png"
                        class="w-4 h-4 cursor-pointer mr-3"
                        alt="Collapse"
                    />
                    <img
                        v-else
                        src="~/assets/sword-white.png"
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
                        v-if="colorMode.value !== 'dark'"
                        src="~/assets/favorite.png"
                        class="w-4 h-4 cursor-pointer mr-3"
                        alt="Collapse"
                    />
                    <img
                        v-else
                        src="~/assets/favourites-white.png"
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
                        v-if="colorMode.value !== 'dark'"
                        src="~/assets/settings.png"
                        class="w-4 h-4 cursor-pointer mr-3"
                        alt="Collapse"
                    />
                    <img
                        v-else
                        src="~/assets/settings-white.png"
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
import { dummySidebarChannels, dummyComments } from '@/data/index';
import { v4 as uuidv4 } from 'uuid';
const { isOpen, onShowLoginModal, toggleSideBar } = defineProps([
    'isOpen',
    'onShowLoginModal',
    'toggleSideBar',
]);
const { $locally } = useNuxtApp();
const token = $locally.getItem('token');
const colorMode = useColorMode();

const messageInput = ref('');
const isShowMessages = ref(true);
const messages = ref([]);

const toggleShowMessage = () => {
    isShowMessages.value = !isShowMessages.value;
};

const handleEnterKey = (event) => {
    if (event.key === 'Enter' && messageInput.value) {
        onSendMessage(true);
    }
};

const onSendMessage = (isMe, message) => {
    if (token || (!token && !isMe)) {
        const randomIndex = Math.floor(Math.random() * 6);
        messages.value = [
            ...messages.value,
            {
                id: uuidv4(),
                isShowingDetail: false,
                avatar: isMe
                    ? 'https://images.pexels.com/photos/27603834/pexels-photo-27603834/free-photo-of-ao-dai.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    : dummySidebarChannels[randomIndex].avatar,
                sender: dummySidebarChannels[randomIndex],
                message: message || messageInput.value,
                isMe: isMe,
            },
        ];
    } else {
        onShowLoginModal();
    }
    messageInput.value = '';
};

const onToggleShowDetail = (id) => {
    messages.value = messages.value.map((item) => {
        if (item.id === id) {
            return { ...item, id: uuidv4(), isShowingDetail: true };
        }
        return { ...item, id: uuidv4(), isShowingDetail: false };
    });
};

const onCloseShowingDetail = () => {
    messages.value = messages.value.map((item) => ({
        ...item,
        id: uuidv4(),
        isShowingDetail: false,
    }));
};

onMounted(() => {
    setInterval(() => {
        onSendMessage(false, dummyComments[Math.floor(Math.random() * 100)]);
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
