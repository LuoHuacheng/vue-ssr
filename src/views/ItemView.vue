<template>
  <div class="item-view" v-if="item">
    <template v-if="item">
      <div class="item-view-header">
        <h1>{{ item.title }}</h1>
      </div>
      <div class="item-view-body" v-html="item.content"></div>
      <div class="item-view-comments">
        <p class="item-view-comments-header">
          {{ item.replies ? item.reply_count + ' 评论' : '暂无评论' }}
          <spinner :show="loading"></spinner>
        </p>
        <ul v-if="!loading" class="comment-children">
          <comment v-for="comment in item.replies" :key="comment.id" :comment="comment"></comment>
        </ul>
      </div>
    </template>
  </div>
</template>

<script>
import Spinner from '../components/Spinner.vue';
import Item from '../components/Item.vue';
import Comment from '../components/Comment.vue';

export default {
  name: 'item-view',
  components: { Spinner, Item, Comment },

  data() {
    return {
      loading: true,
    }
  },

  computed: {
    item() {
      return this.$store.state.items[this.$route.params.id];
    },
  },

  // We only fetch the item itself before entering the view, because
  // it might take a long time to load threads with hundreds of comments
  // due to how the HN Firebase API works.
  asyncData({ store, route: { params: { id } } }) {
    return store.dispatch('FETCH_ITEM', { id });
  },

  title () {
    return this.item.title
  },

  // Fetch comments when mounted on the client
  beforeMount() {
    this.loading = false;
    // this.fetchComments();
  },

  // refetch comments if item changed
  watch: {
    item: 'fetchComments',
  },

  methods: {
    fetchComments() {
      if (!this.item || !this.item.ups) {
        return;
      }

      this.loading = true;
      fetchComments(this.$store, this.item).then(() => {
        this.loading = false;
      });
    },
  },
};
</script>

<style lang="stylus">
.item-view-header
  background-color #fff
  padding 1.8em 1em 1em
  box-shadow 0 1px 2px rgba(0,0,0,0.1)

  h1
    display inline
    font-size 1.2em
    margin 0
    margin-right 0.5em

  .host, .meta, .meta a
    color #828282

  .meta a
    text-decoration underline

.item-view-body
  padding 0 15px
  line-height 2em
  border-top 1px solid #e5e5e5
  background-color #fff

.item-view-comments
  background-color #fff
  margin-top 10px
  padding 0 2em 0.5em

.item-view-comments-header
  margin 0
  font-size 1.1em
  padding 1em 0
  position relative

  .spinner
    display inline-block
    margin -15px 0

.comment-children
  list-style-type none
  padding 0
  margin 0

@media (max-width: 600px)
  .item-view-header
    h1
      font-size 1.25em
</style>
