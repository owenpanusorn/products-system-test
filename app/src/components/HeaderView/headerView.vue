<template>
  <v-toolbar-title><v-icon>mdi-store</v-icon> ระบบจัดการสินค้า</v-toolbar-title>
  <v-spacer></v-spacer>
  <span class="text-uppercase"
    ><v-icon color="success">mdi-circle-medium</v-icon>USERNAME&nbsp;</span
  >
  <v-btn density="compact" icon="mdi-export"> </v-btn>
</template>

<script setup>
defineOptions({
  name: "HeaderView",
});
</script>
