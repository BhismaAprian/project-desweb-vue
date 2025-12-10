<template>
  <section class="bg-base-100 pt-32 pb-20">
    <div class="max-w-6xl mx-auto px-6">
      <header class="text-center mb-14">
        <h2 class="text-3xl font-bold tracking-tight">Discover Your Campus Style</h2>
        <p class="mt-3 text-base text-base-content/70 max-w-2xl mx-auto">
          Choose your vibe — minimal, casual, or bold. Our essentials are crafted to match your
          daily rhythm on campus with comfort, confidence, and personality.
        </p>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div class="group relative rounded-3xl overflow-hidden shadow-xl">
          <img
            src="@/assets/1.png"
            class="w-full h-[620px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
          />

          <div
            class="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/80 opacity-80 group-hover:opacity-90 transition-all duration-700"
          ></div>

          <h3
            class="absolute bottom-10 left-8 text-4xl font-bold text-white opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700"
          >
            Men
          </h3>
        </div>

        <div class="group relative rounded-3xl overflow-hidden shadow-xl">
          <img
            src="@/assets/2.png"
            class="w-full h-[620px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
          />

          <div
            class="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/80 opacity-80 group-hover:opacity-90 transition-all duration-700"
          ></div>

          <h3
            class="absolute bottom-10 left-8 text-4xl font-bold text-white opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700"
          >
            Women
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>
