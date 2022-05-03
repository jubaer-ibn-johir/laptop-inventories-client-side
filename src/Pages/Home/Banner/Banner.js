import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../images/banner/laptop-acer.png';
import banner2 from '../../../images/banner/laptop-mac.png';
import banner3 from '../../../images/banner/laptop-dell.png';

const Banner = () => {

    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Apple MacBook Air</h3>
          <p >The Apple MacBook Air (M1, 2020) isn't just the best laptop Apple has ever made, it's the best laptop money can buy right now. This is the first time a MacBook has topped our list, but the MacBook Air (M1, 2020) is worthy of this spot.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Dell XPS 13</h3>
          <p>At this point, we doubt that the Dell XPS line can do anything wrong. Its yearly updates have consistently made it into our best laptops list, and they’re only getting better. The Dell XPS 13 (2020) is not only a gorgeous piece of kit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Acer Swift 3</h3>
          <p >
          Beyond the Acer Swift 3's modest exterior, you'll find an excellent laptop that boasts plenty of power for work and study. The Swift 3 (not to be confused with the Switch 3 another laptop from Acer) is an inexpensive laptop.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
};

export default Banner;