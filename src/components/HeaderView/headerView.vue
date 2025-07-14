<template>
    <v-toolbar-title
      ><v-icon>mdi-store</v-icon> ระบบจัดการสินค้า</v-toolbar-title
    >
    <v-spacer></v-spacer>
    <span class="text-uppercase"
      ><v-icon color="success">mdi-circle-medium</v-icon
      ></span
    >
    <v-btn density="compact" icon="mdi-export" @click="handleLogout" />
</template>

<script setup>
import { ref } from "vue";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { useRouter } from "vue-router";

defineOptions({
  name: "HeaderView",
});

const router = useRouter();


const handleLogout = async () => {
  try {
    await signOut(auth);
    console.log("ออกจากระบบสำเร็จ");
    router.push("/signin");
  } catch (error) {
    console.error("เกิดข้อผิดพลาดในการออกจากระบบ:", error);
  }
};
</script>
