<template>
<div>
  <div class="box-container">
    <b-row class="input-group" >
      <b-col lg="3" sm="12">
        <label class="label mb-0">Enter Your Jira Link:</label>
      </b-col>
      <b-col lg="9" sm="12">
        <b-form-input
            type="text"
            class="input-field"
            id="input-jira-link"
            aria-describedby="input-live-help jiraLink-validation"
            placeholder="Enter Jira Link"
            trim
        ></b-form-input>
      </b-col>
    </b-row>
  </div>
</div>


</template>

<script>
export default {
  name: "Logs"
}
</script>

<style scoped>
.input-group{
  margin: 1rem auto;
  width: 100%;
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
</style>