
import Image from "next/image";
import setsicon from '../../../public/setsicon.png'
import '../sonum.css'


const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          The Surgical Equipment Tracking System offers a revolutionary software solution, 
          meticulously designed to address the specific challenges faced by Texas
           Health Arlington Memorial Hospital in surgical equipment management. 
           This system targets the root causes of procedural delays and equipment 
           mismanagement, aiming to substantially enhance patient safety through a 
           state-of-the-art real-time tracking mechanism. 
           Utilizing cutting-edge Radio-Frequency Identification (RFID) technology, 
           the system ensures precise monitoring of surgical instruments and devices. 
           Each item is equipped with a passive RFID tag, seamlessly integrated 
           into a robust network of RFID readers positioned across surgical departments.
           The captured data is processed by advanced middleware, culminating in a 
           user-friendly, web-based application for hospital staff. This innovative approach not 
           only streamlines equipment utilization but also
           sets a new standard for operational efficiency and inventory control in healthcare settings.


          </p>
        </div>
        <div className="banner">
          <Image src={imageUrl} alt="hero" className="animated-image" width="auto" />
          {/* <span>
            <Image src = {setsicon} />
          </span> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
