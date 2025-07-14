<template>
  <div fluid class="d-flex align-center justify-center h-screen bg-gray">
    <div class="rounded-lg" :style="{ maxWidth: '400px', width: '100%' }">
      <v-form v-model="formValid">
        <div class="d-flex flex-column align-center">
          <v-btn color="primary" icon><v-icon>mdi-login</v-icon></v-btn>
          <h1 class="text-primary">เข้าสู่ระบบ</h1>
          <span class="text-grey-darken-3">เพื่อใช้งานระบบสินค้า</span>
        </div>

        <div class="mt-10">
          <span><v-icon>mdi-account</v-icon>email</span>
          <v-text-field
            v-model="email"
            variant="outlined"
            class="mt-2"
            color="primary"
            label="email"
            placeholder="กรุณากรอก email"
            :rules="[required, rules.email]"
          ></v-text-field>
        </div>

        <div class="mt-1">
          <span><v-icon>mdi-lock</v-icon>Password</span>
          <v-text-field
            v-model="password"
            variant="outlined"
            class="mt-2"
            color="primary"
            label="Password"
            placeholder="กรุณากรอก Password"
            :type="visible ? 'text' : 'password'"
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            @click:append-inner="visible = !visible"
            :rules="[required]"
          ></v-text-field>
        </div>

        <v-btn
          :disabled="!formValid"
          color="primary"
          block
          class="pa-7 mt-2"
          @click="login"
          >เข้าสู่ระบบ</v-btn
        >

        <div class="mt-10 d-flex justify-center">
          <span class="text-grey-darken-1">หรือ</span>
        </div>

        <div class="mt-10 d-flex justify-center">
          <span class="text-grey-darken-3"
            >ยังไม่มีบัญชี?
            <span
              class="text-primary"
              @click="onClickMenu('/signup')"
              style="cursor: pointer"
              >สมัครสมาชิก</span
            >
          </span>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { auth } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";

defineOptions({
  name: "signInView",
});

const formValid = ref(false);
const email = ref("");
const password = ref("");
const visible = ref(false);
const required = (v) => !!v || "กรุณากรอกข้อมูล";
const rules = {
  email: (value) => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value) || "กรุณากรอกอีเมลให้ถูกต้อง";
  },
};
const router = useRouter();

const login = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );

    const user = userCredential.user;
    console.log("Authentication successful for:", user.uid);

    console.log("เข้าสู่ระบบสำเร็จ:", user);
    Swal.fire({
      title: "เข้าสู่ระบบสำเร็จ!",
      icon: "success",
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 3000,
    });

    router.push("/");
  } catch (error) {
    console.error("เกิดข้อผิดพลาดในการเข้าสู่ระบบ:", error.code);

    if (
      error.code === "auth/invalid-credential" ||
      error.code === "auth/wrong-password" ||
      error.code === "auth/user-not-found"
    ) {
      Swal.fire({
        title: "email or Password incorrect!",
        icon: "warning",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    } else {
      alert("เกิดข้อผิดพลาดบางอย่าง");
    }
  }
};

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
