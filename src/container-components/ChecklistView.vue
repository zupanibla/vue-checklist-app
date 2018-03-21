<template>
	<div>
		<div class="main" :class="viewport">
			<checklist />
			<checklist-actions />
		</div>
	</div>
</template>

<script>
import Checklist from '@/container-components/Checklist'
import ChecklistActions from '@/container-components/ChecklistActions'
import viewportService from '@/services/viewportService'

export default {

	components: {Checklist, ChecklistActions},

	data: () => ({viewportService}),

	computed: {	viewport: () => viewportService.viewport },

	created() {
		this.$store.commit('refreshReactivity')
	},
}
</script>
