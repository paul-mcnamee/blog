<template>
  <v-container fluid>
    <v-container>
      <v-layout row>
        <v-flex>
          <h1>Personal Projects</h1>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <p>I like to learn in my spare time quite a bit. Learning is by far my most time consuming hobby.
          I have been teaching myself programming since I was 10 years old and really enjoy 
          learning new frameworks and technologies. 
          These projects have been worked on in my free time, 
          most for the purpose of learning something new and interesting. 
          I find that I learn better if I have an interesting project to 
          apply the technologies to.</p>
      <p>
        For more information about my professional positions and projects please view my
        <a
          href="https://www.linkedin.com/in/paul-j-mcnamee/"
        >LinkedIn page.</a>
      </p>
    </v-container>
    <v-layout>
      <v-flex>
        <v-container grid-list-xl fluid>
          <v-layout row wrap>
            <Project
              v-for="project in projects"
              :key="project.id"
              :project="project"
              :title="project.title"
              :imgUrl="project.imgUrl"
              :description="project.description"
            ></Project>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Project from "@/components/Project";
// import fs from 'fs'
// import path from 'path'

export default {
  components: {
    Project
  },

  data() {
    return {
      projects: [
        {
          title: "Mischief",
          description:
            "Streamers get their own page to sell the games they play and show off information to their community like socials, stats, and other things that make them unique! This website was essentially another affiliate channel for streamers to sell games. The website aimed to purchase games in bulk or facilitate the sale via other api integrations.",
          imgUrl:
            "https://uploads-ssl.webflow.com/5bcfe6afea13521500de3bdf/5cd0fc1143e927b407450ee6_logowhite.svg",
          codeUrl: "",
          siteUrl: "https://www.mischief.gg",
          tags: [
            "Angular",
            "Firebase",
            "Google Cloud Platform",
            "TypeScript",
            "Python",
            "CircleCI"
          ],
          id: ""
        },
        {
          title: "Hail Bounce",
          description:
            "Hail bounce is a side-scrolling mobile game featuring 2D retro style graphics. The objective is to fly through clouds and gain hail points. Fight gravity and the increasing storm winds to achieve the highest score to brag to your friends. Avoid falling out of the cloud cycle or falling to the ground.",
          imgUrl:
            "https://lh3.googleusercontent.com/csKBp3MUl4Asrogb97tJfsiNcutnXfD_k_wOWE4HQ_XojeXGZ2KpJyIoCIdRL12tmIg=s180",
          codeUrl: "",
          siteUrl: "/post/unity-game-hail-bounce",
          tags: ["C#", "Unity", "Game Development"],
          id: "hail-bounce"
        },
        {
          title: "Personal Website",
          description:
            "You're already looking at this one! This website was designed from scratch using a bunch of technology that I thought was interesting and wanted to learn on my own time.",
          imgUrl: "https://avatars2.githubusercontent.com/u/35277807?s=460&v=4",
          codeUrl: "https://github.com/paul-mcnamee/blog",
          siteUrl: "/",
          tags: ["vue", "nuxt", "vuetify", "netlify", "markdown", "JavaScript"],
          id: "personal-website"
        },
        {
          title: "LeDavin",
          description:
            "Custom dress shirt store where the user could enter measurements through a simple guided system. The shirts were then to be sourced and sent to the user directly through multiple vendors. This project unfortunately never launched, and is not currently hosted anywhere.",
          imgUrl:
            "https://raw.github.com/paul-mcnamee/ledavin/master/public/images/Leo-the-ledavin-lion.svg?sanitize=true",
          codeUrl: "https://github.com/paul-mcnamee/ledavin",
          siteUrl: "",
          tags: ["PHP", "JavaScript", "jQuery"],
          id: "ledavin"
        },
        {
          title: "Fat Kid Wallet",
          description:
            "You know those fat kid cards you get at restaurants where you eat there 10 times and get a free meal? This consolidates those into your very own fat kid wallet.",
          imgUrl: "",
          codeUrl: "https://www.google.com",
          siteUrl: "",
          tags: ["PHP", "JavaScript"],
          id: "fat-kid-wallet"
        },
        {
          title: "WorkoutBuddy",
          description:
            "This was originally thought of as an app, it only got as far as scraping a bunch of data for gym locations though. I had a lot of fun and learned a lot about web scraping and python in the process.",
          imgUrl: "",
          codeUrl: "https://github.com/paul-mcnamee/WorkoutBuddy",
          siteUrl: "",
          tags: ["Python", "Web Scraping"],
          id: "workout-buddy"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
