<template>
  <ion-app>
    <router-view :user="user" @setUser="user = $event"/>
  </ion-app>
</template>

<script>
import { IonApp } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
  },
  data() {
    return {
      user: null
    }
  },
  watch: {
    user(val) {
      if(val) {
        this.$router.push({name: 'Home'})
      } else {
        this.$router.push({name: 'Login'})
      }
    }
  }
});
</script>