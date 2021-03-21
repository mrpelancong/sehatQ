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

const WishListPage = (props) => {
  const { wishlist } = props;
  useEffect(()=>{
      console.log(wishlist)
  }, [wishlist])
  return (
    <Block name="WishListPage">
      <List className="search-list searchbar-found">
      {wishlist.data.map((data, index) => (
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
    </Block>
  )
};
export default WishListPage;