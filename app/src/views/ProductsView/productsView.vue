<template>
    <v-container>
        <v-row class="d-flex align-center">
      <v-col cols="12" lg="6" md="6" sm="12"
        ><h2><v-icon class="me-2">mdi-package-variant-closed</v-icon>รายการสินค้า</h2>
      </v-col>

      <v-col cols="12" lg="6" md="6" sm="12" class="d-flex justify-end">
        <v-btn
          color="success"
          size="large"
          prepend-icon="mdi-plus"
          @click="dialogAdd = true"
          >สินค้า
        </v-btn>
      </v-col>
    </v-row>

    <productsTable />
    </v-container>
</template>

<script setup>
import productsTable from '@/components/products/products.table.vue'
    defineOptions({
        name: "ProductsView"
    })
</script>