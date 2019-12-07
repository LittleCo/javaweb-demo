<template>
  <section class="profile">
    <app-header></app-header>
    <section class="content">
      <section class="side-img">
        <img src="../assets/images/profile.jpg" alt="左侧占位图" />
      </section>
      <section class="self-info">
        <h1>个人信息</h1>
        <p class="description">
          My name is Vlad Musienko, I'm a web designer.
          I love to draw and all that is connected with the design.
          In this area a long time ago and during this time I managed
          to create several successful projects used by people all over the world.
        </p>
        <h2>兴趣爱好</h2>
        <ul class="intrests">
          <li>
            <span>TEMPLATE.</span>
            <p>
              The portfolio is the presentation and
              the opportunity to buy them on the site Themeforest.
            </p>
          </li>
          <li>
            <span>BRAND.</span>
            <p>
              Creating a brand is a very complex process aimed at
              the creation and positioning
              the unique persons of the company, its products and services.
            </p>
          </li>
          <li>
            <span>TDREAMS.</span>
            <p>
              Everyone is able to destroy the dream, but not everyone
              is able to create it.
              I try to help people in its definition as a person and specialist.
            </p>
          </li>
        </ul>
      </section>
    </section>
  </section>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
export default {
  data() {
    return {};
  },
  components: {
    AppHeader
  }
};
</script>

<style lang="scss" scoped>
.profile {
  width: 100%;
}
.content {
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
.self-info {
  width: 50%;
  margin-right: 60px;
  text-align: left;
  h1 {
    font-size: 30px;
  }
  h2 {
    font-size: 22px;
  }
  .description {
    text-align: left;
    font-size: 18px;
  }
  .intrests {
    list-style: none;
    text-align: left;
    margin: 0;
    padding: 0;
  }
}
</style>