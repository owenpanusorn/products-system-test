<template>
  <v-card class="mt-5 pa-5">
    <v-card-title class="d-flex align-center">
      <v-icon icon="mdi-database-sync-outline"></v-icon> &nbsp;
      ตารางรายการสินค้า
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        density="compact"
        variant="outlined"
        color="primary"
        label="ค้นหา รหัสสินค้า, ชื่อสินค้า, ราคา"
        append-inner-icon="mdi-magnify"
        single-line
        hide-details
        clearable
      ></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="items" :search="search" hover>
       <template v-slot:item="{ item }">
          <tr>
            <td>{{ item.prod_id }}</td>
            <td>{{ item.prod_name }}</td>
            <td>{{ Number(item.prod_price).toLocaleString() }}</td>
          </tr>
        </template>
    </v-data-table>
  </v-card>
</template>

<script setup>
import { ref } from "vue";

defineOptions({
  name: "productsTable",
});

const search = ref("");
const props = defineProps({
  items: Array,
  loading: Boolean,
});

const headers = [
  { title: "รหัสสินค้า", key: "prod_id" },
  { title: "ชื่อสินค้า", key: "prod_name" },
  { title: "ราคา", key: "prod_price" },
];
</script>
