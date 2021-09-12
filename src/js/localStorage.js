function addCookie (name, value, expires, path) {
  let cookie = ''
  if (
    name !== undefined &&
    name !== '' &&
    value !== undefined &&
    value !== ''
  ) {
    cookie = name + '=' + value
  }
  if (expires !== undefined && expires !== '') {
    cookie += ';' + 'expires=' + expires
  }
  if (path !== null && path !== '') {
    cookie += ';' + 'path=' + path
  }
  if (cookie !== '') {
    document.cookie = cookie
    return true
  }
  return false
}

function getCookie (cookeName) {
  let name = cookeName + '='
  let ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim()
    if (c.indexOf(name) === 0)
      return c.substring(name.length, c.length)
  }
  return ''
}

function removeCookie (name) {
  if (getCookie(name) === '') {
    return false
  }
  let exp = new Date()
  exp.setTime(exp.getTime() - 1)
  document.cookie =
    name + '=;' + 'expires=' + exp.toUTCString() + ';path=/'
  return true
}

function saveToken (token) {
  let exp = new Date()
  exp.setDate(exp.getDate() + 7)
  addCookie('token', token, exp.toUTCString(), '/')
}

function getToken () {
  return getCookie('token')
}

function cleanToken () {
  return removeCookie('token')
}

function saveUserInfo (userInfo) {
  userInfo = JSON.stringify(userInfo)
  localStorage.userInfo = userInfo
}

function getUserInfo () {
  if (localStorage.userInfo === undefined) {
    return
  }
  console.log(localStorage.userInfo)
  if (!localStorage.userInfo) {
    return
  }
  return JSON.parse(localStorage.userInfo)
}

function cleanUserInfo () {
  localStorage.removeItem('userInfo')
}


export default { saveUserInfo, saveToken, addCookie, removeCookie, cleanToken, cleanUserInfo, getCookie, getToken, getUserInfo }

