<template>
  <div class="h-screen d-flex flex-column">
    <div>
      <v-list density="compact" nav>
        <v-list-item
          title="รายการสินค้า"
          prepend-icon="mdi-package-variant-closed"
          class="tile"
          value="รายการสินค้า"
          color="primary"
          @click="onClickMenu('/')"
        />
      </v-list>
    </div>

    <v-spacer></v-spacer>

    <div>
      <v-list density="compact" nav>
        <v-list-item
          ><v-btn color="error" variant="tonal" prepend-icon="mdi-export" block
            >ออกจากระบบ</v-btn
          ></v-list-item
        >
      </v-list>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

defineOptions({
  name: "NavigationTab",
});

const router = useRouter();

const onClickMenu = (link) => {
  router.push(link).catch((error) => {
    if (
      error.name !== "NavigationDuplicated" &&
      !error.message.includes("Avoided redundant navigation")
    ) {
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
