<template>
  <section class="document-card">
    <div class="title">
      <h2>{{document.title}}</h2>
    </div>
    <div class="time">
      <span>上传日期: {{document.date}}</span>
      <el-button type="primary">下载文档</el-button>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    document: {
      type: Object,
      default: function() {
        return { title: "暂无文档!" };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.document-card {
  width: 50%;
  max-height: 120px;
  margin-bottom: 30px;
  div {
    text-align: left;
  }
  .title {
    h2 {
      margin: 0;
    }
  }
  .time {
    margin-top: 15px;
    .el-button {
      margin-left: 10px;
      width: 110px;
      height: 40px;
    }
  }
}
</style>