import { getCartProductFromLs } from "./getCartProduct"

export const incrementDecrement = (event, id, stock, price)=>{
    
    // let cartProducts = getCartProductFromLs()
    const currentCardElement = document.querySelector(`#card${id}`)
    const productQuantity = currentCardElement.querySelector('.productQuantity');
    const productPrice = currentCardElement.querySelector('.productPrice');


    let quantity = 1;
    let localStorage = 0;

    let localCartProducts = getCartProductFromLs();


}