<template>
    <div>
        <h2>skill test</h2>
        <!-- <v-avatar size="125px" class="parent"> -->
            <img 
                class="img-circle elevation-4 mb-5 logo"
                :src="imgUrl">
        <!-- </v-avatar> -->
        <div class="headline">{{name}}</div>
        <div class="headline">{{imgUrl}}</div>
    </div>
    
</template>

<style scoped>
.parent {
  position: relative;
  top: 0;
  left: 0;
}
.percentage {
  position: relative;
  top: 0;
  left: 0;
}
.logo {
  position: absolute;
  top: 30px;
  left: 70px;
}
</style>


<script>
//TODO: need to fill the circle somehow with percent known and overlay the image on top of it with the logo of the language or whatever

export default {
    props: ['name', 'imgUrl']
}
</script>
