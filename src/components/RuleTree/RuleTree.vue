<template>
  <div id="ruleTree">
    <rule-group :node="ruleTree"></rule-group>
    <el-button @click="handle">查看</el-button>
  </div>
</template>
<script>
import RuleGroup from './RuelGroup'
export default {
  name: 'RuleTree',
  components: {
    RuleGroup
  },
  data() {
    return {
      ruleTree: {
        isRoot: true,
        ruleMatch: 1,
        nodes: [
          {
            nodeRule: {
              value: 1.1
            }
          },
          {
            ruleMatch: 2,
            nodes: [
              {
                nodeRule: {
                  value: 2.1
                }
              }
            ]
          }
        ]
      }
    }
  },
  methods: {
    handle() {
      console.log(this.ruleTree)
    }
  }
}
</script>