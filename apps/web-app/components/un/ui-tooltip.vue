<script lang="ts">
  import type { DefineComponent } from 'vue';
  import { NuxtUiTooltip } from '#components';

  export default defineComponent<
    typeof NuxtUiTooltip extends DefineComponent<infer Props, any, any>
      ? Props
      : never
  >({
    props: {
      ...NuxtUiTooltip.props
    }
  });
</script>
<template>
  <NuxtUiTooltip v-bind="$props">
    <slot />
  </NuxtUiTooltip>
</template>
