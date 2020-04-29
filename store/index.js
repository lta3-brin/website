export const actions = {
  async nuxtServerInit({ commit, dispatch }) {
    const berita = await dispatch('berita/fetchTwitter')
    const video = await dispatch('video/fetchYoutube')

    commit('berita/addBerita', berita.bbta3)
    commit('berita/addBerita', berita.bppt)
    commit('video/addVideo', video)
  }
}
