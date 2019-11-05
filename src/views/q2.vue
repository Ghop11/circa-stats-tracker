<template>
  <div id="q2" style="background-color: #283583">
    <center>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <br>
      <div>
        <span class="whiteText ">** Points are updated every Tuesday **</span>
      </div><br>
      <table class="table table-hover whiteText table-condensed" style="width:60%">
      <tr>
        <th>Team Name</th>
        <th>Picks</th>
        <th>Q2 W-L-T-C</th>
        <th>Q2 Points</th>
      </tr>
      <tr id="q2Table" v-for="player in getQ2">
        <td>{{player[0]}}</td>
        <td>{{player[1]}}</td>
        <td>{{player[2]}}</td>
        <td>{{player[3]}}</td>
      </tr>
    </table>
    </center><br><br>
  </div>
</template>

<script>
    import { mapState, mapGetters, mapActions } from 'vuex'

    export default {
        name: "q2",
        data() {
            return {
                q2: []
            }
        },
        computed: {
            ...mapActions([]),
            ...mapGetters([]),
            ...mapState(['quarter2']),
            getQ2(){
                let data = this.$store.getters.getQuarter2
                console.log(`data : ${JSON.stringify(data, null, 3)}`);
                return data
            }

        }
    }
</script>

<style scoped>
  .whiteText {
    color: #ffffff;
  }
</style>

