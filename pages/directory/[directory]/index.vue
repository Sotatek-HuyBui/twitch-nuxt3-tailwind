<template>
    <div class="flex-1 p-4">
        <DirectoryHeader :currentDirectoryPath="$route.params.directory" />
        <div v-if="$route.params.directory === 'gaming'">
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
        <div v-else>
            <DirectoryEsports :directorySection="$route.params.directory" />
        </div>
    </div>
</template>
