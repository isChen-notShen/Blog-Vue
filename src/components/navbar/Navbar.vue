<template>
  <nav class="navbar navbar-expand-sm bg-light navbar-light"
       style="padding-top: 0;padding-bottom: 0">
    <div class="container">
      <b class="navbar-brand"
         style="font-family: Georgia, 'Times New Roman', Times, serif">Blog</b>
      <button class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse offset-1"
           id="collapsibleNavbar">
        <ul class="nav navbar-nav me-auto">
          <li class="nav-item">
            <router-link to="/">
              <svg class="icon"
                   aria-hidden="true">
                <use xlink:href="#icon-shouye"></use>
              </svg>
              <span>首页</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/watch">
              <svg class="icon"
                   aria-hidden="true">
                <use xlink:href="#icon-wodeguanzhu"></use>
              </svg>
              <span>关注</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/category">
              <svg class="icon"
                   aria-hidden="true">
                <use xlink:href="#icon-category"></use>
              </svg>
              <span>分类</span>
            </router-link>
          </li>
        </ul>

        <div class="d-flex">
          <div class="input-group input-group-sm">
            <label for="search"></label>
            <input id="search"
                   class="form-control"
                   type="text"
                   placeholder="Search"
                   maxlength="10" />
            <button class="btn btn-success"
                    type="button">Search</button>
          </div>
        </div>

        <user-avatar v-if="isLogined" />
        <user-login v-else
                    @logined="isLogined=true" />

      </div>

    </div>
  </nav>
</template>

<script>
import $ from 'jquery'

import UserAvatar from './UserAvatar.vue'
import UserLogin from './UserLogin.vue'

$('#login .dropdown-toggle').click(function () {
  $('#login-tips').html('')
  $('#account').val('')
  $('#password').val('')
  $('#rememberMe').prop('checked', false)
})

export default {
  name: 'Navbar',
  data() {
    return {
      isLogined: false,
    }
  },
  components: {
    UserAvatar,
    UserLogin,
  },
}
</script>

<style scoped>
.navbar-nav > li > a {
  display: block;
  padding: 12px 20px;
  /* color: #464646; */
}

.navbar-nav > li > a:hover {
  background-color: #cccccc;
}

.router-link-active {
  color: lightsalmon;
}
</style>