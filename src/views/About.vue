<template>
  <div class="about">
    <div class="box">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li v-for="(item, index) in arr" :key="index">{{item}}</li>
      </ul>
    </div>
    <img src="" type="name">
    <section>123</section>
  </div>
</template>
<script>
export default {
  name: 'About',
  data() {
    return {
      title: 'baout',
      html: '',
      arr: [1,2,3]
    }
  },
  mounted() {
    this.arr.splice(1,1,10)
  }
}
</script>
<style lang="scss" scoped>
ul{
  height: 100px;
  >li{
    float: left;
  }
}
// ul {
//   list-style: none;
//   margin: 0;
//   padding: 0;
// }
// .box {
//   width: 300px;
//   height: 300px;
//   border: 1px black solid;
//   margin: 30px auto;
//   perspective: 200px;
// }
// .box ul {
//   width: 100px;
//   height: 100px;
//   margin: 100px;
//   position: relative;
//   transform-style: preserve-3d;
//   transition: 2s;
//   transform-origin: center center -50px;
// }
// .box li {
//   width: 100px;
//   height: 100px;
//   position: absolute;
//   line-height: 100px;
//   text-align: center;
//   color: white;
//   font-size: 26px;
// }
// .box ul li:nth-child(1) {
//   background: red;
//   left: 0;
//   top: 0;
// }
// .box ul li:nth-child(2) {
//   background: blue;
//   left: 100px;
//   top: 0;
//   transform-origin: left;
//   transform: rotateY(90deg);
// }
// .box ul li:nth-child(3) {
//   background: yellow;
//   left: -100px;
//   top: 0;
//   transform-origin: right;
//   transform: rotateY(-90deg);
// }
// .box ul li:nth-child(4) {
//   background: green;
//   left: 0;
//   top: -100px;
//   transform-origin: bottom;
//   transform: rotateX(90deg);
// }
// .box ul li:nth-child(5) {
//   background: pink;
//   left: 0;
//   top: 100px;
//   transform-origin: top;
//   transform: rotateX(-90deg);
// }
// .box ul li:nth-child(6) {
//   background: red;
//   left: 0;
//   top: 0;
//   transform: translateZ(-100px) rotateY(180deg);
// }

// .box ul {
//   animation: rotate3d 2s infinite;
//   // animation-name: rotate3d;
//   // animation-duration: 3s;
//   // animation-iteration-count: infinite;
//   // animation-direction: alternate;
//   // animation-play-state: running;
//   // transform: rotate3d(1,1,1, 360deg);
// }
// @keyframes rotate3d{
//   0%{
//     transform: rotate3d(0,0,0, 0deg);
//   }
//   25%{
//     transform: rotate3d(0,1,1, 180deg);
//   }
//   50%{
//     transform: rotate3d(1,0,1, 180deg);
//   }
//   75%{
//     transform: rotate3d(1,1,0, 180deg);
//   }
//   100%{
//     transform: rotate3d(1,1,1, 360deg);
//   }
// }
</style>
