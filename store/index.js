export const actions = {
  async nuxtServerInit({ commit, dispatch }) {
    const berita = await dispatch('berita/fetchTwitter')
    const video = await dispatch('video/fetchYoutube')
    const playlist = await dispatch('video/fetchYoutubePlaylist')

    commit('berita/addBerita', berita.bbta3)
    commit('berita/addBerita', berita.bppt)
    commit('video/addVideo', video)
    commit('video/addPlaylist', playlist)
  }
}
