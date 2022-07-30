<template>
  <h1 class="title">
    ログイン
  </h1>
  <v-container>
    <v-form
      ref="form"
      class="login-form"
      @submit.prevent="login"
    >
      <v-text-field
        v-model="userName"
        label="Username"
        required
        :rules="usernameRules"
      />
      <v-text-field
        v-model="password"
        label="Password"
        type="password"
        required
        :rules="passwordRules"
      />
      <v-btn
        class="login-btn"
        type="submit"
        color="primary"
      >
        Login
      </v-btn>
    </v-form>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const userName = ref<string>('');
const password = ref<string>('');

const usernameRules = [
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

.login-btn {
  width: 50%;
  margin: 0 auto;
}
</style>
