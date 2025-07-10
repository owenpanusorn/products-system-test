<template>
  <v-app>
    <v-navigation-drawer v-model="drawer">
      <NavigationTab />
    </v-navigation-drawer>

    <v-app-bar >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <HeaderView />
    </v-app-bar>

    <v-main class="bg-gray">
      <ContentView />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
import HeaderView from './components/HeaderView/headerView.vue'
import NavigationTab from './components/NavigationTabs/navigationTab.vue';
import ContentView from './components/ContentView/ContentView.vue'

const drawer = ref(null)
</script>