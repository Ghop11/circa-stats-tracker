<template>
  <div id="gameDayScores" style="background-color: #283583">
    <center><br>
      <h6 class="whiteText" style="width: 95%">Positive Point Spreads are automatically add to underdog's score | Scores are updated after games are complete (no live scoring)</h6>
      <br>
      <h2 class="whiteText">NFL WEEK 9</h2>
      <table id="Scores" class="table table-hover whiteText" style="width:94%">
        <tr>
          <th>Home Team</th>
          <th>Home Spread</th>
          <th>Home Score</th>
          <th>Away Team</th>
          <th>Away Spread</th>
          <th>Away Score</th>
          <th>Winner</th>
        </tr>
        <tr id="gameTable" v-for="game in gameScores">
          <td >{{game[0]}}</td>
          <td>{{game[1]}}</td>
          <td>{{game[2]}}</td>
          <td>{{game[3]}}</td>
          <td>{{game[4]}}</td>
          <td>{{game[5]}}</td>
          <td>{{game[6]}}</td>
        </tr>
      </table>
    </center><br><br>
  </div>
</template>

<script>
    import { mapState, mapGetters, mapActions } from 'vuex'
    import axios from 'axios'

    export default {
        name: "GameDayScores",
        data() {
            return {
                gameScoresArray: []
            }
        },
        computed: {
            ...mapActions([]),
            ...mapGetters(['getGames']),
            ...mapState(['games']),
            gameScores(){
                let data = this.$store.getters.getGames;
                // console.log(`data : ${JSON.stringify(data, null, 3)}`);
                // this.updatedScores;
                return data
            },
            // updatedScores(){
            //     // console.log(`before axios :`);
            //     // axios.get('https://feeds.nfl.com/feeds-rs/scores.json')
            //     //     .then((response ) => {
            //     //         let games = this.$store.getters.getGames;
            //     //         let scores = response.data.gameScores;
            //     //         console.log(`scores : ${JSON.stringify(scores, null, 3)}`);
            //     //     })
            // }
        }
    }
</script>

<style scoped>
  .whiteText {
    color: #ffffff;
  }
</style>







