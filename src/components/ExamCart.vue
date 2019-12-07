<template>
  <div class="exam-cart-container">
    <section class="exam-cart-passed" v-if="!examInfo.active">
      <section class="exam-title">
        <h3>{{examInfo.title}}</h3>
      </section>
      <section class="exam-info">
        <div class="time">{{examInfo.time}}</div>
        <div class="spot">{{examInfo.spot}}</div>
      </section>
      <section class="exam-option">
        <el-button type="info">已结束</el-button>
        <el-button>查看分数</el-button>
        <el-button>联系老师</el-button>
      </section>
    </section>
    <section class="exam-cart-active" v-else>
      <section class="exam-title">
        <h3>{{examInfo.title}}</h3>
      </section>
      <section class="exam-info">
        <div class="time">{{examInfo.time}}</div>
        <div class="spot">{{examInfo.spot}}</div>
      </section>
      <section class="exam-option">
        <el-button type="primary" @click="toShowDialog">考试重点</el-button>
        <el-button>往期试卷</el-button>
        <el-button>课堂资料</el-button>
      </section>
    </section>
    <el-dialog title="考试重点" :visible.sync="showDialog" width="30%">
      <span>学生上考场，连考试重点都不知道，就等着挂科吧！</span>
      <span class="dialog-footer">
        <el-button type="danger" @click="showDialog=false">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    examInfo: {
      type: Object,
      default: function() {
        return { message: "暂无考试信息" };
      }
    }
  },
  data() {
    return {
      showDialog: false
    };
  },
  methods: {
    toShowDialog() {
      this.showDialog = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.exam-cart-container {
  width: 50%;
  margin-right: 20px;
}
</style>