import React from "react";
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
// import Services from './components/services/Services'
import Project from "./components/Project/Project";
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'


function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Services/> */}
      <Project/>
      <Contacts/>
      <Footer/>
    </>
  );
}

export default App;
