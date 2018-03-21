<template>
  <div id="app" :class="viewport">
    <router-view/>
  </div>
</template>

<script>
import viewportService from '@/services/viewportService'

export default {
  data: () => ({viewportService}),

  computed: { viewport: () => viewportService.viewport },

  created() {
    this.$store.commit('refreshReactivity')
  },
}
</script>

<style lang="sass">
@import 'src/assets/stylesheets/App.sass'
</style>
