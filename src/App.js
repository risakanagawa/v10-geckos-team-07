import React from 'react';

import Menu from './components/Menu';
import ImageList from './components/ImageList';
import './App.css';

const fakeData = [
  {
    id: 1,
    img: 'src/images/house1.jpg',
    title: 'By the beach',
    location: 'San Diego'
  },
  {
    id: 2,
    img: './images/house2.jpg',
    title: 'La Jolla',
    location: 'La Jolla'
  },
  {
    id: 3,
    img: '/images/house3.jpg',
    title: 'It has a pool',
    location: 'San Diego'
  },
  {
    id: 4,
    img: '/house4.jpg',
    title: 'Lots of windows',
    location: 'San Clemente'
  },
  {
    id: 5,
    img: '/images/house5.jpg',
    title: 'Cliche',
    location: 'California'
  },
  {
    id: 6,
    img: '/images/house6.jpg',
    title: 'Also has a pool',
    location: 'Del Mar'
  },
  {
    id: 7,
    img: '/images/house7.jpg',
    title: 'Hidden in the coast',
    location: 'Carlsbad'
  }
];

class App extends React.Component {
  render() {
    let images = fakeData.map(data => data.images);

    return (
      <div>
        <header>
          <Menu />
        </header>
        <main>
          <ImageList images={fakeData} />
        </main>
        <img src='./images/house1.jpg' />
      </div>
    );
  }
}

export default App;
