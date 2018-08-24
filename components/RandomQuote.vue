<template>
    <div>
        <p><i>"{{quote}}"</i> -{{author}}</p>
    </div>
</template>

<script>
import axios from "axios";

export default {
  async asyncData() {
    let data = await axios.get(`http://quotes.rest/qod.json`);
    debugger;
    console.log("data = " + data);
    if (data.success.total === 1) {
      quoteObject = data.contents.quotes[0];
      return {
        quote: quoteObject.quote,
        author: quoteObject.author
      };
    }
  },
  props: {
    quote: "",
    author: ""
  }
};
</script>
