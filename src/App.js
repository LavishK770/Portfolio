import React from "react";
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Project from "./components/Project/Project";
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'
import Schooling from "./components/schooling/Schooling";


function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Schooling/>
      <Project/>
      <Contacts/>
      <Footer/>
    </>
  );
}

export default App;
