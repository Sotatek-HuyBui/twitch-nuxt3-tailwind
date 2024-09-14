<script setup lang="ts">
const counter = useCounter();
</script>

<template>
    <div>
        Counter COMPONENT: {{ counter }}
        <button @click="counter++">+</button>
        <button @click="counter--">-</button>
    </div>
</template>
