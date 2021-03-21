import React, { useState, useEffect } from 'react';
import {
  f7,
  Block,
  Navbar,
  Searchbar,
  NavTitle,
  NavRight,
  Link,
  Toolbar,
  Tabs,
  Tab,
  List,
  ListItem,
  theme, Subnavbar, CardHeader, CardContent
} from 'framework7-react';

const CartPage = (props) => {
  const { cart } = props;
  useEffect(()=>{
      console.log(cart)
  }, [cart])
  return (
    <Block name="CartPage">
      {cart.data !== [] ? 
        <List className="search-list searchbar-found">
        {cart.data.map((data, index) => (
           <ListItem
              key={index}
              link="#"
              title={data.title}
              after={data.price}
              text={data.description}
          >
              <img
              slot="media"
              src={data.imageUrl}
              width="80"
              />
          </ListItem>
          ))}
        </List>
        :
            'Keranjang Anda Masih Kosong'
        }
    </Block>
  )
};
export default CartPage;