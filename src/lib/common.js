export function handleChange(e) {
  const { target: {name, value} } = e;
  this.setState({ [name]: value });
}

function getMyGenres(myPurchases){
  const genres = myPurchases.map(purchase => purchase.product.genre);
  const myGenres = [];
  genres.forEach(function(genre) {
    //if genre does not exist in myGenres, push to myGenres
    if(myGenres.indexOf(genre) < 0) {
      myGenres.push(genre);
    }
  });
  return myGenres;
}

export function getSuggestion(myPurchases, products){
  //if myPurchases exist and user has not purchased all items:
  if(myPurchases && !!myPurchases.length > 0){
  //find products with the same genre as what user has purchased:
    const productArray = [];
    const myGenres = getMyGenres(myPurchases);
    //cycle through both arrays(all products and myGenres)
    products.forEach(prod => {
      myGenres.forEach(myGenre => {
        //if myGenre matches the products genre,
        if(prod.genre === myGenre){
          //and if the product is not already in the array
          if(productArray.indexOf(prod) < 0){
            //push this product into the productArray
            productArray.push(prod);
          }
        }
      });
    });
    //get all the product IDs from myPurchases
    const purchaseIds = [];
    for(let i = 0; i < myPurchases.length; i++){
      purchaseIds.push(myPurchases[i].product._id);
    }
    //remove users purchased items from productArray to avoid suggesting
    //already purchased items:
    const finalArray = productArray.filter(prod => !purchaseIds.includes(prod._id));
    //pick a random item from finalArray:
    return finalArray[Math.floor(Math.random()*(finalArray.length))];
  } else {
    //if no purchases made pick a random from all products:
    return getRandomProduct(products);
  }
}

export function getRandomProduct(products){
  const length = products.length;
  return products[Math.floor(Math.random()*(length))];
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
