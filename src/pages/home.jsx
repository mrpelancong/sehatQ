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
  theme, Card, CardHeader, CardContent
} from 'framework7-react';

const HomePage = (props) => {
  const { categories, products } = props;
  return (
    <Page name="home">
      <Navbar title="sehatQ">
        <NavRight>
          <Link
            href="/search"
            iconMd="material:search"
          ></Link>
        </NavRight>
      </Navbar>
      {/* Toolbar */}
      <Toolbar tabbar labels position='bottom'>
        <Link
          tabLink
          tabLinkActive
          text="Home"
          href="./"
          iconMd="material:home"
          routeTabId="tab1"
        ></Link>
        <Link
          tabLink
          text="Wishlist"
          href="tab2/"
          iconMd="material:favorite"
          routeTabId="tab2"
        ></Link>
        <Link
          tabLink
          text="Cart"
          href="tab3/"
          iconMd="material:shopping_cart"
          routeTabId="tab3"
        ></Link>
        <Link
          tabLink
          text="Logout"
          href="tab4/"
          iconMd="material:power_settings_new"
          routeTabId="tab4"
        ></Link>
      </Toolbar>

      <Tabs routable>
        <Tab className="page-content"
          style={{
            paddingTop: '5px'
          }}
        id="tab1" />
        <Tab className="page-content"
          style={{
            paddingTop: '5px'
          }}
        id="tab2" />
        <Tab className="page-content"
          style={{
            paddingTop: '5px'
          }}
        id="tab3" />
        <Tab className="page-content"
          style={{
            paddingTop: '5px'
          }}
        id="tab4" />
      </Tabs>
    </Page>
  )
};
export default HomePage;