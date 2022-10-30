<template>
<<<<<<< HEAD
  <router-view/>
</template>

<script>

export default {
  name: 'App',
=======
  <HeadLine/>
  <HomePage/>
</template>

<script>
import HeadLine from '@/components/HeadLine.vue'
import HomePage from '@/view/HomePage.vue'

export default {
  name: 'App',
  components: {
    HeadLine,
    HomePage,
  }
>>>>>>> cfa3552ad6cbf1b1e89a77b844bd3e34b1983196
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
