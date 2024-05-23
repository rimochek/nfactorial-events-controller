<template>
  <button class="button is-success" @click="SignOut">Выйти</button>
</template>

<script setup>
import router from "@/router"
import { supabase } from "@/supabase"
const SignOut = async () => {
  const { error } = await supabase.auth.signOut()
  router.push("/")
}
</script>
