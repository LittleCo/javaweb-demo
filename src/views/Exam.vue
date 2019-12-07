<template>
  <section class="exam-container">
    <app-header></app-header>
    <section class="content">
      <section class="side-img">
        <img src="../assets/images/side.jpg" alt="左侧占位图" />
      </section>
      <section class="exam-list">
        <h1>
          软件工程
          <span class="left-time">10天</span>
        </h1>
        <section class="exam-cards">
          <exam-cart v-for="(exam, index) in exams" :key="index" :examInfo="exam"></exam-cart>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import ExamCart from "../components/ExamCart.vue";
export default {
  data() {
    return {
      exams: [
        {
          active: false,
          title: "计算机网络",
          time: "2019-12-03 16:00 - 17:40",
          spot: "计通楼 510"
        },
        {
          active: true,
          title: "软件工程",
          time: "2019-12-17 08:00 - 9:40",
          spot: "计通楼 510"
        },
        {
          active: true,
          title: "微机原理与接口技术",
          time: "2019-12-19 16:00 - 17:40",
          spot: "计通楼 510"
        },
        {
          active: true,
          title: "计算机操作系统",
          time: "2019-12-24 16:00 - 17:40",
          spot: "公共楼 309"
        }
      ]
    };
  },
  components: {
    AppHeader,
    ExamCart
  }
};
</script>

<style lang="scss" scoped>
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
.exam-list {
  width: 50%;
  margin-left: 100px;
  text-align: left;
  h1 {
    font-size: 20px;
    span {
      font-size: 70px;
      color: rgb(181, 181, 181);
      padding-left: 20px;
    }
  }
}
.exam-cards {
  display: flex;
  flex-wrap: wrap;
}
</style>