import axios from 'axios';
import { getHeader } from './auth';

export function createBasket() {
  localStorage.setItem('basket', '[]');
  return [];
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
  if (!getItem(basket, itemToAdd._id))
    basket.push(itemToAdd);
  incrementQuantity(basket, itemToAdd._id, quantity);
  saveBasket(basket);
}

export function setQuantity(itemId, newQuantity) {
  const basket = getBasket();
  getItem(basket, itemId).quantity = newQuantity;
  saveBasket(basket);
}

export function removeItem(itemToRemoveId) {
  const basket = getBasket();
  const item = getItem(basket, itemToRemoveId);
  basket.splice(basket.indexOf(item), 1);
  saveBasket(basket);
}

export function totalBasketPrice() {
  const basket = getBasket();
  const itemTotals = basket.map(item => item.price * item.quantity);
  return itemTotals.reduce((basketTotal, itemTotal) => basketTotal += itemTotal, 0);
}

export function getBasketCount(){
  return getBasket().length;
}

export function checkout() {
  axios.post('/api/checkout', getBasket(), getHeader())
    .then(() => {
      createBasket();
      this.props.history.push('/purchases');
    });
}

export default {
  createBasket, getBasket, saveBasket, getItem, addItem,
  incrementQuantity, setQuantity, removeItem, totalBasketPrice, getBasketCount,
  checkout
};
