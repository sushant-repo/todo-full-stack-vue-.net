<template>
  <v-card>
    <v-card-title class="d-flex">
      <span> Inbox </span>
      <v-spacer></v-spacer>
      <v-btn color="accent" @click="open = true">
        <v-icon>far fa-add</v-icon>
        Add Task
      </v-btn>
    </v-card-title>
    <v-card-text>
      <v-alert
        v-if="!tasks.length"
        type="success"
        variant="outlined"
        class="d-flex justify-center"
      >
        Yahoo! All your tasks have been taken care of 🚀.
      </v-alert>
      <v-card v-else v-for="card in tasks" :key="card">
        <v-list lines="two">
          <v-list-subheader :title="card"></v-list-subheader>

          <template v-for="n in 6" :key="n">
            <v-list-item>
              <template v-slot:prepend>
                <v-avatar color="grey-darken-1"></v-avatar>
              </template>

              <v-list-item-title :title="`Message ${n}`"></v-list-item-title>

              <v-list-item-subtitle
                title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique"
              ></v-list-item-subtitle>
            </v-list-item>

            <v-divider v-if="n !== 6" :key="`divider-${n}`" inset></v-divider>
          </template>
        </v-list>
      </v-card>
    </v-card-text>
  </v-card>

  <task-modal-form v-model="open" persistent title="Add Task"></task-modal-form>
</template>

<script setup>
import { ref } from "vue";
import TaskModalForm from "@/components/modals/TaskModalForm.vue";

const tasks = ref([]);
const open = ref(false);
</script>
