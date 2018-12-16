// const Vue=require('vue');
// const Vuex =require('vuex')
import Vue  from 'vue'
import Vuex from 'vuex'
import city from './modules/city'
import navbar from './modules/novbar'
// const Vuex =require ('vuex')
// const city =require('./modules/city')
// const novbar =require ('./modules/novbar')

Vue.use(Vuex);

const store=()=> new Vuex.Store({
  modules:{
    city,
    navbar
  },
  actions:{
    // nuxtSeveranceInit({commit },{req}){
    //   if (req.session.user){
    //     commit('city',req.session.user)
    //   }
    // }

  }
});

export default store
// module.exports=store;
