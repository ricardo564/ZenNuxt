<script setup lang="ts">
const actualDate = new Date().getFullYear();
</script>
<template>
  <footer class="bg-white py-8">
    <div class="container mx-auto">
      <p class="text-center text-sm text-gray-500">
        &copy; {{actualDate}} Portfolio. All rights reserved.
      </p>
    </div>
  </footer>
</template>

