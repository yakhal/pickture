import React from "react";
import Navbar from "../components/NavBar";
import './About.css'
export default function About() {
  return (
    <>
    <Navbar/>
    <section className="card">
      <h1 className="about-heading">About</h1>
      <p className="about-text">App created by Prakhar Rastogi</p>
    </section>
    </>
    
  );
}
