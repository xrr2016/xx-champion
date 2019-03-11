<template>
  <div class="section content about-page">
    <p class="subtitle is-5">由于经常在论坛上有人喜欢喊口号，于是写了这个小站</p>

    <ul>
      <li>
        <p>
          <span class="line-left">前端框架:</span>
          <a href="https://vuejs.org/" target="_blank">Vue</a>
        </p>
      </li>
      <li>
        <p>
          <span class="line-left">样式框架:</span>
          <a href="https://bulma.io/" target="_blank">Bulma</a>
        </p>
      </li>
      <li>
        <p>
          <span class="line-left">意见反馈:</span>
          <a href="https://github.com/xrr2016/xx-champion/issues/new" target="_blank">Feekback</a>
        </p>
      </li>

      <li>
        <p>
          <span class="line-left">开发者:</span>
          <a href="https://github.com/xrr2016" target="_blank">轻剑快马</a>
        </p>
      </li>
      <li>
        <p>
          <span class="line-left">源码协议:</span>
          <a href="http://opensource.org/licenses/mit-license.php" target="_blank">MIT</a>
        </p>
      </li>
      <li>
        <p>
          <span class="line-left">Host:</span>
          <a href="https://app.netlify.com/" target="_blank">Netlify</a>
        </p>
      </li>
    </ul>
    <p>如果对您有帮助，请酌情支持作者</p>
    <picture class="image">
      <source srcset="../assets/shoukuanma.png" type="image/png">
      <img src="../assets/shoukuanma.png" alt="收款码">
    </picture>
  </div>
</template>


<style lang="scss" scoped>
.about-page {
  .line-left {
    display: inline-block;
    width: 5em;
  }
  a {
    text-transform: capitalize;
  }
  .image {
    width: 240px;
  }
}
</style>

