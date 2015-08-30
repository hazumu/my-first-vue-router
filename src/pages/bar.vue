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
  div id - {{id}}
  comp-a
  comp-b
</template>

<script>
import compA from '../components/a.vue'
import compB from '../components/b.vue'
export default {
  data () {
    return {
      msg: 'This is Bar!',
      id: this.$route.params.id
    }
  },
  components: {
    'comp-a': compA,
    'comp-b': compB
  }
}
</script>
