<template>
  <section class="event-container">
    <app-header></app-header>
    <section class="content">
      <section class="event-info">
        <event-card v-for="(event, index) in events" :key="index" :event="event"></event-card>
      </section>
      <section class="event-input">
        <div class="title">
          <span>标题：</span>
          <el-input></el-input>
        </div>
        <div class="date">
          <span>时间：</span>
          <el-time-picker v-model="date" placeholder="活动时间"></el-time-picker>
        </div>
        <div class="spot">
          <span>地点：</span>
          <el-input></el-input>
        </div>
        <div class="people">
          <span>参与人员：</span>
          <el-input></el-input>
        </div>
        <div class="description">
          <span>活动内容：</span>
          <el-input type="textarea" :rows="5"></el-input>
        </div>
        <div class="operator">
          <el-button type="primary">发布活动</el-button>
        </div>
      </section>
    </section>
  </section>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import EventCard from "../components/EventCard.vue";
export default {
  data() {
    return {
      date: "",
      events: [
        {
          title: "2020 年元旦班级聚会",
          date: "01-01 18:00",
          spot: "待定",
          people: "计算机 1701 班",
          description: "2020 年元旦班级聚会，庆祝新年！"
        },
        {
          title: "2020 年元旦班级聚会",
          date: "01-01 18:00",
          spot: "待定",
          people: "计算机 1701 班",
          description: "2020 年元旦班级聚会，庆祝新年！"
        }
      ]
    };
  },
  components: {
    AppHeader,
    EventCard
  }
};
</script>

<style lang="scss" scoped>
.event-container {
  width: 100%;
}
.content {
  display: flex;
  margin-top: 80px;
  margin-left: 10%;
}
.event-info {
  width: 30%;
  margin-left: 100px;
}
.event-input {
  width: 50%;
  div {
    display: flex;
    align-items: center;
  }
  .title,
  .date,
  .spot,
  .people {
    margin-bottom: 20px;
  }
  .title,
  .spot,
  .people {
    .el-input {
      width: 50%;
    }
  }
  .operator {
    margin-top: 20px;
    .el-button {
      width: 160px;
      margin: 0 auto;
    }
  }
  div span {
    min-width: 100px;
  }
}
</style>