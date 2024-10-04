<template>
    <div
        class="hidden input-bar fixed bg-white border border-l-[1px] sm:flex flex-col expanded-input dark:border-gray-800"
        v-if="isOpen"
    >
        <div
            class="flex justify-between p-3 items-center border border-b-[1px] border-l-0 dark:bg-slate-900 dark:border-gray-800"
        >
            <UTooltip
                v-if="isOpen"
                text="Collapse"
                :popper="{ arrow: true, placement: 'right' }"
            >
                <img
                    v-if="
                        colorMode.value === 'light' ||
                        colorMode.value === 'system'
                    "
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
            </div>
            <div v-else>
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
            </div>
        </div>
        <div
            class="flex-1 p-0 message-list overflow-auto dark:bg-slate-900"
            :class="{ 'p-4': isShowMessages }"
        >
            <p v-if="!messages.length">Welcome to the chat!</p>
            <ProfileChatMessageItem
                v-if="isShowMessages"
                v-for="item in messages"
                :key="item.id"
                :item="item"
            />
            <ProfileChatGroup v-else />
        </div>
        <div
            v-if="isShowMessages"
            class="p-4 dark:bg-slate-900"
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
import { dummyAvatars, dummyComments } from '@/data/index';
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
const messages = ref([
    {
        id: 1,
        avatar: 'https://images.pexels.com/photos/27603834/pexels-photo-27603834/free-photo-of-ao-dai.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        message: 'Hello every body!',
        isMe: true,
    },
]);

const toggleShowMessage = () => {
    isShowMessages.value = !isShowMessages.value;
};

const handleEnterKey = (event) => {
    if (event.key === 'Enter' && messageInput.value) {
        onSendMessage(true);
    }
};

const onSendMessage = (isMe, message) => {
    if (token) {
        messages.value = [
            ...messages.value,
            {
                id: messages.value.length + 1,
                avatar: isMe
                    ? 'https://images.pexels.com/photos/27603834/pexels-photo-27603834/free-photo-of-ao-dai.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    : dummyAvatars[Math.floor(Math.random() * 5)],
                message: message || messageInput.value,
                isMe: isMe,
            },
        ];
    } else {
        onShowLoginModal();
    }
    messageInput.value = '';
};

onMounted(() => {
    if (token) {
        setInterval(() => {
            onSendMessage(
                false,
                dummyComments[Math.floor(Math.random() * 100)]
            );
        }, 15000);
    }
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
