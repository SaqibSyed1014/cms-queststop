<template>
  <div class="welcome-user">
    <h3>Welcome {  UserName }
<!--      <b-icon-arrow-up></b-icon-arrow-up>-->
<!--      <b-icon-exclamation-triangle-fill></b-icon-exclamation-triangle-fill>-->
    </h3>
  </div>
</template>

<script>
export default {
  name: "Profile",
  components: {},
};
</script>
<style scoped>
.welcome-user{
  width: 100%;
  padding: 1rem;
  box-shadow: 0 4px 7px #1c1c1c;
}
</style>
