<template>
  <div id="formContainer" class="m">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

      <b-form-group id="input-group-2" label="Search:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.term"
          placeholder="Enter search term"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Filter:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.type"
          :options="types"
          required
        ></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
  import Shazam from '../services/Shazam.js';

  export default {
    data() {
      return {
        form: {
          term: '',
          type: 'Music',
        },
        types: [{ text: 'Select One', value: null }, 'Music', 'Artist'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        //alert(JSON.stringify(this.form))

        Shazam.getResults(this.form.term)
        .then(res => {
          let result = this.form.type == 'Music' ? res.tracks : res.artists
          console.log(result)
          return this.$emit('changeData', result)
          //return result
        })
        .catch(err => console.log(err))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.term = ''
        this.form.types = null
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style>
  #formContainer {
    width: 1200px!important;  
  }
</style>