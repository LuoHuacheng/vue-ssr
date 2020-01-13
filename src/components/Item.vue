<template>
  <li class="news-item">
    <router-link :to="'/user/' + item.author.loginname">
      <img class="avatar" :src="item.author.avatar_url" :alt="item.author.loginname">
    </router-link>
    <span class="label primary" v-if="item.top">置顶</span>
    <span class="label primary" v-else-if="item.good">精华</span>
    <span class="label" v-else-if="item.tab">{{ item.tab | tabSort }}</span>
    <dl class="summary">
      <dt class="title">
        <router-link :to="'/topic/' + item.id">{{ item.title }}</router-link>
      </dt>
      <dd class="meta">
        <span class="comment" v-if="item.reply_count || item.visit_count">{{ item.reply_count }} / {{ item.visit_count }}</span>
        <span class="time">{{ item.last_reply_at | timeAgo }}</span>
      </dd>
    </dl>
  </li>
</template>

<script>
import { tabSort, timeAgo } from '../util/filters';

export default {
  name: 'news-item',
  props: ['item'],
  // http://ssr.vuejs.org/en/caching.html#component-level-caching
  serverCacheKey: ({ item: { id, create_at } }) => {
    return `${id}::${Date.parse(create_at)}`;
  },
};
</script>

<style lang="stylus">
.news-item
  display flex
  align-items center
  background-color #fff
  padding 10px 30px
  border-bottom 1px solid #eee
  position relative
  line-height 20px

  .avatar
    width 40px
    height 40px

  .label
    margin-left 0.8em
    width 3em
    text-align center
    font-size 0.8em
    color #999999
    background-color #e5e5e5

    &.primary
      color #ffffff
      background-color #ff6600

  .summary
    flex 1
    margin-left 0.8em

    .title
      margin-bottom 4px

    .meta
      font-size 0.85em
      color #828282

      span
        margin-right 10px

        &:last-child
          margin-right 0

      a
        color #828282
        text-decoration underline

        &:hover
          color #ff6600

@media (max-width: 600px)
  .news-item
    padding 10px
    .summary
      .title
        white-space nowrap
        max-width 65vw
        overflow hidden
        text-overflow ellipsis
</style>
