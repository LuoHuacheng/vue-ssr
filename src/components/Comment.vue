<template>
  <li v-if="comment" class="comment">
    <div class="author">
      <img :src="comment.author.avatar_url" :alt="comment.author.loginname">
      <router-link :to="'/user/' + comment.author.loginname">{{ comment.author.loginname }}</router-link>
      {{ comment.create_at | timeAgo }}
    </div>
    <div class="text" v-html="comment.content"></div>
    <div class="toggle" v-if="comment.ups && comment.ups.length">
      {{ comment.ups.length + ' 人赞过' }}
    </div>
  </li>
</template>

<script>
export default {
  name: 'comment',
  props: ['comment'],
  data () {
    return {
    }
  },
}
</script>

<style lang="stylus">
.comment-children
  .comment-children
    margin-left 1.5em

.comment
  border-top 1px solid #eee
  position relative
  .author, .text, .toggle
    font-size .9em
    margin 1em 0
  .author
    color #828282
    img
      margin-right 10px
      width 30px
      height 30px
      vertical-align top
      border-radius 5px
    a
      font-size 1.2em
      color #828282
      text-decoration underline
  .text
    overflow-wrap break-word
    a:hover
      color #ff6600
    pre
      white-space pre-wrap
  .toggle
    background-color #fffbf2
    padding .3em .5em
    border-radius 4px
    a
      color #828282
      cursor pointer
    &.open
      padding 0
      background-color transparent
      margin-bottom -0.5em
</style>
