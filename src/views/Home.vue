<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Welcome</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content id="home">
        <ion-button @click="logout">Logout</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { IonButton } from '@ionic/vue';
export default defineComponent({
    props: ['user'],
    components: {IonButton},
    methods: {
        logout() {
            this.$emit('set-user', null)
        }
    },
    mounted() {
        if(!this.user) {
            this.$router.push({name: 'Login'})
        }
    }
});
</script>

<style scoped>
#home {
  width: 100vw;
  height: 85vh;
}

#home, .button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.button {
    margin: 50px auto;
    max-width: 200px;
}
</style>