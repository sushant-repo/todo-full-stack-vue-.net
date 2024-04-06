<template>
  <v-select
    label="Priority"
    :items="taskPriorities"
    v-bind="$attrs"
    v-model="innerValue"
    clearable
  >
    <template #item="{ props, item }">
      <v-list-item v-bind="props">
        <template #prepend>
          <v-icon
            class="mr-n5"
            :icon="item.raw.icon"
            :class="`text-${item.raw.color}`"
            size="x-small"
          >
          </v-icon>
        </template>
      </v-list-item>
    </template>
    <template v-slot:selection="{ item }">
      <v-chip :prependIcon="item.raw.icon" :class="`text-${item.raw.color}`">
        <span>{{ item.title }}</span>
      </v-chip>
    </template>
  </v-select>
</template>

<script setup>
const taskPriorities = [
  { title: "Highest", icon: "fas fa-angles-up", color: "red-darken-4" },
  { title: "High", icon: "fas fa-angle-up", color: "red" },
  { title: "Medium", icon: "fas fa-grip-lines", color: "orange-darken-4" },
  { title: "Low", icon: "fas fa-angle-down", color: "blue" },
  { title: "Lowest", icon: "fas fa-angles-down", color: "blue-darken-4" },
];

const innerValue = defineModel({ type: String, default: null });
</script>
