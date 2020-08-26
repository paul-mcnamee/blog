<template>
  <v-container fluid>
    <h1>Blog Posts</h1>
    <v-layout>
      <v-flex>
        <v-container grid-list-xl fluid>
          <v-layout row wrap>
            <Post
              v-for="post in posts"
              :key="post.id"
              :post="post"
              :title="post.title"
              :imgUrl="post.imgUrl"
              :description="post.description"
              :published="post.published"
              :tags="post.tags"
            ></Post>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Post from "@/components/Post";
// import fs from 'fs'
// import path from 'path'

export default {
  components: {
    Post,
  },

  data() {
    return {
      // TODO: get the posts from json files in the static folder?
      posts: [
        {
          title: "Why I want to work for myself",
          description:
            "I reflect on some of the things that lead me to working for myself, and how my time has been so far. What would you do if you had complete freedom to do whatever you wanted for several years?",
          imgUrl: "/posts/images/BookAndCoffee.jpg",
          id: "Why-I-am-working-for-myself",
          tags: [
            "SelfEmployment",
            "Entrepeneurship",
            "LLC",
            "About",
            "Biography",
            "Motivation",
            "Burnout",
          ],
          published: "2020-08-25",
        },
        {
          title: "Timeout, for now ... or is it?",
          description:
            "I decided to take time off from my job and wanted to reflect on my experience with creating companies and my journey into software development and entrepeneurship so far.",
          imgUrl: "/posts/images/timeout.jpg",
          id: "I-am-taking-time-off-from-my-job",
          tags: [
            "Software",
            "Working",
            "Sabbatical",
            "Entrepeneurship",
            "About",
            "Biography",
            "ThoughtDump",
            "FutureThoughts",
          ],
          published: "2020-07-31",
        },
        {
          title: "Legacy Code Spaghetti Navigation",
          description:
            "I ran into a particularly troubling experience while working through some legacy code, and wanted to outline the issues with what I found and suggest some improvements as well as touch on some lessons learned from the experience.",
          imgUrl: "/posts/images/spaghetti.jpg",
          id: "legacy-spaghetti-navigation",
          tags: [
            ".NET",
            "C#",
            "ProfessionalProgramming",
            "LegacyCode",
            "Spaghetti",
            "Refactoring",
            "TechnicalDebt",
          ],
          published: "2020-01-09",
        },
        {
          title: "Creating an Android Game Using Unity",
          description:
            "I wanted to get into game development and so I followed a simple tutorial, made some fun modifications to a flappy bird clone, and published it on the play store to learn what the whole process was like.",
          imgUrl:
            "https://lh3.googleusercontent.com/LDy3GsVfVAoeXnY0DcPBeI3oS5jf2Mr8Sr6Nml7MDqwx8Ey2pvjqSLNjVlNmXYDqvFk=w720-h310-rw",
          id: "unity-game-hail-bounce",
          tags: [
            "GameDev",
            "Android",
            "HailBounce",
            "PlayStore",
            "AbMob",
            "Gaming",
            "Mobile",
          ],
          published: "2019-06-30",
        },
        {
          title: "About Me",
          description:
            "I detail some of my experiences that lead me to where I am in life, and go through how I started writing software for fun which eventually lead to my job.",
          imgUrl: "/posts/images/boots.jpg",
          id: "first-post-about-me-and-learning",
          tags: [
            "About",
            "Biography",
            "Learning",
            "School",
            "Education",
            "Background",
            "Blogging",
          ],
          published: "2018-08-23",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>
