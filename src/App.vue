<template>
  <div id="app">

    <SearchForm @changeData="dataResults($event)"/>
    <keep-alive> 
      <SearchResults v-if="showResults" :resultsData="results" />      
    </keep-alive>

  </div>
</template>

<script>
import SearchForm from './components/SearchForm.vue';
import SearchResults from './components/SearchResults.vue';
/* import Shazam from './services/Shazam.js'; */

export default {
  name: 'App',
  components: {
    SearchForm,
    SearchResults
  }, 
  data() {
    return {
      showResults: false,
      results: null
    }
  },
  methods: {
    dataResults(data){
      this.showResults = false
      this.results = ''

      console.log('Emit: ', data);
      this.results = data.hits
      this.showResults = true
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
}
</style>
