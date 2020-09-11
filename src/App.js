import React , {useState, useEffect} from 'react';
import {SubHeading} from './components/SubHeading';
import {Loader }from './components/Loader';
import {UnsplashImage} from './components/UnsplashImage';
import Menu from './components/Menu';
import axios from 'axios';
import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import Heading from './components/Heading';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';



//style

const GlobalStyle = createGlobalStyle `
* {
  margin:0;
  padding:0;
  box-sizing: border-box;
}
body{
  font-family: sans-serif;
}
`;

const WrapperImage = styled.section `
max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;

function App() {
  const [images1, setImages1] = useState([]);
  const [images2, setImages2] = useState([]);
  const [images3, setImages3] = useState([]);

  useEffect(() => {
    fetchImages1();
    fetchImages2();
    fetchImages3();
    
   
  }, [])

  const fetchImages1 = () => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = "z9GUn4qThn7mMwNOMYFfQPsuAa9Bo366ys0EJJHyJr8";

    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=10`)
      .then(res => setImages1([...images1, ...res.data]))
  }

  const fetchImages2 = () => {
    fetch("https://api.unsplash.com/search/photos?page=1&query=flowers&client_id=z9GUn4qThn7mMwNOMYFfQPsuAa9Bo366ys0EJJHyJr8&count=10")
      // .then(res => setImages2([...images2, ...res.data]))
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setImages2(data.results)
      })
  }

  const fetchImages3 = () => {
    fetch("https://api.unsplash.com/search/photos?client_id=z9GUn4qThn7mMwNOMYFfQPsuAa9Bo366ys0EJJHyJr8&query=london")
    // .then(res => setImages([...images, ...res.data]))
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setImages3(data.results)
    })
  }
  return (
    <div className="App">
      <Heading/>
      <SubHeading />
      <GlobalStyle/>
     
      <Tabs >
    <TabList style={{border: 'none', paddingLeft: '12rem'}} >
      <Tab style={{border: 'none'}}>Trending</Tab>
      <Tab style={{border: 'none'}}>Flower</Tab>
      <Tab style={{border: 'none'}} >London</Tab>
    </TabList>
 
    <TabPanel>
    <InfiniteScroll
        dataLength={images1.length}
        next={fetchImages1}
        hasMore={true}
        loader={<Loader />}
      >
          <WrapperImage >
          {images1.map(image => (
          <UnsplashImage url={image.urls.thumb} key={image.id} />
        ))}
          </WrapperImage>
      </InfiniteScroll>
    </TabPanel>
    <TabPanel>
    <InfiniteScroll
        dataLength={images2.length}
        next={fetchImages2}
        hasMore={true}
        loader={<Loader />}
      >
          <WrapperImage >
          {images2.map(image => (
          <UnsplashImage url={image.urls.thumb} key={image.id} />
        ))}
          </WrapperImage>
      </InfiniteScroll>
    </TabPanel>
    <TabPanel>
    <InfiniteScroll
        dataLength={images3.length}
        next={fetchImages3}
        hasMore={true}
        loader={<Loader />}
      >
          <WrapperImage >
          {images3.map(image => (
          <UnsplashImage url={image.urls.thumb} key={image.id} />
        ))}
          </WrapperImage>
      </InfiniteScroll>
    </TabPanel>

  </Tabs>
      
      
     
    </div>
  );
}

export default App;
