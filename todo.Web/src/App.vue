<template>
  <v-app id="inspire">
    <v-system-bar>
      <span>{{ currentTime }}</span>
    </v-system-bar>
    <v-navigation-drawer v-model="drawer">
      <v-sheet class="pa-4" color="accentV1">
        <v-avatar class="mb-4" color="grey-darken-1" size="64">
          <v-img :src="profilePicture"></v-img>
        </v-avatar>

        <div>{{ user.email }}</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list v-for="[icon, text, link] in links" :key="icon">
        <router-link :to="link">
          <v-list-item
            :prepend-icon="icon"
            :title="text"
            link
            color="success"
          />
        </router-link>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar class="mx-auto d-flex align-center justify-center px-6" flat>
      <v-app-bar-title>{{ fullName }}, welcome to 2doer.</v-app-bar-title>
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
      <template v-slot:append>
        <v-menu>
          <template #activator="{ props }">
            <v-btn v-bind="props" icon="fas fa-ellipsis-vertical"></v-btn>
          </template>
          <v-list-item href="/settings/color">Color Settings</v-list-item>
        </v-menu>
      </template>
    </v-app-bar>

    <v-main class="bg-primary">
      <v-container class="py-8 px-6" fluid>
        <v-row>
          <v-col cols="12">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { computed, ref } from "vue";
import dayjs from "dayjs";
import { getRequest } from "./utils/request";

const links = [
  ["fas fa-inbox", "Inbox", "/"],
  ["far fa-paper-plane", "Send", "/"],
  ["fas fa-trash", "Trash", "/"],
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

const fullName = computed(() => {
  if (!Object.keys(user.value).length) {
    return null;
  }

  const { title, first, last } = user.value?.name;
  return `${title} ${first} ${last}`;
});

reload();
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
</style>
