<template>
  <div id="app">
    <header class="header">
      <nav class="inner">
        <router-link to="/" exact>
          <img class="logo" src="~public/logo-48.png" alt="logo">
        </router-link>
        <router-link to="/all">All</router-link>
        <router-link to="/good">Good</router-link>
        <router-link to="/share">Share</router-link>
        <router-link to="/ask">Ask</router-link>
        <router-link to="/job">Jobs</router-link>
        <router-link to="/dev">Dev</router-link>
        <a class="github" href="https://github.com/vuejs/vue-hackernews-2.0" target="_blank" rel="noopener">
          Built with Vue.js
        </a>
      </nav>
    </header>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<style lang="stylus">
body
  font-family -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',sans-serif
  font-size 15px
  background-color lighten(#eceef1,30%)
  margin 0
  padding-top 55px
  color #34495e
  overflow-y scroll

dl, dt, dd
  margin 0

a
  color #34495e
  text-decoration none

img
  max-width 100%

.header
  background-color #ff6600
  position fixed
  z-index 999
  height 55px
  top 0
  left 0
  right 0

  .inner
    max-width 800px
    box-sizing border-box
    margin 0 auto
    padding 15px 5px

  a
    color rgba(255,255,255,0.8)
    line-height 24px
    transition color 0.15s ease
    display inline-block
    vertical-align middle
    font-weight 300
    letter-spacing 0.075em
    padding 0 1em

    &:hover
      color #fff

    &.router-link-active
      color #fff
      font-weight 400

  .github
    color #fff
    font-size 0.9em
    margin 0
    float right

.logo
  width 24px
  margin-right 10px
  display inline-block
  vertical-align middle

.view
  max-width 800px
  margin 0 auto
  position relative

.fade-enter-active, .fade-leave-active
  transition all 0.2s ease

.fade-enter, .fade-leave-active
  opacity 0

@media (max-width: 860px)
  .header .inner
    padding 15px 30px

@media (max-width: 600px)
  .header
    .inner
      padding 15px

    a
      padding 0 0.5em

    .github
      display none
</style>
