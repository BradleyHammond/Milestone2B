<template>
  <div>
    <div class="form-group">
      <label for="name">Name</label>
      <input id="name" type="text" v-model="name"/>
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input id="email" type="email" v-model="email"/>
    </div>
    <div class="form-group">
      <label for="message">Message</label>
      <textarea id="message" v-model="message"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  // Value is property received from the parent component.
  props: ['value'],
  data () {
    // These are only assigned when the component is created.
    // They will have to be manually updated if 'value' changes.
    // See below
    return {
      name: this.value.name,
      email: this.value.email,
      message: this.value.message
    }
  },
  computed: {
    // This can be treated like any other property. (i.e. this.formData)
    formData () {
      return {
        name: this.name,
        email: this.email,
        message: this.message
      }
    }
  },
  watch: {
    // This is fired every time formData changes.
    formData (newValue) {
      // Emit a custom 'input' event.
      this.$emit('input', newValue)
    },
    value (newValue) {
      // Update if value is changed by parent component.
      this.name = newValue.name
      this.email = newValue.email
      this.message = newValue.message
    }
  }
}
</script>

<style>
</style>
