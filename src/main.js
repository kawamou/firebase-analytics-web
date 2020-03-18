import Vue from 'vue'
import App from './App.vue'
import router from './router';

import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: '<your-api-key>',
  authDomain: '<your-auth-domain>',
  databaseURL: '<your-database-url>',
  projectId: '<your-cloud-firestore-project>',
  storageBucket: '<your-storage-bucket>',
  messagingSenderId: '<your-sender-id>'
  appId: '<your-app-id>',
  measurementId: '<your-measurement-id>'
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

Vue.config.productionTip = false

// alias
Vue.prototype.$analytics = firebase.analytics();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
