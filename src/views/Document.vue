<template>
  <section class="document">
    <app-header></app-header>
    <section class="content">
      <section class="side-img">
        <img src="../assets/images/side.jpg" alt="左侧占位图" />
      </section>
      <section class="document-list">
        <document-card v-for="(document, index) in documents" :key="index" :document="document"></document-card>
      </section>
    </section>
  </section>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import DocumentCard from "../components/DocumentCard.vue";
export default {
  data() {
    return {
      documents: [
        {
          title: "2005年计算机网络试卷",
          date: "2019-11-25"
        },
        {
          title: "2007年计算机网络试卷",
          date: "2019-11-25"
        },
        {
          title: "2019年微机原理与接口设计考试重点",
          date: "2019-12-05"
        },
        {
          title: "Python 大作业报告模板",
          date: "2019-12-01"
        }
      ]
    };
  },
  components: {
    AppHeader,
    DocumentCard
  }
};
</script>

<style lang="scss" scoped>
.document {
  width: 100%;
}
.content {
  display: flex;
  margin-top: 120px;
}
.side-img {
  width: 45%;
  margin: 0 60px;
  img {
    max-width: 100%;
    width: 100%;
  }
}
.document-list {
  margin-right: 60px;
  height: fit-content;
  width: 50%;
  display: flex;
  flex-wrap: wrap;
}
</style>