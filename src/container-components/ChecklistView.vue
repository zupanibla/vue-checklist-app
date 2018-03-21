<template>
	<div class="checklist-view">
		<checklist />
		<checklist-actions />
	</div>
</template>

<script>
import Checklist from '@/container-components/Checklist'
import ChecklistActions from '@/container-components/ChecklistActions'

export default {

	components: {Checklist, ChecklistActions},
}
</script>
