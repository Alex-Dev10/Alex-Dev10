import React from "react";
import './style.css'
import avatar from '../../Recursos/images/avatar.png'
import profile from '../../Recursos/images/profile.png'
import download from '../../Recursos/images/download.png'
import scrum from '../../Recursos/images/scrum.png'
import { NavComponent } from "../Navbar/NavComponent";

export const Home = () => {
  return (
    <div >
  

      <section className="Home" id="section_1"> 

   

        
        <div className="container-fluid">
          <div className="row">



            <div className="col-lg-6 col-12 InfoSection">
              <div >

                <div className="AvatarContainer d-flex align-items-center justify-content-center">
                  <img
                    src={avatar}
                    className="avatar-image avatar-image-large img-fluid"
                    alt="Avatar"
                  />
                 <img className=" scrum img-fluid" src={scrum} alt="" />
                </div>

                <h2 className="subtitle">I’m  <span >FULL STACK DEVELOPER.</span> </h2>
                <p className="buttonStart mb-4">
               
                  <a href="" className="btn text-white Resume">  <span>Resume  </span> <img className="img-fluid" src={download} alt="" /> </a>
                </p>
              </div>
            </div>




            <div className="col-lg-6 col-12 ProfileSection img-fluid">
            
              <img src={profile} className="hero-image img-fluid" alt="Home_Picture" />
            </div>

            
          </div>



          
        </div>



      </section>

    </div>
  );
};
