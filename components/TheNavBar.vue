<template>
  <div>
    <v-navigation-drawer
      app
      v-model="drawer"
      floating
      clipped
      class="mt-2 elevation-3"
      height="95%"
    >
      <v-flex>
        <v-fab-transition>
          <v-btn
            @click.stop="drawer = !drawer"
            color="primary"
            dark
            v-show="drawer"
            fab
            fixed
            small
            top
            right
          >
            <v-icon>chevron_left</v-icon>
          </v-btn>
        </v-fab-transition>
      </v-flex>
      <v-flex class="text-xs-center mb-5">
        <v-avatar size="125px">
          <img
            class="img-circle elevation-4 mt-5"
            src="https://avatars2.githubusercontent.com/u/35277807?s=460&v=4"
          />
        </v-avatar>
      </v-flex>
      <v-flex class="text-xs-center my-2">
        <div class="headline">
          Paul
          <span style="font-weight:bold">McNamee</span>
        </div>
      </v-flex>
      <v-flex>
        <v-divider class="mx-4 my-2"></v-divider>
        <div class="subheading text-xs-center grey--text mt-1 mb-3">
          <RandomQuote />
        </div>
      </v-flex>
      <v-divider class="mx-4 mt-2"></v-divider>
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
      <v-footer fixed app class="elevation-4">
        <Social />
      </v-footer>
    </v-navigation-drawer>
    <v-fab-transition>
      <v-btn
        @click.stop="drawer = !drawer"
        color="primary"
        dark
        v-show="!drawer"
        fab
        fixed
        top
        small
        left
        class="mb-4"
      >
        <v-icon>chevron_right</v-icon>
      </v-btn>
    </v-fab-transition>
  </div>
</template>

<script>
import TheFooter from "@/components/TheFooter";
import RandomQuote from "@/components/RandomQuote";
import Social from "@/components/Social";

export default {
  data: () => ({
    drawer: false,
    items: [
      { text: "Home", link: "/" },
      // { text: "Blog", link: "/Blog" },
      { text: "Skills", link: "/Skills" },
      { text: "Projects", link: "/Projects" },
      { text: "About", link: "/About" },
      { text: "Resume", link: "/Resume" }
    ]
  }),
  props: {
    source: String
  },
  methods: {
    hideDrawerIfSmallWindow() {
      this.drawer = window.innerWidth > 800;
    }
  },
  mounted() {
    this.hideDrawerIfSmallWindow();
  },
  components: {
    TheFooter,
    RandomQuote,
    Social
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
