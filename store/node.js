export const state = () => ({
  version: null
})

export const mutations = {
  checkVersion(state) {
    state.version = process.env.FROM_NODE
  }
}
