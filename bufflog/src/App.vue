<template>
  <div id="app" class="container">
    <nav class="navbar navbar-expand-sm bg-light">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{ name: 'Create' }" class="nav-link">Add Post</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Index' }" class="nav-link">Home</router-link>
        </li>
      </ul>
    </nav>
    <transition name="fade">
      <div class="gap">
        <router-view></router-view>        
      </div>
    </transition>
    <footer>
      <h3>Contact request</h3>
      <contact-request></contact-request>
    </footer>
  </div>
</template>

<script>


import ContactRequest from "@/components/ContactRequestComponent.vue";
export default {
  components: {
    ContactRequest
  }
};
</script>

<style>
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
    .gap {
      margin-top: 50px;
    }
</style>
