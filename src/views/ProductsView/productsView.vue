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

    <productsTable :items="tblData" :loading="loading" />
    <productsDialogInsert v-model:dialog="dialogInsert" @submitted="fetchProducts"/>
  </v-container>
</template>

<script setup>
import productsTable from "@/components/products/products.table.vue";
import productsDialogInsert from "@/components/products/products.dialog.insert.vue";
import { onMounted, ref, onUnmounted } from "vue";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

defineOptions({
  name: "ProductsView",
});

const tblData = ref([]);
const dialogInsert = ref(false);
const loading = ref(false);

const fetchProducts = async () => {
  const productsListSnapshot = await getDocs(collection(db, "products"));

  const products = productsListSnapshot.docs.map((doc) => {
    return {
      prod_id: doc.id,
      ...doc.data(),
    };
  });

  if (products.length > 0) {
    tblData.value = products;
  }
};

onMounted(() => {
  fetchProducts();
});
</script>
