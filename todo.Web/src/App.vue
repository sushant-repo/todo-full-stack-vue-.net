<template>
  <v-app id="inspire">
    <v-system-bar>
      <span>{{ currentTime }}</span>
    </v-system-bar>
    <v-navigation-drawer v-model="drawer">
      <v-sheet class="pa-4" color="grey-lighten-4">
        <v-avatar class="mb-4" color="grey-darken-1" size="64">
          <v-img :src="profilePicture"></v-img>
        </v-avatar>

        <div>{{ user.email }}</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="[icon, text] in links"
          :key="icon"
          :prepend-icon="icon"
          :title="text"
          link
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar class="mx-auto d-flex align-center justify-center px-6" flat>
      <v-app-bar-title>2doer</v-app-bar-title>
      <v-spacer></v-spacer>

      <v-responsive max-width="200">
        <v-text-field
          density="compact"
          label="Search"
          rounded="lg"
          variant="solo-filled"
          flat
          hide-details
          single-line
        ></v-text-field>
      </v-responsive>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { computed, ref } from "vue";
import dayjs from "dayjs";
import { getRequest } from "./utils/request";

const links = [
  ["fas fa-inbox", "Inbox"],
  ["far fa-paper-plane", "Send"],
  ["fas fa-trash", "Trash"],
  ["fas fa-circle-exclamation", "Spam"],
];

const drawer = ref(null);

const currentTime = dayjs().format("h:mm a");

const user = ref({});

async function reload() {
  const { results } = await getRequest("https://randomuser.me/api/");
  user.value = results[0];
}

const profilePicture = computed(() => {
  return user.value?.picture?.medium;
});

reload();
</script>
