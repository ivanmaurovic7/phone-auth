import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

import firebase from 'firebase/app';
import 'firebase/auth'

const app = createApp(App)
  .use(IonicVue)
  .use(router);

firebase.initializeApp({
  apiKey: "AIzaSyCFW8h4C1k7y2rvUUL3h1FergETwIgkdmw",
  authDomain: "sample-task-x.firebaseapp.com",
  projectId: "sample-task-x",
  storageBucket: "sample-task-x.appspot.com",
  messagingSenderId: "892939962755",
  appId: "1:892939962755:web:10f668070929e00d644eb6"
});

firebase.auth().useDeviceLanguage();

router.isReady().then(() => {
  app.mount('#app');
});