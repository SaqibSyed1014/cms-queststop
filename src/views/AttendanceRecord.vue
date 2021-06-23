<template>
<div>
  <div class="box-container">
    <h5>Click the button below to get your attendance record</h5>
    <div class="text-right">
      <b-button @click="getAttendanceRecord">Get Record</b-button>
    </div>
  </div>
  <div class="box-container" v-if="false">
    <div class="attaendance-record">

    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "AttendanceRecord",
  methods: {
    getAttendanceRecord(){

    }
  }
}
</script>

<style scoped>

</style>