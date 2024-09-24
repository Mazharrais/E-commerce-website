import { getCartProductFromLs } from "./getCartProduct";
import { updateCartValue } from "./updateCartValue";


export const addToCart = (event, id, stock)=>{

    let arrLocalStorageProduct = getCartProductFromLs();

const currentProdEle = document.querySelector(`#card${id}`);
console.log(currentProdEle);

let quantity = currentProdEle.querySelector(".productQuantity").innerText;
let price = currentProdEle.querySelector(".productPrice").innerText;
// console.log(quantity,price);

price = price.replace("PKR", "");

let existingProd = arrLocalStorageProduct.find(
    (currProd) => currProd.id === id
);
if(existingProd){
    return false;
}

price = Number(price * quantity);
quantity = Number(quantity)
console.log(price);

arrLocalStorageProduct.push({id, quantity, price});
localStorage.setItem('cartProductLs', JSON.stringify(arrLocalStorageProduct));

updateCartValue(arrLocalStorageProduct)

}