<template>
  <section class="container">
    <app-header></app-header>
    <section class="content">
      <section class="side-img">
        <img src="../assets/images/side.jpg" alt="左侧占位图" />
      </section>
      <section class="notice-list">
        <notice-card v-for="(notice, index) in notices" :key="index" :notice="notice"></notice-card>
      </section>
    </section>
  </section>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import NoticeCard from "../components/NoticeCard.vue";
export default {
  data() {
    return {
      notices: [
        {
          title: "2019年春季学期家庭经济困难学生库异动通知",
          date: "2019-04-17",
          details:
            "根据《教育部关于取消一批证明事项的通知》" +
            "（教政法函 [2019]12号）文件要求，高校学生申请认定时由家庭所在地、" +
            "镇或街道民政部门对学生家庭经济情况予以证明的环节，改为申请人书面承诺。"
        },
        {
          title: "2019年春季学期重点资助对象认定补充通知",
          date: "2019-04-20",
          details:
            "根据《关于做好高校建档立卡等家庭经济困难学生摸底工作的通知》" +
            "（湘学助〔2019〕11号）通知要求，要认真开展建档立卡等家庭经济困难学生摸底工作，" +
            "做到不误报、不漏报、不瞒报、不虚报，确保填报数据真实、信息准确。按照《教育部关于取消一批证明事项的通知》" +
            "（教政法函 [2019]12号）文件要求。"
        }
      ]
    };
  },
  components: {
    AppHeader,
    NoticeCard
  }
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
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
.notice-list {
  margin-right: 60px;
  width: 50%;
}
</style>