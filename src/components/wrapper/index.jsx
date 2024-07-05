"use client";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../footer";
import Header from "../header";
import React, { useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

const Wrapper = ({ children }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <ParallaxProvider>
      <main style={{ overflowX: "hidden" }}>
        <Header />
        {children}
        <Footer />
      </main>
    </ParallaxProvider>
  );
};
export default Wrapper;
