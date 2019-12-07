<template>
  <div class="event-card">
    <div class="top">
      <h2>{{event.title}}</h2>
      <span>{{event.date}}</span>
    </div>
    <div class="details">
      <span class="spot">
        <i class="el-icon-location-information"></i>
        {{event.spot}}
      </span>
      <span class="people">
        <i class="el-icon-position"></i>
        {{event.people}}
      </span>
    </div>
    <div class="operator">
      <el-button type="primary">活动详情</el-button>
      <el-button>参与活动</el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      default: function() {
        return { message: "暂无活动!" };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.event-card {
  min-width: 300px;
  width: 450px;
  margin-bottom: 30px;
  text-align: left;
  color: #55b3ca;
  background: #b4dcdf;
}
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  span {
    font-size: 14px;
    margin-right: 20px;
  }
}
.details {
  .spot {
    padding: 20px;
  }
}
.operator {
  margin-top: 30px;
  padding-bottom: 20px;
  .el-button {
    margin-left: 20px;
    width: 100px;
    height: 40px;
  }
}
</style>