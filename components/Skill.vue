<template>
  <v-flex align-center justify-center>
    <v-container>
      <v-progress-circular
        :size="200"
        :width="15"
        :rotate="-90"
        :value="percentage"
        color="teal"
        class="progress-circle"
      >
        <v-flex>
          <v-flex xs12>
            <img :src="img" class="progress-image mt2" />
            <br />
            <span class="progress-text">
              <center>{{name}}</center>
            </span>
          </v-flex>
        </v-flex>
      </v-progress-circular>
    </v-container>
  </v-flex>
</template>

<style scoped>
.progress-circle {
  z-index: 1;
}

.progress-image {
  z-index: 2;
  object-fit: contain;
  height: 65px;
  align-content: space-around;
  padding: 2px;
}

.progress-text {
  font-size: 14px;
  color: white;
  padding: 2px;
}
</style>

<script>
export default {
  props: {
    name: String,
    percentage: Number,
    img: String
  }
};
</script>
