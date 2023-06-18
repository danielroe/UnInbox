<script setup lang="ts">
  import { z } from 'zod';
  const { $trpc, $i18n } = useNuxtApp();
  definePageMeta({
    layout: 'advanced'
  });
</script>

<template>
  <div>
    <div class="mb-96">
      {{ $route.path }}
    </div>
    <div class="mb-96">
      {{ $route.path }}
    </div>
    <div class="mb-96">
      {{ $route.path }}
    </div>
    <div class="mb-96">
      {{ $route.path }}
    </div>
    <div class="mb-96">
      {{ $route.path }}
    </div>
    <div class="mb-96">
      {{ $route.path }}
    </div>
    <div class="mb-96">
      {{ $route.path }}
    </div>
  </div>
</template>
