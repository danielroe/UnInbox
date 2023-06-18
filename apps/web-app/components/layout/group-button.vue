<script setup lang="ts">
  const props = defineProps({
    icon: { type: String, required: true, default: 'ph-arrow' },
    name: { type: String, required: true, default: 'NO NAME' }
  });
</script>

<template>
  <div
    class="bg-sand-3 hover:bg-sand-4 h-12 rounded-lg text-center grow max-w-[128px] min-w-[48px] pt-3 border-2 border-sand-7 hover:border-sand-8 hover:ring-2 hover:ring-sand-8 hover:ring-offset-0 hover:ring-offset-sand-5">
    <UTooltip
      :text="props.name"
      :shortcuts="['⌘', 'O']">
      <UIcon
        :name="props.icon"
        class="text-2xl" />
    </UTooltip>
  </div>
</template>
