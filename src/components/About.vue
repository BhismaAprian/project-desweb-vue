<script setup>
import logoImg from '@/assets/logo.png'
</script>

<template>
  <!-- Split-screen 60/40 layout with light gray background -->
  <section class="py-0 bg-[#F3F4F6]">
    <div class="max-w-[90rem] mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-5 min-h-[600px]">
        <!-- 60% Text Section -->
        <div class="lg:col-span-3 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-24">
          <!-- Massive clean typography text-6xl+ -->
          <h2
            class="text-[#004080] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-[1.1] tracking-tight mb-8"
          >
            The Official Wear<br />
            of ITK:
          </h2>
          <h3
            class="text-[#004080] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.1] tracking-tight mb-12"
          >
            Quality, Identity,<br />
            Future.
          </h3>

          <!-- Description -->
          <p
            class="text-[#004080]/50 text-base md:text-lg font-extralight leading-relaxed max-w-lg mb-16"
          >
            Every piece we create carries the spirit of innovation and excellence. Designed for
            students who lead, inspire, and shape tomorrow.
          </p>

          <!-- Features Row -->
          <div class="flex flex-wrap gap-12 md:gap-20">
            <div>
              <p class="text-[#004080] text-3xl md:text-4xl font-extralight mb-1">100%</p>
              <p class="text-[#004080]/40 text-[10px] uppercase tracking-[0.3em]">Premium Cotton</p>
            </div>
            <div>
              <p class="text-[#004080] text-3xl md:text-4xl font-extralight mb-1">500+</p>
              <p class="text-[#004080]/40 text-[10px] uppercase tracking-[0.3em]">Happy Students</p>
            </div>
            <div>
              <p class="text-[#004080] text-3xl md:text-4xl font-extralight mb-1">24/7</p>
              <p class="text-[#004080]/40 text-[10px] uppercase tracking-[0.3em]">Support</p>
            </div>
          </div>
        </div>

        <!-- 40% Divider section with vertical line and logo -->
        <div class="lg:col-span-2 relative flex items-center justify-center py-24 lg:py-0 bg-white">
          <!-- Vertical Divider Line -->
          <div
            class="absolute left-0 top-1/4 bottom-1/4 w-px bg-[#004080]/10 hidden lg:block"
          ></div>

          <!-- Logo/Icon Section -->
          <div class="flex flex-col items-center">
            <img :src="logoImg" alt="ITK Logo" class="w-24 md:w-32 h-auto opacity-80 mb-8" />
            <div class="w-16 h-px bg-[#004080]/20 mb-8"></div>
            <p class="text-[#004080]/40 text-[10px] uppercase tracking-[0.4em] text-center">
              Est. 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
