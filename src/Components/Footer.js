import React from "react";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { AiFillLinkedin, AiFillGithub, AiFillFacebook, AiFillTwitterCircle, AiOutlineMail,AiOutlineHeart,} from "react-icons/ai";


export default function Footer(){
    return(
        
        <div className="footer">

            <div className="foot"></div>

           
            <div className="foot">
            <h1 style={{textAlign:"center"}}>Contact Us</h1>
            <Player
          autoplay
          loop
          src="https://lottie.host/2f1ac140-0b31-4e35-8dfe-1f36c621f91a/7Sh6DYeqdF.json"
          style={{ height: '100px', width: '100px' }}
        >
          <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />

        </Player>


            </div>
            <div className="footh1">
            <h2 style={{textAlign:"center"}}>DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL</h2>
        <h2 style={{textAlign:"center"}}>+917017338727, +918171769511</h2>
        <h2 style={{textAlign:"center"}}>bloghimanshu57@gmail.com  Hnagar454@gmail.com</h2>
            </div>

            <div className="footicon">

<h1><AiFillGithub/></h1>
<h1><AiFillLinkedin /></h1>
<h1><AiFillFacebook/></h1>
<h1><AiFillTwitterCircle/></h1>
<h1><AiOutlineMail/></h1>
</div>

<div className="foot"></div>

           
<div className="foot">
<h1 style={{textAlign:"center"}}>Made ❤️ by Himanshu Nagar</h1> 
</div>

        </div>
       

    )

}