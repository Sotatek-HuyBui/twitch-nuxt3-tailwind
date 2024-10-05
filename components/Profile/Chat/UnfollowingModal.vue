<template>
    <a-modal
        :title="`Unfollow ${$route.params.name}?`"
        centered
        v-model:open="isOpen"
        :width="800"
        cancel-text="No, cancel"
        ok-text="Yes, unfollow"
        v-on:cancel="isOpen = false"
        width="300px"
        @ok="onUnfollow"
    >
        You will no longer receive notifications or see them in your followed
        channels list.
    </a-modal>
</template>

<script setup>
const isOpen = defineModel();
const { onUnfollow } = defineProps(['onUnfollow']);
</script>
