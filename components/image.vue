<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
});

const { src, alt } = props;
</script>
<template>
  <img
    class="h-auto mx-auto object-cover object-center w-full transform transition ease-in-out duration-500 hover:shadow-xl hover:z-50 hover:scale-110 hover:-translate-y-1 hover:translate-x-1"
    loading="lazy"
    :src="src"
    :alt="alt"
    :class="class"
  />
</template>
