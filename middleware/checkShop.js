export default async function ({ $axios, redirect }) {
  let status = await $axios.get('/check-shop-open');
    if (status.data.data.shop == 'open') {
       return redirect('/open-shop');
    }
  }