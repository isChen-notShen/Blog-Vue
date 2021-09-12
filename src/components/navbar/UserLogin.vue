<template>
  <div id="login"
       class="d-flex dropdown">
    <a href="#"
       class="nav-link dropdown-toggle"
       role="button"
       data-bs-auto-close="outside"
       data-bs-toggle="dropdown">Login<span class="caret"></span></a>
    <ul id="login-dp"
        class="dropdown-menu"
        aria-labelledby="navbarDropdown">
      <li>
        <div class="row">
          <form class="form-group"
                role="form"
                method="post"
                accept-charset="UTF-8"
                id="login-nav">
            <span id="login-tips"></span>
            <div class="form-group">
              <label for="account">账号名</label>
              <input type="text"
                     class="form-control"
                     id="account"
                     name="account"
                     placeholder="Account"
                     autocomplete="username"
                     required>
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input type="password"
                     class="form-control"
                     id="password"
                     name="password"
                     placeholder="Password"
                     autocomplete="current-password"
                     required>
              <div class="help-block text-end"><a href="">忘记密码?</a></div>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input id="rememberMe"
                       name="rememberMe"
                       type="checkbox"
                       class="form-check-input"> 记住我
              </label>
            </div>
            <button type="button"
                    class="btn btn-primary"
                    @click="login">Sign in</button>
          </form>
          <div class="bottom text-center">
            New here ? <a href="#"><b>Join Us</b></a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import $ from 'jquery'
import { saveToken, saveUserInfo } from '../../js/localStorage'

export default {
  name: 'UserLogin',
  methods: {
    login() {
      let account = $('#login-nav #account').val()
      let that = this
      $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/user/login',
        data: $('#login-nav').serialize(),
        success: function (result) {
          if (result.code === 0) {
            saveToken(result.token)
            $.ajax({
              type: 'GET',
              dataType: 'json',
              url: '/user/info',
              data: { userName: account },
              success: function (infoResult) {
                saveUserInfo(infoResult)
                if (
                  infoResult.userId !== undefined ||
                  infoResult.userId !== ''
                ) {
                  $('#after-login img').prop(
                    'src',
                    '/user/portrait?userId=' + infoResult.userId
                  )
                }
                that.$emit('logined')
              },
            })
          }
          if (result.code === 1) {
            let element = $('#login-tips')
            if (element === undefined) {
              console.log('选择器未发现元素')
            } else {
              element.html(result.info)
            }
          }
        },
        error: function () {
          alert('登录异常，稍后重试')
        },
      })
    },
  },
}
</script>

<style scoped>
#login-tips {
  color: #ff4d59;
  font-size: 13px;
}

#login-dp {
  min-width: 250px;
  padding: 14px 14px 0;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.8);
}

#login-dp button {
  width: 100%;
}

#login-dp .help-block {
  font-size: 15px;
}

#login-dp .bottom {
  background-color: rgba(255, 255, 255, 0.8);
  border-top: 1px solid #ddd;
  clear: both;
  padding: 14px;
}

#login-dp .form-group {
  margin-bottom: 10px;
}
</style>