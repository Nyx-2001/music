<template>
<div>
  <div class="side-wrapper">
        <div class="side-title">在线音乐</div>
        <div class="side-menu">
            <router-link to="/MusicHall" aria-current="page">音乐馆</router-link>
            <router-link to="/MusicVideo" aria-current="page">视频</router-link>
            <router-link to="/MusicRadio" aria-current="page">电台</router-link>
        </div>
    </div>
    <div class="side-wrapper">
         <div class="side-title">我的音乐</div>
         <div class="side-menu">
             <router-link to="/MusicMyLove" aria-current="page">我喜欢</router-link>
             <router-link to="/MusicDownload" aria-current="page">本地下载</router-link>
             <router-link to="/MusicPlayList" aria-current="page">最近播放</router-link>
             <router-link to="/MusicBuy" aria-current="page">已购音乐</router-link>
        </div>
        </div>
    <div class="side-wrapper">
        <div class="side-title">自建歌单</div>
   </div>
   </div>
</template>

<script>
export default {
name:'LeftSide'
}
</script>

<style>

.side-title {
    color: var(--inactive-color);
    margin-bottom: 14px;
}

.side-menu a {
    text-decoration: none;
    color: var(--theme-color);
    /* color: #000; */
    display: flex;
    align-items: center;
    font-weight: 400;
    padding: 10px;
    font-size: 14px;
    border-radius: 6px;
    /* transition: 0.1s; */
}

.side-menu a:hover {
background-color: aquamarine;
}

.side-wrapper+.side-wrapper {
    margin-top: 20px;
}
</style>