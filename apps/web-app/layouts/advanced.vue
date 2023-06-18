<script setup lang="ts"></script>
<template>
  <div
    class="flex flex-col md:flex-row border-8 border-sand-6 rounded-2xl h-screen">
    <div
      class="flex flex-col gap-4 w-96 bg-sand-2 h-full p-4 border-r-2 border-sand-6">
      <div
        name="pinned"
        class="flex flex-row gap-4">
        <LayoutGroupButton
          icon="i-ph-password-thin"
          name="Pin codes" />
        <LayoutGroupButton
          icon="i-ph-bell"
          name="Notifications" />
        <LayoutGroupButton
          icon="i-ph-newspaper"
          name="Newsletters" />
        <LayoutGroupButton
          icon="i-ph-shopping-cart"
          name="Purchases and Orders" />
      </div>
      <hr class="h-px bg-sand-6 border-0" />
      <!-- <UInput
        name="q"
        placeholder="Search..."
        icon="i-ph-magnifying-glass"
        :ui="{ icon: { trailing: { pointer: '' } } }">
        <template #trailing>
          <UButton
            color="gray"
            variant="link"
            icon="i-heroicons-x-mark-20-solid"
            :padded="false" />
        </template>
      </UInput> -->

      <LayoutScreenerBlock />

      <div
        name="convos"
        class="w-full grow">
        <LayoutConvoBlock />
      </div>
      <div
        name="userbar"
        class="">
        <LayoutUserSettingsBlock />
      </div>
    </div>
    <div class="max-h-full overflow-y-scroll w-full p-4">
      <slot />
    </div>
  </div>
</template>
