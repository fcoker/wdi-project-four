export function createBasket() {
  return localStorage.setItem('basket', '[]');
}

export function getBasket() {
  return JSON.parse(localStorage.getItem('basket')) || createBasket();
}

export function saveBasket(basket) {
  return localStorage.setItem('basket', JSON.stringify(basket));
}

export function getItem(basket, itemId) {
  return basket.find(item => item._id === itemId);
}

export function incrementQuantity(basket, itemId, quantity) {
  const item = getItem(basket, itemId);
  item.quantity = (item.quantity || 0) + quantity;
}

export function addItem(itemToAdd, quantity) {
  const basket = getBasket();
  itemToAdd.product = itemToAdd._id;
  if (!getItem(basket, itemToAdd._id)) basket.push(itemToAdd);
  incrementQuantity(basket, itemToAdd._id, quantity);
  saveBasket(basket);
}
