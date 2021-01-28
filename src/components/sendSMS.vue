<template>
    <div class="send-sms-form">
        <ion-input class="ion-input" placeholder="Enter your phone number" v-model="phoneNumber"></ion-input>
        <button expand="block" id="sign-in-button" class="button">Send verification code</button>
        <small class="error">{{errorMsg}}</small>
    </div>
</template>

<style scoped>
.send-sms-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.send-sms-form > .ion-input, .send-sms-form > .button {
  width: 300px;
  margin-bottom: 10px;
  flex-grow: 0;
}

.send-sms-form > .button {
  background-color: rgb(56, 128, 255);
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  transition: opacity .3s ease;
  font-weight: 600;
}

.send-sms-form > .error {
    color: red;
    font-weight: 600;
    margin: 0 20px;
}
</style>

<script>
import firebase from "firebase/app";
import { IonInput } from '@ionic/vue';

export default {
  components: {
    IonInput
  },
  data() {
    return {
      recaptchaVerifier: null,
      phoneNumber: '',
      errorMsg: '',
    }
  },
  watch: {
      errorMsg(val) {
          if(val !== "") {
              setTimeout(() => {
                  this.errorMsg = ""
              }, 2000)
          }
      },
  },
  mounted() {
    this.initRecaptcha()  
  },
  methods: {
    initRecaptcha() {
      this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
        size: 'invisible',
        callback: () => {
          this.sendMsgWithCode()
        }
      });
      this.recaptchaVerifier.render();
    },
    sendMsgWithCode() {
      firebase.auth().signInWithPhoneNumber(this.phoneNumber, this.recaptchaVerifier)
      .then(confirmationResult => {
        window.confirmationResult = confirmationResult;
        this.$emit('set-step', 1)
      }).catch(error => {
        this.errorMsg = error.message
      });
    }
  },
}
</script>