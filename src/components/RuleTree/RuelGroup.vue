<template>
  <div class="rule-group" role="tree">
    <div class="rule-root">
      <div class="rule-match">
        <el-select v-model="node.ruleMatch" placeholder="请选择">
          <el-option
            v-for="item in ruleMatchs"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
    </div>
    <div class="rule-nodes">
      <div v-for="(item, index) in node.nodes" :key="index">
        <rule-group
          v-if="item.nodes"
          :node="item"
          @delete-group="removeNode(index)"
        ></rule-group>
        <rule-node v-else :node="item" @delete-node="removeNode(index)"></rule-node>
      </div>
      <div class="rule-group-handle">
        <el-button icon="el-icon-plus" @click="createNode('node')"></el-button>
        <el-button icon="el-icon-circle-plus-outline" @click="createNode('group')"></el-button>
        <el-button icon="el-icon-delete" v-show="!node.isRoot" @click="deleteGroup"></el-button>
      </div>
    </div>
  </div>
</template>
<script>
import RuleNode from './RuleNode'
export default {
  name: 'RuleGroup',
  components: {
    RuleNode
  },
  props: {
    node: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      ruleMatchs: [
        {
          label: 'And',
          value: 1
        },
        {
          label: 'Or',
          value: 2
        }
      ]
    }
  },
  methods: {
    removeNode(index) {
      // console.log(index)
      this.node.nodes.splice(index, 1)
    },
    deleteGroup() {
      this.$emit('delete-group')
    },
    addRuleChild(type) {
      console.log(type)
      this.$emit('add-node', type)
    },
    createNode(type) {
      console.log(type)
      let node = {}
      if (type === 'node') {
        node = {
          nodeRule: {
            value: 1.1
          }
        }
      } else {
        node = {
          ruleMatch: 2,
          nodes: [
            {
              nodeRule: {
                value: 2.1
              }
            }
          ]
        }
      }
      this.node.nodes.push(node)
    }
  }
}
</script>
<style lang="scss" scoped>
.rule-group {
  display: flex;
  // justify-content: center;
  align-items: center;
  .rule-root {
    position: relative;
    &::after {
      content: '';
      position: absolute;
      left: 100%;
      top: 50%;
      display: block;
      border-bottom: 1px solid #dcdfe6;
      width: 20px;
    }
  }
  .rule-nodes {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    padding-left: 20px;
    border-left: 1px solid #dcdfe6;
    > div {
      position: relative;
      padding: 10px 0;
      &::before {
        content: '';
        position: absolute;
        right: 100%;
        top: 50%;
        display: block;
        width: 21px;
        height: 0;
        background-color: #fff;
        border-bottom: 1px solid #dcdfe6;
        z-index: 2;
      }
      &:last-child {
        &::before {
          top: 50%;
          height: 30px;
          border-top: 1px solid #dcdfe6;
          border-bottom: none;
        }
      }
      &:first-child {
        &::before {
          bottom: 50%;
          top: auto;
          height: 30px;
          border-bottom: 1px solid #dcdfe6;
        }
      }
    }
  }
}
.rule-match {
  width: 80px;
}
</style>
