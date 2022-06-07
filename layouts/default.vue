<template>
  <v-app dark id="inspire">
    <TheNavBar />
    <v-content>
      <main class="ma-1 pt-5">
        <slot />
      </main>
    </v-content>
    <!-- <TheFooter /> -->
  </v-app>
</template>

<style>
* {
  box-sizing: border-box;
}
</style>
