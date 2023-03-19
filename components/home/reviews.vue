<script setup lang="ts">
const reviews = [
  {
    id: 1,
    score: 5,
    name: 'Brand One',
    image: 'https://storage.googleapis.com/pai-images/063507b6672742dba2cd55d2cd3c170a.jpeg',
    alt: 'Image Brand One',
    text: 'Trabalho excelente, muito profissionalismo!'
  },
  {
    id: 2,
    score: 4,
    name: 'Brand Two',
    image: 'https://storage.googleapis.com/pai-images/084c7a54a08a4d2d8b1a4af76e4214f2.jpeg',
    alt: 'Image Brand Two',
    text: 'Atendimento excepcional, cumpriu com o que foi prometido.'
  },
  {
    id: 3,
    score: 3.5,
    name: 'Brand Three',
    image: 'https://storage.googleapis.com/pai-images/1b24e6cb44164ed7a5b5d39ec7b523ef.jpeg',
    alt: 'Image Brand Three',
    text: 'O resultado final não foi exatamente o que eu esperava, mas o desenvolvedor foi muito atencioso e fez as alterações necessárias.'
  },
  {
    id: 4,
    score: 4.5,
    name: 'Brand Four',
    image: 'https://storage.googleapis.com/pai-images/1e710447c94240ce9b663cf065038d0d.jpeg',
    alt: 'Image Brand Four',
    text: 'O desenvolvedor foi muito criativo e conseguiu trazer uma nova perspectiva para o meu projeto.'
  },
  {
    id: 5,
    score: 5,
    name: 'Brand Five',
    image: 'https://storage.googleapis.com/pai-images/2a9b90abfd0e47b2817be5188af8b879.jpeg',
    alt: 'Image Brand Five',
    text: 'Excelente profissional, muito comprometido com a qualidade do trabalho.'
  },
  {
    id: 6,
    score: 3,
    name: 'Brand Six',
    image: 'https://storage.googleapis.com/pai-images/3341f46b8db44b3a92b2d49b3a57e67a.jpeg',
    alt: 'Image Brand Six',
    text: 'O projeto ficou um pouco atrasado, mas o resultado final ficou bom.'
  },
  {
    id: 7,
    score: 4,
    name: 'Brand Seven',
    image: 'https://storage.googleapis.com/pai-images/3b3e6abaa19c4df8a3a08234d91248ed.jpeg',
    alt: 'Image Brand Seven',
    text: 'Boa comunicação e suporte durante todo o projeto.'
  },
  {
    id: 8,
    score: 4.5,
    name: 'Brand Eight',
    image: 'https://storage.googleapis.com/pai-images/409f2b058f4a4cf1b87c667f631d2f8c.jpeg',
    alt: 'Image Brand Eight',
    text: 'O desenvolvedor foi muito atencioso e dedicado para entregar o projeto dentro do prazo.'
  },
]
</script>
<template>
<section class="bg-white">
  <div class="mx-auto max-w-screen-xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
    <h2 class="font-bold text-center tracking-tight text-4xl sm:text-5xl">
      Reviews
    </h2>

    <div class="mt-12 grid gap-4 grid-cols-1 md:gap-8 md:grid-cols-3">
      <blockquote
      v-for="review in reviews"
      :key="review.id"
      class="rounded-lg bg-gray-100 p-8">
        <div class="flex gap-4 items-center">
          <div
            class="rounded-full flex bg-gray-200 h-16 w-16 overflow-hidden items-center justify-center"
          >
            <Image
              :src="review.image"
              :alt="review.alt"
              class="rounded-full object-cover h-16 w-16"
            />
          </div>
          <div class="grid gap-4">
            <div class="flex relative">
              <div class="flex text-green-500 z-3 gap-0.5 absolute justify-center">
                <svg
                  v-for="n in review.score"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </div>
              <div class="flex text-gray-500 z-0 gap-0.5 justify-center absolute">
                <svg
                  v-for="n in 5"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  :key="n"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </div>
            </div>
            <p class="font-medium text-lg text-gray-700">
              {{ review.name }}
            </p>
          </div>
        </div>
        <p class="mt-4 text-gray-500 line-clamp-2 sm:line-clamp-none">
          {{ review.text }}
        </p>
      </blockquote>
    </div>
  </div>
</section>
</template>

