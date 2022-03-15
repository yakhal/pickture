import React from "react";
import Navbar from "../components/NavBar";
import './About.css';
export default function Profile() {
  return (
    <>
    <Navbar/>
    <section className="card">
      <h1 className="about-heading">Profile</h1>
      <p className="about-text">This is the user profile page.</p>
    </section>
    </>
    
  );
}
