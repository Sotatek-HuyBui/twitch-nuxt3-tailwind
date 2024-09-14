<template>
    <p class="text-[20px]"><b>About Ninja</b></p>
    <div class="rounded-md py-4 flex justify-between items-center w-full">
        <div>
            <p><b>19.1M</b> followers</p>
            <p>
                Ninja streams EVERYWHERE. Co-Founder @DrinkNutcase. CIO
                @GameSquare $GAMEJust launched a BRAND NEW PODCAST AFK W/ NINJA
            </p>
        </div>
        <div>
            <div v-for="item in socialMedias" class="flex">
                <a
                    :href="item.url"
                    target="_blank"
                    class="hover:text-green-400"
                    >{{ item.name }}</a
                >
            </div>
        </div>
    </div>
</template>

<script setup>
const socialMedias = [
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/',
        color: 'red',
    },
    {
        name: 'Facebook',
        url: 'https://www.instagram.com/',
        color: 'blue',
    },
    {
        name: 'Youtube',
        url: 'https://www.instagram.com/',
        color: 'green',
    },
];
</script>
