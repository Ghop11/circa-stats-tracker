import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import LeaderboardPicks from "./views/LeaderboardPicks";
import q2 from "./views/q2";
import gamedayscores from "./views/GameDayScores";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {title: 'Circa Sports'}
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: {title: 'Circa Sports'}
    },
    {
      path: "/leaderboard",
      name: "leaderboard",
      component: LeaderboardPicks,
      meta: {title: 'Circa Sports'}
    },
    {
      path: "/q2",
      name: "qa",
      component: q2,
      meta: {title: 'Circa Sports'}
    },
    {
      path: "/gamedayscores",
      name: "gamedayscores",
      component: gamedayscores,
      meta: {title: 'Circa Sports'}
    },
    {
      path: "*",
      component: Home,
      meta: {title: 'Circa Sports'}
    }
  ]
});
