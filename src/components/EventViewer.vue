<template>
  <div class="columns is-multiline">
    <EventCard
      class="is-one-quarter column"
      v-for="event in events"
      :key="event.id"
      :title="event.name"
      :date="event.event_datetime"
      :seats="event.all_seats"
      :seatsAvailable="event.seats_available"
      :place="event.place"
    />
  </div>
</template>
<script setup>
import EventCard from "@/components/EventCard.vue"
import { ref, onMounted } from "vue"
import { supabase } from "../supabase"

const events = ref([])

async function getEvents() {
  const { data } = await supabase.from("events").select()
  events.value = data
}

console.log(events)

onMounted(() => {
  getEvents()
})
</script>
<style>
@media (max-width: 1023px) {
  .columns {
    display: block !important;
  }
  .column {
    width: 100% !important;
  }
}
</style>
