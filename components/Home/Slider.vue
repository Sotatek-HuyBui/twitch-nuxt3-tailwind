<template>
    <div
        class="h-[150px] sm:h-[300px] flex items-center justify-center"
        v-if="loading"
    >
        <a-spin size="large" />
    </div>
    <div
        v-else
        class="h-[150px] sm:h-[220px] flex items-center justify-center mt-8 mb-24"
    >
        <div
            class="w-[90%] sm:w-[600px] lg:w-[900px] xl:w-[900px] 2lg:w-[1200px] relative h-[150px] sm:h-[300px]"
        >
            <Carousel
                :itemsToShow="2.95"
                :wrapAround="true"
                :transition="500"
                v-model="currentSlide"
                class="h-[150px] sm:h-[300px]"
            >
                <Slide
                    v-for="(slide, index) in dummySliders"
                    :key="index"
                    class="flex carousel__item w-[400px] h-[100px] sm:w-[400px] sm:h-[300px]"
                >
                    <div class="w-[400px] h-[300px] relative">
                        <div
                            v-if="currentSlide === index"
                            class="absolute bg-[red] rounded-sm px-1 top-20 left-3 z-10"
                        >
                            <p class="text-[8px] text-white">
                                <b>LIVE</b>
                            </p>
                        </div>
                        <video
                            class="w-full h-[300px] object-cover"
                            :poster="slide.thumb"
                            controls
                        >
                            <source :src="slide.sources[0]" />
                            Your browser does not support HTML video.
                        </video>
                    </div>
                    <div
                        v-if="currentSlide === index"
                        class="hidden sm:block pt-[80px] w-[120px] bg-slate-50 p-2 dark:bg-[#1b1b1b] h-full"
                    >
                        <div class="flex">
                            <img
                                class="w-6 h-6 rounded-full mr-2"
                                src="https://images.pexels.com/photos/7001554/pexels-photo-7001554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            />
                            <div class="flex flex-col items-start">
                                <p
                                    class="text-customPrimary-1 text-[7px] font-medium cursor-pointer hover:underline"
                                    @click="
                                        () => navigateTo(`/${slide.name}/chats`)
                                    "
                                >
                                    {{ slide.name }}
                                </p>
                                <p
                                    class="text-customPrimary-1 text-[6px] cursor-pointer hover:underline"
                                    @click="
                                        () =>
                                            navigateTo(
                                                `/directory/category/Minecraft`
                                            )
                                    "
                                >
                                    Minecraft
                                </p>
                                <p class="text-[6px]">3.6 viewers</p>
                            </div>
                        </div>
                        <div class="flex items-center mt-2">
                            <div
                                v-for="tag in slide.tags"
                                :key="tag"
                                class="py-0.5 px-1 rounded-full bg-slate-200 mr-1 dark:bg-slate-700 cursor-pointer"
                                @click="
                                    navigateTo(
                                        `/directory/all/tags?tag=${tag
                                            .split(' ')
                                            .join('-')}`
                                    )
                                "
                            >
                                <p class="text-[5px] dark:text-white">
                                    {{ tag }}
                                </p>
                            </div>
                        </div>
                    </div>
                </Slide>
            </Carousel>
            <div
                class="flex justify-between absolute top-[50%] w-[110%] left-[-5%] z-2"
            >
                <button @click="prev">
                    <svgo-slider-arrow-left-light
                        v-if="
                            colorMode.value === 'light' ||
                            colorMode.value === 'system'
                        "
                    />
                    <svgo-slider-arrow-left-dark v-else />
                </button>
                <button @click="next">
                    <svgo-slider-arrow-right-light
                        v-if="
                            colorMode.value === 'light' ||
                            colorMode.value === 'system'
                        "
                    />
                    <svgo-slider-arrow-right-dark v-else />
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
const loading = ref(true);

const next = () => {
    currentSlide.value += 1;
};
const prev = () => {
    currentSlide.value -= 1;
};

onMounted(() => {
    setTimeout(() => {
        loading.value = false;
    }, 3000);
});
</script>

<style scoped>
.ant-spin-text {
    color: #999;
}
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

/* .carousel__slide--active ~ .carousel__slide {
    transform: rotateY(20deg) scale(0.95);
} */

.carousel__slide--prev {
    opacity: 0.7;
    transform: rotateY(-10deg) scale(0.8);
    transition: all 0.2s linear;
}
.carousel__slide--prev:hover {
    opacity: 0.8;
    transform: rotateY(-10deg) scale(0.9);
}

.carousel__slide--next {
    opacity: 0.7;
    transform: rotateY(10deg) scale(0.8);
    transition: all 0.2s linear;
}
.carousel__slide--next:hover {
    opacity: 0.8;
    transform: rotateY(10deg) scale(0.9);
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
