<template>
	<div>
		<ul class="checklist">
			<checklist-item
			 v-for          = "{key:id, value:item} in entries"
			 :key           = "id"
			 :data          = "item"
			 @click         = "toggleItem({id})"
			 @delete-button = "deleteItem({id})"
			 @edit-button   = "editMode({id})"
			/>
			<checklist-input @submit="addItem({message:$event.value})"/>
		</ul>
		<input-modal ref="modal"/>
	</div>
</template>

<script>
import InputModal from '@/presentational-components/InputModal'
import ChecklistInput from '@/presentational-components/ChecklistInput'
import ChecklistItem from '@/presentational-components/ChecklistItem'
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
	components: {ChecklistInput, ChecklistItem, InputModal},

	computed: mapGetters(['entries', 'getItemById']),

	methods: {
		...mapMutations(['addItem', 'editItem', 'deleteItem']),
		...mapActions(['toggleItem']),

		editMode({id}) {
			this.$refs.modal.show(this.getItemById(id).message, {
				onSubmit: message => (!message)
					? this.deleteItem({id})
					: this.editItem({id, message}),
			})
		},
	},
}
</script>
