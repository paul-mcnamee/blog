<template>
  <div id="post">
    <adsbygoogle ad-slot="4499696872" />
    <v-container>
      <div id="post-image"></div>
      <div v-html="mdContent" class="contentWrapper content"></div>
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
