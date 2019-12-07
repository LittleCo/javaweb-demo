<template>
  <section class="chat-card">
    <section class="chat-img">
      <img src="../assets/images/side.jpg" alt="左侧占位图" />
    </section>
    <section class="chat-text">
      <section class="user">
        <span>来自:</span>
        {{chat.from}}
      </section>
      <section class="content">{{chat.content}}</section>
    </section>
  </section>
</template>

<script>
export default {
  props: {
    chat: {
      type: Object,
      default: function() {
        return { content: "暂无内容!" };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.chat-card {
  width: 28%;
  margin-right: 30px;
}
.chat-img {
  width: 100%;
  img {
    max-width: 100%;
    width: 100%;
  }
}
.chat-text {
  text-align: left;
  .user {
    color: #14a0f7;
    span {
      color: #333;
      padding: 10px 10px 10px 0;
    }
  }
}
.content {
  padding-top: 10px;
}
</style>