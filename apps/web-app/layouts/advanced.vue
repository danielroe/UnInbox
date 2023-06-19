<script setup lang="ts"></script>
<template>
  <div
    class="flex flex-col md:flex-row border-8 border-sand-6 rounded-2xl h-screen">
    <div
      class="flex flex-col gap-4 w-96 bg-sand-2 h-full p-4 border-r-2 border-sand-6">
      <div
        name="pinned"
        class="flex flex-row gap-4">
        <UPopover>
          <LayoutGroupButton
            icon="i-ph-password-thin"
            name="Pin codes" />

          <template #panel>
            <div
              class="p-4 rounded-lg flex flex-col bg-sand-3 gap-4 border-2 border-sand-6 ml-4">
              <div
                class="flex flex-row justify-between align-middle border-2 border-sand-3 bg-sand-5 p-2 gap-16 rounded">
                <div class="flex flex-col gap-1">
                  <p class="font-display text-md">Slack</p>
                  <p class="text-sm">Login Code</p>
                </div>
                <UButton
                  color="primary"
                  variant="solid"
                  size="2xs"
                  label="Copy" />
              </div>
              <div
                class="flex flex-row justify-between align-middle border-2 border-sand-3 bg-sand-5 p-2 rounded">
                <div class="flex flex-col gap-1">
                  <p class="font-display text-md">Twitch</p>
                  <p class="text-sm">Login Code</p>
                </div>
                <UButton
                  color="primary"
                  variant="solid"
                  size="2xs"
                  label="Copy" />
              </div>
              <div
                class="flex flex-row justify-between align-middle border-2 border-sand-3 bg-sand-5 p-2 rounded">
                <div class="flex flex-col gap-1">
                  <p class="font-display text-md">RandomSaas</p>
                  <p class="text-sm">Verify Account</p>
                </div>
                <UButton
                  color="primary"
                  variant="solid"
                  size="2xs"
                  label="Open" />
              </div>
            </div>
          </template>
        </UPopover>

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
