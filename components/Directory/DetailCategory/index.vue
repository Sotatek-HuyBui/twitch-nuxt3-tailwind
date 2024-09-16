<template>
    <div>
        <div class="flex">
            <img
                src="https://static-cdn.jtvnw.net/ttv-boxart/509658-144x192.jpg"
                class="w-[150px] h-[200px] mr-8"
            />
            <div class="flex flex-col justify-center">
                <p class="font-semibold text-[34px]">
                    {{ $route.params.live.split('-').join(' ') }}
                </p>
                <div class="flex items-center">
                    <p class="text-[14px]">
                        <span class="font-medium">226K</span> Viewers
                    </p>
                    <div class="w-1.5 h-1.5 rounded-full bg-black mx-3" />
                    <p class="text-14px">
                        <span class="font-medium">30.3M</span> Followers
                    </p>
                </div>
                <UButton
                    variant="solid"
                    class="bg-customPrimary-1 text-white w-[90px] mt-6"
                    icon="i-heroicons-heart"
                    >Follow</UButton
                >
            </div>
        </div>
        <DirectoryDetailCategoryTabPane />
    </div>
</template>
