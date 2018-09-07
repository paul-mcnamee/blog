<template>
    <div class="pt-2 px-2">
      <p><i>"{{$store.state.quote}}"</i></p>
      <p> -{{$store.state.author}}</p>
    </div>
</template>

<script>
export default {
  computed: {
    quoteExists() {
      return this.$store.getters.quoteExists;
    }
  },
// TODO: use asyncData to test if the axios call is working...

  middleware: "quote"
};
</script>

