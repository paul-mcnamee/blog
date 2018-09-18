<template>
    <v-container>
        <div>
            <v-expansion-panel
            v-model="panel"
            expand
            popout
            
            >
            <v-expansion-panel-content value="true">
                <div slot="header" ><h2>Language Mastery</h2></div>
                <v-card>
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
                                        name="PHP"
                                        percentage="35"
                                        img="/images/logos/php.png"
                                    />
                                    <Skill
                                        name="c++"
                                        percentage="30"
                                        img="/images/logos/c++.png"
                                    />
                                </v-layout>
                            </v-container>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-expansion-panel-content>
            <v-expansion-panel-content value="true">
                <div slot="header" ><h2>Software Mastery</h2></div>
                <v-card>
                    <v-layout>
                        <v-flex>
                            <v-container grid-list-xl fluid>
                                <v-layout row wrap>
                                    <Skill
                                        name="EmberJS"
                                        percentage="50"
                                        img="/images/logos/ember.png"
                                    />
                                    <Skill
                                        name="VueJS"
                                        percentage="30"
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
                </v-card>
            </v-expansion-panel-content>
            <v-expansion-panel-content value="true">
                <div slot="header" ><h2>Front End Framework Mastery</h2></div>
                <v-card>
                    <v-layout>
                        <v-flex>
                            <v-container grid-list-xl fluid>
                                <v-layout row wrap>
                                    <Skill
                                        name="EmberJS"
                                        percentage="50"
                                        img="/images/logos/ember.png"
                                    />
                                    <Skill
                                        name="VueJS"
                                        percentage="30"
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
                </v-card>
            </v-expansion-panel-content>
            
            </v-expansion-panel>
        </div>
        
        
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