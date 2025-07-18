import React from 'react';
import '../project/making.css'

function Jrimg() {

    return(
        <>
        <h1 className='journy'>From Tree to Bottle:</h1> 
        <h2 className='journy'>The Traditional Process Of Making Wood-Pressed Oils And Its Benefits </h2>

        <div>

        <div class ="container">
        <div class="row">
        <div class="col-md-8">
        <div class="image-container">
     
            <img   data-aos="zoom-out-right" className='jurry1' src="/image/cocotree.webp" alt="" />
            <div class="overlay-text">Coconut Tree</div>
            </div>
            </div>
        <div class="col-md-4">
        <div class="image-container">
            <img data-aos="fade-up-left" className='jurry2' src="/image/blackseed.jpg" alt="" />
            <div class="overlay-text">Black Seed</div>
            </div>
            </div>
            </div>
            </div>

            <br />
            
            <div class ="container">
        <div class="row">
        <div class="col-md-4">
        <div class="image-container">
            
            <img   data-aos="zoom-out-right" className='jurry2' src="/image/groundtree.jpg" alt="" />
            <div class="overlay-text">Groundnut</div>
            </div>
        </div>
        <div class="col-md-8">
        <div class="image-container">
            <img data-aos="zoom-out-left" className='jurry1' src="/image/press.jfif" alt="" />
            <div class="overlay-text">Woodpress Process</div>
            </div>
        </div>
        </div>
        </div>
        </div>





        
        </>
    )
    
}

export default Jrimg;