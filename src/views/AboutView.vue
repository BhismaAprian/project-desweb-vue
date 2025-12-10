<script setup>
import NavbarSection from '@/sections/NavbarSection.vue'
import FooterSection from '@/sections/FooterSection.vue'
import logoImg from '@/assets/logo.png'
</script>

<template>
  <div class="min-h-screen bg-[#F3F4F6]">
    <NavbarSection />

    <section class="pt-32 pb-20 bg-white">
      <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p class="text-[#E5A835] text-xs uppercase tracking-[0.3em] mb-4">Our Story</p>
            <h1
              class="text-[#004080] text-4xl md:text-5xl lg:text-6xl font-extralight leading-[1.1] mb-8"
            >
              Crafting Identity<br />
              Through Fashion
            </h1>
            <p class="text-[#004080]/60 text-base md:text-lg font-light leading-relaxed max-w-lg">
              ITK Wear lahir dari semangat mahasiswa Institut Teknologi Kalimantan untuk menciptakan
              identitas yang kuat melalui fashion. Setiap helai kain yang kami pilih, setiap jahitan
              yang kami buat, mencerminkan dedikasi kami terhadap kualitas dan kebanggaan kampus.
            </p>
          </div>

          <div class="flex justify-center lg:justify-end">
            <div class="relative">
              <!-- Decorative Circle -->
              <div
                class="absolute -top-8 -left-8 w-64 h-64 rounded-full border border-[#004080]/10"
              ></div>
              <div class="absolute -bottom-8 -right-8 w-48 h-48 rounded-full bg-[#004080]/5"></div>

              <!-- Logo Container -->
              <div class="relative bg-[#F3F4F6] p-16 rounded-2xl">
                <img :src="logoImg" alt="ITK Wear Logo" class="w-40 h-auto" />
                <div class="mt-6 text-center">
                  <p class="text-[#004080]/40 text-[10px] uppercase tracking-[0.4em]">
                    Established 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-[#F3F4F6]">
      <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <!-- Section Header -->
        <div class="text-center mb-20">
          <p class="text-[#E5A835] text-xs uppercase tracking-[0.3em] mb-4">Misi & Visi</p>
          <h2 class="text-[#004080] text-3xl md:text-4xl font-extralight">
            Lebih Dari Sekadar Pakaian
          </h2>
        </div>

        <!-- Mission & Vision Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Mission Card -->
          <div class="bg-white p-10 md:p-14 rounded-xl">
            <div
              class="w-12 h-12 rounded-full bg-[#004080]/10 flex items-center justify-center mb-8"
            >
              <svg
                class="w-6 h-6 text-[#004080]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 class="text-[#004080] text-2xl font-light mb-4">Misi Kami</h3>
            <p class="text-[#004080]/60 font-light leading-relaxed">
              Menyediakan pakaian berkualitas premium yang membangun kebanggaan dan identitas
              mahasiswa ITK. Kami berkomitmen untuk menghadirkan desain yang timeless, nyaman
              dipakai sehari-hari, dan mencerminkan semangat inovasi kampus.
            </p>
          </div>

          <!-- Vision Card -->
          <div class="bg-white p-10 md:p-14 rounded-xl">
            <div
              class="w-12 h-12 rounded-full bg-[#E5A835]/20 flex items-center justify-center mb-8"
            >
              <svg
                class="w-6 h-6 text-[#E5A835]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <h3 class="text-[#004080] text-2xl font-light mb-4">Visi Kami</h3>
            <p class="text-[#004080]/60 font-light leading-relaxed">
              Menjadi brand fashion kampus terdepan di Indonesia yang dikenal karena kualitas,
              kreativitas, dan kontribusinya dalam membangun komunitas mahasiswa yang solid dan
              berprestasi.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <!-- Section Header -->
        <div class="mb-20">
          <p class="text-[#E5A835] text-xs uppercase tracking-[0.3em] mb-4">Nilai-Nilai Kami</p>
          <h2 class="text-[#004080] text-3xl md:text-4xl font-extralight max-w-lg">
            Fondasi Yang Membangun Setiap Produk Kami
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="group">
            <div class="mb-6">
              <span class="text-[#004080]/20 text-6xl font-extralight">01</span>
            </div>
            <h3 class="text-[#004080] text-xl font-medium mb-3">Kualitas Premium</h3>
            <p class="text-[#004080]/50 text-sm font-light leading-relaxed">
              Kami hanya menggunakan bahan berkualitas tinggi, 100% cotton premium yang nyaman dan
              tahan lama.
            </p>
          </div>

          <div class="group">
            <div class="mb-6">
              <span class="text-[#004080]/20 text-6xl font-extralight">02</span>
            </div>
            <h3 class="text-[#004080] text-xl font-medium mb-3">Identitas Kuat</h3>
            <p class="text-[#004080]/50 text-sm font-light leading-relaxed">
              Setiap desain dibuat untuk memperkuat kebanggaan sebagai bagian dari keluarga besar
              ITK.
            </p>
          </div>

          <div class="group">
            <div class="mb-6">
              <span class="text-[#004080]/20 text-6xl font-extralight">03</span>
            </div>
            <h3 class="text-[#004080] text-xl font-medium mb-3">Inovasi Desain</h3>
            <p class="text-[#004080]/50 text-sm font-light leading-relaxed">
              Desain yang fresh dan modern, mengikuti tren namun tetap timeless untuk dipakai kapan
              saja.
            </p>
          </div>

          <div class="group">
            <div class="mb-6">
              <span class="text-[#004080]/20 text-6xl font-extralight">04</span>
            </div>
            <h3 class="text-[#004080] text-xl font-medium mb-3">Komunitas Solid</h3>
            <p class="text-[#004080]/50 text-sm font-light leading-relaxed">
              Lebih dari brand, kami adalah komunitas yang saling mendukung dan berkembang bersama.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-[#004080]">
      <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <!-- Stat 1 -->
          <div class="text-center">
            <p class="text-white text-4xl md:text-5xl lg:text-6xl font-extralight mb-2">500+</p>
            <p class="text-white/50 text-xs uppercase tracking-[0.2em]">Happy Customers</p>
          </div>

          <!-- Stat 2 -->
          <div class="text-center">
            <p class="text-white text-4xl md:text-5xl lg:text-6xl font-extralight mb-2">50+</p>
            <p class="text-white/50 text-xs uppercase tracking-[0.2em]">Product Designs</p>
          </div>

          <!-- Stat 3 -->
          <div class="text-center">
            <p class="text-white text-4xl md:text-5xl lg:text-6xl font-extralight mb-2">100%</p>
            <p class="text-white/50 text-xs uppercase tracking-[0.2em]">Premium Quality</p>
          </div>

          <!-- Stat 4 -->
          <div class="text-center">
            <p class="text-white text-4xl md:text-5xl lg:text-6xl font-extralight mb-2">24/7</p>
            <p class="text-white/50 text-xs uppercase tracking-[0.2em]">Customer Support</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-[#F3F4F6]">
      <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <!-- Section Header -->
        <div class="text-center mb-20">
          <p class="text-[#E5A835] text-xs uppercase tracking-[0.3em] mb-4">Tim Kami</p>
          <h2 class="text-[#004080] text-3xl md:text-4xl font-extralight">
            Orang-Orang Di Balik ITK Wear
          </h2>
        </div>

        <!-- Team Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Team Member 1 -->
          <div class="bg-white p-8 rounded-xl text-center">
            <div
              class="w-24 h-24 mx-auto mb-6 rounded-full bg-[#004080]/10 flex items-center justify-center"
            >
              <span class="text-[#004080] text-2xl font-light">AR</span>
            </div>
            <h3 class="text-[#004080] text-lg font-medium mb-1">Ahmad Rizky</h3>
            <p class="text-[#E5A835] text-xs uppercase tracking-[0.2em] mb-4">Founder & CEO</p>
            <p class="text-[#004080]/50 text-sm font-light">
              Mahasiswa Teknik Informatika yang passionate dalam fashion dan entrepreneurship.
            </p>
          </div>

          <!-- Team Member 2 -->
          <div class="bg-white p-8 rounded-xl text-center">
            <div
              class="w-24 h-24 mx-auto mb-6 rounded-full bg-[#004080]/10 flex items-center justify-center"
            >
              <span class="text-[#004080] text-2xl font-light">SP</span>
            </div>
            <h3 class="text-[#004080] text-lg font-medium mb-1">Sari Putri</h3>
            <p class="text-[#E5A835] text-xs uppercase tracking-[0.2em] mb-4">Creative Director</p>
            <p class="text-[#004080]/50 text-sm font-light">
              Berbekal pengalaman desain, menciptakan visual identity yang kuat untuk brand.
            </p>
          </div>

          <!-- Team Member 3 -->
          <div class="bg-white p-8 rounded-xl text-center">
            <div
              class="w-24 h-24 mx-auto mb-6 rounded-full bg-[#004080]/10 flex items-center justify-center"
            >
              <span class="text-[#004080] text-2xl font-light">BW</span>
            </div>
            <h3 class="text-[#004080] text-lg font-medium mb-1">Budi Wicaksono</h3>
            <p class="text-[#E5A835] text-xs uppercase tracking-[0.2em] mb-4">Operations Manager</p>
            <p class="text-[#004080]/50 text-sm font-light">
              Memastikan setiap produk sampai ke tangan customer dengan kualitas terbaik.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-white">
      <div class="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <h2
          class="text-[#004080] text-3xl md:text-4xl lg:text-5xl font-extralight leading-tight mb-8"
        >
          Bergabunglah Dengan<br />
          Keluarga ITK Wear
        </h2>
        <p class="text-[#004080]/60 text-base md:text-lg font-light max-w-2xl mx-auto mb-12">
          Jadilah bagian dari komunitas mahasiswa yang bangga dengan identitasnya. Temukan koleksi
          terbaru kami dan tunjukkan semangat ITK-mu.
        </p>
        <router-link
          to="/products"
          class="inline-flex items-center gap-4 px-8 py-4 bg-[#004080] text-white rounded-full hover:bg-[#003366] transition-colors duration-300"
        >
          <span class="font-medium">Lihat Koleksi</span>
          <span class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </router-link>
      </div>
    </section>

    <FooterSection />
  </div>
</template>
