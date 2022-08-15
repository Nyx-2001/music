<template>
<div>
  <!-- <h2>视频</h2> -->
  <div class="page-header">
   <div class="page-menu">
    <router-link to="/MusicVideo/MusicVideoRank">排行</router-link>
    <router-link to="/MusicVideo/MusicVideoLibrary">视频库</router-link>
   </div>
   </div>
   <div>
    <router-view></router-view>
   </div>
  </div>
</template>

<script>
export default {
name:'MusicVideo'
}
</script>

<style>

.page-header {
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--border-color);
    height: 58px;
    flex-shrink: 0;
}

.page-menu {
    display: flex;
    align-items: center;
}



.page-header .page-menu {
    margin: auto;
}

.page-header .page-menu {
    margin-left: 150px;
}
</style>