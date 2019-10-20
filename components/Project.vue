<template>
  <v-flex xs12 md6 lg4>
    <v-card>
      <v-container v-if="project.imgUrl" class="pa-3 ma-0">
        <v-img height="220" contain :src="project.imgUrl"></v-img>
      </v-container>
      <v-card-text class="pa-2 ma-0">
        <v-container v-if="project.title" class="pa-1 ma-0">
          <span class="headline">{{ project.title }}</span>
        </v-container>
        <v-container class="pa-2 ma-0">{{ project.description }}</v-container>
        <v-flex class="pa-1 ma-0" v-if="project.tags">
          <v-chip-group column dark>
            <v-chip
              v-for="tag in project.tags"
              disabled
              outlined
              dark
              :key="tag"
              :value="tag.description"
            >{{tag}}</v-chip>
          </v-chip-group>
        </v-flex>
      </v-card-text>
      <v-card-actions class="pa-1 ma-0">
        <v-flex v-if="project.codeUrl" class="d-flex xs6 pt-0 mt-0">
          <v-btn flat :href="project.codeUrl">Code</v-btn>
        </v-flex>
        <v-flex v-if="project.siteUrl" class="d-flex xs6 pt-0 mt-0">
          <v-btn flat :href="project.siteUrl">Link</v-btn>
        </v-flex>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: ["project"]
};
</script>

<style scoped>
.v-btn {
  color: #4db6ac;
}
</style>

