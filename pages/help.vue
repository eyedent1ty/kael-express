<template>
  <main class="pa-10">
    <VRow>
      <VCol cols="12">
        <h1
          class="font-weight-regular text-center text-h5 text-sm-h4 text-primary"
        >
          Welcome to Kael Express Help Center
        </h1>
      </VCol>
      <VCol cols="12">
        <h2 class="font-weight-regular text-primary">About Kael Express</h2>
        <p class="text-justify text-sm-left">
          Welcome to Kael Express, your go-to destination for a seamless
          e-commerce experience! At Kael Express, we're dedicated to providing
          you with a top-notch online shopping platform that offers convenience,
          reliability, and a wide range of products to choose from.
        </p>
      </VCol>
      <VCol cols="12">
        <h2 class="font-weight-regular text-primary">Our Mission</h2>
        <p class="text-justify text-sm-left">
          Our mission at Kael Express is simple: to empower you through
          technology and innovation. I strive to create a user-friendly and
          intuitive e-commerce platform that not only meets your shopping needs
          but also enhances your overall online shopping experience.
        </p>
      </VCol>
      <VCol cols="12">
        <h2 class="font-weight-regular text-primary">
          Why Choose Kael Express?
        </h2>
        <VList>
          <VListItem class="text-justify text-sm-left">
            <strong>Built with Expertise:</strong> Kael Express is the
            brainchild of passionate developer who are dedicated to mastering
            the art of full-stack web development. The platform is crafted with
            meticulous attention to detail and powered by cutting-edge
            technologies.
          </VListItem>
          <VListItem class="text-justify text-sm-left">
            <strong>Learning and Growth:</strong> Kael Express isn't just
            another e-commerce platform—it's also a learning journey. I created
            Kael Express as a means to train myself in full-stack web
            development using Nuxt.js, allowing us to hone my skills and
            showcase our capabilities to potential recruiters.
          </VListItem>
          <VListItem class="text-justify text-sm-left">
            <strong>Job-Ready Skills:</strong> By building Kael Express, I have
            gained invaluable hands-on experience in developing complex web
            applications from scratch. My journey with Kael Express has equipped
            us with job-ready skills, making myself well-prepared to take on
            challenges in the dynamic world of web development.
          </VListItem>
        </VList>
      </VCol>
      <VCol cols="12">
        <h2 class="font-weight-regular text-primary">How Can We Help You?</h2>
        <p class="text-justify text-sm-left">
          Whether you have questions about our products, need assistance with
          placing an order, or simply want to provide feedback, reach out to us
          directly for personalized assistance.
        </p>
        <p class="text-justify text-sm-left mt-10">
          Thank you for choosing Kael Express—we're excited to embark on this
          journey with you!
        </p>
      </VCol>
      <VCol cols="12" class="d-flex justify-center justify-sm-start">
        <RouterLink to="/">
          <VBtn  class="home" color="primary"> Home</VBtn>
        </RouterLink>
      </VCol>
    </VRow>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'help'
});

useHead({
  title: `Kael Express | Help`,
  meta: [
    {
      name: 'description',
      content: 'A help page of Kael Express'
    }
  ]
});
</script>

<style scoped>
.home {
  min-width: 100px;
  max-width: 200px;
}
</style>
