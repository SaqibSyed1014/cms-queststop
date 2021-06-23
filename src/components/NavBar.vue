<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#" class="brand-name pl-3">QuestStop</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0 px-3" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    async logout() {
      await this.$store.dispatch("LogOut");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.navbar-dark{
  box-shadow: 0 5px 5px rgba(0,0,0,0.16);
}
.navbar-dark .navbar-brand {
  color: var(--blueColor);
  font-weight: bold;
  font-size: 1.7rem;
  letter-spacing: .2rem;
}
.form-inline{
  margin-left: .8rem;
  margin-right: .8rem;
}
.form-control-sm:focus {
  outline: none !important;
  box-shadow: 0 0 10px var(--blueColor);
}
button{
  background-color: var(--blueColor);
  color: #262626;
  /*padding: 0 2rem;*/
}
button:hover{
  background-color: var(--blueColor);
  color: #262626;
  box-shadow: 0 0 10px var(--blueColor);
}
.form-inline{

}
</style>
