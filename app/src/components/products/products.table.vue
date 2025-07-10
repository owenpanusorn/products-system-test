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
        label="ค้นหา . ."
        append-inner-icon="mdi-magnify"
        single-line
        hide-details
        clearable
      ></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="items" :search="search" hover>
      <tempowenlate v-slot:header="{ props: { headers } }">
        <thead>
          <tr>
            <th
              v-for="header in headers"
              :key="header.key"
              class="sticky-header"
            >
              {{ header.title }}
            </th>
          </tr>
        </thead>
      </tempowenlate>
      <template #item.actions="{ item }">
        <v-btn
          icon
          size="small"
          color="warning"
          variant="outlined"
          class="me-1"
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn
          icon
          size="small"
          variant="outlined"
          color="error"
        >
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>

<script setup>
import { ref } from 'vue';

defineOptions({
    name: "productsTable"
})

const search = ref("")

const headers = [
  { title: "รหัสสินค้า", key: "prod_id" },
  { title: "ชื่อสินค้า", key: "prod_name" },
  { title: "ราคา", key: "prod_price" },
  { title: "การจัดการ", key: "actions", sortable: false },
];
</script>