<template>
  <div>
   <div class="page-header">
    <div class="page-menu">
    <router-link to="/MusicMyLove/MusicMyLoveSong">歌曲</router-link>
    <router-link to="/MusicMyLove/MusicLoveSongList">歌单</router-link>
    </div>
    </div>
   <div>
    <router-view></router-view>
   </div>
  </div>
</template>

<script>
export default {
name:'MusicMyLove'
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