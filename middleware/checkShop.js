export default function ({ store, redirect }) {
    //let shop = JSON.stringify(store.state.shop.shopStatus);
    //let status = shop.toString();
    if (store.state.shop.shopStatus == 'open') {
       return redirect('/open-shop');
      //console.log(store.state.shop.shopStatus);
    }
  }