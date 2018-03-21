import store from '@/store'
import {encodeStrings} from '@/util/item-encoding'

export default () =>
	location.href + (location.href.endsWith('/') ? '' : '/')
	 + encodeStrings(store.getters.items.filter(e => !e.checked).map(e => e.message))
