<template>
  <div>
    <div class="box-container">
       <h5>Click the button below to get meeting record</h5>
        <div class="text-right">
          <b-button @click="getMeetingRecord">Get Record</b-button>
        </div>
    </div>
    <div class="box-container" v-if="false">
        <div class="meeting-record">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MeetingRecord",
  methods: {
    getMeetingRecord(){

    }
  }
}
</script>

<style scoped>

</style>