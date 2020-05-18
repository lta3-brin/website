export const state = () => ({
  koleksi: [],
  playlist: []
})

export const mutations = {
  addVideo(state, payload) {
    if (payload === null) {
      state.koleksi = []
    } else {
      state.koleksi.push(payload)
    }
  },
  addPlaylist(state, payload) {
    if (payload === null) {
      state.playlist = []
    } else {
      state.playlist.push(payload)
    }
  }
}

export const actions = {
  async readVideo(context) {
    try {
      const video = await this.$fireStore
        .collection('video')
        .orderBy('createdAt', 'desc')
        .get()

      video.forEach((vid) => {
        context.commit('addVideo', vid.data())
      })
    } catch (_) {
      context.commit('addVideo', null)
    }
  },
  async readPlaylist(context) {
    try {
      const list = await this.$fireStore.collection('playlist').get()

      list.forEach((ls) => {
        context.commit('addPlaylist', ls.data())
      })
    } catch (_) {
      context.commit('addPlaylist', null)
    }
  }
}
