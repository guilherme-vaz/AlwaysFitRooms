<template>
  <div>
    <h1>Reserve sua sala</h1>
    <div class="rooms">
      <Rooms />
    </div>
  </div>
</template>

<script>
import Rooms from "@Components/rooms"

export default {
  name: "DashboardPage",
  components: {
    Rooms
  }
}
</script>

<style scoped lang="scss">
#container {
  padding: 10px;

  h1 {
    margin-bottom: 20px;
  }
}

.calendar {
  padding: 10px 20px;
}
</style>
