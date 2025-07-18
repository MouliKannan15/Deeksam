import React from "react";
import '../project/frontp.css'


function Pro () {
    
    return (
        <>
        <h1 className="ftitle">Our Product's</h1>

       
            <div class ="container">
                <div class="row">
                    <div class="col-md-4">
            <img  data-aos="flip-left" className="img1" src="/image/checkse.png" alt="" />
            <div class="overlay"> Deeksam Woodpressed Sesame Oil</div>
            </div>
            
            
            <div class="col-md-4">
            <img  data-aos="flip-left" className="img1" src="/image/checkcoco.png" alt="" />
            <div class="overlay"> Deeksam Woodpressed Coconut Oil</div>
           
            </div>

            
            <div class="col-md-4">
            <img  data-aos="flip-left" className="img1" src="/image/checkgrnd.png" alt="" />
            <div class="overlay"> Deeksam Woodpressed Groundnut Oil</div>
            
        </div>
        </div>
        </div>
    
        </>
    )
}

export default Pro;




