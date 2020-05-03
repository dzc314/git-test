<template>
  <div class="rule-node">
    <el-input v-model="node.nodeRule.value"></el-input>
    <el-button @click="deleteNode">-</el-button>
  </div>
</template>
<script>
export default {
  name: 'RuleNode',
  components: {},
  props: {
    node: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  beforeMount() {
    // console.log(this.node)
  },
  methods: {
    deleteNode(){
      console.log('deleteNode')
      this.$emit('delete-node')
    }
  },
}
</script>
<style lang="scss" scoped>
  .rule-node{
    display: flex;
  }
</style>