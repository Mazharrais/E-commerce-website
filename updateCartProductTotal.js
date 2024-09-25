import { getCartProductFromLs } from "./getCartProduct";


export const updateCartProductTotal = ()=>{

  let productSubTotal = document.querySelector('.productSubTotal');
  let productFinalTotal = document.querySelector('.productFinalTotal');

    let arrLocalStorageProduct = getCartProductFromLs();
    let initialValue = 0;
    let totalProductPrice = arrLocalStorageProduct.reduce((accum,currEle)=>{
        let productPrice = parseInt(currEle.price) || 0 ;
        return accum + productPrice;
    }, initialValue);

//    console.log(totalProductPrice);

productSubTotal.textContent = `PKR:${totalProductPrice}`;
productFinalTotal.textContent = `PKR:${totalProductPrice + 99}`;
   

}