import {Producto} from './producto';
export interface Carrito {
  id : number,
  products : Producto[],
  total : number,
  discountedtotal : number,
  userid : number,
  totalproducts : number,
  totalquantity : number
}

export interface ProdCarrito{
  carts : Carrito[],
  total : number,
  tkip : number,
  limit : number
}
