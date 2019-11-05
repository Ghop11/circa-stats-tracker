import Vue from 'vue'
import Vuex from 'vuex'
import playerData from './scripts/playersData.js'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playersData: [],
    quarter2: [],
    games: [],
  },
  mutations: {
    UPDATE_PLAYER_DATA(state, data){
      state.playersData.push(data)
    },
    UPDATE_QUARTER2(state, data){
      state.quarter2.push(data)
    },
    UPDATE_GAMES(state, data){
      state.games.push(data)
    }
  },
  actions: {
    getPlayersData({commit}, event) {
      // call playersData file to
      let data = playerData.topPlayerSelection;
      // console.log(`data : ${JSON.stringify(data, null, 3)}`);
      commit('UPDATE_PLAYER_DATA', data);
    },
    getQuarter2({commit}, event) {
      // call playersData file to
      let data = playerData.quarter2;
      // console.log(`data : ${JSON.stringify(data, null, 3)}`);
      commit('UPDATE_QUARTER2', data);
    },
    getGames({commit}, event) {
      // call playersData file to
      let data = playerData.games;
      // console.log(`data : ${JSON.stringify(data, null, 3)}`);
      commit('UPDATE_GAMES', data);
    },


  },
  getters: {
    getPlayersData: state => {
      // console.log(`state : ${JSON.stringify(state, null, 3)}`);
      return state.playersData[0]
    },
    getQuarter2: state => {
      return state.quarter2[0]
    },
    getGames: state => {
      return state.games[0]
    },
  }
})
