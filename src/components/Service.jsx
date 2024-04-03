import React from 'react';
import  './Service.css';
import slide_image_1 from '../assets/img.jpeg';
import slide_image_2 from '../assets/img_2.jpeg';
import slide_image_3 from '../assets/img_3.jpeg';
import slide_image_4 from '../assets/img_4.jpeg';
import slide_image_5 from '../assets/img_5.jpeg';
import slide_image_6 from '../assets/img6.jpeg';

const Service = () => {
  return (
    <div className='service'>
          <p className="title">What We Bring :</p>
      <div className='service_box'>
   
          <div className='service_box_item' >

            <img src={slide_image_1} alt='img1' />
            <p className='service_box_item_step'>
              <span>Step 1</span>
            </p>
            <h3>Filter & Discover</h3>
            <p>Find your event based on venue, interest, etc.</p>
          </div>


          <div className='service_box_item' >

            <img src={slide_image_2} alt='img1' />
            <p className='service_box_item_step'>
              <span>Step 2</span>
            </p>
            <h3>Filter & Discover</h3>
            <p>Find your event based on venue, interest, etc.</p>
          </div>


          <div className='service_box_item'>

            <img src={slide_image_3} alt='img1' />
            <p className='service_box_item_step'>
              <span>Step 3</span>
            </p>
            <h3>Filter & Discover</h3>
            <p>Find your event based on venue, interest, etc.</p>
          </div>


          <div className='service_box_item'>

<img src={slide_image_3} alt='img1' />
<p className='service_box_item_step'>
  <span>Step 3</span>
</p>
<h3>Filter & Discover</h3>
<p>Find your event based on venue, interest, etc.</p>
</div>


<div className='service_box_item'>

<img src={slide_image_3} alt='img1' />
<p className='service_box_item_step'>
  <span>Step 3</span>
</p>
<h3>Filter & Discover</h3>
<p>Find your event based on venue, interest, etc.</p>
</div>

<div className='service_box_item' >

            <img src={slide_image_2} alt='img1' />
            <p className='service_box_item_step'>
              <span>Step 2</span>
            </p>
            <h3>Filter & Discover</h3>
            <p>Find your event based on venue, interest, etc.</p>
          </div>
       
      </div>
    </div>
  );
};

export default Service;
