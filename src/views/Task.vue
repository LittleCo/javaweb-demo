<template>
  <section class="task-container">
    <app-header></app-header>
    <section class="content">
      <section class="side-img">
        <img src="../assets/images/side.jpg" alt="左侧占位图" />
      </section>
      <section class="task-list">
        <h1>今日作业</h1>
        <ul>
          <li>微机原理与接口：书本第 135 页习题 3-1， 截止时间： 本周二</li>
          <li>微机原理与接口：书本第 135 页习题 3-1， 截止时间： 本周二</li>
          <li>微机原理与接口：书本第 135 页习题 3-1， 截止时间： 本周二</li>
          <li>微机原理与接口：书本第 135 页习题 3-1， 截止时间： 本周二</li>
        </ul>
        <h2>实验作业</h2>
        <p>星期二下午五六节课 Python 在综合楼 211 上实验课，内容为 python 对象与函数的创建</p>
      </section>
    </section>
  </section>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
export default {
  data() {
    return {};
  },
  components: {
    AppHeader
  }
};
</script>

<style lang="scss" scoped>
.task-container {
  width: 100%;
}
.content {
  display: flex;
  margin: 160px 100px 0 100px;
}
.side-img {
  width: 45%;

  img {
    max-width: 100%;
    width: 100%;
  }
}
.task-list {
  margin-left: 300px;
  text-align: left;
  h1 {
    font-size: 36px;
  }
  h2 {
    font-size: 22px;
    padding: 15px 0;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  ul li {
    list-style: none;
  }
  font-size: 16px;
}
</style>