import React from "react";
import "./Index.css"
import { Player, Controls } from '@lottiefiles/react-lottie-player';


function Skill(){

return(

<div className="skills d-flex">


<div className="leftskill">
<Player
          autoplay
          loop
          src="https://lottie.host/53a6d9ca-674b-4002-bd79-f56f7f1678c4/1x87mwah3h.json"
          style={{ height: '500px', width: '500px' }}
        >
          <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />

        </Player>
</div>

<div className="rightskill">

<h3>What I do .</h3> 
<p>CRAZY FRONTEND DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>
<h4>⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications</h4>
<h4> ⚡Integration of third party services such as Firebase</h4>



</div>


</div>


);

}


export default Skill;