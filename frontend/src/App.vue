<template>
  <div>
    <h1>Olá</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { api } from "./api/api_client"

interface IRoom {
  title: string
  participant_limit: number
}

export default defineComponent({
  name: "AwalysFitRooms",
  data() {
    return {
      rooms: [] as IRoom[]
    }
  },
  methods: {
    async fetchRooms() {
      const roomsResponse = await api.get<IRoom[]>("/rooms")
      this.rooms = roomsResponse.data
    }
  },
  mounted() {
    this.fetchRooms()
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
