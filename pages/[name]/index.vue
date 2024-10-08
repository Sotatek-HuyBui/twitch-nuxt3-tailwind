<template>
    <div class="w-[100%] flex relative overflow-hidden pl-4 sm:pl-10">
        <div class="overflow-y-auto h-full w-full">
            <ProfileHeader :onShowLoginModal="onShowLoginModal" />
            <ProfileTabPane />
            <LoginModal
                v-model="isShowLoginModal"
                :onShowRegisterModal="onShowRegisterModal"
            />
            <RegisterModal
                v-model="isShowRegisterModal"
                :onShowLoginModal="onShowLoginModal"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
const isShowLoginModal = ref(false);
const isShowRegisterModal = ref(false);
const route = useRoute();

const onShowLoginModal = () => {
    isShowLoginModal.value = true;
    isShowRegisterModal.value = false;
};

const onShowRegisterModal = () => {
    isShowRegisterModal.value = true;
    isShowLoginModal.value = false;
};

useHead({
    title: `${route.params.name} -  Twitch`,
});
</script>

<style>
.chat_bar {
    width: 340px; /* Set the width of the sidebar */
    top: 58px; /* Adjust the top position to accommodate the header */
    right: 0;
    bottom: 0;
    background-color: #f8f8f8; /* Sidebar background color */
}
</style>
