<template>
  <div class="home" @contextmenu.prevent="rightPointEvent">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <rule-tree></rule-tree>
    <!-- home commit -->
  </div>
</template>

<script>
// @ is an alias to /src
import RuleTree from '@/components/RuleTree/RuleTree.vue'
import mammoth from 'mammoth'

export default {
  name: 'Home',
  components: {
    RuleTree
  },
  data() {
    return {
      selectText: '',
      selectText1: '',
      activeKey: '',
      inputHtml: '<h1>Input Html</h1>'
    }
  },
  methods: {
    rightPointEvent() {
      // console.log(e)
      this[this.activeKey] = window.getSelection().toString()
      console.log(this[this.activeKey])
    },
    setActiveKey(key) {
      // console.log(key)
      this.activeKey = key
    },
    matchText(text) {
      console.log(text)
      const matchNode = document.getElementsByTagName('h1')[0].firstChild
      console.log(matchNode)
      // const range = document.createRange()
      // range.selectNodeContents(matchNode)
      const selection = getSelection()
      selection.setBaseAndExtent(matchNode, 0, matchNode, 2)
      // selection.removeAllRanges()
      // selection.addRange(range)
      console.log(selection)
      // const contentNodes = document.getElementsByClassName('hello')[0].children
      // for (let node in contentNodes) {
      //   console.log(contentNodes[node])

      // }
    },
    selectFile(e) {
      // console.log(e)
      const files = e.target.files
      if (!files.length) {
        // 没有选择文件
        return
      }
      const file = files[0]
      // console.log(file)

      const reader = new FileReader()
      console.log(reader)
      reader.onloadend = () => {
        // console.log(event)
        const arrayBuffer = reader.result
        console.log(arrayBuffer)
        mammoth.convertToHtml({ arrayBuffer }).then(resultObject => {
          // result1.innerHTML = resultObject.value
          console.log(resultObject.value)
          this.inputHtml = resultObject.value
        })
      }
      reader.readAsArrayBuffer(file)
      // reader.readAsBinaryString(file)

      // input.files[0].text().then(data => {
      //   // console.log(data)
      //   this.inputHtml = data
      // })
    }
  }
}
</script>

<style lang="scss">
table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  td {
    border: 1px solid #ccc;
  }
}
</style>
