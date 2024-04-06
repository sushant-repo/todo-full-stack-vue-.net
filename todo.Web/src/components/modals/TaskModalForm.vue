<template>
  <modal-form v-model="open" v-bind="$attrs">
    <v-card-title> </v-card-title>

    <v-card-text>
      <v-row>
        <v-col>
          <v-text-field
            variant="outlined"
            autofocus
            label="Task name"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-textarea label="Description"></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <task-priority-field v-model="priority" />
        </v-col>
        <v-col>
          <date-field v-model="date" />
        </v-col>
      </v-row>
    </v-card-text>
  </modal-form>
</template>

<script setup>
import ModalForm from "@/components/common/ModalForm.vue";
import TaskPriorityField from "@/components/fields/TaskPriorityField.vue";
import DateField from "@/components/common/fields/DateField.vue";
import { ref } from "vue";

const open = defineModel({ type: Boolean });
const date = ref();
const priority = ref();
</script>
