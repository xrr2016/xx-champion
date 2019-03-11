<template>
  <div class="section content help-page">
    <ol class="help-list">
      <li>
        <h5 class="title">文本翻译与复制</h5>
        <p>可以将选择或者输入的文本进行翻译和复制</p>
        <figure class="image">
          <picture>
            <source srcset="../assets/screenshots/text.webp" type="image/webp">
            <img src="../assets/screenshots/text.jpg" alt="文本翻译与复制">
          </picture>
        </figure>
      </li>

      <li>
        <h5 class="title">生成图片</h5>
        <p>根据所选的球队和口号生成自定义图片</p>
        <figure class="image">
          <picture>
            <source srcset type="image/webp">
            <img src="../assets/screenshots/image.jpg" alt="生成图片">
          </picture>
        </figure>
      </li>

      <li>
        <h5 class="title">生成动图</h5>
        <p>根据所选的队伍以及口号生成 GIF 图片</p>
        <figure class="image">
          <picture>
            <source srcset="../assets/screenshots/gif.webp" type="image/webp">
            <img src="../assets/screenshots/gif.jpg" alt="生成动图">
          </picture>
        </figure>
      </li>
    </ol>
  </div>
</template>

<style lang="scss" scoped>
.help-page {
  .help-list {
    margin: 0;
  }

  .image {
    margin-left: 0;
  }
}
.section {
  padding-top: 0;
}
</style>


