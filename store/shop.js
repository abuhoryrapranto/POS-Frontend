export const state = () => ({
   shop: ''
})

export const mutations = {
    checkShop(state) {
      state.shop = 'open';
    }
  }