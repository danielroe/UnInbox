<script setup lang="ts">
  import { z } from 'zod';
  const { $trpc, $i18n } = useNuxtApp();
  definePageMeta({ layout: 'advanced' });
  const senders = ref<object[]>([]);
  senders.value.push(
    {
      id: 324234,
      name: 'Benny Johnson',
      email: 'benny@goldner.com',
      subject:
        'Special offer from our amazing company that does random shit not related to your business',
      coldRating: 4,
      timestamp: 1686945701205,
      method: 'email'
    },
    {
      id: 324234,
      name: 'Mrs. Emma Harvey',
      email: 'emma@empower.com',
      subject: 'Did the prince send you some money yet?',
      coldRating: 4,
      timestamp: 1686945701205,
      method: 'email'
    },
    {
      id: 645632,
      name: 'Emily Davis',
      email: 'emily@davis.com',
      subject: 'Exciting new updates for your website!',
      coldRating: 3,
      timestamp: 1686945701205,
      method: 'email'
    },
    {
      id: 975432,
      name: 'Michael Smith',
      email: 'michael@smith.com',
      subject: 'Invitation to our exclusive networking event',
      coldRating: 5,
      timestamp: 1686945701205,
      method: 'email'
    },
    {
      id: 123456,
      name: 'Sarah Thompson',
      email: 'sarah@thompson.com',
      subject: 'Exclusive discounts on our top-selling products',
      coldRating: 2,
      timestamp: 1686945701205,
      method: 'email'
    },
    {
      id: 789012,
      name: 'David Miller',
      email: 'david@miller.com',
      subject: 'Important security update for your online account',
      coldRating: 4,
      timestamp: 1686945701205,
      method: 'email'
    }
  );
</script>

<template>
  <div class="">
    <h1 class="font-display text-2xl text-center">Screener</h1>
    <div class="">
      <h2 class="font-display text-lg">New senders</h2>
      <div class="grid grid-cols-2 gap-8">
        <span class="text-xs text-gray-400">see all senders</span>
      </div>
    </div>
  </div>
</template>
