<template>
    <v-flex xs12 md6 lg4>
        <nuxt-link :to="`/post/${post.id}`">
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
                    {{ post.description }}
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn flat class="blue--text">Read More</v-btn>
                </v-card-actions>
            </v-card>
        </nuxt-link>
    </v-flex>
</template>

<script>
export default {
  props: ['post']
}
</script>



<style scoped>
a {
  all: unset;
}

</style>

