import React, { useState, useEffect } from 'react';
import {
  f7,
  Page,
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

const SearchPage = (props) => {
  const { products } = props;
  useEffect(()=>{
      console.log(products)
  }, [products])
  return (
    <Page name="SearchPage">
      {/* Top Navbar */}
      <Navbar title="Cari Product" backLink="Back">
        <Subnavbar inner={false}>
            <Searchbar
            searchContainer=".search-list"
            searchIn=".item-title"
            disableButton={!theme.aurora}
            ></Searchbar>
        </Subnavbar>
        </Navbar>
      <List className="searchbar-not-found">
        <ListItem title="Nothing found"></ListItem>
      </List>
      <List className="search-list searchbar-found">
      {products.data.map((data, index) => (
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
    </Page>
  )
};
export default SearchPage;