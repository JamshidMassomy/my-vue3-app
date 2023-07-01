<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>Vue js Author Application</h1>
  <AuthorPage />
</template>

<script>
import AuthorPage from './pages/book-author/AuthorPage.vue'

export default {
  name: 'App',
  components: {
    AuthorPage
  }
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
