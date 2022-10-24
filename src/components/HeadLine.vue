<template>
  <div class="layout">
    <header>
        <div class="pagetitle">
            <h2 class="title"> Photographic Society of South East Asia </h2>
        </div>

        <div class = "user-profile">
          <div v-if="user">
          </div>

          <div v-else>
            <router-link to="/login">Log In</router-link> |
            <router-link to="/register">Register</router-link> 
          </div>
        </div>

    </header>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
    name: 'LayOut',

    data() {
        return {
            user:false,
        }
    },

    mounted(){
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if(user) {
          this.user = user;
        }
    })
  }

}
</script>

<style>

</style>