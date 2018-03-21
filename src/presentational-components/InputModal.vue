<template>
	<div class="modal-cover" v-if="message != null">
		<div class="modal">
			<input
			 ref="input"
			 v-model      = "message"
			 @keydown     = "handleChange"
			 @paste       = "handleChange"
			 @focusout    = "cancel"
			 @keyup.enter = "submit"
			 @click       = "$event.stopPropagation()"
			 :readonly    = "readonly"
			 autofocus
			>
		</div>
	</div>
</template>

<script>

export default {
	data: () => ({ message: null, backupMessage: null, events: null, readonly: false}),

	methods: {
		handleChange() {
			setTimeout(() => this.events.onChange(this.message), 1)
		},

		submit() {
			this.events.onSubmit(this.message)
			this.message = null
		},

		cancel() {
			this.events.onCancel(this.backupMessage)
			this.message = null
		},

		show(message, events, readonly=false) {
			this.events = {
				onSubmit() {},
				onCancel() {},
				onChange() {},
				...events
			}
			this.readonly = readonly
			this.message = message
			this.backupMessage = message
			this.$nextTick(() => {
				this.$refs.input.focus()
				this.$refs.input.setSelectionRange(0, this.$refs.input.value.length)
			})
		},
	},
}
</script>
