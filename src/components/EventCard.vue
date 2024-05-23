<template>
  <div class="card">
    <div class="card-image">
      <img
        class="box-image"
        src="https://bulma.io/assets/images/placeholders/1280x960.png"
        alt="Placeholder image"
      />
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left"></div>
        <div class="media-content">
          <p class="title is-4">
            {{ props.title }}
          </p>
        </div>
      </div>
      <div class="content" style="display: flex">
        <p>
          {{
            props.seats != props.seatsAvailable
              ? "Еще есть места"
              : "Мест нету"
          }}, <time>{{ getDate(props.date) }}</time>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  seatsAvailable: {
    type: Number,
    required: true,
  },
  seats: {
    type: Number,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
})

function getDate(utcFormat) {
  const utcDate = new Date(utcFormat)
  const month = utcDate.toLocaleDateString(undefined, {
    month: "long",
  })
  const dayOfMonth = utcDate.getUTCDate()

  return `${dayOfMonth} ${month}`
}
</script>
