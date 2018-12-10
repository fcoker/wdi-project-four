export function handleChange(e) {
  const { target: {name, value} } = e;
  this.setState({ [name]: value });
}

function getMyGenres(myPurchases){
  return myPurchases.map(purchase => purchase.product.genre);
}

export function getSuggestion(myPurchases, products){
  if(!!myPurchases && myPurchases.length > 0){
    const productArray = [];
    const myGenres = getMyGenres(myPurchases);
    products.forEach(prod => {
      myPurchases.forEach(purchase => {
        myGenres.forEach(myGenre => {
          if(prod.genre === myGenre && purchase.product._id !== prod._id){
            productArray.push(prod);
          }
        });
      });
    });
    const length = productArray.length;
    const returnArray = productArray.slice(length - 1);

    return returnArray[Math.floor(Math.random()*(length))];
  } else {
    const length = products.length;
    return products[Math.floor(Math.random()*(length))];
  }
}

// export function getSimilarProducts(myGenres, products){
//   return products.filter(prod => {
//     for(let i = 0; i < myGenres.length; i++){
//       if(prod.genre === myGenres[i]){
//         return true;
//       }
//     }
//   });
// }

// export function withoutPastPurchases(myPurchases, products){
//   const similarProd = getSimilarProducts(getMyGenres(myPurchases), products, myPurchases);
//   similarProd.splice(0, (similarProd.length - 1));
//   // similarProd.forEach(prod => {
//   //   myPurchases.forEach(purchase => {
//   //     if(purchase.product._id !== prod._id){
//   //       returnArray.push(prod);
//   //     }
//   //   });
//   // });
//   return similarProd;
// }
