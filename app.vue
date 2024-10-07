<template>
    <div :key="key">
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script setup>
const route = useRoute();
const key = ref(1);

watch(
    () => route.name,
    () => {
        key.value += 1;
    }
);
</script>
