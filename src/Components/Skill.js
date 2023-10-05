import React from "react";
import "./Index.css"
import { DiReact, DiHtml5, DiJsBadge, DiSass, DiNpm, DiNodejs, DiBootstrap } from "react-icons/di";
import { Player, Controls } from '@lottiefiles/react-lottie-player';


function Skill(){

return(

<div className="skills d-flex">


<div className="leftskill">
<Player
          autoplay
          loop
          src="https://lottie.host/d210f4ec-1311-4a55-98c9-8f4d50dde60f/MVpaD4KfHC.json"
          style={{ height: '600px', width: '600px' }}
        >
          <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />

        </Player>
</div>

<div className="rightskill">

<h1>What I do .</h1> 
<p>CRAZY FRONTEND DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>
<h4>⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications</h4>
<div className="icon">

<h1><DiHtml5/></h1>
<h1><DiReact /></h1>
<h1><DiJsBadge/></h1>
<h1><DiSass/></h1>
<h1><DiNpm/></h1>
<h1><DiBootstrap/></h1>
<h1><DiNodejs/></h1>
</div>
<h4> ⚡Integration of third party services such as Firebase</h4>



</div>


</div>


);

}


export default Skill;