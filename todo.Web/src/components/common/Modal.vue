<template>
  <v-dialog v-model="innerValue" :title="title" :width="width">
    <v-card>
      <slot name="default"> Missing model content... </slot>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "Model Title",
  },
  small: {
    type: Boolean,
  },
});

const defaultWidth = 1000;
const innerValue = defineModel({ type: Boolean });

const width = computed(() => {
  if (props.small) {
    return 500;
  }
  return defaultWidth;
});
</script>
