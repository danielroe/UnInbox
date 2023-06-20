<template>
  <NuxtLayout>
    <TopNav />
    <NuxtPage />
    <UNotifications />
  </NuxtLayout>
</template>
<script setup lang="ts">
  // Head

  useHead({
    htmlAttrs: {
      lang: 'en'
    },
    bodyAttrs: {
      class: 'antialiased font-sans text-sand-12 bg-sand-1'
    }
  });
</script>
