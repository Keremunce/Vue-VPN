<template>
  <div id="app">
    <!-- <select name="lang" v-model="lang">
      <option value="en">English</option>
      <option value="tr">Türkçe</option>  
    </select> -->

    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>

  </div>
</template>


<script>

  export default {
    name: 'App',

  }
</script>

<style>
  /* TRANSITION */
  .route-enter-from,
  .route-leave-to {
    opacity: 0;
    transform: translateY(-30px);
  }

  .route-enter-active,
  .route-leave-active {
    transition: all .2s ease;
  }

  .route-enter-to,
  .route-leave-from {
    opacity: .5;
    transform: translateY(0);
  }
</style>