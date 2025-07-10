<template>
  <v-container>
    <v-row class="d-flex align-center">
      <v-col lg="6" md="6" sm="6"
        ><h2>
          <v-icon class="me-2">mdi-package-variant-closed</v-icon>รายการสินค้า
        </h2>
      </v-col>

      <v-col lg="6" md="6" sm="6" class="d-flex justify-end">
        <v-btn
          color="success"
          size="large"
          prepend-icon="mdi-package-variant-closed-plus"
          @click="dialogInsert = true"
          >สินค้า
        </v-btn>
      </v-col>
    </v-row>

    <productsTable />

    <productsDialogInsert v-model:dialog="dialogInsert" />
  </v-container>
</template>

<script setup>
import productsTable from "@/components/products/products.table.vue";
import productsDialogInsert from "@/components/products/products.dialog.insert.vue";
import { ref } from "vue";

defineOptions({
  name: "ProductsView",
});

const dialogInsert = ref(false)
</script>
