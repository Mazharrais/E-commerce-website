import { getCartProductFromLs } from "./getCartProduct"
import { updateCartValue } from "./updateCartValue";

export const removeProdFromCart = (id)=>{

    let cartProducts = getCartProductFromLs();
    cartProducts = cartProducts.filter((curprod)=> curprod.id !== id);


    localStorage.setItem("cartProductLs", JSON.stringify(cartProducts));

    let removeDiv = document.getElementById(`card${id}`);
    if(removeDiv){
        removeDiv.remove();
    }

    updateCartValue(cartProducts);

};