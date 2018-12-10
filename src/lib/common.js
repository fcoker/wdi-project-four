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
  if(!!myPurchases && myPurchases.length > 0){
    const productArray = [];
    const myGenres = getMyGenres(myPurchases);
    const myIds = [];
    for(let i = 0; i < myPurchases.length; i++){
      myIds.push(myPurchases[i].product._id);
    }
    console.log('my purchased', myIds);


    
    // products.forEach(prod => {
    //   for(let i = 0; i < myPurchases.length; i++){
    //     if(myPurchases[i].product._id !== prod._id){
    //       if(notPurchased.indexOf(prod) < 0) {
    //         notPurchased.push(prod);
    //       }
    //     }
    //   }
    // });

    // for (let i = 0; i < products.length; i++){
    //   if(myPurchases[i] && myPurchases[i].product['_id'] !== products[i]._id){
    //     if(notPurchased.indexOf(products[i]) < 0) {
    //       notPurchased.push(products[i]);
    //     }
    //   }
    // }

    //filter not purchased
    //forEach items
    //forEach genres

    products.forEach(prod => {
      myPurchases.forEach(purchase => {
        myGenres.forEach(myGenre => {
          if(prod.genre === myGenre && purchase.product._id !== prod._id){
            if(productArray.indexOf(prod) < 0){
              productArray.push(prod);
            }
          }
        });
      });
    });
    const length = productArray.length;
    console.log('product items:', productArray);
    // const returnArray = productArray.slice(length - 1);
    // console.log('return items:', returnArray);
    return productArray[Math.floor(Math.random()*(productArray.length))];
    // return returnArray[0];
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
