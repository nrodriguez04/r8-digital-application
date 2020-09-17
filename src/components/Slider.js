import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';

//styles
import '../styles/_slider.scss';

export default class CustomSlider extends Component {
  render() {
    const settings =  {
      arrows: false,
      autoplay: true,
      autoplaySpeed: 6000,
      dots: true,
    };
    return (
      <div className="slider">
        <Slider { ...settings }>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
        </Slider>
      </div>
    );
  }
};