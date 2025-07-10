<template>
  <v-dialog v-model="dialogModel" max-width="500px">
    <v-form v-model="formValid" @submit.prevent="handleSubmit">
      <v-card class="w100">
        <v-toolbar color="green" height="90">
          <v-row>
            <v-col cols="12" lg="6" md="6" sm="6">
              <v-card-title>
                <v-icon>mdi-package-variant-closed-plus</v-icon>
                เพิ่มสินค้า
              </v-card-title>
            </v-col>
            <v-col cols="12" lg="6" md="6" sm="6">
              <div class="d-flex justify-end">
                <v-btn icon="mdi-close" variant="text" @click="close" />
              </div>
            </v-col>
          </v-row>
        </v-toolbar>

        <v-card-text>
          <div class="d-flex flex-column ga-1">
            <label for="" class="text-grey-darken-2"
              >รหัสสินค้า (ไม่สามารถตั้งซ้ำกันได้)
              <span class="text-red">*</span></label
            >
            <v-text-field
              label="รหัสสินค้า"
              variant="outlined"
              color="primary"
              :rules="[required]"
            ></v-text-field>

            <label for="" class="text-grey-darken-2"
              >ชื่อสินค้า <span class="text-red">*</span></label
            >
            <v-text-field
              label="ชื่อสินค้า"
              variant="outlined"
              color="primary"
              :rules="[required]"
            ></v-text-field>

            <label for="" class="text-grey-darken-2"
              >ราคา <span class="text-red">*</span></label
            >
            <v-text-field
              label="ราคา"
              variant="outlined"
              color="primary"
              min="0"
              :rules="[required, onlyNumber]"
            ></v-text-field>
          </div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="pa-5">
            <v-btn variant="outlined" color="grey" @click="close">ยกเลิก</v-btn>
            <v-btn :disabled="!formValid" color="success" prepend-icon="mdi-package-variant-closed-plus" variant="flat" type="submit">เพิ่มสินค้า</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script setup>
import { ref, watch } from "vue";

defineOptions({
  name: "productsDialogInsert",
});

const props = defineProps({
  dialog: Boolean,
});
const formValid = ref(false);
const dialogModel = ref(false);

const close = () => {
    console.log("close");
    
  dialogModel.value = false;

  console.log(dialogModel.value);
  
};

const emit = defineEmits(["update:dialog"])
watch(() => props.dialog, (val) => dialogModel.value = val)
watch(dialogModel, (val) => emit("update:dialog", val))

const required = (v) => !!v || "กรุณากรอกข้อมูล";
const onlyNumber = (v) => /^\d+(\.\d+)?$/.test(v) || "กรุณากรอกตัวเลขเท่านั้น";

const handleSubmit = async () => {
    
}
</script>
