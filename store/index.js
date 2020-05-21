export const actions = {
  async nuxtServerInit({ commit, dispatch }) {
    const berita = await dispatch('berita/fetchTwitter')
    await dispatch('video/readVideo')
    await dispatch('video/readPlaylist')

    commit('berita/addHashtag', berita.bbta3)
    commit('berita/addBerita', berita.bbta3)
    commit('berita/addBerita', berita.bppt)
    commit('node/checkVersion')
  }
}
