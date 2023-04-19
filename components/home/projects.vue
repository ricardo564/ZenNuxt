<script setup lang="ts">
const projects = [
  {
    name: "Project coming soon",
    image: "https://storage.googleapis.com/pai-images/9c020e30be9040138e7dca4903989e5f.jpeg",
    alt: "Portfolio Mockup",
  },
  {
    name: "Project coming soon",
    image: "https://storage.googleapis.com/pai-images/9c020e30be9040138e7dca4903989e5f.jpeg",
    alt: "Portfolio Mockup",
  },
  {
    name: "Project coming soon",
    image: "https://storage.googleapis.com/pai-images/9c020e30be9040138e7dca4903989e5f.jpeg",
    alt: "Portfolio Mockup",
  },
  {
    name: "Project coming soon",
    image: "https://storage.googleapis.com/pai-images/9c020e30be9040138e7dca4903989e5f.jpeg",
    alt: "Portfolio Mockup",
  },
  {
    name: "Project coming soon",
    image: "https://storage.googleapis.com/pai-images/9c020e30be9040138e7dca4903989e5f.jpeg",
    alt: "Portfolio Mockup",
  },
]
</script>
<template>
  <section
    class="bg-blue-500 text-white py-16"
  >
    <div class="container mx-auto">
      <h2 class="font-bold text-center mb-8 text-3xl md:text-5xl">
        Projetos
      </h2>
      <div
        class="grid gap-8 grid-cols-1 items-center md:grid-cols-5"
      >
        <div
          v-for="project in projects" :key="project.name"
          class="text-center"
        >
          <div
            class="rounded-xl grid px-1 overflow-hidden"
          >
            <Image
              :src="project.image"
              :alt="project.alt"
              class="mx-auto max-h-96"
            />
          </div>
          <div>
            <p
              class="text-xl p-4"
            >
              {{ project.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

