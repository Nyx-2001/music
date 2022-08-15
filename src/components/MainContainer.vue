<template>
  <div class="main-container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
name:'MainContainer'
}
</script>

<style>
.main-container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}
</style>