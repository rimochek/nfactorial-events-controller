<template>
  <form
    class="row flex-center flex form card"
    style="margin: 0 auto"
    @submit.prevent="handleSignUp"
  >
    <h1 style="font-size: 30pt" class="mb-3">Регистрация</h1>
    <div class="field">
      <p class="control has-icons-left has-icons-right">
        <input
          class="input"
          required
          type="email"
          placeholder="Почта"
          v-model="email"
        />
      </p>
    </div>

    <div class="field">
      <p class="control has-icons-left">
        <input
          class="input"
          type="password"
          placeholder="Пароль"
          v-model="password"
        />
      </p>
    </div>

    <div class="field mt-5">
      <p class="control">
        <input
          type="submit"
          class="button is-success"
          style="width: 100%"
          :value="loading ? 'Загрузка' : 'Зарегистрироваться'"
          :disabled="loading"
        />
      </p>
    </div>

    <div class="field">
      <p>Есть аккаунт? <RouterLink to="/signin">Войти</RouterLink></p>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue"
import { supabase } from "../supabase"
import router from "@/router"

const loading = ref(false)
const email = ref("")
const password = ref("")

const handleSignUp = async () => {
  try {
    loading.value = true
    const { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        emailRedirectTo: "http://localhost:5173/",
      },
    })

    if (error) {
      setErrorMsg(error.message)
    } else if (data.user?.identities?.length === 0) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value,
      })
      if (error) throw error
      router.push("/")
    } else {
      alert("Проверьте почту")
      router.push("/signin")
    }
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message)
    }
  } finally {
    loading.value = false
  }
}
</script>
