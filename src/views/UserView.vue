<template>
  <div class="user-view">
    <template v-if="user">
      <div class="head">
        <img :src="user.avatar_url" :alt="user.loginname">
        <span>{{ user.loginname }}</span>
      </div>
      <ul class="meta">
        <li><span class="label">注册时间：</span> {{ user.create_at | timeAgo }}</li>
        <li><span class="label">个人积分：</span> {{ user.score }}</li>
      </ul>
      <dl class="list">
        <dt>最近创建的话题</dt>
        <dd v-for="item in user.recent_topics" :key="item.id">
          <item :item="item"></item>
        </dd>
      </dl>
      <dl class="list">
        <dt>最近参与的话题</dt>
        <dd v-for="item in user.recent_replies" :key="item.id">
          <item :item="item"></item>
        </dd>
      </dl>
    </template>
    <template v-else-if="user === false">
      <h1>User not found.</h1>
    </template>
  </div>
</template>

<script>
import Item from '../components/Item.vue';

export default {
  name: 'user-view',
  components: {
    item: Item,
  },
  computed: {
    user () {
      return this.$store.state.users[this.$route.params.name]
    }
  },

  asyncData ({ store, route: { params: { name }}}) {
    return store.dispatch('FETCH_USER', { name })
  },

  title () {
    return this.user
      ? this.user.name
      : 'User not found'
  }
}
</script>

<style lang="stylus">
.user-view
  background-color #fff
  box-sizing border-box
  padding 1em
  .head
    margin 0
    font-size 1.5em
    height 60px
    line-height 60px
    img
      margin-right 20px
      width 60px
      height 60px
      vertical-align middle
  .meta
    list-style-type none
    padding 0
  .list
    & > dt
      padding-left 10px
      height 30px
      line-height 30px
      font-weight bold
      background-color #e5e5e5
  .label
    display inline-block
    min-width 4em
  .about
    margin 1em 0
  .links a
    text-decoration underline
</style>
