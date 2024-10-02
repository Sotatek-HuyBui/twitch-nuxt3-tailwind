<template>
    <div>
        <div
            class="py-10 flex sm:items-center sm:justify-center flex-col-reverse sm:flex-row"
        >
            <div
                class="w-[100%] h-[100px] sm:w-[320px] sm:h-[300px] p-4 bg-slate-100 dark:bg-[#282828] mr-6 flex flex-col justify-center rounded-md"
            >
                <div
                    class="bg-black px-2 py-[2px] rounded-md w-10 sm:w-14 mb-2"
                >
                    <p class="text-white text-[6px] sm:text-[10px]">OFFLINE</p>
                </div>
                <b
                    v-if="currentSlide % 3 === 0"
                    class="text-[10px] leading-4 sm:text-[24px] sm:leading-7 mb-2 sm:mb-10"
                >
                    Check out this Fortnite
                    <span class="text-customPrimary-1">stream</span> from 4 days
                    ago.
                </b>
                <b
                    v-if="currentSlide % 3 === 1"
                    class="text-[10px] leading-4 sm:text-[24px] sm:leading-7 mb-2 sm:mb-10"
                >
                    {{ $route.params.name }} made a
                    <span class="text-customPrimary-1">highlight</span> of a
                    recent Fortnite stream
                </b>
                <b
                    v-if="currentSlide % 3 === 2"
                    class="text-[10px] leading-4 sm:text-[24px] sm:leading-7 mb-2 sm:mb-10"
                >
                    Be positive & helpful to
                    <span class="text-customPrimary-1">other viewers.</span>
                </b>
                <UButton
                    v-if="!isFollowing"
                    @click="onClickNotifyButton"
                    color="purple"
                    variant="solid"
                    icon="i-heroicons-bell"
                    class="text-[8px] py-1 sm:text-[14px] sm:w-[180px] w-[130px] bg-slate-100 text-customPrimary-1 hover:bg-slate-200 hover:text-black dark:dark:bg-[#282828] dark:text-customPromary-1"
                >
                    Turn on notifications
                </UButton>
                <div v-else class="flex items-center">
                    <img
                        v-if="colorMode.value === 'light'"
                        src="@/assets/notification-bell.png"
                        class="w-4 h-4 object-cover mr-1"
                    />
                    <img
                        v-else
                        src="@/assets/notification-bell-white.png"
                        class="w-4 h-4 object-cover mr-1"
                    />
                    <p
                        class="text-[10px] sm:text-sm text-slate-800 dark:text-slate-300"
                    >
                        You will be notified when {{ $route.params.name }} is
                        live
                    </p>
                </div>
            </div>
            <div
                class="w-[100%] h-[150px] sm:w-[500px] sm:h-[300px] sm:mb-0 mb-2 flex items-center"
            >
                <Carousel
                    :itemsToShow="1.95"
                    :wrapAround="true"
                    :transition="500"
                    :autoplay="5000"
                    v-model="currentSlide"
                >
                    <Slide v-for="(slide, index) in dummySliders" :key="index">
                        <div class="carousel__item">
                            <video
                                class="w-[400px] h-[100px] sm:w-[300px] sm:h-[250px] object-fill"
                                :poster="slide.thumb"
                                controls
                            >
                                <source :src="slide.sources[0]" />
                                Your browser does not support HTML video.
                            </video>
                        </div>
                    </Slide>
                </Carousel>
            </div>
        </div>
        <div class="p-2 sm:p-10">
            <div class="flex justify-center items-center">
                <img
                    class="w-6 h-6 sm:w-20 sm:h-20 object-cover rounded-full"
                    src="https://images.pexels.com/photos/8885380/pexels-photo-8885380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
                <div class="flex-1 ml-4">
                    <div class="flex justify-between items-center">
                        <div class="flex items-center">
                            <p class="text-[12px] sm:text-[24px] font-bold">
                                {{ $route.params.name }}
                            </p>
                            <img
                                src="~/assets/check.png"
                                class="w-2 h-2 sm:w-4 sm:h-4 ml-1"
                            />
                        </div>

                        <div class="flex items-center">
                            <div
                                v-if="token"
                                class="flex items-center justify-center p-1 sm:p-2 dark:bg-slate-700 bg-slate-200 rounded-md mr-2 cursor-pointer hover:bg-slate-300"
                                @click="onClickNotifyButton"
                            >
                                <img
                                    v-if="
                                        isFollowing &&
                                        colorMode.value === 'light'
                                    "
                                    src="@/assets/notification-bell.png"
                                    class="w-3 h-3 sm:w-5 sm:h-4 object-cover"
                                />
                                <img
                                    v-if="
                                        !isFollowing &&
                                        colorMode.value === 'light'
                                    "
                                    src="@/assets/bell.png"
                                    class="w-3 h-3 sm:w-4 sm:h-4 object-cover"
                                />
                                <img
                                    v-if="
                                        isFollowing &&
                                        colorMode.value === 'dark'
                                    "
                                    src="@/assets/notification-bell-white.png"
                                    class="w-3 h-3 sm:w-4 sm:h-4 object-cover"
                                />
                                <img
                                    v-if="
                                        !isFollowing &&
                                        colorMode.value === 'dark'
                                    "
                                    src="@/assets/bell-white.png"
                                    class="w-3 h-3 sm:w-4 sm:h-4 object-cover"
                                />
                            </div>
                            <UButton
                                @click="onClickFollowingButton"
                                variant="solid"
                                size="2xs"
                                icon="i-heroicons-star"
                                class="dark:text-white text-[6px] sm:text-[14px] sm:py-2 sm:w-[100px] w-[60px] bg-customPrimary-1 hover:bg-customPrimary-2 flex justify-center"
                                >Follow</UButton
                            >
                            <UButton
                                @click="onClickSubcribeButton"
                                color="white"
                                size="2xs"
                                variant="solid"
                                class="text-[6px] sm:text-[14px] sm:py-2 ml-2 flex justify-cente"
                                icon="i-heroicons-pencil-square"
                                >Subcribe</UButton
                            >
                            <UDropdown
                                :items="configItems"
                                :popper="{ placement: 'bottom-start' }"
                            >
                                <img
                                    src="~/assets/three-dot-menu.png"
                                    class="h-2 w-2 ml-1 sm:w-4 sm:h-4 cursor-pointer"
                                />
                            </UDropdown>
                        </div>
                    </div>
                    <p class="text-[8px] sm:text-sm">19.1M followers</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Carousel, Slide } from 'vue3-carousel';
