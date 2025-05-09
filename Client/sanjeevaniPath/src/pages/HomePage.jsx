import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ForPatients from "../components/ForPatients";
import ForDoctors from "../components/ForDoctors";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const HomePage = () => (
  <div className="App">
    <Navbar />
    <section id="Hero">
      <Hero />
    </section>
    <section id="features">
      <Features />
    </section>
    <section id="AboutUs">
      <ForPatients />
      <ForDoctors />
    </section>
    <section id="ContactUs">
      <ContactUs />
    </section>
    <Footer />
  </div>
);

export default HomePage;
