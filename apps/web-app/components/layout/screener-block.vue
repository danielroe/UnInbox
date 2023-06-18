<script setup lang="ts">
  const screenerPanelOpen = ref(false);
</script>

<template>
  <div
    name="notice"
    class="flex flex-col">
    <div
      class="flex flex-row gap-1 items-center justify-between cursor-pointer select-none hover:bg-sand-4 rounded-md"
      @click="screenerPanelOpen = !screenerPanelOpen">
      <p class="font-display">Screener</p>
      <p class="text-sm pt-1 justify-self-end">
        5 waiting
        <UIcon
          :name="
            screenerPanelOpen ? 'i-ph-caret-left-thin' : 'i-ph-caret-right-thin'
          " />
      </p>
    </div>

    <USlideover
      v-model="screenerPanelOpen"
      :ui="{ background: 'bg-sand-2' }">
      <div class="flex flex-col p-8 gap-4">
        <div class="flex flex-row justify-between items-center">
          <h3 class="font-display text-lg">Screener</h3>
          <UIcon
            name="i-ph-x-thin"
            class="text-xl cursor-pointer"
            @click="screenerPanelOpen = false" />
        </div>
        <ScreenerEntry
          :id="232432"
          name="Miss Jessie Rolfson"
          contact-id="Doris.Cremin77@hotmail.com"
          method="email"
          subject="Directives compressing"
          :timestamp="1686998148476" />
      </div>
    </USlideover>
  </div>
</template>
