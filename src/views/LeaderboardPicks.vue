<template>
  <div id="leader-board" style="background-color: #283583; width: 100%">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous">
    <center><
      <div>
        <span class="whiteText ">** Points are updated every Tuesday | </span>
        <span class="whiteText ">Selections are updated every Saturday **</span>
      </div>
      <div class="form-group"><br>
        <input style="background-color: #283583" class="whiteText" id="serachBox" type="text" placeholder="Search Player" v-model=serachText v-on:keyup="query" ><br>
      </div>
      <table id="mainTable" class="table whiteText" style="width:80%">
        <tr class="whiteText">
          <th>PlayerName</th>
          <th>Points</th>
          <th>Pick 1</th>
          <th>Pick 2</th>
          <th>Pick 3</th>
          <th>Pick 4</th>
          <th>Pick 5</th>
        </tr>
        <tr class="whiteText" id="playerTable" v-for="player in playersDataLocal">
          <td :id=player[0]>{{player[0]}}</td>
          <td :id=player[1]>{{player[1]}}</td>
          <td :class=player[7]>{{player[2]}}</td>
          <td :class=player[8]>{{player[3]}}</td>
          <td :class=player[9]>{{player[4]}}</td>
          <td :class=player[10]>{{player[5]}}</td>
          <td :class=player[11]>{{player[6]}}</td>
        </tr>
      </table>
    </center>
    <!-- adding line breaks so the search and reformat of table does not look weird with white on the bottom   -->
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'

  export default {
      name: "LeaderboardPicks.vue",
      data() {
        return {
            pData: [],
            serachText: "",
            newRows: []
        }
      },
      computed: {
          ...mapGetters([]),
          ...mapState(['playersSelection']),
          ...mapActions([]),
          playersDataLocal(){
              let data =   this.$store.getters.getPlayersData;

              for(let i = 0; i < data.length; i++){
                  let id2 = data[i][2].split(" ")[1];
                  let id3 = data[i][3].split(" ")[1];
                  let id4 = data[i][4].split(" ")[1];
                  let id5 = data[i][5].split(" ")[1];
                  let id6 = data[i][6].split(" ")[1];

                  if(id2 == '49ers' || id2 == '49ERS'){
                      id2 = 'ERS';
                  }
                  else if(id3 == '49ers' || id3 == '49ERS'){
                      id3 = 'ERS';
                  }
                  else if(id4 == '49ers' || id4 == '49ERS'){
                      id4 = 'ERS';
                  }
                  else if(id5 == '49ers' || id5 == '49ERS'){
                      id5 = 'ERS';
                  }
                  else if(id6 == '49ers' || id6 == '49ERS'){
                      id6 = 'ERS';
                  }
                  data[i].push(id2);
                  data[i].push(id3);
                  data[i].push(id4);
                  data[i].push(id5);
                  data[i].push(id6);
              }
              
              // console.log(`data added : ${JSON.stringify(data, null, 3)}`);
              this.pData = data
              setTimeout(this.games,100);
              return data
          },
      },
      methods: {
          query: function(event) {
              let seraching = this.serachText.toUpperCase();
              console.log(`searching : ${JSON.stringify(this.serachText, null, 3)}`);

              this.newRows = [];
              let rows = this.pData;

              if(seraching == ''){
                  for(let i = 0; i < rows.length; i++){
                      this.newRows.push(rows[i])
                  }
              } else {
                  for(let i = 0; i < rows.length; i++){
                      // console.log(`rows i 0  : ${JSON.stringify(rows[i], null, 3)}`);
                      let name = rows[i][0].toUpperCase();
                      if (name.includes(seraching)){
                          this.newRows.push(rows[i])
                      }
                  }
              }

              console.log(`newRows : ${JSON.stringify(this.newRows, null, 3)}`);
              let placeRows = `
                <tr class="whiteText">
                  <th>PlayerName</th>
                  <th>Points</th>
                  <th>Pick 1</th>
                  <th>Pick 2</th>
                  <th>Pick 3</th>
                  <th>Pick 4</th>
                  <th>Pick 5</th>
                </tr>
              `
              for(let k = 0; k < this.newRows.length; k++){
                  let Rows = `
                <tr id="playerTable" class="whiteText">
                  <td id=${this.newRows[k][0]}>${this.newRows[k][0]}</td>
                  <td id=${this.newRows[k][1]}>${this.newRows[k][1]}</td>
                  <td class=${this.newRows[k][7]}>${this.newRows[k][2]}</td>
                  <td class=${this.newRows[k][8]}>${this.newRows[k][3]}</td>
                  <td class=${this.newRows[k][9]}>${this.newRows[k][4]}</td>
                  <td class=${this.newRows[k][10]}>${this.newRows[k][5]}</td>
                  <td class=${this.newRows[k][11]}>${this.newRows[k][6]}</td>
                </tr>
                `
                  placeRows += Rows
              }
              let tr = document.getElementById('mainTable');
              // clear table and insert new rows
              tr.innerHTML = '';
              tr.innerHTML = placeRows;



              this.games()
          },
          games: function () {
              console.log(`game is callled ------------------------_> `);
              // [0] [3] [6] --> home away winner
              let gameData = this.$store.getters.getGames;
              console.log(`gameData : ${JSON.stringify(gameData, null, 3)}`);
              gameData.forEach((gData ) => {
                  // console.log(`gdata : ${JSON.stringify(gData, null, 3)}`);
                  // winners
                  gData[0] = gData[0] == '49ers' ? gData[0] = 'ERS' : gData[0];
                  gData[3] = gData[3] == '49ers' ? gData[3] = 'ERS' : gData[3]


                  if (gData[0] == gData[6]){
                      if(gData[3] == '49ers'){
                          let winnerElements = document.querySelectorAll('.ERS');
                          for(let i=0; i<winnerElements.length; i++){
                              winnerElements[i].className += ` winners`;
                          }
                          let loserElements = document.querySelectorAll(`.${gData[3].toUpperCase()}`);
                          for(let i=0; i<loserElements.length; i++){
                              loserElements[i].className += ` losers`;
                          }
                      } else {
                          console.log(`gData6 : ${gData[6]}`);
                          let winnerElements = document.querySelectorAll(`.${gData[6].toUpperCase()}`);
                          for(let i=0; i<winnerElements.length; i++){
                              winnerElements[i].className += ` winners`;
                          }
                          let loserElements = document.querySelectorAll(`.${gData[3].toUpperCase()}`);
                          for(let i=0; i<loserElements.length; i++){
                              loserElements[i].className += ` losers`;
                          }
                      }
                  }
                  // losers
                  else if (gData[3] == gData[6]){
                      if(gData[3] == '49ers'){
                          let winnerElements = document.querySelectorAll(`.ERS`);
                          for(let i=0; i<winnerElements.length; i++){
                              winnerElements[i].className += ` winners`;
                          }
                          let loserElements = document.querySelectorAll(`.${gData[0].toUpperCase()}`);
                          for(let i=0; i<loserElements.length; i++){
                              loserElements[i].className += ` losers`;
                          }
                      } else {

                          let winnerElements = document.querySelectorAll(`.${gData[6].toUpperCase()}`);
                          for(let i=0; i<winnerElements.length; i++){
                              winnerElements[i].className += ` winners`;
                          }
                          gData[0] = gData[0] == '49ers' ? gData[0] = 'ERS' : gData[0]
                          let loserElements = document.querySelectorAll(`.${gData[0].toUpperCase()}`);
                          for(let i=0; i<loserElements.length; i++){
                              loserElements[i].className += ` losers`;
                          }
                      }

                  }
              })
          }
      },



  };
</script>


<style >
  /*.winners {*/
  /*  background-color: #d0e9c6 !important;*/
  /*  color: black;*/
  /*}*/
  /*.losers {*/
  /*  background-color: #ebcccc !important;*/
  /*  color: black;*/
  /*}*/
  .winners {
    color: greenyellow;
  }
  .losers {
    color: orangered;
  }

  .whiteText {
    color: #ffffff;
  }

  ::-webkit-input-placeholder {
    text-align: center;
  }

  :-moz-placeholder { /* Firefox 18- */
    text-align: center;
  }

  ::-moz-placeholder {  /* Firefox 19+ */
    text-align: center;
  }

  :-ms-input-placeholder {
    text-align: center;
  }




</style>

