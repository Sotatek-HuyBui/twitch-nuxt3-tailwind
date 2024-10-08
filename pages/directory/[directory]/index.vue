<template>
    <div class="flex-1 pl-5 sm:p-4">
        <DirectoryHeader
            v-if="$route.params.directory !== 'following'"
            :currentDirectoryPath="$route.params.directory"
        />
        <div v-if="$route.params.directory === 'games'">
            <DirectoryGame :directorySection="$route.params.directory" />
        </div>
        <div v-else-if="$route.params.directory === 'irl'">
            <DirectoryIrl :directorySection="$route.params.directory" />
        </div>
        <div v-else-if="$route.params.directory === 'music'">
            <DirectoryMusic :directorySection="$route.params.directory" />
        </div>
        <div v-else-if="$route.params.directory === 'creative'">
            <DirectoryCreative :directorySection="$route.params.directory" />
        </div>
        <div v-else-if="$route.params.directory === 'following'">
            <DirectoryFollowing :directorySection="$route.params.directory" />
        </div>
        <div v-else-if="$route.params.directory === 'esports'">
            <DirectoryEsports :directorySection="$route.params.directory" />
        </div>
        <div v-else>
            <DirectoryTabPane />
        </div>
    </div>
</template>

<script>
const route = useRoute();
</script>
