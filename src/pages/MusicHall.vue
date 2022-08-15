<template>
  <div>
    <!-- <h2>音乐馆</h2> -->
    <div class="page-header">
   <div class="page-menu">
    <router-link to="/MusicHall/MusicChoiceNess">精选</router-link>
    <router-link to="/MusicHall/MusicRank">排行</router-link>
    <router-link to="/MusicHall/MusicSinger">歌手</router-link>
    <router-link to="/MusicHall/MusicSongList">歌单</router-link>
   </div>
   </div>
   <div>
    <router-view></router-view>
   </div>
  </div>
</template>

<script>
export default {
name:'MusicHall'
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

.page-header .page-menu a {
    padding: 20px 24px;
}

.page-menu a {
    padding: 20px 30px;
    text-decoration: none;
    color: var(--inactive-color);
    /* color: aliceblue; */
    border-bottom: 2px solid transparent;
    /* transition: 0.3s; */
}

.page-menu a.is-active, .page-menu a:hover {
    color: var(--theme-color);
    border-bottom: 2px solid var(--theme-color);
}
</style>

