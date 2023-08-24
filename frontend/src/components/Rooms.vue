<!-- eslint-disable prettier/prettier -->
<template>
  <div>
    <h1>Rooms</h1>
    <div>
      <h2>{{ title }}</h2>
      <span
        ><i>{{ capacity }}</i></span
      >
      <button>Reservar</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "Rooms",
  props: {
    title: String,
    capacity: Number
  }
})
</script>

<style scoped>
</style>
