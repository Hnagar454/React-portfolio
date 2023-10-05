import React from "react";
import { Player, Controls } from '@lottiefiles/react-lottie-player';

function proficiancy() {

    return (

        <div className="profi">

            <div className="rightpro">
                
        <h1> Proficiancy</h1>


        <h4>HTML</h4>
        <div className="progress">

  <div className="progress-bar prograsb" role="progressbar"  aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<h4>CSS</h4>
        <div className="progress">

  <div className="progress-bar prograsb"     role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<h4>JavaScript</h4>
        <div className="progress">

  <div className="progress-bar prograsb" role="progressbar"  aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<h4>React JS </h4>
        <div className="progress">

  <div className="progress-bar prograsb" role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<h4>Bootstrap</h4>
        <div className="progress">

  <div className="progress-bar prograsb" role="progressbar"  aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
</div>
            </div>

            <div className="leftpro">
            <Player
          autoplay
          loop
          src="https://lottie.host/53a6d9ca-674b-4002-bd79-f56f7f1678c4/1x87mwah3h.json"
          style={{ height: '600px', width: '900px' }}
        >
          <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />

        </Player>
            </div>


        </div>


    )




}

export default proficiancy