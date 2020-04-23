<template>
  <div class="home" @contextmenu.prevent="rightPointEvent">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>
      <p class="MsoNormal" style="line-height:18.0pt;word-break:break-all">
        <span
          lang="EN-US"
          style="font-size:9.0pt;font-family:&quot;微软雅黑&quot;,sans-serif;
        color:#333333"
        >1</span>
        <span
          style="font-size:9.0pt;font-family:&quot;微软雅黑&quot;,sans-serif;
        color:#333333"
        >
          、活泼开朗，思维活跃，喜欢富有激情的工作；
          <span lang="EN-US">
            <br />2
          </span>、工作热情，对业务有良好的理解分析能力；
          <span lang="EN-US">
            <br />3
          </span>、良好的沟通和组织协调能力，与上下级友好共事；
          <span lang="EN-US">
            <br />4
          </span>、项目中可以从零开始开展测试相关工作及团队组建；
          <span lang="EN-US">
            <br />5
          </span>、产品测试中遇到相关质量问题可快速调整解决方案；
        </span>
      </p>
      <textarea type="text" v-model="selectText" @focus="setActiveKey('selectText')" />
      <textarea
        type="text"
        v-model="selectText1"
        @focus="setActiveKey('selectText1')"
        @dblclick="matchText(selectText1)"
      />
      <input type="file" @change="selectFile" name="file" id="file" />
    </div>
    <div v-html="inputHtml"></div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <!-- home commit -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import mammoth from 'mammoth'

export default {
  name: 'Home',
  components: {
    HelloWorld
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
