"use client";
 
import Image from "next/image";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { Grid, Card, Text } from '@nextui-org/react';
import img from '../../public/setsicon.png'
import img2 from '../../public/fazeelpic.jpeg'
import img3 from '../../public/sonumpic.jpeg'
import img4 from '../../public/rachpic.jpeg'
import Hero from "../components/ui/Hero";
import Biography from "../components/ui/Biography";

 
 
 
const Home = () => {
 
  return (
    <div className="flex flex-col">
 
 <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      About Us
      </header>
      
 
      {/* <Image src={img } alt="hero" width={500} height={500} /> */}

      <Hero
        title={"Surgical Equipment Tracking System"}
        imageUrl={img}
      />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
          <h2>Meet Team TheatreOps</h2>
      </div>

      <Biography imageUrl={img2} />

      <div className="container biography">
        <div className="banner">
          <Image src={img3} alt="whoweare" />
        </div>
        <div className="banner">
        <h3>Wasif Swapnil</h3>
          <p>
          //add his description once you get it and update picture too
          </p>
          <p>
            //add what he has worked on
          </p>
        </div>
      </div>


      <div className="container biography">
        <div className="banner">
          <Image src={img3} alt="whoweare" />
        </div>
        <div className="banner">
        <h3>Sonum</h3>
          <p>
          Meet Sonum, a senior at The University of Texas at Arlington, pursuing a bachelor's degree in Computer Science. 
          With a strong focus on Analytics, Data Science, and Data Visualization, Sonum holds certifications in SQL, 
          White Belt in Lean Six Sigma, and career readiness, showcasing her dedication to professional development 
          and mastery in her field. Sonum loves working on visulizing datasets and extract meaningful insights.
          </p>
          <p>
            //add what she has worked on
          </p>
        </div>
      </div>

      <div className="container biography">
        <div className="banner">
          <Image src={img3} alt="whoweare" />
        </div>
        <div className="banner">
        <h3>Hanumath Ponnaluri</h3>
          <p>
          //add his description once you get it and update picture too
          </p>
          <p>
            //add what he has worked on
          </p>
        </div>
      </div>

      <div className="container biography">
        <div className="banner">
          <Image src={img4} alt="whoweare" />
        </div>
        <div className="banner">
        <h3>Rachana Pandey</h3>
          <p>
          Rachana Pandey, a rising senior at The University of Texas at Arlington majoring in Computer Science, 
          excels in both technical expertise and leadership. She leverages her comprehensive 
          skills from the honors college to drive successful outcomes in diverse technical platforms. Her leadership 
          is further exemplified by her roles as Vice-President of the Engineering Student Council and former President 
          of the National Society of Leadership and Success at UTA, where she has effectively guided team projects and 
          initiatives, demonstrating a keen ability to lead, mentor, and innovate within the tech community.

          </p>
          <p>
            //add what she has worked on
          </p>
        </div>
      </div>

      <div className="container biography">
        <div className="banner">
          <Image src={img3} alt="whoweare" />
        </div>
        <div className="banner">
        <h3>Ammar Baig</h3>
          <p>
          //add his description once you get it and update picture too
          </p>
          <p>
            //add what he has worked on
          </p>
        </div>
      </div>


 
 
    </div>
 
 
  
  );
}
 
export default Home;