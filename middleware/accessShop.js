export default async function ({$axios, redirect, next}) {
  
    let status = await $axios.$get('/check-shop-open')
    .then(response => {
        if(response.data.shop == 'access') {
            return redirect('/dashboard');
        }
        
    })
  }