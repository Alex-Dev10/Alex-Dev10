import React from "react";
import "./style.css";
import avatar from "../../Recursos/images/avatar.png";
import profile from "../../Recursos/images/profile.png";
import download from "../../Recursos/images/download.png";
import scrum from "../../Recursos/images/scrum.png";
import { NavComponent } from "../Navbar/NavComponent";

export const Home = () => {
  return (
    
    <section className="Home" id="section_1">


      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-12 InfoSection">
            <h1>Hi THERE!</h1>

            <h2 className="subtitle">
              I’M <span className="name">ALEJANDRO.</span>{" "}
            </h2>
            <span className="carreer">Web Developer</span>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ab
              aut ad praesentium voluptas facere laboriosam, atque, enim in sit
              voluptatum rem porro, delectus officia nulla hic nemo eligendi
              fuga?
            </p>
            <a href="">ABOUT ME</a>
          </div>

        

          <div className="col-lg-6 col-12 ProfileSection ">
            <img
              src={profile}
              className="hero-image img-fluid"
              alt="Home_Picture"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
