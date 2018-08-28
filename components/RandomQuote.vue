<template>
    <div class="pt-2 px-2">
      <p><i>"{{$store.state.quote}}"</i></p>
      <p> -{{$store.state.author}}</p>
    </div>
</template>

<script>
export default {
  middleware: "quote"
};
</script>

