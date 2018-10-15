import Vue from 'vue'
import App from './App.vue'
//import Apollo Modules
import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'
//import Router
import router from "./router"; 

const apolloProvider = new VueApollo({
  defaultClient: new ApolloClient({
    uri: "http://localhost:8000/graphql"
  })
});

//use the VueApollo module
Vue.use(VueApollo);

Vue.config.productionTip = false

new Vue({
  apolloProvider,
  router, 
  render: h => h(App)
}).$mount('#app')
