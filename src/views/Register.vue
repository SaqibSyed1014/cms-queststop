<template>

  <form>

    <div class="form-wrapper">
      <div class="signUp p-5 text-center">
        <h2 class="">Sign-Up Form</h2>
        <b-row class="input-group">
          <b-col sm="3" class="py-auto">
            <label class="">First Name:</label>
          </b-col>
          <b-col sm="9">
            <b-form-input
                class="input-field"
                type="name"
                id="input-firstName"
                v-model="form.email"
                aria-describedby="input-live-help"
                placeholder="Enter your First Name"
                trim
            ></b-form-input>
          </b-col>
        </b-row>
        <b-row class="input-group" >
          <b-col sm="3">
            <label class="mb-0">Last Name:</label>
          </b-col>
          <b-col sm="9">
            <b-form-input
                type="name"
                class="input-field"
                id="input-lastName"
                v-model="form.password"
                aria-describedby="input-live-help"
                placeholder="Enter your Last Name"
                trim
            ></b-form-input>
          </b-col>
        </b-row>
        <b-row class="input-group" >
          <b-col sm="3">
            <label class="mb-0">Email:</label>
          </b-col>
          <b-col sm="9">
            <b-form-input
                type="email"
                class="input-field"
                id="input-email"
                v-model="form.password"
                aria-describedby="input-live-help"
                placeholder="Enter your Email"
                trim
            ></b-form-input>
          </b-col>
        </b-row>
        <b-row class="input-group" >
          <b-col sm="3">
            <label class="mb-0">Password:</label>
          </b-col>
          <b-col sm="9">
            <b-form-input
                type="password"
                class="input-field"
                id="input-password"
                v-model="form.password"
                aria-describedby="input-live-help pass-validation"
                placeholder="Enter your password"
                trim
            ></b-form-input>
          </b-col>
        </b-row>
        <div class="createAcc mx-auto w-75">
          <p>Already have an Account? Log In <router-link to="/">Here!</router-link></p>
        </div>
        <div class="errorMsg" v-if="showError">
          <p>Invalid Credentials</p>
        </div>
        <div class="btn d-block">
          <b-button class="btn-text" @click="formValidation">Sign Up</b-button>
        </div>

      </div>
    </div>

  </form>

</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Register",
  components: {},
  data() {
    return {
      form: {
        username: "",
        full_name: "",
        password: "",
      },
      showError: false
    };
  },
  methods: {
    ...mapActions(["Register"]),
    async submit() {
      try {
        await this.Register(this.form);
        this.$router.push("/posts");
        this.showError = false
      } catch (error) {
        this.showError = true
      }
    },
  },
};
</script>
<style scoped>
.form-wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.signUp{
  width: 70%;
  border-radius: 15px;
  box-shadow: 0 8px 24px rgba(28,28,28,0.16);
}
h2{
  margin: 2rem;
}
.input-group{
  margin: 1rem auto;
  width: 75%;
}
label {
  margin: 5px;
  padding: 10px;
}
input {
  margin: 5px;
  padding: 1.5rem 2rem;
  border-radius: 30px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
}
.btn button{
  padding: .5rem 3rem;
  border-radius: 25px;
  font-size: 1.1rem;
  /*background-color: #45a049;*/
}
.btn button:hover{
  box-shadow: 0 5px 10px #1c1c1c;
  transform: translateY(-5px);
}
</style>
