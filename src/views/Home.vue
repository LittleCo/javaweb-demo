<template>
  <section class="home-container">
    <app-header></app-header>
    <section class="content">
      <section class="tips">
        <h1 class="weather">
          <span>25℃</span> 株洲 , 晴
        </h1>
        <h1 class="date">{{date}} {{weekday}}</h1>
        <p class="tips-content">今天要上的课有: 微机原理与接口, 要交: 微机实验报告</p>
      </section>
      <section class="class-schedule">
        <el-table :data="classSchedule" :row-class-name="tableRowClassName">
          <el-table-column prop="index" label="十月"></el-table-column>
          <el-table-column prop="mon" label="周一"></el-table-column>
          <el-table-column prop="tue" label="周二"></el-table-column>
          <el-table-column prop="web" label="周三"></el-table-column>
          <el-table-column prop="thu" label="周四"></el-table-column>
          <el-table-column prop="fri" label="周五"></el-table-column>
          <el-table-column prop="sat" label="周六"></el-table-column>
          <el-table-column prop="sun" label="周日"></el-table-column>
        </el-table>
      </section>
    </section>
  </section>
</template>


<script>
import AppHeader from "../components/AppHeader.vue";
export default {
  data() {
    return {
      classSchedule: [
        {
          index: "1-2",
          mon: "微机原理与接口技术",
          tue: "计算机网络",
          wed: "",
          thu: "软件工程",
          fri: "",
          sat: "",
          sun: ""
        },
        {
          index: "3-4",
          mon: "微机原理与接口技术",
          tue: "计算机网络",
          wed: "",
          thu: "软件工程",
          fri: "",
          sat: "",
          sun: ""
        },
        {
          index: "5-6",
          mon: "微机原理与接口技术",
          tue: "计算机网络",
          wed: "",
          thu: "软件工程",
          fri: "",
          sat: "",
          sun: ""
        },
        {
          index: "7-8",
          mon: "微机原理与接口技术",
          tue: "计算机网络",
          wed: "",
          thu: "软件工程",
          fri: "",
          sat: "",
          sun: ""
        },
        {
          index: "9-10",
          mon: "微机原理与接口技术",
          tue: "计算机网络",
          wed: "",
          thu: "软件工程",
          fri: "",
          sat: "",
          sun: ""
        }
      ],
      date: "12月6日",
      week: "第 15 周",
      weekday: "周一"
    };
  },
  components: {
    AppHeader
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 === 1) {
        return "warning-row";
      } else {
        return "success-row";
      }
      return "";
    }
  }
};
</script>
<style>
.el-table .success-row {
  /* background: #f0f9eb; */
  background: #ebebeb;
}
</style>
<style lang="scss" scoped>
.home-container {
  width: 100%;
}
.content {
  display: flex;
  padding-top: 160px;
}
.tips {
  width: 40%;
  margin-left: 100px;
  .weather {
    text-align: left;
    span {
      font-size: 70px;
      color: rgb(181, 181, 181);
      padding-right: 20px;
    }
  }
  .date {
    font-size: 60px;
  }
  .tips-content {
    font-size: 16px;
    color: rgb(112, 111, 111);
  }
}
.class-schedule {
  width: 60%;
  margin-right: 100px;
  // border: 1px solid #666;
}
</style>