<template>
  <div class="h-screen">
    <header class="px-4 px-sm-16 py-4 h-10">
      <VRow>
        <VCol cols="12">
          <div class="d-flex align-center text-primary">
            <VIcon icon="mdi-store" size="50"></VIcon>
            <h1 class="text-h6 text-sm-h4 mr-4 font-weight-regular">Kael Express</h1>
            <h1 class="text-h6 text-sm-h4 text-black font-weight-regular">Login</h1>
          </div>
        </VCol>
      </VRow>
    </header>
    <main class="bg-primary pa-md-16 h-80 d-flex align-center">
      <VRow>
        <VCol cols="12" md="6" class="text-center">
          <div class="mb-16">
            <VIcon icon="mdi-store" size="200"></VIcon>
            <h1 class="text-h4 text-sm-h2 font-weight-regular">Kael Express</h1>
          </div>

          <p class="text-h7 text-sm-h5">
            The leading online shopping platform in Southeast Asia and Taiwan
          </p>
        </VCol>
        <VCol cols="12" md="6" align-self="center">
          <VCard class="pa-5 mx-auto" max-width="400">
            <h2 class="text-h6 font-weight-regular mb-5">Log In</h2>
            <VForm>
              <VTextField
                type="email"
                label="Email Address"
                placeholder="johndoe@gmail.com"
                density="compact"
                class="mb-5"
              ></VTextField>
              <VTextField
                type="password"
                label="Password"
                placeholder="*************"
                density="compact"
                class="mb-5"
              ></VTextField>
              <Button type="submit" size="large" class="w-100 mb-5"
                >Log In</Button
              >
            </VForm>
            <p class="text-center">
              New to Kael Express?
              <RouterLink to="/signup" class="text-primary">Sign Up</RouterLink>
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
</script>

<style scoped>
.h-10 {
  min-height: 10%;
}

.h-80 {
  min-height: 80%;
}
</style>
