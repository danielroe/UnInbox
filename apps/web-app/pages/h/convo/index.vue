<script setup lang="ts">
  import { z } from 'zod';
  const { $trpc, $i18n } = useNuxtApp();
  definePageMeta({ layout: 'advanced' });
</script>

<template>
  <div class="flex flex-col gap-8 h-full">
    <div name="context">CONTEXT</div>
    <div
      name="messages"
      class="grow flex flex-col-reverse justify-start">
      <div
        name="single-message"
        class="flex flex-row gap-4 items-end mr-32">
        <UAvatar
          src="https://avatars.githubusercontent.com/u/739984?v=4"
          alt="Avatar"
          size="lg" />
        <div class="bg-gray-700/40 p-4 rounded-3xl rounded-bl-none">
          Yo did you get this?
        </div>
      </div>
      <div
        name="single-message"
        class="flex flex-row-reverse gap-4 items-end ml-32">
        <UAvatar
          src="data:image/png;base64,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"
          alt="Me"
          size="lg" />
        <div class="bg-gray-700/20 p-4 rounded-3xl rounded-br-none">
          <p>I was thinking a lot about this, it seems possible</p>
          <p>
            If we go backwards in time we could just stop the invention of email
          </p>
          <p>
            Then nobody would have an inbox and we could all live calmer lives
          </p>
        </div>
      </div>
    </div>
    <div
      name="entry"
      class="flex flex-row gap-4 items-center">
      <div class="grow"><UTextarea /></div>
      <div>
        <UIcon
          name="i-ph-paper-plane-right"
          class="text-2xl" />
      </div>
    </div>
  </div>
</template>
