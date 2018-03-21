import Vue from 'vue'
import Vuex from 'vuex'
import Dict from '@/util/Dict'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [vuexLocal.plugin],

  state: {
    itemDict: new Dict,
  },

  getters: {
    entries: state => state.itemDict.entries(),
    items: state => state.itemDict.values(),
    getItemById: state => id => state.itemDict.get(id),
  },

  mutations: {
    checkItem(state, {id}) {
      state.itemDict.set(id, {...state.itemDict.get(id), checked:true})
    },

    uncheckItem(state, {id}) {
      state.itemDict.set(id, {...state.itemDict.get(id), checked:false})
    },

    addItem(state, {message=''}) {
      state.itemDict.set(state.itemDict.uniqueKey(), {message, checked:false})
    },

    editItem(state, {id, message}) {
      state.itemDict.set(id, {...state.itemDict.get(id), message})
    },

    deleteItem(state, {id}) {
      state.itemDict.remove(id)
    },

    refreshReactivity(state) {
      state.itemDict = new Dict(state.itemDict.store)
    },
  },

  actions: {
    toggleItem({state, commit}, {id}) {
      if (state.itemDict.get(id).checked)
        commit('uncheckItem', {id})
      else
        commit('checkItem', {id})
    },
    deleteCheckedItems({getters, commit}) {
      for (let {key: id, value: item} of getters.entries)
        if (item.checked) commit('deleteItem', {id})
    },
    importItems({getters, commit}, {items}) {
        for (let message of items)
          if (!getters.items.filter(e => e.message == message).length)
            commit('addItem', {message})
    },
  },
})
