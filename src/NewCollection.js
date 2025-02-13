import React from 'react';
import collec from './assets/images/br.jpg';
import collecc from './assets/images/colle2.jpg';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NewCollection.css'; 

const ImageTextComponent = () => {
const [message,setMessage]=useState('');

const handelNotifyClick=(itemName)=> {
  setMessage(`You will be notified when ${itemName} is available!`);
  setTimeout(()=>setMessage(''),3000);
};
 
  return (
    <div className="container">
      {message && <div className="alert alert-success text-center">{message}</div>}
      <h2 className="text-center">Our New jewelry </h2>
      <h6>Coming Soon!</h6>
      <p className="text-center parag">A stunning new collection of elegant and luxurious jewelry is coming soon. Stay tuned for the launch!</p>
      
      <div className="row">
        {/* First Row */}
        <div className="col-12 col-md-6 d-flex align-items-center cadre">
          <div className="image-container" style={{ backgroundImage: `url(${collec})`, }}></div>
          <div className="text-container d-flex flex-column  forText">
           
            <h1 className="title">Rose & gold bracelet</h1>
            <p className="par">Simple golden bracelet for everyday wear</p>
            <button className=" btn NotifyBtn" onClick={()=> handelNotifyClick('Rose Gold Bracelet')}>Notify Me</button>
          </div>
        </div>
        
        {/* Second Row */}
        <div className="col-12 col-md-6 d-flex align-items-center cadre">
          <div className="image-container" style={{ backgroundImage: `url(${collecc})`, }}></div>
          <div className="text-container d-flex flex-column  forText">
          
            <h1 className="title">Golden spike rings</h1>
            <p className="par">Rings that fit your hands with classic vibe</p>
            <button className=" btn NotifyBtn" onClick={() => handelNotifyClick('Golden Spike Rings')} >Notify Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ImageTextComponent;