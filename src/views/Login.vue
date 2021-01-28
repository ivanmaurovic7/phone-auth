<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div id="login">
        <sendSMS v-if="step === 0" :step="step" @setStep="step = $event"/>
        <enterVerificationCode v-if="step === 1" :step="step" @setStep="step = $event" @setUser="$emit('set-user', $event)"/>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
import sendSMS from "@/components/sendSMS.vue"
import enterVerificationCode from "@/components/enterVerificationCode.vue"

export default defineComponent({
  props: ['user'],
  components: {
    sendSMS,
    enterVerificationCode,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  },
  data() {
    return {
      step: 0,
    }
  },
  mounted() {
    if(this.user) {
        this.$router.push({name: 'Home'})
    }
  }
});
</script>

<style>
#login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 85vh;
}
</style>