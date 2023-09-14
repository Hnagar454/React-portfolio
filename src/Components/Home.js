import React from "react";
import { Player, Controls } from '@lottiefiles/react-lottie-player';

 function Home() {
  return (
<>
    <div className="home">

      <div className="R-div">
        <h1>Hi,I'm Himanshu Nagar 👋</h1>
        <p><h3>A passionate Frontend Developer 🚀 having an experience of  </h3></p>
        <p><h4>building Web with JavaScript / Reactjs / and some other</h4></p>

        <a href="./files/Roadmap.txt" download="Resume">
          <button className="btn btn-primary">Download CV</button>
        </a>
        <button className="btn btn-primary">Contact Me </button>

      </div>
      <div className="l-div">

        <Player
          autoplay
          loop
          src="https://lottie.host/db7e97ee-5c1b-44d7-8c11-0a2450d9cbbe/TRSSK4nm4C.json"
          style={{ height: '400px', width: '400px' }}
        >
          <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />

        </Player>

      </div>
    </div>
    </>
  );
}


export default Home