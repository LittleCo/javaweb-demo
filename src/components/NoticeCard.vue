<template>
  <section class="notice-card">
    <div class="title">
      <h2>{{notice.title}}</h2>
    </div>
    <div class="time">
      <span>发布日期: {{notice.date}}</span>
    </div>
    <div class="details">
      <p>{{notice.details}}</p>
    </div>
    <div class="operator">
      <el-button type="primary">查看详情</el-button>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    notice: {
      type: Object,
      default: function() {
        return { title: "暂无公告!" };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.notice-card {
  div {
    text-align: left;
  }
}
</style>