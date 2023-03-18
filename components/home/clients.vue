<script setup lang="ts">
const clients = [
  {
    name: 'Brand One',
    image: 'https://storage.googleapis.com/pai-images/063507b6672742dba2cd55d2cd3c170a.jpeg',
  },
  {
    name: 'Brand Two',
    image: 'https://storage.googleapis.com/pai-images/0d7a155a391c430e8ab8e5141744093f.jpeg',
  },
  {
    name: 'Brand Three',
    image: 'https://storage.googleapis.com/pai-images/a78e32dbe6b84e81abc6a5ff755af284.jpeg',
  },
  {
    name: 'Brand Four',
    image: 'https://storage.googleapis.com/pai-images/bbacaac203824180a74f11ee7d8e7362.jpeg',
  },
  {
    name: 'Brand Five',
    image: 'https://storage.googleapis.com/pai-images/912efbff99cf4963917c100dfeed0623.jpeg',
  },
]
</script>
<template>
  <section
    class="bg-white py-16"
  >
    <div
      class="container mx-auto"
    >
      <h2
        class="font-bold text-center mb-8 text-3xl md:text-5xl"
      >
        Meus clientes
      </h2>
      <div
        class="grid gap-8 grid-cols-2 items-center md:grid-cols-5"
      >
        <div
          v-for="client in clients"
          class="rounded-lg max-h-72 overflow-hidden"
          :key="client.name"
          :title="client.name"
        >
          <Image
            :src="client.image"
            :alt="client.name"
          />
        </div>
      </div>
    </div>
  </section>
</template>

