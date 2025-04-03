import React from 'react'
import './App.css'
import Header from './Header'
import ImageContainerRectangle from './Image_container_Rectangle'
import Contactus from './Contactus'
import video from './assets/My logo.mp4'
function App() {
  
  return (
    <>
      <div className="video">
        <video src={video} autoPlay loop muted playsInline></video>
      </div>
      <Header></Header>
      <ImageContainerRectangle></ImageContainerRectangle>
      <Contactus></Contactus>
    </>
  )
}

export default App
