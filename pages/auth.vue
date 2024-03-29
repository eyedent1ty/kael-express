<template>
  <div class="h-screen">
    <header class="px-4 px-sm-16 py-4 h-10">
      <VRow>
        <VCol cols="12">
          <div class="d-flex align-center text-primary">
            <VIcon icon="mdi-store" size="50"></VIcon>
            <RouterLink to="/">
              <h1
                class="text-primary text-h6 text-sm-h4 mr-4 font-weight-regular"
              >
                Kael Express
              </h1>
            </RouterLink>
            <h1 class="text-h6 text-sm-h4 text-black font-weight-regular">
              Login
            </h1>
          </div>
        </VCol>
      </VRow>
    </header>
    <main class="bg-primary pa-md-16 h-80 d-flex align-center px-2 px-md-0">
      <VRow>
        <VCol cols="12" md="6" class="text-center">
          <div class="mb-16">
            <VIcon icon="mdi-store" size="200"></VIcon>
            <h1 class="text-h4 text-sm-h2 font-weight-regular">Kael Express</h1>
          </div>

          <p class="text-h8 text-sm-h6 font-weight-regular">
            a cutting-edge e-commerce platform that harnesses the power of the
            internet to provide users with an effortless online buying
            experience.
          </p>
        </VCol>
        <VCol cols="12" md="6" align-self="center" class="mb-10 mb-md-0">
          <VCard
            v-if="type === TYPE_CONSTANTS.LOGIN_AUTH"
            class="pa-5 mx-auto"
            max-width="400"
          >
            <h2 class="text-h6 font-weight-regular mb-5">Log In</h2>
            <VForm @submit.prevent="onSubmitLogin">
              <VRow>
                <VCol cols="12" class="pb-0">
                  <VTextField
                    type="email"
                    label="Email Address"
                    placeholder="johndoe@gmail.com"
                    density="compact"
                    clearable
                    variant="outlined"
                    v-model="loginCredentials.email"
                  ></VTextField>
                </VCol>
              </VRow>
              <VRow>
                <VCol cols="12" class="pb-0 mb-5">
                  <VTextField
                    type="password"
                    label="Password"
                    placeholder="*************"
                    density="compact"
                    clearable
                    variant="outlined"
                    v-model="loginCredentials.password"
                  ></VTextField>
                </VCol>
              </VRow>

              <Button type="submit" size="large" class="w-100 mb-5"
                >Log In</Button
              >
            </VForm>
            <p class="text-center">
              New to Kael Express?
              <RouterLink
                to="/auth?type=register"
                class="text-primary"
                @click="type = 'register'"
                >Sign Up</RouterLink
              >
            </p>
          </VCard>

          <VCard v-else class="pa-5 mx-auto" max-width="400">
            <h2 class="text-h6 font-weight-regular mb-5">Sign Up</h2>
            <VForm>
              <VRow>
                <VCol cols="6" class="pb-0"
                  ><VTextField
                    type="text"
                    label="First Name"
                    placeholder="John"
                    density="compact"
                    clearable
                    variant="outlined"
                  ></VTextField
                ></VCol>
                <VCol cols="6" class="pb-0">
                  <VTextField
                    type="text"
                    label="Last Name"
                    placeholder="Doe"
                    density="compact"
                    clearable
                    variant="outlined"
                  >
                  </VTextField>
                </VCol>
              </VRow>
              <VRow>
                <VCol cols="12" class="pb-0">
                  <VTextField
                    type="email"
                    label="Email Address"
                    placeholder="johndoe@gmail.com"
                    density="compact"
                    clearable
                    variant="outlined"
                  ></VTextField>
                </VCol>
              </VRow>

              <VRow>
                <VCol cols="12" class="pb-0">
                  <VTextField
                    type="password"
                    label="Password"
                    placeholder="*************"
                    density="compact"
                    class="mb-5"
                    clearable
                    variant="outlined"
                  ></VTextField>
                </VCol>
              </VRow>

              <Button type="submit" size="large" class="w-100 mb-5"
                >Sign up</Button
              >
            </VForm>
            <p class="text-center">
              Already have an account?
              <RouterLink
                to="/auth?type=login"
                class="text-primary"
                @click="type = 'login'"
                >Login</RouterLink
              >
            </p>
          </VCard>
        </VCol>
      </VRow>
    </main>
    <footer class="h-10 d-flex justify-center justify-sm-end align-center">
      <div class="d-flex align-center">
        <p class="mr-2">Follow us on</p>
        <div>
          <VIcon color="primary" icon="mdi-facebook"></VIcon>
          <VIcon color="primary" icon="mdi-instagram"></VIcon>
          <VIcon color="primary" icon="mdi-twitter"></VIcon>
          <VIcon color="primary" icon="mdi-linkedin"></VIcon>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'auth'
});

const TYPE_CONSTANTS = {
  LOGIN_AUTH: 'login',
  REGISTER_AUTH: 'register'
};

const route = useRoute();

const type = ref(route.query.type);

// LOGIN
const loginCredentials = ref({
  email: '',
  password: ''
});

const onSubmitLogin = () => {
  const { email, password } = loginCredentials.value;
  console.log(email, password);
};
</script>

<style scoped>
.h-10 {
  min-height: 10%;
}

.h-80 {
  min-height: 80%;
}
</style>
