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
            <VCard
              v-if="loginCredentials.error"
              class="mb-5 pa-2 d-flex align-center ga-2"
              color="error"
              flat
              hover
              variant="outlined"
            >
              <VIcon
                icon="mdi-alert-circle-outline"
                color="error"
                size="large"
              ></VIcon>
              <p class="text-error text-body-2">
                Login has failed; please try again later or use different login
                method.
              </p>
            </VCard>
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
                    :rules="[rules.required, rules.email]"
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
                    :rules="[rules.required]"
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
            <VCard
              v-if="registerCredentials.error"
              class="mb-5 pa-2 d-flex align-center ga-2"
              color="error"
              flat
              hover
              variant="outlined"
            >
              <VIcon
                icon="mdi-alert-circle-outline"
                color="error"
                size="large"
              ></VIcon>
              <p class="text-error text-body-2">
                Registration failed; please try again later or use different
                registration method.
              </p>
            </VCard>
            <VForm @submit.prevent="onSubmitRegister">
              <VRow>
                <VCol cols="6" class="pb-0"
                  ><VTextField
                    type="text"
                    label="First Name"
                    placeholder="John"
                    density="compact"
                    clearable
                    variant="outlined"
                    :rules="[rules.required]"
                    v-model="registerCredentials.firstName"
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
                    :rules="[rules.required]"
                    v-model="registerCredentials.lastName"
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
                    :rules="[rules.required, rules.email]"
                    v-model="registerCredentials.email"
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
                    :rules="[rules.required]"
                    v-model="registerCredentials.password"
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

const router = useRouter();

const TYPE_CONSTANTS = {
  LOGIN_AUTH: 'login',
  REGISTER_AUTH: 'register'
};

const route = useRoute();
const userStore = useUserStore();

const type = ref(route.query.type);

// LOGIN
const loginCredentials = ref({
  email: '',
  password: '',
  error: null as unknown
});

const rules = {
  required(value: string) {
    return !!value || 'Required';
  },
  counter(value: string) {
    return value.length <= 20 || 'Max 20 characters';
  },
  email(value: string) {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value) || 'Invalid e-mail';
  }
};

const onSubmitLogin = async () => {
  const { email, password } = loginCredentials.value;
  const { data, error } = await useFetch('/api/login', {
    method: 'POST',
    body: {
      email,
      password
    }
  });

  if (error.value) {
    loginCredentials.value.error = error;
  } else {

    if (data.value !== null) {
      userStore.setUser(toRaw(data.value));
    }

    router.push('/products');
  }
};

// Register Auth
const registerCredentials = ref({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  error: null as unknown
});

const onSubmitRegister = async () => {
  const { firstName, lastName, email, password } = registerCredentials.value;

  const { data, error } = await useFetch('api/register', {
    method: 'POST',
    body: {
      firstName,
      lastName,
      email,
      password
    }
  });

  if (error.value) {
    registerCredentials.value.error = error;
  }
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
