'use client'
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portofolio";
import { Main } from "next/document";


export default function Home() {

  return (
    <>
      <Navbar/>
      <Header/>
        <Portfolio/>
        <About/>
        <Contact/>
      <Footer/>
    </>
  );
}
