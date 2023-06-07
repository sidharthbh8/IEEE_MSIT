import React from 'react'
import "./MoreEventsComponent.css"
import c1 from "../../Assets/c1.png"
import c2 from "../../Assets/c2.png"
import c3 from "../../Assets/c3.png"

const MoreEventsComponent = () => {
  return (
    <div> <div class="container4">
    <div class="title2">
        <h1>Events you may also like</h1>
    </div>
    <div class="cards">
        <div class="cont">
                 <div class="card">
                    <div class="img">
                       <img src={c1}/>
                    </div>
                    <div class="top-text">
                       <div class="name">
                       <center><h5>IBM Training Cum Internship program</h5></center>
                       </div>
                    </div>
                 </div>
                 <div class="card">
                    <div class="img">
                       <img src={c2}/>
                    </div>
                    <div class="top-text">
                       <div class="name">
                        <center><h5>DSA in Real Systems</h5></center>
                       </div>
                    </div>
                 </div>
                 <div class="card">
                    <div class="img">
                       <img src={c3}/>
                    </div>
                    <div class="top-text">
                       <div class="name">
                        <center><h5>ZUNO Dream Internship</h5></center>
                       </div>
                    </div>
                 </div>
              </div>
        
    </div>
 </div>
</div>
  )
}

export default MoreEventsComponent