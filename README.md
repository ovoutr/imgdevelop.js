# imgdevelop.js
因为我这个Typecho主题不支持图片预览，所以我写了个小工具
 **开箱即用版**
 https://github.com/cndelivr/imgpreview.js
 页面直接引入即可
 **css美化版**
 https://github.com/cndelivr/imgdevelop.js
 引入css和js，图片元素如下：
 <!-- HTML代码 -->
<img src="your-image-url.jpg" onclick="previewImage(this)" />

<div id="preview-container">
  <div id="preview-content">
    <span id="close-btn" onclick="closePreview()">×</span>
    <img id="preview-image" src="" alt="Preview Image"/>
  </div>
</div>
