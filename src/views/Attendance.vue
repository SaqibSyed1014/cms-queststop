<template>
<div class="box-container">
  <h5>Click the button below to mark yourself present</h5>
  <div class="text-right">
    <b-button @click="markAttendance">Present</b-button>
  </div>
</div>
</template>

<script>
export default {
name: "Attendance",
  methods: {
    markAttendance(){
      this.$store.dispatch('markingAttendance')
    }
  }
}
</script>

<style scoped>
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
</style>