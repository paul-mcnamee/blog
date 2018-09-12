<template>
    <v-container>
        <h1>
            Hello! 
        </h1>
        <h3>
            Do you need help with a website or a software project? Shoot me an email or check out FourthMouse.com
        </h3>
        <h2>Skills</h2>
        <v-layout>
            <v-flex>
                <v-container grid-list-xl fluid>
                <v-layout row wrap>
                    <Skill
                        name="vue"
                        img-url="static/images/logos/vue.png"
                    />
                </v-layout>
                </v-container>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Skill from '@/components/Skill'

export default {
    components: {
        Skill
    }
}
</script>
