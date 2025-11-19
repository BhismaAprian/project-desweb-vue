<script setup>
import NavbarSection from '@/components/NavbarSection.vue'
import HeroSection from '@/components/HeroSection.vue'
import OverviewSection from '@/components/OverviewSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import ProductSection from '@/components/ProductSection.vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Mousewheel } from 'swiper/modules'

import 'swiper/css'
</script>

<template>
  <div class="relative h-screen w-full overflow-hidden">
    <NavbarSection class="fixed top-0 left-0 w-full z-50" />

    <Swiper
      :modules="[Mousewheel]"
      direction="vertical"
      :mousewheel="{ forceToAxis: true, sensitivity: 1, releaseOnEdges: true }"
      class="h-screen w-full"
    >
      <SwiperSlide>
        <HeroSection />
      </SwiperSlide>

      <SwiperSlide>
        <OverviewSection />
      </SwiperSlide>

      <SwiperSlide>
        <ProductSection />
      </SwiperSlide>

      <SwiperSlide>
        <FooterSection />
      </SwiperSlide>
    </Swiper>
  </div>
</template>
