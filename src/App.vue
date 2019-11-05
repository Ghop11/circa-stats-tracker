<template>
  <div id="app">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous">
    <img id="head" alt="Circa logo" src="./assets/circa.jpg" />

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/leaderboard">Top Leaders Picks | </router-link>
<!--      <router-link to="/q2">2nd Quarter Rankings | </router-link>-->
      <router-link to="/gamedayscores">Game Day Scores</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
// on load get players info and make axios call to get game stats
export default {

    name: "app",
    beforeMount() {
        this.$store.dispatch('getPlayersData');
        this.$store.dispatch('getGames');
        this.$store.dispatch('getQuarter2');
    },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#head {
  width: 100%;
  height: 300px;
  position: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

@media only screen and (max-width: 848px), (min-device-width: 848px) and (max-device-width: 851px) {
  #leader-board, #head, #nav, #gameDayScores, #q2, #home {
    min-width:850px;        /* Suppose you want minimum width of 1400px */
    width: auto !important;  /* Firefox will set width as auto */
    width:850px;            /* As IE6 ignores !important it will set width as 1400px; */



  }
}



</style>
