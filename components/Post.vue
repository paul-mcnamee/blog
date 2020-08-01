<template>
  <v-flex xs12 md6 lg4>
    <v-card class="pb-2">
      <v-card-media class="white--text" height="170px" :src="post.imgUrl">
        <v-container fill-height>
          <v-layout>
            <v-flex align-end d-flex class="flex-column-reverse">
              <v-flex class="flex-column-reverse">
                <div class="headline blackshadow">{{ post.title }}</div>
                <div class="px-4 blackshadow date">{{ post.published }}</div>
              </v-flex>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-media>
      <v-card-text>{{ post.description }}</v-card-text>
      <v-card-text>
        <v-chip
          v-for="tag in post.tags"
          disabled
          outlined
          dark
          :key="tag"
          :value="tag.description"
        >{{tag}}</v-chip>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat :href="`/post/${post.id}`">Read More</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: ["post"],
};
</script>



<style scoped>
.v-btn {
  color: #4db6ac;
}

.date {
  opacity: 0.85;
}

.blackshadow {
  text-shadow: 1px 2px 4px black;
}
</style>

