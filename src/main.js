import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'
import VueApollo from 'vue-apollo'
import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase' 
import router from './router'
import './registerServiceWorker'

Vue.config.productionTip = false

const config = {
  apiKey: "AIzaSyC-dsA3cwaYTz0i02NOkfLmDuXtmkZtQ9I",
    authDomain: "hexa-hive-project.firebaseapp.com",
    databaseURL: "https://hexa-hive-project.firebaseio.com",
    projectId: "hexa-hive-project",
    storageBucket: "hexa-hive-project.appspot.com",
    messagingSenderId: "177744498688"
};
firebase.initializeApp(config);
const httpLink = new HttpLink({
  // URL to graphql server, you should use an absolute URL here
  uri: 'http://demo-hackathon-hexa.herokuapp.com/v1alpha1/graphql'
})
const authLink = setContext((_, { headers }) => {
  // get the authentication token from localstorage if it exists
  const token = localStorage.getItem('attendance-app-token')

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null
    }
  }
})
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

// Install the vue plugin
Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

new Vue({
  router,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
