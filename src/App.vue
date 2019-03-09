<template>
  <main class="app has-background-white-ter">
    <nav class="navbar is-black" role="navigation" aria-label="dropdown navigation">
      <div class="container">
        <div class="navbar-brand">
          <router-link class="navbar-item is-uppercase has-text-weight-semibold" to="/">XXChampion</router-link>
        </div>
        <div class="navbar-menu">
          <div class="navbar-start">
            <router-link class="navbar-item" to="/help">使用帮助</router-link>
            <router-link class="navbar-item" to="/about">关于本站</router-link>
          </div>
          <div class="navbar-end">
            <a
              class="navbar-item"
              href="https://github.com/xrr2016/xx-champion"
              target="_blank"
            >Github</a>
          </div>
        </div>
      </div>
    </nav>

    <section class="section body">
      <div class="container box">
        <transition name="slide">
          <keep-alive :max="3">
            <router-view/>
          </keep-alive>
        </transition>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .body {
    flex: 1;
    display: flex;
    flex-flow: column wrap;
    padding: 1.5rem;
    .box {
      flex: 1;
      display: flex;
      padding-bottom: 0;
    }
  }
}
</style>
