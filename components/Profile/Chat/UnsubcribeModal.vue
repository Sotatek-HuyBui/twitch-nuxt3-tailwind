<template>
    <a-modal
        :title="`Unsubcribe ${$route.params.name}?`"
        centered
        v-model:open="isOpenUnsubcribe"
        :width="800"
        cancel-text="No, cancel"
        ok-text="Yes, unsubcribe"
        v-on:cancel="isOpen = false"
        width="300px"
        @ok="onUnsubcribe"
    >
        You will no longer receive notifications or see them in your followed
        channels list.
    </a-modal>
</template>

<script setup>
const isOpenUnsubcribe = defineModel();
const { onUnsubcribe } = defineProps(['onUnsubcribe']);
</script>
