<template>
  <v-app>
    <v-navigation-drawer v-if="!isLockScreen" v-model="drawer">
      <NavigationTab />
    </v-navigation-drawer>

    <v-app-bar v-if="!isLockScreen">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <HeaderView />
    </v-app-bar>

    <v-main class="bg-gray">
      <ContentView />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, computed } from "vue";
import HeaderView from "./components/HeaderView/headerView.vue";
import NavigationTab from "./components/NavigationTabs/navigationTab.vue";
import ContentView from "./components/ContentView/ContentView.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const drawer = ref(null);

const isLockScreen = computed(() => {
 const lockScreenPaths = ['/signin', '/signup'];
  return lockScreenPaths.includes(route.path);
})
</script>
