export const state = () => ({
  koleksi: []
})

export const mutations = {
  addBerita(state, payload) {
    payload.forEach((brt) => {
      state.koleksi.push({
        id: brt.id_str,
        createdAt: brt.created_at,
        description: brt.full_text,
        thumbnail: brt.entities.media[0].media_url,
        screen_name: brt.user.screen_name
      })
    })
  }
}
