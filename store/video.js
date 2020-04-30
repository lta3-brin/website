import axios from 'axios'

export const state = () => ({
  koleksi: [],
  playlist: []
})

export const mutations = {
  addVideo(state, payload) {
    payload.forEach((video) => {
      state.koleksi.push({
        id: video.id.videoId,
        createdAt: video.snippet.publishedAt,
        description: video.snippet.description,
        thumbnail: video.snippet.thumbnails.medium.url,
        title: video.snippet.title
      })
    })
  },
  addPlaylist(state, payload) {
    payload.forEach((playlist) => {
      state.playlist.push({
        id: playlist.id,
        title: playlist.snippet.title
      })
    })
  }
}

export const actions = {
  async fetchYoutube() {
    try {
      const key = process.env.VIDEO_API
      const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCa0_hm_SiHxps1Llk_q6I1Q&order=date&type=video&maxResults=10&key=${key}`
      const RES = await axios.get(URL)

      return RES.data.items
    } catch (_) {
      return []
    }
  },
  async fetchYoutubePlaylist() {
    try {
      const key = process.env.VIDEO_API
      const URL = `https://www.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&maxResults=25&channelId=UCa0_hm_SiHxps1Llk_q6I1Q&key=${key}`
      const RES = await axios.get(URL)

      return RES.data.items
    } catch (_) {
      return []
    }
  }
}
