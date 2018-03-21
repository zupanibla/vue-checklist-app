<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import viewportService from '@/services/viewportService'

export default {
  name: 'App',
  data: () => ({viewportService}),

  created() {
    document.body.classList.add(this.viewportService.viewport)
  },
}
</script>

<style lang="sass">
@import 'src/assets/stylesheets/App.sass'
</style>
