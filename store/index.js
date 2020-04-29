import axios from 'axios'

export const actions = {
  async nuxtServerInit({ commit, dispatch }) {
    const berita = await dispatch('fetchTwitetrTimeline')

    commit('berita/addBerita', berita.bbta3)
    commit('berita/addBerita', berita.bppt)
  },
  async fetchTwitetrTimeline() {
    const key = process.env.NEWS_API
    const URL_BBTA3 = `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=bbta3_bppt&count=4&exclude_replies=true&tweet_mode=extended`
    const URL_BPPT = `https://api.twitter.com/1.1/search/tweets.json?q=from:bppt_ri&result_type=recent&count=3&tweet_mode=extended`

    try {
      const resBBTA3 = await axios.get(URL_BBTA3, {
        headers: {
          Authorization: `Bearer ${key}`
        }
      })

      const resBPPT = await axios.get(URL_BPPT, {
        headers: {
          Authorization: `Bearer ${key}`
        }
      })

      return {
        bbta3: resBBTA3.data,
        bppt: resBPPT.data.statuses
      }
    } catch (_) {
      return {
        bbta3: [],
        bppt: []
      }
    }
  }
}
