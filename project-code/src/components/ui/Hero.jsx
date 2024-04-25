
import Image from "next/image";
import setsicon from '../../../public/setsicon.png'
import '../sonum.css'


const Hero = ({imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <p>
           We offer a revolutionary software solution, 
           designed to address procedural delays and equipment 
           mismanagement faced by Texas
           Health Arlington Memorial Hospital in surgical equipment management. 
           We aim to enhance patient safety through a 
           real-time tracking mechanism. 
           Using Radio-Frequency Identification (RFID) technology, 
           the system ensures precise monitoring of the order trays. 


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
