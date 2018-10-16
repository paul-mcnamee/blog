<template>
    <v-container>
        <section>
            <v-card class="elevation-2">
                <br>
                <h1 class="white--text my-3 display-1 text-xs-center">Hello.</h1>
                <div class="subheading my-3 text-xs-center">Welcome to Paul McNamee's website.</div>
                <br>
            </v-card>
        </section>
        <br>
        <section>
            <v-card class="elevation-2">
                <span ma2>
                    <v-container>
                        <v-layout>
                            <v-flex>
                                <h3>
                                    Do you need help with a website or a software project? Shoot me an email via <a href="mailto:Paul@FourthMouse.com">Paul@FourthMouse.com</a> or check out <a href="https://www.FourthMouse.com">FourthMouse.com</a> for more information.
                                </h3>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </span>
                </v-card>
        </section>
        <br>
        <section>
            <v-card class="elevation-2">
                <v-container>
                    <v-layout row wrap align-center>
                        <v-flex xs12>
                            <h2>About Me</h2>
                        </v-flex>
                        <v-flex xs12 md6 lg6 mr2>
                            <img src="/images/selfie.jpg" width=100%>
                        </v-flex>
                        <v-flex xs12 md6 lg6 ml2>
                                <p>I create websites for small businesses and entrepreneurs to establish an online presence and fluorish in the digital age.</p>
                                <p>I am currently 28 years old, and live in Denver Colorado. I have had a huge passion for computers, programming, gaming, mechanical things, and basically anything relating to how things work since I was pretty young. I have always been a hard worker but also a smart worker, I automate the stuff I don't really want to do, or figure out a way to have someone or something else do it. I love programming, but my interests definitely extend way beyond computers. Fun fact, I was heavily considering doing ceramics full time as a career path. I also like to hike, fish, snowboard, make beer (and drink it), and lots of other stuff. Check out the about page or the blog posts to get to know me better.</p>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
        </section>
        <br>
        <section>
            <v-card class="elevation-2">
                <v-container>
                    <v-layout row wrap align-center justify-center>
                        <v-flex xs12 md6 lg6 align-center justify-center justify align-content-space-around>
                            <center>
                                <h1>
                                    <a href="resume/Paul_McNamee_Resume.pdf" download>Resume Download</a>
                                </h1>
                            </center>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
        </section>
        <br>
        <section>
            <v-card class="elevation-2">
                <v-container>
                    <v-layout row wrap align-center justify-center>
                        <v-flex xs12 align-center justify-center justify align-content-space-around>
                            <center>
                                <Social/>
                            </center>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
        </section>
    </v-container>
</template>


<style scoped>
</style>

<script>
import Social from "@/components/Social";

export default {
  components: {
    Social
  }
};
</script>
