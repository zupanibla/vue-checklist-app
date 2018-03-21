<template>
	<li
	 @click = "$emit('click')"
	 :class = "{ checked: data.checked }"
	>
		{{ data.message }}
		
		<span class="item-actions" @click="$event.stopPropagation()">
			<button-edit   @click="$emit('edit-button')"/>
			<button-delete @click="$emit('delete-button')"/>
		</span>
	</li>
</template>

<script>
import * as buttons from '@/presentational-components/buttons'

export default {
	props: ['data'],

	components: buttons,
}
</script>
