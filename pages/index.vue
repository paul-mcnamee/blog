<template>
  <v-container>
    <section>
      <v-card class="elevation-2">
        <span ma2>
          <v-container>
            <v-layout>
              <v-flex>
                <h3>Do you need help with a website or a software project?</h3>
                <br />
                <p class="mx-2">
                  Shoot me an email via
                  <a href="mailto:Paul@FourthMouse.com">Paul@FourthMouse.com</a> or check out
                  <a href="https://www.FourthMouse.com">FourthMouse.com</a> for more information.
                </p>
              </v-flex>
            </v-layout>
          </v-container>
        </span>
      </v-card>
    </section>
    <br />
    <section>
      <v-card class="elevation-2">
        <v-container>
          <v-layout row wrap align-center justify-center>
            <v-flex xs12>
              <h2>About Me</h2>
            </v-flex>
            <v-flex xs12 md6 lg6>
              <img src="/images/selfie.jpg" width="100%" class="mr-5 my-2" />
            </v-flex>
            <v-flex xs12 md6 lg6>
              <v-flex class="ml-3">
                <p>I create websites for small businesses and entrepreneurs to establish an online presence and flourish in the digital age.</p>
                <p>I am currently living in Denver Colorado. I have had a huge passion for computers, programming, gaming, mechanical things, and basically anything relating to how things work since I was pretty young. I automate the superfluous stuff, and streamline processes to pass on the cost savings to you. I love programming, but my interests definitely extend way beyond computers. Fun fact, I was heavily considering doing ceramics full time as a career path. I also like to hike, fish, snowboard, make beer (and drink it), and lots of other stuff. Check out the about page or the future blog posts to get to know me better.</p>
              </v-flex>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </section>
    <br />
    <section>
      <v-card class="elevation-2">
        <v-container>
          <v-layout row wrap align-center justify-center>
            <v-flex xs12 align-center justify-center justify align-content-space-around>
              <center>
                <Social />
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
    Social,
  },
};
</script>
