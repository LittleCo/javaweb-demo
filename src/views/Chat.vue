<template>
  <section class="chat">
    <app-header></app-header>
    <section class="content">
      <chat-card v-for="(chat, index) in chats" :key="index" :chat="chat"></chat-card>
    </section>
  </section>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import ChatCard from "../components/ChatCard.vue";
export default {
  data() {
    return {
      chats: [
        {
          from: "王小波",
          content:
            "不管我本人多么平庸，我总觉得我对你的爱很美。" +
            "我们是两个在宇宙中游荡的灵魂，我们不愿孤独，走到一起来，别人与我们无关。" +
            "我把我的整个灵魂都给你，连同它的怪癖耍小脾气，忽明忽暗，一千八百种坏毛病。"
        },
        {
          from: "茨维塔耶娃",
          content:
            "我想和你一起生活，在某个小镇，共享无尽的黄昏和绵绵不绝的钟声。"
        },
        {
          from: "《百年孤独》加西亚·马尔克斯",
          content:
            "无论走到哪里，都应该记住，过去都是假的，回忆是一条没有尽头的路，" +
            "一切以往的春天都不复存在，就连那最坚韧而又狂乱的爱情归根结底也不过是一种转瞬即逝的现实。"
        },
        {
          from: "余秋雨",
          content:
            " 在这个世界上，没有人真正可以对另一个人的伤痛感同身受。你万箭穿心，你痛不欲生，" +
            "也仅仅是你一个人的事，别人也许会同情，也许会嗟叹，但永远不会清楚你伤口究竟溃烂到何种境地。"
        }
      ]
    };
  },
  components: {
    AppHeader,
    ChatCard
  }
};
</script>

<style lang="scss" scoped>
.chat {
  width: 100%;
}
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  margin: 60px;
}
</style>