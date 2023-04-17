import React from 'react';
import leftImage from './left-image.jpg';
import rightImage from './right-image.jpg';

const Home: React.FC = () => {
  return (
    <div className="row">
      <div className="col-md-6">
      <img src={leftImage} alt="Left Image" className="mx-auto d-block img-fluid" />
      </div>
      <div className="col-md-6">
      <h1 style={{ color: "Red" }}>Red Bull</h1>
        <p style={{ textAlign: "justify" }}>Red Bull can be called as a pioneer in the energy drink category worldwide. In India too, Red Bull was the brand that created the energy drink category. The brand came into existence in 1987. Red Bull Energy Drink is a functional beverage. Thanks to unique combination of high quality ingredients Red Bull Energy Drink vitalizes body and mind. Red Bull Energy Drink has been developed for people who want to have a clear and focused mind, perform physically, are dynamic and performance-oriented whilst also balancing this with a fun and active lifestyle.</p>
      </div>
      <div className="col-md-6">
        <h1 style={{ color: "green" }}>Monster Energy</h1>
        <h2>The Original Green Monster Energy</h2>
        <p style={{ textAlign: "justify" }}>Tear into a can of the meanest energy drink on the planet, Monster Energy.
          It's the ideal combo of the right ingredients in the right proportion to deliver the big bad buzz that only Monster can.
          Monster packs a powerful punch but has a smooth easy drinking flavor.
          Athletes, musicians, anarchists, co-eds, road warriors, metal heads, geeks, hipsters, and bikers dig it - you will too.
          Flavor Profile: Sweet and Salty - It tastes like Monster!
        </p>
      </div>
      
      <div className="col-md-6">
      <img src={rightImage} alt="Right Image" className="mx-auto d-block img-fluid" />
      </div>
    </div>
  );
};

export default Home;
