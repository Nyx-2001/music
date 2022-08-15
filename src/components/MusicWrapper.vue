<template>
  <div>
    <div class="left-side">
        <left-side/>
    </div>
    <div class="main-container">
        <main-container/>
    </div>
  </div>
</template>

<script>
import LeftSide from './LeftSide.vue'
import MainContainer from './MainContainer.vue'
export default {
name:'MusicWrapper',
components:{
    LeftSide,
    MainContainer
}
}
</script>

<style>
.left-side {
    flex-basis: 240px;
    border-right: 1px solid var(--border-color);
    padding: 26px 26px 10px 26px;
    overflow: auto;
    flex-shrink: 0;
}

.main-container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

</style>