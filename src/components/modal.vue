<style scoped lang="stylus">
:scope
  border 1px solid #000
  position absolute
  top 200px
  left 50%
  margin-left -150px
  width 300px
  height 300px
  background-color #FFF
</style>

<template lang="jade">
div.modal(v-show="isShown")
  div {{title}}
  div なかみ
  button(v-on="click:commit") 閉じる
</template>

<script>
export default {
  data () {
    return {
      title: 'モーダルだよ',
      isShown: false
    }
  },
  created () {
    this.$on('open-modal', () => {
      this.open();
    });
  },
  methods: {
    open () {
      this.isShown = true;
    },
    close () {
      this.isShown = false;
    },
    commit () {
      this.close();
    }
  }
}
</script>
