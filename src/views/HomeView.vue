<script setup>
import NavbarSection from '@/sections/NavbarSection.vue'
import HeroCarousel from '@/components/HeroCarousel.vue'
import CategoryGrid from '@/components/CategoryGrid.vue'
import ProductHorizontalScroll from '@/components/ProductHorizontalScroll.vue'
import About from '@/sections/AboutSection.vue'
import FooterSection from '@/sections/FooterSection.vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Mousewheel } from 'swiper/modules'

import 'swiper/css'
</script>

<template>
  <div class="relative w-full overflow-x-hidden">
    <NavbarSection class="fixed top-0 left-0 w-full z-50" />

    <Swiper
      :modules="[Mousewheel]"
      direction="vertical"
      :mousewheel="{ forceToAxis: true, sensitivity: 1, releaseOnEdges: true }"
      class="h-screen w-full"
    >
      <SwiperSlide>
        <HeroCarousel />
      </SwiperSlide>

      <SwiperSlide>
        <CategoryGrid />
      </SwiperSlide>

      <SwiperSlide>
        <ProductHorizontalScroll />
      </SwiperSlide>

      <SwiperSlide>
        <About />
      </SwiperSlide>

      <SwiperSlide>
        <FooterSection />
      </SwiperSlide>
    </Swiper>
  </div>
</template>
