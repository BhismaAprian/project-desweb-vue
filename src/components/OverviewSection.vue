<template>
  <section class="bg-base-100">
    <div class="max-w-6xl mx-auto px-6 py-12">
      <!-- Intro text -->
      <header class="text-center mb-8">
        <h2 class="text-2xl sm:text-3xl font-bold">Our Approach to Campus Fashion</h2>
        <p class="mt-3 text-sm sm:text-base text-base-content/70 max-w-3xl mx-auto">
          At ITK Wear, we believe style should feel effortless simple, functional, and made for real
          campus life. Every piece is designed with thoughtful detail, blending comfort and
          confidence so you can move, learn, and express yourself every day.
        </p>
      </header>

      <!-- Cards grid: responsive with gaps so cards don't touch -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        <div class="p-4">
          <div class="hover-3d bg-base-200 rounded-2xl p-6 flex justify-center items-center">
            <figure class="w-60">
              <img src="@/assets/1.png" alt="Tailwind CSS 3D card" class="rounded-lg" />
            </figure>
            <!-- 8 empty divs needed for the 3D effect -->
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div class="p-4">
          <div class="hover-3d bg-base-200 rounded-2xl p-6 flex justify-center items-center">
            <figure class="w-60">
              <img src="@/assets/2.png" alt="Tailwind CSS 3D hover" class="rounded-lg" />
            </figure>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div class="p-4">
          <div class="hover-3d bg-base-200 rounded-2xl p-6 flex justify-center items-center">
            <figure class="w-60">
              <img src="@/assets/1.png" alt="Tailwind CSS 3D hover" class="rounded-lg" />
            </figure>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