import { dummySliders } from '@/data/index';
import 'vue3-carousel/dist/carousel.css';

const { onShowLoginModal } = defineProps(['onShowLoginModal']);
const colorMode = useColorMode();
const { $locally }: any = useNuxtApp();
const token = $locally.getItem('token');
const isFollowing = ref(false);

const onClickNotifyButton = () => {
    if (token) {
        isFollowing.value = !isFollowing.value;
    } else {
        onShowLoginModal();
    }
};

const onClickFollowingButton = () => {
    if (token) {
        message.info('Funtion is in progress!');
    } else {
        onShowLoginModal();
    }
};

const onClickSubcribeButton = () => {
    if (token) {
        message.info('Funtion is in progress!');
    } else {
        onShowLoginModal();
    }
};

const currentSlide = ref(0);
const configItems = [
    [
        {
            label: 'Report Channel',
        },
    ],
    [
        {
            label: 'Share',
        },
    ],
];

const onChange = (page: number) => {
    console.log('🚀 ~ onSelectPage ~ page:', page);
};
</script>

<style scoped>
.carousel__slide {
    padding: 5px;
}

.carousel__viewport {
    perspective: 2000px;
}

.carousel__track {
    transform-style: preserve-3d;
}

.carousel__slide--sliding {
    transition: 0.5s;
}

.carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
    transform: rotateY(20deg) scale(0.95);
}

.carousel__slide--prev {
    opacity: 0.7;
    transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
    opacity: 0.7;
    transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.75);
    z-index: 2;
}

@media screen and (max-width: 640px) {
    .carousel__slide--active {
        transform: rotateY(0) scale(2.5);
    }
}
</style>
