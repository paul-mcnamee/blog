<template>
    <v-container>
        <div>
            <v-expansion-panel
            v-model="panel"
            expand
            popout
            
            >
            <v-expansion-panel-content value="">
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
            <v-expansion-panel-content value="">
                <div slot="header" ><h2>Software Mastery</h2></div>
                <v-card>
                    <v-layout>
                        <v-flex>
                            <v-container grid-list-xl fluid>
                                <v-layout row wrap>
                                    <Skill
                                        name="MS Excel"
                                        percentage="90"
                                        img="/images/logos/excel.png"
                                    />
                                    <Skill
                                        name="Visual Studio"
                                        percentage="90"
                                        img="/images/logos/visualstudio.png"
                                    />
                                    <Skill
                                        name="Jetbrains Suite"
                                        percentage="90"
                                        img="/images/logos/jetbrains.png"
                                    />
                                    <Skill
                                        name="MS Word"
                                        percentage="80"
                                        img="/images/logos/word.png"
                                    />
                                    <Skill
                                        name="MS PowerPoint"
                                        percentage="80"
                                        img="/images/logos/powerpoint.png"
                                    />
                                    <Skill
                                        name="MS Access"
                                        percentage="70"
                                        img="/images/logos/access.png"
                                    />
                                    <Skill
                                        name="Photoshop"
                                        percentage="60"
                                        img="/images/logos/photoshop.png"
                                    />
                                    <Skill
                                        name="Solid Works"
                                        percentage="50"
                                        img="/images/logos/solidworks.png"
                                    />
                                    <Skill
                                        name="AutoCAD"
                                        percentage="50"
                                        img="/images/logos/autocad.png"
                                    />
                                    <Skill
                                        name="Revit"
                                        percentage="40"
                                        img="/images/logos/revit.png"
                                    />
                                    <Skill
                                        name="Illustrator"
                                        percentage="30"
                                        img="/images/logos/illustrator.png"
                                    />
                                </v-layout>
                            </v-container>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-expansion-panel-content>
            <v-expansion-panel-content value="">
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