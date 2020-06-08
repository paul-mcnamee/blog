<template>
  <v-layout layout row justify-center align-center>
    <a class="social mx-2" href="mailto:Paul@FourthMouse.com">
      <v-icon>email</v-icon>
    </a>
    <a class="social mx-2" href="https://github.com/paul-mcnamee">
      <v-icon>fab fa-github</v-icon>
    </a>
    <a class="social mx-2" href="https://www.linkedin.com/in/paul-j-mcnamee/">
      <v-icon>fab fa-linkedin</v-icon>
    </a>
    <a class="social mx-2" href="https://twitter.com/PaulMcNamee_">
      <v-icon>fab fa-twitter</v-icon>
    </a>
    <a class="social mx-2" href="https://stackoverflow.com/users/9683122/pmcnamee">
      <v-icon>fab fa-stack-overflow</v-icon>
    </a>
  </v-layout>
</template>

<style scoped>
.social :hover,
.nav-link a:hover,
.nav-link a:active,
.nav-link.nuxt-link-exact-active,
.nav-link.nuxt-link-exact-active a {
  color: #4db6ac;
}

.social {
  text-decoration: none;
  color: white;
}
</style>
