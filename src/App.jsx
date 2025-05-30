import React from 'react'
import './App.css'
import Header from './Header'
import ImageContainerRectangle from './Image_container_Rectangle'
import Contactus from './Contactus'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import video from './assets/My logo.mp4'
import Contact_form from './Contact_form'
import Welcome from './Welcome'
function App() {

  return (
    <>
      <Welcome></Welcome>
      <div id="home">
        <div className="video">
          <video src={video} autoPlay loop muted playsInline />
        </div>
        <div className="Arrow-navigate">
          <a href="#home"><FontAwesomeIcon icon={faArrowUp} className="arrow-icon" /></a>
        </div>
      </div>
      <Header></Header>
      <ImageContainerRectangle></ImageContainerRectangle>
      <Contact_form></Contact_form>
      <Contactus></Contactus>
    </>
  )
}

export default App
