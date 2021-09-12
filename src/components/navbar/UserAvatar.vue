<template>
  <div id="after-login"
       class="d-none">
    <div id="user"
         class="dropdown ms-4">
      <a class="avatar dropdown-toggle"
         role="button"
         data-bs-toggle="dropdown"
         href="#"><img src="#"
             alt="用户头像"></a>
      <ul class="dropdown-menu"
          style="margin-top: 7px"
          aria-labelledby="navbarDropdown">
        <li>
          <button class="btn btn-sm"
                  @click="logout">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#icon-quit"></use>
            </svg>
            <span>注销</span>
          </button>
        </li>
      </ul>
    </div>
    <a class="btn btn-sm btn-success btn-editor ms-5"
       target="_blank"
       href="/editor.html">写文章</a>

  </div>
</template>

<script>
import { cleanToken, cleanUserInfo } from '../../js/localStorage'
export default {
  name: 'UserAvatar',
  methods: {
    logout() {
      cleanToken()
      cleanUserInfo()
      location.reload()
    },
  },
}
</script>

<style scoped>
.btn-editor {
  border-color: #ea6f5a;
  border-radius: 15px;
  background-color: #ea6f5a;
}

.avatar {
  width: 32px;
  height: 32px;
  display: block;
  cursor: pointer;
}

.avatar img {
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
  border-radius: 50%;
}

#user button:hover {
  background-color: #cccccc;
}
</style>