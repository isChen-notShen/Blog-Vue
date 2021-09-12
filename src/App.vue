<template>
  <navbar />

  <div id='container'>
    <router-view />
  </div>

</template>

<script>
import navbar from './components/navbar/Navbar.vue'
import $ from 'jquery'
import * as bootstrap from 'bootstrap/dist/js/bootstrap.esm'

export default {
  name: 'App',
  components: {
    navbar,
  },

  mounted() {
    let dropdowns = $('.dropdown-toggle')

    dropdowns.each(function () {
      let toggle = $(this)
      let menu = toggle.next()
      let dropdown = new bootstrap.Dropdown(toggle)

      let timeout
      let isFocus

      toggle.mouseover(function () {
        if (timeout !== undefined) {
          clearTimeout(timeout)
        }
        dropdown.show()
      })

      toggle.mouseleave(function () {
        timeout = setTimeout(function () {
          dropdown.hide()
        }, 500)
      })

      menu.mouseover(function () {
        if (timeout !== undefined) {
          clearTimeout(timeout)
        }
      })

      menu.mouseleave(function () {
        if (isFocus) {
          return
        }

        timeout = setTimeout(function () {
          dropdown.hide()
        }, 500)
      })

      menu.focusin(function () {
        isFocus = true
      })

      menu.focusout(function () {
        isFocus = false
      })
    })
  },
}
</script>

<style>
#container {
  margin-top: 15px;
}
</style>
