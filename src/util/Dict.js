import Vue from 'vue'

export default class Dict {
	store = {}

	constructor(obj={}) {
		for (const [key, value] of Object.entries(obj))
			this.set(key, value)
	}

	get(key) {
		return this.store[key]
	}

	set(key, value) {
		Vue.set(this.store, key, value)
	}

	remove(key) {
		Vue.delete(this.store, key)
	}

	has(key) {
		return Object.prototype.hasOwnProperty.call(this.store, key)
	}

	uniqueKey(size=16777215) {
		let key = Math.floor(Math.random()*size).toString(16)
		if (this.has(key)) return this.uniqueKey(size)
		else return key
	}

	values() {
		return this.keys().map(key => this.store[key])
	}

	keys() {
		return Object.keys(this.store)
	}

	entries() {
		return this.keys().map(key => ({key, value: this.store[key]}))
	}
}
