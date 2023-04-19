<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  width: {
    type: Number,
    default: 272,
  },
  height: {
    type: Number,
  },
  preload: {
    type: Boolean,
    default: true,
  },
  fit: {
    type: String,
    default: "cover",
  },
  format: {
    type: String,
    default: "auto",
  },
  quality: {
    type: Number,
    default: 75,
  },
});

const { src, alt } = props;
</script>
<template>
  <nuxt-img
    class="h-auto mx-auto object-cover object-center w-full transform transition ease-in-out duration-500 hover:shadow-xl hover:z-50 hover:scale-110 hover:-translate-y-1 hover:translate-x-1"
    loading="lazy"
    :preload="preload"
    :fit="fit"
    :format="format"
    :quality="quality"
    :width="width"
    :height="height"
    :src="src"
    :alt="alt"
  />
</template>
