import React from "react";
import "./OurStory.css";
import ann from './assets/images/ann.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';


function OurStory() {
  return (
    <div className="container story">
      <div className="row align-items-center">
        {/* Image on the left */}
        <div className="col-md-6 storyImg" style={{backgroundImage: `url(${ann})`,}}>
       
         
        </div>
        {/* Text on the right */}
        <div className="col-md-6 text">
          <h1>Our Story</h1>
          <p>
            J-aura is a design studio creating everlasting, minimalist jewelry
            inspired by timelessness. Founded by designer Annamaria Mikulik, the
            project of a commercially produced jewelry collection started in
            2018. All of the pieces are hand fabricated or cast using the
            lost-wax casting process. J-aura uses silver that is coated in a high
            grade 14k gold plating. The collection is focusing on becoming an
            attainable luxury.
          </p>
        </div>
      </div>
     
    </div>
  );
}

export default OurStory;
