<template>
  <v-container fluid>
    <h1>Blog Posts</h1>
    <v-layout>
      <v-flex>
        <v-container grid-list-xl fluid>
          <v-layout row wrap>
              <Post
                v-for="post in posts"
                :key="post.id"
                :post="post" 
                :title="post.title"
                :imgUrl="post.imgUrl"
                :description="post.description"
              ></Post>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Post from '@/components/Post'
// import fs from 'fs'
// import path from 'path'

export default {
  components: {
    Post,
  },
  // methods: {
  //   getPosts: function() {
  //     var postArray = [];

  //     const postFolder = path.join(__static, '/posts');
  //     let fileContents = fs.readFileSync(path.join(postFolder, '/2.json'), 'utf8');
  //     console.log(fileContents);

  //     fs.readdirSync(postFolder).forEach(file => {
  //       console.log(file);
        
  //       if (file){
  //           // get the info from the json file for the post
  //         $.getJSON(file, function (json) {
  //           var array = [];
  //           for (var key in json) {
  //               if (json.hasOwnProperty(key)) {
  //                   var item = json[key];
  //                   array.push({
  //                       name: item.Name,
  //                       surname: item.Surname,
  //                       mobile: item.mobile,
  //                       email: item.email
  //                   });            
  //               }
  //           }
  //       });
  //       }
  //     })

  //     return postArray;
  //   },
  // },
  // computed: {
  //   posts: this.getPosts();
  // },
  data() {
    return {
      // TODO: get the posts from json files in the static folder?
      posts: [
        {
          title: "Fusce ullamcorper tellus",
          description:
            "Fusce ullamcorper tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultrices maximus. Donec non tellus non neque pellentesque fermentum. Aenean in pellentesque urna.",
          imgUrl:
            "https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/drop.jpg",
          id: "this-is-a-test"
        },
        {
          title: "Fusce ullamcorper tellus",
          description:
            "Fusce ullamcorper tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultrices maximus. Donec non tellus non neque pellentesque fermentum. Aenean in pellentesque urna.",
          imgUrl:
            "https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/drop.jpg",
          id: "2"
        },
        {
          title: "Fusce ullamcorper tellus",
          description:
            "Fusce ullamcorper tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultrices maximus. Donec non tellus non neque pellentesque fermentum. Aenean in pellentesque urna.",
          imgUrl:
            "https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/drop.jpg",
          id: "3"
        },
        {
          title: "Fusce ullamcorper tellus",
          description:
            "Fusce ullamcorper tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultricesr tellus sed maximus rutrum. Donec imperdiet ultrices maximus. Donec non tellus non neque pellentesque fermentum. Aenean in pellentesque urna.",
          imgUrl:
            "https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/drop.jpg",
          id: "4"
        },
        {
          title: "Donec vitae suscipit lectus, a luctus diam.",
          description:
            "Donec vitae suscipit lectus, a luctus diam. Proin vitae felis gravida, lobortis massa sit amet, efficitur erat. Morbi vel ultrices nisi.",
          imgUrl:
            "https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/docks.jpg",
          id: "5"
        },
        {
          title: "Donec vitae suscipit lectus, a luctus diam.",
          description:
            "Donec vitae suscipit lectus, a luctus diam. Proin vitae felis gravida, lobortis massa sit amet, efficitur erat. Morbi vel ultrices nisi.",
          imgUrl:
            "https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/docks.jpg",
          id: "6"
        },
        {
          title: "Donec vitae suscipit lectus, a luctus diam.",
          description:
            "Donec vitae suscipit lectus, a luctus diam. Proin vitae felis gravida, lobortis massa sit amet, efficitur erat. Morbi vel ultrices nisi.",
          imgUrl:
            "https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/docks.jpg",
          id: "7"
        },
        {
          title: "Donec vitae suscipit lectus, a luctus diam.",
          description:
            "Donec vitae suscipit lectus, a luctus diam. Proin vitae felis gravida, lobortis massa sit amet, efficitur erat. Morbi vel ultrices nisi.",
          imgUrl:
            "https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/docks.jpg",
          id: "8"
        },
        {
          title: "Donec vitae suscipit lectus, a luctus diam.",
          description:
            "Donec vitae suscipit lectus, a luctus diam. Proin vitae felis gravida, lobortis massa sit amet, efficitur erat. Morbi vel ultrices nisi.",
          imgUrl:
            "https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/docks.jpg",
          id: "9"
        },
        {
          title: "Vestibulum condimentum quam",
          description:
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
