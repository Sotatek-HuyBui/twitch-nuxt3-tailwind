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
                                class="w-[400px] h-[100px] sm:w-[300px] sm:h-[250px] max-w-full"
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
    </div>
    <ProfileInteractionBar :onShowLoginModal="onShowLoginModal" />
</template>

<script setup lang="ts">
import { Carousel, Slide } from 'vue3-carousel';
import { dummySliders, dummySidebarChannels } from '@/data/index';
import 'vue3-carousel/dist/carousel.css';

const { onShowLoginModal } = defineProps(['onShowLoginModal']);
const colorMode = useColorMode();
const route = useRoute();
const { $locally }: any = useNuxtApp();
const token = $locally.getItem('token');
const isFollowing = ref(false);
const user: any = dummySidebarChannels.find(
    (item: any) => item.name === route.params.name
);

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
