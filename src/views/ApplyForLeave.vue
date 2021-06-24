<template>
<div>
  <div class="box-container">
    <div class="apply-for-leave">
      <form>
        <b-row class="input-group" >
          <b-col lg="3" sm="12">
            <label class="label mb-0">Start Date:</label>
          </b-col>
          <b-col lg="9" sm="12">
            <b-form-input
                type="date"
                v-model="form.startDate"
                class="input-field"
                id="input-startDate"
                aria-describedby="input-live-help startDate-validation"
                placeholder="Enter Start Date"
                trim
            ></b-form-input>
          </b-col>
        </b-row>
        <b-row class="input-group" >
          <b-col lg="3" sm="12">
            <label class="label mb-0">End Date:</label>
          </b-col>
          <b-col lg="9" sm="12">
            <b-form-input
                type="date"
                v-model="form.endDate"
                class="input-field"
                id="input-endDate"
                aria-describedby="input-live-help endDate-validation"
                placeholder="Enter End Date"
                trim
            ></b-form-input>
          </b-col>
        </b-row>
        <b-row class="input-group" >
          <b-col lg="3" sm="12">
            <label class="label mb-0">Reason:</label>
          </b-col>
          <b-col lg="9" sm="12">
            <b-form-textarea
                rows="7"
                type="text"
                v-model="form.endDate"
                class="input-field"
                id="input-leaveReason"
                aria-describedby="input-live-help leaveReason-validation"
                placeholder="Enter the Reason for leave"
                trim
            ></b-form-textarea>
          </b-col>
        </b-row>
        <div class="errorMsg text-center" v-if="showError">
          <p>Please fill out the Form!</p>
        </div>
        <div class="btn d-block">
          <b-button class="btn-text" @click="validatingForm">Apply</b-button>
        </div>
      </form>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "ApplyForLeave",
  data(){
    return{
      form: {
        startDate: '',
        endDate: '',
        reason: ''
      },
      showError: false
    }
  },
  methods: {
    validatingForm(){
      if(this.form.startDate !== "" && this.form.endDate !== "" && this.form.reason !== ""){
        this.applyingForLeave()
      }
      else {
        this.showError=true
        console.log('error')
      }
    },
    applyingForLeave(){

    }
  }
}
</script>

<style scoped>
.input-group{
  margin: 1rem auto;
  width: 75%;
}
.label {
  margin: 5px;
  padding: 10px;
}
.input-field {
  margin: 5px;
  padding: 1.5rem 2rem;
  border-radius: 30px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
}
button{
  border: none;
  background-color: var(--blueColor);
  padding: .5rem 2rem;
  font-size: 1.1rem;
  color: #262626;
  font-weight: 600;
}
button:hover{
  background-color: var(--blueColor);
  color: #262626;
  box-shadow: 0 0 10px var(--blueColor);
}
.btn{
  text-align: right;
  margin-right: 6.3%;
}
</style>