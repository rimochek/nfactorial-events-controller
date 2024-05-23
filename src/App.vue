<template>
  <Navbar />
  <div class="container is-max-dekstop px-2 py-2"><RouterView /></div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue"
import { onMounted, ref } from "vue"
import { supabase } from "@/supabase"

const session = ref()

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session
  })
})
</script>

<style>
@import "bulma/css/bulma.min.css";
@import "assets/custom.css";
</style>
