<script setup lang="ts">
  const props = defineProps({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    contactId: { type: String, required: true },
    subject: { type: String, default: '' },
    coldRating: { type: Number, default: 0 },
    timestamp: { type: Number, required: true },
    method: { type: String, required: true, default: 'email' }
  });
</script>

<template>
  <div
    class="flex flex-col border-2 gap-4 rounded-3xl border-sand-7 p-6 bg-sand-3 hover:bg-sand-4 hover:border-sand-8 hover:ring-1 hover:ring-sand-8 hover:ring-offset-0 hover:ring-offset-sand-5 transition-all">
    <div class="text-xs text-sand-11">
      <p>
        {{
          new Date(props.timestamp).toLocaleDateString('en-us', {
            weekday: 'long',
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          })
        }}
        via {{ props.method }}
      </p>
    </div>
    <UTooltip
      :text="props.contactId"
      class="flex flex-row gap-2 items-center">
      <UAvatar :alt="props.name" />
      <span class="font-semibold">
        {{ props.name }} - {{ props.contactId.split('@')[1] }}
      </span>
    </UTooltip>

    <UTooltip
      :text="props.subject"
      :ui="{
        base: 'invisible lg:visible px-2 py-1 text-xs font-normal line-clamp-2'
      }">
      <p class="text-md line-clamp-1">
        {{ props.subject }}
      </p></UTooltip
    >
    <div class="flex flex-row justify-between items-center">
      <div>
        <div class="flex flex-row gap-2 items-center">
          <UIcon
            name="i-ph-thermometer-cold"
            class="text-xl" />
          {{ props.coldRating }}
        </div>
      </div>
      <div class="flex flex-row gap-2">
        <div class="rounded bg-indigo-9 px-4 py-2 hover:bg-green-10">
          <UIcon
            name="i-ph-eye"
            class="" />
        </div>
        <div class="rounded bg-grass-9 px-4 py-2 hover:bg-green-10">
          <UIcon
            name="i-mdi-thumb-up-outline"
            class="" />
        </div>
        <div class="rounded bg-tomato-9 px-4 py-2">
          <UIcon
            name="i-mdi-thumb-down-outline"
            class="" />
        </div>
      </div>
    </div>
  </div>
</template>
