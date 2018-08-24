<template>
  <v-container fluid>
    <h1>Blog Posts</h1>
    <v-layout>
      <v-flex>
        <v-container grid-list-xl fluid>
          <v-layout row wrap>
            <v-flex v-for="post in posts" :key="post.id" xs12 md6 lg4>
              <nuxt-link :to="`/post/${post.id}`">
              <!-- <nuxt-link :to="post.id"> -->
                <v-card hover>
                  <v-card-media class="white--text" height="170px" :src="post.imgUrl">
                    <v-container fill-height >
                      <v-layout>
                        <v-flex xs12 align-end d-flex>
                          <span class="headline">{{ post.title }}</span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-media>
                  <v-card-text>
                    {{ post.content }}
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn flat class="blue--text">Read More</v-btn>
                  </v-card-actions>
                </v-card>
              </nuxt-link>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "Your Logo",
      posts: [
        {
          title: "Fusce ullamcorper tellus",
          content:
            "Fusce ullamcorper tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultrices maximus. Donec non tellus non neque pellentesque fermentum. Aenean in pellentesque urna.",
          imgUrl:
            "https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/drop.jpg",
          id: "this-is-a-test"
        },
        {
          title: "Fusce ullamcorper tellus",
          content:
            "Fusce ullamcorper tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultrices maximus. Donec non tellus non neque pellentesque fermentum. Aenean in pellentesque urna.",
          imgUrl:
            "https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/drop.jpg",
          id: "2"
        },
        {
          title: "Fusce ullamcorper tellus",
          content:
            "Fusce ullamcorper tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultrices maximus. Donec non tellus non neque pellentesque fermentum. Aenean in pellentesque urna.",
          imgUrl:
            "https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/drop.jpg",
          id: "3"
        },
        {
          title: "Fusce ullamcorper tellus",
          content:
            "Fusce ullamcorper tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultrices maximus. Donec non tellus non neque pellentesque fermentum. Aenean in pellentesque urna.",
          imgUrl:
            "https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/drop.jpg",
          id: "4"
        },
        {
          title: "Donec vitae suscipit lectus, a luctus diam.",
          content:
            "Donec vitae suscipit lectus, a luctus diam. Proin vitae felis gravida, lobortis massa sit amet, efficitur erat. Morbi vel ultrices nisi.",
          imgUrl:
            "https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/docks.jpg",
          id: "5"
        },
        {
          title: "Donec vitae suscipit lectus, a luctus diam.",
          content:
            "Donec vitae suscipit lectus, a luctus diam. Proin vitae felis gravida, lobortis massa sit amet, efficitur erat. Morbi vel ultrices nisi.",
          imgUrl:
            "https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/docks.jpg",
          id: "6"
        },
        {
          title: "Donec vitae suscipit lectus, a luctus diam.",
          content:
            "Donec vitae suscipit lectus, a luctus diam. Proin vitae felis gravida, lobortis massa sit amet, efficitur erat. Morbi vel ultrices nisi.",
          imgUrl:
            "https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/docks.jpg",
          id: "7"
        },
        {
          title: "Donec vitae suscipit lectus, a luctus diam.",
          content:
            "Donec vitae suscipit lectus, a luctus diam. Proin vitae felis gravida, lobortis massa sit amet, efficitur erat. Morbi vel ultrices nisi.",
          imgUrl:
            "https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/docks.jpg",
          id: "8"
        },
        {
          title: "Donec vitae suscipit lectus, a luctus diam.",
          content:
            "Donec vitae suscipit lectus, a luctus diam. Proin vitae felis gravida, lobortis massa sit amet, efficitur erat. Morbi vel ultrices nisi.",
          imgUrl:
            "https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/docks.jpg",
          id: "9"
        },
        {
          title: "Vestibulum condimentum quam",
          content:
            "At sagittis sapien vulputate. Vivamus laoreet lacus id magna rutrum dapibus. Donec vel pellentesque arcu. Maecenas mollis odio tempus felis elementum commodo.",
          imgUrl:
            "https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/plane.jpg",
          id: "10"
        }
      ]
    };
  }
};
</script>

<style scoped>
a {
  all: unset;
}
</style>
