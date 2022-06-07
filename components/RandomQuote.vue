<template>
  <div class="pt-2 px-2">
    <p>
      <i>"{{"When life gives you lemons, just continue to program."}}"</i>
    </p>
    <p>-{{"Paul McNamee"}}</p>
  </div>
</template>

<script>
export default defineComponent({
  async setup() {
    const quoteData = await $fetch("http://quotes.rest/qod.json", {method: 'GET'})
    // await Promise.all([
    //   useFetch("http://quotes.rest/qod.json"),
    //   ])
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
});
</script>

