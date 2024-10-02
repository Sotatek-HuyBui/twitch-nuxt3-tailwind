<template>
    <div class="h-[150px] sm:h-[400px] flex items-center justify-center">
        <div class="w-[90%] sm:w-[900px] xl:w-[1000px] 2lg:w-[1200px] relative">
            <Carousel
                :itemsToShow="2.95"
                :wrapAround="true"
                :transition="500"
                v-model="currentSlide"
            >
                <Slide v-for="(slide, index) in dummySliders" :key="index">
                    <div
                        class="carousel__item w-[400px] h-[100px] sm:w-[300px] sm:h-[250px]"
                    >
                        <video
                            class="w-full h-full"
                            :poster="slide.thumb"
                            controls
                        >
                            <source :src="slide.sources[0]" />
                            Your browser does not support HTML video.
                        </video>
                    </div>
                </Slide>
            </Carousel>
            <div
                class="flex justify-between absolute top-[50%] w-[110%] left-[-5%] z-2"
            >
                <button @click="prev">
                    <img
                        v-if="colorMode.value === 'light'"
                        src="~/assets/chevron.png"
                        class="w-3 h-3 sm:w-6 sm:h-6 object-cover"
                    />
                    <img
                        v-else
                        src="~/assets/chevron-white.png"
                        class="w-3 h-3 sm:w-6 sm:h-6 object-cover"
                    />
                </button>
                <button @click="next">
                    <img
                        v-if="colorMode.value === 'light'"
                        src="~/assets/next-button.png"
                        class="w-3 h-3 sm:w-6 sm:h-6 object-cover"
                    />
                    <img
                        v-else
                        src="~/assets/next-button-white.png"
                        class="w-3 h-3 sm:w-6 sm:h-6 object-cover"
                    />
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Carousel, Slide } from 'vue3-carousel';
import { dummySliders } from '@/data/index';
import 'vue3-carousel/dist/carousel.css';

const currentSlide = ref(0);
const colorMode = useColorMode();

const next = () => {
    currentSlide.value += 1;
};
const prev = () => {
    currentSlide.value -= 1;
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
    transform: rotateY(0) scale(2);
    z-index: 2;
}

@media screen and (max-width: 640px) {
    .carousel__slide--active {
        transform: rotateY(0) scale(2.5);
    }
}
</style>
