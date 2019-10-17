<template>
  <div class="pt-2 px-2">
    <p>
      <i>"{{"When life gives you lemons, just continue to program."}}"</i>
    </p>
    <p>-{{"Paul McNamee"}}</p>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    console.log("trying to get the fucking quote ");
    const quoteData = await $axios.$get("http://quotes.rest/qod.json");
    console.log("quote data ", quoteData);
    let quote = quoteData.contents.quotes[0];
    if (quote) {
      return {
        quote: quote.quote,
        author: quote.author,
        link: quote.permalink
      };
    } else {
      return {
        quote: "When life gives you lemons, just continue to program.",
        author: "Paul McNamee"
      };
    }
  }
};
</script>

