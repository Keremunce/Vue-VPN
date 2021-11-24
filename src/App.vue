<template>
  <div id="app">

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
.route-leave-to{
  opacity: 0;
  transform: translateY(-30px);
}
.route-enter-active,
.route-leave-active{
  transition: all .3s ease;
}

.route-enter-to,
.route-leave-from{
  opacity: 1;
  transform: translateY(0);
}
</style>
