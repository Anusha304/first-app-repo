import React from 'react';

const About = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">About Us</h2>
      <p className="text-center">
        At the Pizza Store, we’re passionate about bringing you the finest pizzas made from the freshest ingredients.
        Whether you're a fan of classic flavors or looking for something unique, we’ve got it all!
      </p>
      <div className="row mt-4">
        <div className="col-md-6">
          <h5>Our Story</h5>
          <p>
            Established in 2023, we’ve grown to become a favorite spot for pizza lovers. Our recipes have been crafted
            with love and a commitment to quality.
          </p>
        </div>
        <div className="col-md-6">
          <h5>Our Mission</h5>
          <p>
            We strive to deliver great taste and happiness with every slice. Our pizzas are made fresh daily, ensuring
            top quality in every bite.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
