<template>
  <main class="app">
    <section class="hero is-dark is-bold has-text-centered">
      <div class="hero-body is-unselectable">
        <div class="container">
          <h1 class="title is-uppercase">XXChampion</h1>
        </div>
      </div>
    </section>

    <section class="section body">
      <div class="container box">
        <router-view/>
      </div>
    </section>

    <!-- <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Bulma</strong> by
          <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
          is licensed
          <router-link to="/">home</router-link>
          <router-link to="/about">about</router-link>
        </p>
      </div>
    </footer>-->
  </main>
</template>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .hero {
    .hero-body {
      padding: 1.5rem;
    }
  }

  .body {
    flex: 1;
    display: flex;
    flex-flow: column wrap;
    padding: 1.5rem;
    .box {
      flex: 1;
      display: flex;
    }
  }

  .footer {
    padding: 1.5rem 0;
  }
}
</style>
