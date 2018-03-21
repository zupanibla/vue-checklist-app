<template>
	<li>
		<input
		 placeholder  = "+Dodaj novo opravilo"
		 v-model      = "value"
		 @keyup.enter = "handleEnter"
		 @focusout    = "value = ''"
		 :autofocus   = "viewport == 'desktop'"
		>
	</li>
</template>

<script>
import viewportService from '@/services/viewportService';

export default {
	data: () => ({value: ''}),

	computed: { viewport: () => viewportService.viewport },

	methods: {
		handleEnter() {
			if (!this.value) return
			this.$emit('submit', {value: this.value})
			this.value = ''
		}
	}
}
</script>
