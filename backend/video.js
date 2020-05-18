const admin = require('firebase-admin')
const axios = require('axios')
const serviceAccount = require('./cred.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL
})

const db = admin.firestore()

async function fetchYoutube() {
  try {
    const key = process.env.VIDEO_API
    const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCa0_hm_SiHxps1Llk_q6I1Q&order=date&type=video&maxResults=10&key=${key}`

    const RES = await axios.get(URL)
    const video = RES.data.items

    if (video.length > 0) {
      insertVideo(video)
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e)
  }
}

async function fetchYoutubePlaylist() {
  try {
    const key = process.env.VIDEO_API
    const URL = `https://www.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&maxResults=25&channelId=UCa0_hm_SiHxps1Llk_q6I1Q&key=${key}`

    const RES = await axios.get(URL)
    const playlist = RES.data.items

    if (playlist.length > 0) {
      insertPlaylist(playlist)
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e)
  }
}

function insertVideo(items) {
  items.forEach(async (video, idx) => {
    const formattedDataVideo = {
      id: video.id.videoId,
      createdAt: video.snippet.publishedAt,
      description: video.snippet.description,
      thumbnail: video.snippet.thumbnails.medium.url,
      title: video.snippet.title
    }

    try {
      await db
        .collection('video')
        .doc('vid-' + idx)
        .set(formattedDataVideo)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  })
}

function insertPlaylist(items) {
  items.forEach(async (list, idx) => {
    const formattedDataPlaylist = {
      id: list.id,
      title: list.snippet.title
    }

    try {
      await db
        .collection('playlist')
        .doc('list-' + idx)
        .set(formattedDataPlaylist)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  })
}

fetchYoutube()
fetchYoutubePlaylist()
