<template>
    <v-flex>
        <v-progress-circular
            :size="200"
            :width="15"
            :value="percentage"
            color="teal"
            >
            {{ name }}
            <v-img 
                contain=true
                src="~assets/images/logos/vue.png"/>
        </v-progress-circular>
    </v-flex>
</template>

<style scoped>

</style>

<script>
export default {
    props: ['name', 'percentage', 'imgUrl']
}
</script>
