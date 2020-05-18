// @flow
import type { TShopItem } from '../../components/collection-preview/collection-preview.types';

export const CartActionTypes = {
  TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN',
  ADD_ITEM: 'ADD_ITEM',
};

export type TCartItem = {
  ...TShopItem,
  quantity: number,
};

export type TCartState = {
  hidden: boolean,
  cartItems: Array<TCartItem>,
};

export type TCartAction = {
  type: string,
  payload?: TShopItem,
};
