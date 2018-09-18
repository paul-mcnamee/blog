<template>
    
    <v-flex>
        <v-progress-circular
            :size="200"
            :width="15"
            :rotate="-90"
            :value="percentage"
            color="teal"
            class="progress-circle"
        >
        <v-flex>
            <v-layout align-center justify-center column fill-height>
                <v-flex xs12>
                    <img :src="img" class="progress-image">
                </v-flex>
                <v-flex xs12 class="progress-text">
                    {{ name }} 
                </v-flex>
            </v-layout>
        </v-flex>

        <!-- <v-img 
            :src="img"
            class="progress-image"></v-img> -->
        
        </v-progress-circular>
    </v-flex>
   
</template>

<style scoped>
.progress-circle{
    z-index: 1
}

.progress-image{
    z-index: 2;
    object-fit: contain;
    height: 70px;
    align-content: space-around;
    padding: 0px;
}

.progress-text{
    font-size: 18px;
    color: white;
}
</style>

<script>
export default {
    props: ['name', 'percentage', 'img']
}
</script>
