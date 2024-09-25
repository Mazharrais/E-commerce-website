

import products from './api/product.json';
import { fetchQuantityFromCartLS } from './fetchQuantityFromCartLS';
import { getCartProductFromLs } from './getCartProduct';


let cartProducts = getCartProductFromLs();

let filterProducts = products.filter((curProd)=>{
 return cartProducts.some((curEle)=> (curProd.id === curEle.id))
    
})
console.log(filterProducts);


const cartElement = document.querySelector('#productCartContainer');
const templateContainer = document.querySelector('#productCartTemplate');

const showCartProduct = () =>{
    filterProducts.forEach((curProd)=>{
   const {category,id,name,image,stock,price} = curProd

   let productClone = document.importNode(templateContainer.content,true);

   let lSActualData = fetchQuantityFromCartLS(id, price)

   productClone.querySelector('#cardValue').setAttribute('id',`card${id}`);
   productClone.querySelector('.category').textContent = category;
   productClone.querySelector('.productName').textContent = name;
   productClone.querySelector('.productImage').src = image;

   productClone.querySelector('.productQuantity').textContent = lSActualData.quantity;
    productClone.querySelector('.productPrice').textContent = lSActualData.price;

   cartElement.appendChild(productClone);


    })
}

showCartProduct()