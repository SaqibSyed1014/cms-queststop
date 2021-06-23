<template>
  <div class="user-profile">

    <div class="box-container mb-4">
      <h3>Welcome UserName</h3>
    </div>

    <div class="box-container user-details">
      <b-row class="">
        <b-col lg="6" class="text-center"><b>Name:</b></b-col>
        <b-col lg="6" >UserName</b-col>
      </b-row>
      <b-row class="">
        <b-col lg="6" class="text-center"><b>Position:</b></b-col>
        <b-col lg="6" >userPosition</b-col>
      </b-row>
      <b-row class="">
        <b-col lg="6" class="text-center" ><b>Age:</b></b-col>
        <b-col lg="6" >number</b-col>
      </b-row>
    </div>
  </div>

  <!--  BootstrapVue icons -->
  <!--      <b-icon-arrow-up></b-icon-arrow-up>-->
  <!--      <b-icon-exclamation-triangle-fill></b-icon-exclamation-triangle-fill>-->
</template>

<script>
export default {
  name: "Profile",
  components: {},
};
</script>
<style scoped>
.user-details .row p {

}
.user-details .row div{
  margin: 1rem 0;
  /*border-bottom: 1px solid #1c1c1c;*/
}
</style>
