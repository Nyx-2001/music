<template>
  <div>
    <div class="top-wrap">
        <ul>
            <li>
                <svg t="1660540508552" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3436" width="20" height="20"><path d="M387.84 164.906667a22.122667 22.122667 0 0 0-0.362667-30.72 20.522667 20.522667 0 0 0-29.674666 0.362666L0 512.853333l357.802667 378.282667c8.042667 8.533333 21.290667 8.746667 29.674666 0.341333 8.32-8.32 8.533333-22.016 0.384-30.72L60.330667 512.853333 387.861333 164.906667z" fill="#2c2c2c" p-id="3437"></path></svg>
            </li>
            <li>
                <svg t="1660540751258" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4563" width="20" height="20"><path d="M658.56 557.392L322.536 221.384l45.248-45.256 336.016 336.008z" p-id="4564" fill="#2c2c2c"></path><path d="M704.088 512.2L364.12 852.16l-45.256-45.248 339.976-339.976z" p-id="4565" fill="#2c2c2c"></path></svg>
            </li>
            <li>
                <svg t="1660540804741" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5624" width="20" height="20"><path d="M938.336973 255.26894c-16.685369-6.020494-35.090879 2.752226-40.939358 19.437594l-24.770032 69.493701c-29.070385-65.537376-74.998152-123.162103-133.48295-166.337645-185.947253-137.611288-450.848984-100.112212-590.180413 83.942886C81.534688 350.908785 52.980346 460.653788 68.805644 570.742819c15.825298 110.605073 74.48211 208.481102 164.789518 275.394591 75.686209 55.904586 164.273476 83.082815 252.172686 83.082815 128.494541 0 255.26894-57.624727 338.007727-166.853687 36.639006-48.335965 61.581052-102.348396 74.48211-160.833193 3.78431-17.373425-7.224593-34.402822-24.426004-38.187133-17.201411-3.78431-34.402822 7.052579-38.187133 24.426004-10.836889 49.36805-31.994625 95.123803-62.957164 135.891147-118.173694 156.016798-342.996136 187.839409-500.90509 70.869814-76.546279-56.592642-126.086343-139.33143-139.503444-232.907106-13.417101-93.059634 10.664875-185.775239 67.77356-261.11742C318.05409 144.491853 542.704519 112.497228 700.785486 229.466823c57.280699 42.315471 100.112212 100.972283 123.334117 167.197715l-110.261045-43.003528c-16.513355-6.364522-35.090879 1.720141-41.627415 18.233496-6.536536 16.513355 1.720141 35.090879 18.233496 41.627415l162.38132 63.473207c3.78431 1.548127 7.740635 2.236183 11.69696 2.236183 0.516042 0 1.032085-0.172014 1.548127-0.172014 1.204099 0.172014 2.408198 0.688056 3.612296 0.688056 13.245087 0 25.630102-8.256677 30.274483-21.32975l57.796741-161.693264C963.623047 279.694944 955.022342 261.289434 938.336973 255.26894z" p-id="5625" fill="#2c2c2c"></path></svg>
            </li>
        </ul>
    </div>
    <div>
        <p>音乐是思维着的声音</p>
    </div>
    <div class="search-bar">
       <input type="text" placeholder="搜索音乐"> 
    </div>
    <div class="header-user">
        <div class="notification">
            <span class="notification-number">1</span>
            <svg t="1660542188936" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8674" width="30" height="30"><path d="M808 712l-48-108.8V448c0-102.4-65.6-195.2-160-232-3.2-44.8-41.6-80-88-80s-83.2 35.2-88 80c-96 36.8-160 129.6-160 232v155.2l-48 108.8c-6.4 14.4-4.8 30.4 3.2 43.2 8 12.8 22.4 20.8 38.4 20.8h508.8c16 0 30.4-8 38.4-20.8s9.6-30.4 3.2-43.2z m-547.2 16l51.2-115.2V448c0-88 59.2-166.4 144-192l19.2-6.4-3.2-20.8V224c0-22.4 17.6-40 40-40s40 17.6 40 40v6.4l-3.2 20.8 19.2 6.4c84.8 25.6 144 104 144 192v164.8l51.2 115.2H260.8zM512 880c44.8 0 80-35.2 80-80H432c0 44.8 35.2 80 80 80z" p-id="8675" fill="#2c2c2c"></path></svg>
        </div>
        <div class="login">
            <a href="#" class="login-link" style="margin-left: 22px">登录</a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
name:'MusicHeader'
}
</script>

<style>
.top-wrap {
    margin-right: 105px;
}

.top-wrap ul {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    margin: 0;
    padding: 0;
}

.top-wrap ul li {
    list-style: none;
    margin: 0 10px;
    cursor: pointer;
    width: 16px;
    height: 16px;
}

.search-bar {
    height: 40px;
    display: flex;
    width: 100%;
    max-width: 400px;
    padding-left: 16px;
    border-radius: 4px;
}

.search-bar input {
    width: 100%;
    height: 100%;
    /* border: none; */
    /* border: 1px solid rgb(149, 245, 143); */
    border: 1px solid aquamarine;
    /* background-color: var(--search-bg); */
    background-color: transparent;
    border-radius: 4px;
    font-family: var(--body-font);
    font-size: 15px;
    font-weight: 500;
    padding: 0 20px 0 40px;
    box-shadow: 0 0 0 2px rgb(134 140 160 / 2%);
    background-image: url(../assets/images/search.png);
    background-size: 14px;
    background-repeat: no-repeat;
    background-position: 16px 48%;
    /* color: var(--theme-color); */
    color: #000;
}
.header-user {
    display: flex;
    align-items: center;
    padding: 0 16px 0 40px;
    margin-left: auto;
    flex-shrink: 0;
}

.header-profile svg {
    width: 22px;
    color: #f9fafb;
    flex-shrink: 0;
}

.notification {
    position: relative;
}

.notification-number {
    position: absolute;
    background-color: #3a6df0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    right: -6px;
    top: -6px;
}

.login-link {
    text-decoration: none;
    color: var(--inactive-color);
    /* transition: 0.3s; */
}

p {
    font-size: 20px;
    font-family: 'Times New Roman', Times, serif;
    color: aqua;
    
}
</style>