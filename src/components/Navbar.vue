<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container is-max-dekstop px-2">
      <div class="navbar-brand">
        <h1 class="navbar-item croogla is-size-4 gradient">
          <a class="navbar-item" href="">Almaty Events</a>
        </h1>

        <a
          @click.prevent="showMobileNav = !showMobileNav"
          role="button"
          :class="{ 'is-active': showMobileNav }"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          ref="navbarBurgerRef"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': showMobileNav }"
        ref="navbarMenuRef"
      >
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <RouterLink
                @click="showMobileNav = false"
                class="navbar-item"
                to="/profile"
                active-class="is-active"
              >
                <strong>Профиль</strong>
              </RouterLink>
            </div>
          </div>
          <!-- <div class="navbar-item" v-else>
            <div class="buttons">
              <RouterLink
                @click="showMobileNav = false"
                class="navbar-item"
                to="/signin"
                active-class="is-active"
              >
                <strong>Войти</strong>
              </RouterLink>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue"
import { onClickOutside } from "@vueuse/core"
import { supabase } from "@/supabase"

const showMobileNav = ref(false)

const navbarBurgerRef = ref(null)
const navbarMenuRef = ref(null)

onClickOutside(
  navbarMenuRef,
  () => {
    showMobileNav.value = false
  },
  {
    ignore: [navbarBurgerRef],
  }
)
</script>

<style>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
