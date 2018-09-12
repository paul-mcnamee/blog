<template>
    <v-container>
        <h1>
            Hello! 
        </h1>
        <h3>
            Do you need help with a website or a software project? Shoot me an email or check out <a href="https://www.FourthMouse.com">FourthMouse.com</a>
        </h3>
        <h2>Skills</h2>
        <v-layout>
            <v-flex>
                <v-container grid-list-xl fluid>
                <v-layout row wrap>
                    <v-flex
                        v-for="n in 9"
                        :key="n"
                        xs4
                        d-flex
                    >
                    <Skill
                        name="VueJS"
                        percentage="20"
                        img-url="static/images/logos/vue.png"
                    /> 
                    </v-flex>
                    <Skill
                        name="crap"
                        percentage="60"
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
