export const state = () => ({
  koleksi: []
})

export const mutations = {
  addBerita(state, payload) {
    state.koleksi.push(payload)
  }
}
