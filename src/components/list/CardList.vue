<template>
  <div class="container">
    <div class="row"
         style="margin-top: 20px">
      <div id="blogList"
           class="col-6 offset-2">
        <div class="card">
          <a class="card-header">这是第一篇博客</a>
          <a class="card-body">这是博客的内容摘要</a>
          <div class="card-footer">
            <span>Chen</span>
            <span>
              <svg class="icon"
                   aria-hidden="true">
                <use xlink:href="#icon-xiaoxi"></use>
              </svg>
              64
            </span>
            <span>
              <svg class="icon"
                   aria-hidden="true">
                <use xlink:href="#icon-yanjing"></use>
              </svg>
              1798
            </span>
            <span>
              <svg class="icon"
                   aria-hidden="true">
                <use xlink:href="#icon-dianzan"></use>
              </svg>
              202
            </span>
          </div>
        </div>

      </div>

      <div class="col-3 blog-sidebar">
        <div class="sidebar-module">
          <h5>热门</h5>
          <ul class="list-unstyled">
            <li>
              <a class="sidebar-link"
                 href="">Java垃圾收集机制</a>
            </li>
            <li>
              <a class="sidebar-link"
                 href="">Spring框架入门</a>
            </li>
            <li>
              <a class="sidebar-link"
                 href="">Mybatis基本使用</a>
            </li>
          </ul>
        </div>

        <div class="sidebar-module">
          <h5>作者推荐</h5>
          <ul class="list-unstyled">
            <li>
              <a class="sidebar-link"
                 href="#">GitHub</a>
            </li>
            <li>
              <a class="sidebar-link"
                 href="#">Twitter</a>
            </li>
            <li>
              <a class="sidebar-link"
                 href="#">Facebook</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.sidebar-module {
  padding: 15px;
  margin: 0 -15px 15px;
}

.sidebar-link {
  color: cornflowerblue;
}

#blogList .card {
  border-width: 1px;
  border-color: #cccccc;
  border-style: solid;
  border-top-style: none;
  border-left-style: none;
  border-right-style: none;
}

#blogList .card .card-header {
  /*font-family: Arial, Helvetica, sans-serif;*/
  font-size: 18px;
  font-weight: bold;
  border-bottom-style: none;
  padding-bottom: 5px;
}

#blogList .card .card-footer {
  background-color: white;
  border-style: none;
  font-size: 13px;
  color: #999999;
}

#blogList .card .card-footer span {
  margin-right: 5px;
}

#blogList .card .card-body {
  font-size: 14px;
  color: #999999;
  font-weight: lighter;
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>