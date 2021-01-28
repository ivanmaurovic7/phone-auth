<template>
    <div class="enter-verification-code-form">
        <ion-input class="ion-input" placeholder="Enter your verification code" v-model="verificationCode"></ion-input>
        <button expand="block" @click="verify" class="button">Submit</button>
        <small class="error">{{errorMsg}}</small>
    </div>
</template>

<style scoped>
.enter-verification-code-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.enter-verification-code-form > .ion-input, .enter-verification-code-form > .button {
  width: 300px;
  margin-bottom: 10px;
  flex-grow: 0;
}

.enter-verification-code-form > .button {
  background-color: rgb(56, 128, 255);
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  transition: opacity .3s ease;
  font-weight: 600;
}

.enter-verification-code-form > .error {
    color: red;
    font-weight: 600;
    margin: 0 20px;
}
</style>

<script>
import { IonInput } from '@ionic/vue';

export default {
  components: {
    IonInput
  },
  data() {
    return {
      verificationCode: '',
      errorMsg: ''
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
  methods: {
    verify() {
      window.confirmationResult.confirm(this.verificationCode).then(result => {
        const user = result.user;
        this.$emit('set-user', user)
      }).catch(error => {
        console.log(error)
        this.errorMsg = error.message
      });
    }
  },
}
</script>