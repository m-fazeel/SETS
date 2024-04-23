"use client";

import React from "react";
import Image from "next/image";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { Grid, Card, Text } from '@nextui-org/react';
import Hero from "../components/ui/Hero";
import Biography from "../components/ui/Biography";



const Home = () => {
  

  return (
    <>
      <Hero
        title={"Learn More About Us | Surgical Equipment Tracking System"}
        imageUrl={"../assets/setsicon.png"}
      />
      
      <Biography imageUrl={"/assets/setsicons.png"} 
      />
    </>
  );
};

export default Home;