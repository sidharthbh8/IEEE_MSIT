import React from 'react'
import "./MoreEventsComponent.css"
import c1 from "../../Assets/c1.png"
import c2 from "../../Assets/c2.png"
import c3 from "../../Assets/c3.png"

const MoreEventsComponent = () => {
   return (
      <div> <div className="container4">
         <div className="title2">
            <h1>Events you may also like</h1>
         </div>
         <div className="cards">
            <div className="cont">
               <div className="card">
                  <div className="img">
                     <img src={c1} />
                  </div>
                  <div className="top-text">
                     <div className="name">
                        <center><h5>IBM Training Cum Internship program</h5></center>
                     </div>
                  </div>
               </div>
               <div className="card">
                  <div className="img">
                     <img src={c2} />
                  </div>
                  <div className="top-text">
                     <div className="name">
                        <center><h5>DSA in Real Systems</h5></center>
                     </div>
                  </div>
               </div>
               <div className="card">
                  <div className="img">
                     <img src={c3} />
                  </div>
                  <div className="top-text">
                     <div className="name">
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