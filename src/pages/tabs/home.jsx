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
  Swiper,
  SwiperSlide,
  List,
  ListItem,
  theme, Card, CardHeader, CardContent
} from 'framework7-react';

const HomePage = (props) => {
  const { categories, products } = props;

  return (
    <Block>
    <Swiper 
        speed={500} 
        slidesPerView={4} 
        spaceBetween={0}>
        
        {categories.data.map((data, index) => (
        <SwiperSlide
          key={index}
        >
          <Card 
            className="demo-card-header-pic"
            noBorder
            padding={false}
            style={{
              marginLeft:'2px',
              marginRight: '2px'
            }}
          >
            <CardHeader
              className="no-border"
              valign="bottom"
              style={{
                backgroundSize: 'cover',
                backgroundImage: 'url('+`${data.imageUrl}`+')',
                backgroundPosition:'center',
                height: '80px'
              }}
            >
            </CardHeader>
            <CardContent
              style={{
                textAlign:'center',
                padding:'0px 0px 5px 0px',
                margin:'0px',
                fontWeight: 'bold'
              }}
            >
              {data.name}
            </CardContent>
          </Card>
        </SwiperSlide>
        ))}
      </Swiper>
        
      <List >
      {products.data.map((data, index) => (
        <ListItem 
          className="text-align-center"
          key={index}
        >
          <Card 
            className="demo-card-header-pic"
            style={{
              width:'100%'
            }}
          >
            <CardHeader
              className="no-border"
              valign="bottom"
              style={{
                backgroundImage: 'url('+`${data.imageUrl}`+')',
                backgroundSize: 'cover',
                backgroundPosition:'center',
                height: '120px'
              }}
            >
            </CardHeader>
            <CardContent>
              <p className="date">{data.title}</p>
            </CardContent>
          </Card>
        </ListItem>
        ))}
      </List>
    </Block>
  )
};
export default HomePage;