<template>
	<div class="checklist-actions">
		<button-clear
		 @click     = "deleteCheckedItems"
		 class      = "tooltipped tooltipped-s border p-2 mb-2 mr-2 float-left"
		 aria-label = "Počisti končana opravila"
		/>
		<button-share
		 v-clipboard:copy    = "checklistUrl"
		 v-clipboard:success = "() => { copied = true }"
		 class               = "tooltipped tooltipped-s border p-2 mb-2 mr-2 float-left"
		 :aria-label          = "copied ? 'Kopirano!' : 'Kopiraj nedokončana opravila kot URL'"
		/>
	</div>
</template>

<script>
import * as buttons from '@/presentational-components/buttons'
import getChecklistUrl from '@/util/getChecklistUrl'

export default {
	components: buttons,

	data: () => ({copied:false}),

	computed: {
		checklistUrl: () => getChecklistUrl(),
	},

	watch: {
		checklistUrl() { this.copied = false }
	},

	methods: {
		deleteCheckedItems() { this.$store.dispatch('deleteCheckedItems') },
	},
}
</script>
