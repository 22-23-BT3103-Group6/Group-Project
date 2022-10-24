<template>
  <div class="headline">
    <header>
        <div class="pagetitle">
            <h2 class="title"> Photographic Society of South East Asia </h2>
        </div>

        <div class = "profile">
          <div v-if="user">
          </div>

          <div v-else>
            <router-link to="/signin">Sign in/Register</router-link>
          </div>
        </div>
    </header>

    <div class = menu>
      <div class = "nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About Us</router-link> |
      <router-link to="/latest">Latest Photograph</router-link> 
    </div>
    </div>
    
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

<style scoped>
.headline{
            width: 100%;
        }

.pagetitle {
      width: 80%;
      font-weight: bold;
      font-size: 24px;
      height: 100px;
      display: flex;
      align-items: center;
      padding-left: 30px;
    }

.profile {
  position: absolute;
  display: flex;
  right: 0;
  top: 10px;
  margin: 10px;
  float: right;
}

.menu{
  height: 50px;
  background-color: #FAF0E6	
}
.nav{
  margin-left: 15px;
  height: 50px;
  line-height:50px;
  font-size: 20px;
  float: left;
  
}
.nav a:hover{        
    border-bottom: 2px solid seagreen;
    color: seagreen;
}
</style>

