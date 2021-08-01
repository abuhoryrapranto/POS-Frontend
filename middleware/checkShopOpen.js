export default async function ({$axios, redirect, next}) {
  
  let status = await $axios.$get('/check-shop-open')
  .then(response => {
      if(response.data.shop == 'open') {
          return redirect('/open-shop');
      }
      
  })
}