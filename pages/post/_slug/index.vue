<template>
  <div id="post">
    <adsbygoogle ad-slot="4499696872" />
    <v-container class="d-flex justify-center xs12" style="maxWidth: 1000px">
      <div id="post-image"></div>
      <v-card class="ma-2 elevation-5">
        <div v-html="mdContent" class="contentWrapper content ma-4"></div>
      </v-card>
    </v-container>
    <adsbygoogle ad-slot="4499696872" />
  </div>
</template>

<script>
export default {
  computed: {
    mdContent() {
      return require(`static/posts/${this.$route.params.slug}.md`).default;
    },
  },
};
</script>

<style scoped>
a:hover,
a:active {
  color: primary;
}

a {
  color: white;
}
</style>
