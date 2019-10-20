<template>
  <v-app dark id="inspire">
    <TheNavBar />
    <v-content>
      <main class="ma-1 pt-5">
        <nuxt />
      </main>
    </v-content>
    <!-- <TheFooter /> -->
  </v-app>
</template>

<script>
import TheFooter from "@/components/TheFooter";
import TheNavBar from "@/components/TheNavBar";

export default {
  components: {
    TheFooter,
    TheNavBar
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
</style>
