import axios from 'axios'

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
        thumbnail: brt.entities.media ? brt.entities.media[0].media_url : '',
        screen_name: brt.user.screen_name
      })
    })
  }
}

export const actions = {
  async fetchTwitter() {
    const key = process.env.NEWS_API
    const URL_BBTA3 = `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=bbta3_bppt&count=11&exclude_replies=true&tweet_mode=extended`
    const URL_BPPT = `https://api.twitter.com/1.1/search/tweets.json?q=from:bppt_ri&result_type=recent&count=10&tweet_mode=extended`

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
