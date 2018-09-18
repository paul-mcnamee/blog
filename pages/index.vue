<template>
    <v-container>
        <h1>
            Hello! 
        </h1>
        <h3>
            Do you need help with a website or a software project? Shoot me an email or check out <a href="https://www.FourthMouse.com">FourthMouse.com</a>
        </h3>
        <br>
        <h2>Language/Framework Mastery</h2>
        <v-layout>
            <v-flex>
                <v-container grid-list-xl fluid>
                <v-layout row wrap>
                    <Skill
                        name="C#"
                        percentage="85"
                        img="/images/logos/csharp.png"
                    />
                    <Skill
                        name="ASP.NET"
                        percentage="75"
                        img="/images/logos/dotnet.png"
                    />
                    <Skill
                        name="Python"
                        percentage="70"
                        img="/images/logos/python.png"
                    />
                    <Skill
                        name="EmberJS"
                        percentage="50"
                        img="/images/logos/ember.png"
                    />
                    <Skill
                        name="PHP"
                        percentage="35"
                        img="/images/logos/php.png"
                    />
                    <Skill
                        name="c++"
                        percentage="30"
                        img="/images/logos/c++.png"
                    />
                    <Skill
                        name="VueJS"
                        percentage="25"
                        img="/images/logos/vue.png"
                    />
                    <Skill
                        name="ReactJS"
                        percentage="10"
                        img="/images/logos/react.png"
                    />
                    <Skill
                        name="AngularJS"
                        percentage="10"
                        img="/images/logos/angular.png"
                    />
                </v-layout>
                </v-container>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Skill from '@/components/Skill'

// TODO: get the list of skills from a json file?

export default {
    components: {
        Skill
    }
}
</script>

<style scoped>

</style>
