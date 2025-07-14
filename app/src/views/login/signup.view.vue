<template>
  <div fluid class="d-flex align-center justify-center h-screen bg-gray">
    <div class="rounded-lg" :style="{ maxWidth: '400px', width: '100%' }">
      <v-form v-model="formValid">
        <div class="d-flex flex-column align-center">
          <v-btn color="primary" icon><v-icon>mdi-account</v-icon></v-btn>
          <h1 class="text-primary">สมัครสมาชิก</h1>
          <span class="text-grey-darken-3"
            >สมัครสมาชิกเพื่อใช้งานระบบสินค้า</span
          >
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
            type="email"
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

        <div class="mt-1">
          <span><v-icon>mdi-lock</v-icon> Cofirm Password</span>
          <v-text-field
            v-model="confPass"
            variant="outlined"
            class="mt-2"
            color="primary"
            label="Password"
            placeholder="กรุณากรอก Password"
            :type="visible ? 'text' : 'password'"
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            @click:append-inner="visible = !visible"
            :rules="[required, confirmPasswordRule]"
          ></v-text-field>
        </div>

        <v-btn :disabled="!formValid" color="primary" block class="pa-7 mt-2" @click="handleRegister"
          >สมัครสมาชิก</v-btn
        >

        <div class="mt-10 d-flex justify-center">
          <span class="text-grey-darken-1">หรือ</span>
        </div>

        <div class="mt-10 d-flex justify-center">
          <span class="text-grey-darken-3"
            >มีบัญชีแล้ว?
            <span
              class="text-primary"
              @click="onClickMenu('/signin')"
              style="cursor: pointer"
              >หน้าเข้าสู่ระบบ</span
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
import { createUserWithEmailAndPassword  } from "firebase/auth";
import Swal from "sweetalert2";

defineOptions({
  name: "signUpView",
});

const visible = ref(false);
const required = (v) => !!v || "กรุณากรอกข้อมูล";
const confirmPasswordRule = (v) => {
  return v === password.value || "รหัสผ่านไม่ตรงกัน";
};
const rules = {
  email: (value) => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value) || "กรุณากรอกอีเมลให้ถูกต้อง";
  },
};

const formValid = ref(false);
const email = ref("");
const password = ref("");
const confPass = ref("");

const router = useRouter();

const handleRegister = async () => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );

    const user = userCredential.user;
    console.log("Registration successful:", user);
      Swal.fire({
      title: "สมัครสมาชิกสำเร็จ!",
      icon: "success",
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 3000,
    });

    router.push("/signin");
  } catch (error) {
    console.error("Registration error:", error.code);
    handleAuthError(error);
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

const handleAuthError = (error) => {
  switch (error.code) {
    case "auth/email-already-in-use":
      alert("This email is already in use.");
      break;
    case "auth/weak-password":
      alert("Password is too weak. It must be at least 6 characters long.");
      break;
    case "auth/invalid-email":
      alert("The email address is not valid.");
      break;
    default:
      alert("An unexpected error occurred.");
  }
};
</script>
