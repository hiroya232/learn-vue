<template>
  <TitleText class="title">
    ログイン
  </TitleText>
  <v-container>
    <v-form
      ref="form"
      class="login-form"
      @submit.prevent="login"
    >
      <TextField
        ref="userIdForm"
        label="ID"
        type="text"
        :required="true"
        :rules="userNameRules"
      />
      <TextField
        ref="userPasswordForm"
        label="Password"
        type="password"
        :required="true"
        :rules="passwordRules"
      />
      <TextButton
        class="login-button"
        type="submit"
        color="primary"
      >
        Login
      </TextButton>
    </v-form>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TitleText from '../atoms/TitleText.vue'
import TextField from '../atoms/TextField.vue';
import TextButton from '../atoms/TextButton.vue';

const userIdForm = ref();
const userPasswordForm = ref();

const userNameRules = [
  (v: string) => !!v || 'Username is required',
  (v: string) => v.length > 3 || 'Username must be at least 3 characters',
];

// password rules
const passwordRules = [
  (v: string) => !!v || 'Password is required',
  (v: string) => v.length > 5 || 'Password must be at least 5 characters',
];

const login = () => {
  console.log("login!!!");
};
</script>

<style scoped>
.title {
  display: flex;
  justify-content: center;
}

.login-form {
  width: 300px;
  margin: 0 auto;
}

.login-button {
  width: 50%;
  margin: 0 auto;
}
</style>
