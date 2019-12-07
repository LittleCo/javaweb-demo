<template>
  <el-header style="height: 80px">
    <ul class="header-nav dflex">
      <li class="nav-logo">
        <a href="#">网站 logo</a>
      </li>
      <li
        v-for="(link, index) in links"
        :key="index"
        @click="handleClickIndex(index)"
        :class="switchClssName(index)"
        class="nav-item"
      >
        <router-link :to="link.href">{{link.title}}</router-link>
        <!-- <a :href="link.href">{{ link.title }}</a> -->
      </li>
      <li class="nav-item nav-user-info dflex">
        <div class="user-icon">
          <a href="#">用户头像</a>
        </div>
        <span class="user-name">李通</span>
      </li>
      <li class="nav-item">
        <a @click="loginOut" href="#">退出登录</a>
      </li>
    </ul>
  </el-header>
</template>

<script>
export default {
  name: "main-header",
  data() {
    return {
      links: [
        { href: "/home", title: "今日课程" },
        { href: "/task", title: "待交作业" },
        { href: "/exam", title: "考试计划" },
        { href: "/event", title: "发布活动" },
        { href: "/notice", title: "通知公告" },
        { href: "/document", title: "文档下载" },
        { href: "/chat", title: "下课聊聊" },
        { href: "/profile", title: "个人信息" }
      ],
      active: 0
    };
  },
  methods: {
    switchClssName(index) {
      return {
        active: this.active === index
      };
    },
    handleClickIndex(index) {
      this.active = index;
    },
    loginOut() {
      this.$router.replace("/");
    }
  }
};
</script>

<style lang="scss" scoped>
.dflex {
  display: flex;
}
a {
  text-decoration: none;
  color: #808080;
}
img {
  max-width: 100%;
  width: 100%;
}
.el-header {
  margin: 0;
  background: #fff;
  padding: 0;
}
.header-nav {
  display: flex;
  height: inherit;
  list-style: none;
  font-size: 16px;
  padding: 0;
  margin: 0;
}
.nav-logo {
  a {
    display: block;
    width: 180px;
    height: 39px;
  }
}
.nav-item {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  min-width: 106px;
  text-align: center;
  height: 100%;
  a {
    cursor: pointer;
  }
}
.nav-logo {
  margin-right: 108px;
  padding: 21px 0 20px 31px;
}
.nav-user-info {
  flex: 1;
  justify-content: flex-end;
  .user-icon {
    width: 50px;
    height: 50px;
    min-width: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .user-name {
    // 名字太长溢出
    overflow: hidden;
  }
}
.login-out-container {
  padding: 0 32px;
}
.login-out {
  width: 90px;
  height: 36px;
  border-radius: 17px;
  color: #fff;
  cursor: pointer;
  background: #ff2c2c;
  justify-content: center;
  align-items: center;
  .loginout-icon {
    display: inherit;
  }
}
.router-link-active {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: #eeecff;
  color: #6453ec;
  font-weight: bold;
}
</style>
