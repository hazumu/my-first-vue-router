<style lang="stylus">
font-stack = Helvetica, sans-serif
primary-color = #999
body
  font 100% font-stack
  color primary-color
</style>

<template lang="jade">
div
  h1 {{msg}}
  div ここはホーム画面だよ
</template>

<script>
export default {
  data () {
    return {
      msg: 'Home'
    }
  }
}
</script>
