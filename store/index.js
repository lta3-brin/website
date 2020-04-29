import axios from 'axios'

export const actions = {
  async nuxtServerInit({ commit, dispatch }) {
    const berita = await dispatch('fetchTwitetrTimeline')

    berita.forEach((brt) => {
      commit('berita/addBerita', {
        id: brt.id,
        createdAt: brt.created_at,
        description: brt.full_text,
        thumbnail: brt.entities.media[0].media_url,
        screen_name: brt.user.screen_name
      })
    })
  },
  async fetchTwitetrTimeline() {
    const key = process.env.NEWS_API
    const URL = `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=bbta3_bppt&count=4&exclude_replies=true&tweet_mode=extended`
    try {
      const res = await axios.get(URL, {
        headers: {
          Authorization: `Bearer ${key}`
        }
      })

      return res.data
    } catch (_) {
      return []
    }
  }
}
