<template>
  <v-flex xs12 md6 lg4>
    <v-card hover>
      <v-flex>
        <v-img class="white--text" height="220" contain :src="project.imgUrl"></v-img>
      </v-flex>
      <v-card-text>
        <v-flex v-if="project.title" xs12 align-end d-flex>
          <span class="headline">{{ project.title }}</span>
        </v-flex>
        <v-flex class="d-flex xs12">{{ project.description }}</v-flex>
        <v-flex v-if="project.tags" class="d-flex xs12">
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
      <v-card-actions>
        <v-flex v-if="project.codeUrl" class="d-flex xs6 justify-right">
          <v-btn flat class="blue--text" :href="project.codeUrl">Code</v-btn>
        </v-flex>
        <v-flex v-if="project.siteUrl" class="d-flex xs6 justify-left">
          <v-btn flat class="blue--text" :href="project.siteUrl">Link</v-btn>
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
</style>

