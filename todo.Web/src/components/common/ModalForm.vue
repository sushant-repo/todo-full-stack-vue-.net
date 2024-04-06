<template>
  <modal v-model="innerValue">
    <v-card>
      <v-card-title class="bg-success">
        <v-row>
          <v-col>
            <span class="text-white d-flex" style="min-height: 30px">
              {{ title }}
            </span>
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-text>
        <slot />

        <v-row>
          <v-col class="d-flex">
            <v-btn prependIcon="fas fa-xmark" @click="innerValue = false">
              Close
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="success" :prependIcon="confirmIcon">
              {{ confirmText }}
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </modal>
</template>

<script setup>
import Modal from "@/components/common/Modal.vue";

const props = defineProps({
  title: {
    type: String,
    default: null,
  },
  confirmText: {
    type: String,
    default: "confirm",
  },
  confirmIcon: {
    type: String,
    default: "far fa-floppy-disk",
  },
});

const innerValue = defineModel({ type: Boolean });
</script>
