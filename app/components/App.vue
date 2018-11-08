<template>
    <Page>
        <ActionBar title="Welcome to NativeScript-Vue!"/>
        <StackLayout>
            <TextField v-model="birthdate" hint="birthdate" @tap="openDateModal"></TextField>
            <TextField v-model="num" hint="num" keyboardType="number"></TextField>
        </StackLayout>
    </Page>
</template>

<script>
import { ModalDatetimepicker } from "nativescript-modal-datetimepicker";
import DateService from "../utils/DateService";

const Service = new DateService();

export default {
  data() {
    return {
      birthdate: null,
      num: null,
      dropdown: null
    };
  },
  methods: {
    async openDateModal() {
      this.birthdate = await Service.getDate();
    }
  }
};
</script>

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}
</style>
