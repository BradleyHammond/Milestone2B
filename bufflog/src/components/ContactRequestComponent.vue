<template>
  <div>
    <simple-message-form v-model="formData"></simple-message-form>
    <button @click="sendRequest">Send</button>
  </div>
</template>

<script>
// v-model is syntactic sugar for v-bind:value and v-on:input
// For example,

//  <simple-message-form v-model="formData"></simple-message-form>

// is the same as

// <simple-message-form
//    v-bind:value="formData"
//    v-on:input="formData = $event.target.value"
// ></simple-message-form>

import SimpleMessageForm from '@/components/SimpleMessageForm.vue'
import database from '@/database.js'

export default {
  // Vue automagically converts CamelCase, which is imported here,
  // to kebab-case which is used in the template.
  components: {
    SimpleMessageForm
    // This is shorthand for:
    // SimpleMessageForm: SimpleMessageForm
  },
  data () {
    return {
      database,
      formData: {
        // name: "",
        // email: "",
        // message: ""
      }
    }
  },
  methods: {
    sendRequest () {
      this.database.createContactRequest(this.formData)
      this.resetForm()
      this.database.debug()
    },
    resetForm () {
      this.formData = {}
    }
  }
}
</script>
