<template>
  <section class="relative block" style="height: 400px">
    <div
      class="absolute top-0 w-full h-full bg-center bg-cover"
      style="
        background-image: url('https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2');
      "
    >
      <span
        id="blackOverlay"
        class="w-full h-full absolute opacity-30 bg-black"
      ></span>
    </div>
    <div
      class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
      style="height: 70px"
    >
      <svg
        class="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          class="text-gray-300 fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>
  </section>
</template>