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
  my-modal
  button(v-on="click:openModal") モーダルを開く
</template>

<script>
import compA from '../components/a.vue'
import modal from '../components/modal.vue'
export default {
  data () {
    return {
      msg: 'This is Bar!',
      id: this.$route.params.id
    }
  },
  components: {
    'comp-a': compA,
    'my-modal': modal
  },
  methods: {
    openModal() {
      this.$broadcast('open-modal', this)
    }
  }
}
</script>
