<template>
    <div>
        <v-navigation-drawer 
        floating 
        clipped 
        v-model="drawer" 
        app
        class="mb-5 elevation-3"
        >
            <div class="text-xs-center mt-5 mb-4">
                <v-avatar size="125px">
                <img class="img-circle elevation-4 mb-5"
                    src="https://avatars2.githubusercontent.com/u/35277807?s=460&v=4">
                </v-avatar>
                <div class="headline">Paul <span style="font-weight:bold">McNamee</span></div>
                <span v-if="$store.state.quote.length > 0">
                    <v-divider class="mx-5 my-4"></v-divider>
                    <div class="subheading text-xs-center grey--text mt-1 mb-3">
                        <RandomQuote/>
                    </div>
                </span>
            </div>
            <v-divider class="mx-5"></v-divider>
            <v-container fluid grid-list-sm>
                <v-list dense>
                    <v-list-tile v-for="item in items" :key="item.text" class="nav-link">
                        <nuxt-link :to="item.link" class="nav-link">
                            <a class="nav-link">
                                <v-list-tile-content>
                                    <v-list-tile-title>{{ item.text }}</v-list-tile-title>
                                </v-list-tile-content>
                            </a>
                        </nuxt-link>
                    </v-list-tile>
                </v-list>
            </v-container>
            <v-footer fixed app class="mb-5 elevation-4">
                <v-layout layout row justify-center align-center>
                    <a class="social mx-2" href="mailto:Paul@FourthMouse.com"><v-icon>email</v-icon></a>
                    <a class="social mx-2" href="https://github.com/paul-mcnamee"><v-icon>fab fa-github</v-icon></a>
                    <a class="social mx-2" href="https://www.linkedin.com/in/paul-j-mcnamee/"><v-icon>fab fa-linkedin</v-icon></a>
                    <a class="social mx-2" href="https://twitter.com/pmcnamee_"><v-icon>fab fa-twitter</v-icon></a>
                    <a class="social mx-2" href="https://stackoverflow.com/users/9683122/pmcnamee"><v-icon>fab fa-stack-overflow</v-icon></a>
                </v-layout>
            </v-footer>
        
        </v-navigation-drawer>
    <v-toolbar color="primary" dark fixed dense clipped-left scroll-off-screen app>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title class="mr-5 align-center">
            <span class="title"></span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
            <v-icon>more_vert</v-icon>
        </v-btn>
    </v-toolbar>
    </div>
</template>

<script>
import TheFooter from "@/components/TheFooter";
import RandomQuote from "@/components/RandomQuote";

export default {
  data: () => ({
    drawer: true,
    items: [
      { text: "Home", link: "/" },
      { text: "Blog", link: "/Blog" },
      { text: "Skills", link: "/Skills" },
      { text: "Resume", link: "/Resume" },
      { text: "Portfolio", link: "/Portfolio" },
      { text: "About", link: "/About" }
    ]
  }),
  props: {
    source: String
  },
  components: {
    TheFooter,
    RandomQuote
  }
};
</script>

<style scoped>
.nav-link {
  text-decoration: none;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: white;
  font-weight: inherit;
  font-size: 1.5rem;
}

.social :hover,
.nav-link a:hover,
.nav-link a:active,
.nav-link.nuxt-link-exact-active,
.nav-link.nuxt-link-exact-active a {
  color: #4db6ac;
}

.social {
  text-decoration: none;
  color: white;
}
</style>
