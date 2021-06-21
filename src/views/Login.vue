<template>

    <form>
      <div class="form-wrapper">
        <div class="login p-5 text-center">

          <h2>Login Form</h2>

          <b-row class="input-group">
            <b-col sm="3">
              <label class="mb-0">Email:</label>
            </b-col>
            <b-col sm="9">
              <b-form-input
                  class="input-field"
                  type="email"
                  id="input-email"
                  v-model="form.email"
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

          <div class="errorMsg" v-if="showError">
            <p>Invalid Credentials</p>
          </div>

          <div class="btn d-block">
            <b-button class="btn-text" @click="formValidation">Log In</b-button>
          </div>

        </div>
      </div>
    </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  components: {},
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      falseEmail: null,
      showError: false
    };
  },
  computed: {
    // emailState(){
    //
    //
    //   // return this.form.email.length <= 4 ? null : false;
    // }
  },
  methods: {
    formValidation(){
      console.log(this.form.email)
      var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if(this.form.email.match(mailformat) && this.form.password !== ""){
        this.$router.push("/dashboard");
        this.submit();
      } else {
        this.showError = true
      }
    },
    ...mapActions(["LogIn"]),
    async submit() {
      const User = new FormData();
      User.append("username", this.form.username);
      User.append("password", this.form.password);
      try {
          await this.LogIn(User);
          // this.$router.push("/dashboard");
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
.login{
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
.btn .btn-text{
  padding: .5rem 3rem;
  border-radius: 25px;
  font-size: 1.1rem;
  /*background-color: #45a049;*/
}
.btn .btn-text:hover{
  box-shadow: 0 5px 10px #1c1c1c;
  transform: translateY(-5px);
}
</style>
