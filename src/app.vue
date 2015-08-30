<style lang="stylus">
font-stack = Helvetica, sans-serif
primary-color = #999
body
  font 100% font-stack
  color primary-color
.view
  transition: all .5s ease
.test-enter, .test-leave
  opacity: 0;
  transform: translate3d(10px, 0, 0);
.v-link-active
  color: red;
[v-cloak]
  display: none;
</style>

<template>
  <div>
    <p v-show="loading" style="color:red">loading...</p>
    <h1>Vue Router テスト</h1>
    <a v-link="/">Home</a>
    <a v-link="/foo">foo</a>
    <a v-link="/bar/1">bar</a>
    <router-view class="view" v-transition="test" transition-mode="out-in"></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false
    }
  }
}
</script>
