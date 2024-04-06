<template>
  <v-menu location="bottom" transition="scale-transition">
    <template #activator="{ props }">
      <v-text-field
        v-bind="props"
        label="Date"
        v-model="formattedDate"
        readonly
        clearable
      ></v-text-field>
    </template>
    <v-date-picker show-adjacent-months color="success" v-model="innerValue" />
  </v-menu>
</template>

<script setup>
import Modal from "@/components/common/Modal.vue";
import dayjs from "dayjs";
import { computed, ref } from "vue";
import { useDate } from "vuetify";

const date = useDate();

const open = ref(false);
const innerValue = defineModel({ type: Object, default: null });

const formattedDate = computed({
  get() {
    if (innerValue.value) {
      return date.formatByString(innerValue.value, "DD/MM/YYYY");
    }

    return null;
  },
  set(value) {
    innerValue.value = value;
    //
  },
});
</script>
