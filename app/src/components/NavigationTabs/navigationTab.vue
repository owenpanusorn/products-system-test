<template>
  <v-list density="compact" nav v-model:opened="open">
    <v-list-item
      title="รายการสินค้า"
      prepend-icon="mdi-package-variant-closed"
      class="tile"
      value="รายการสินค้า"
      color="primary"
      @click="onClickMenu('/')"
    ></v-list-item>
    <v-list-item
      title="รายการสมาชิก"
      prepend-icon="mdi-account"
      class="tile"
      value="รายการสมาชิก"
      color="primary"
      @click="onClickMenu('/account')"
    ></v-list-item>
  </v-list>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

defineOptions({
    name: "NavigationTab"
})

const open = ref([])
const router = useRouter();

const onClickMenu = (link) => {
    router.push(link).catch((error) => {
    if (error.name !== 'NavigationDuplicated' && !error.message.includes('Avoided redundant navigation')) {
      console.error(error);
    }
  });
};
</script>

<style scoped>
.tile {
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.tile:hover {
  color: #1697f6;
  background-color: #e4f3fe;
}
</style>