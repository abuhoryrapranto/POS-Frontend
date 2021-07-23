export const state = () => ({
   shopStatus: ''
})

export const mutations = {
    checkShop(state, data) {
      state.shopStatus = data;
    }
  }