import React from "react";
import "./style.css";
import avatar from "../../Recursos/images/avatar.png";
import picture from "../../Recursos/images/picture.jpg";

export const About = () => {
  return (
    <section className="about" id="section_2">
      <div className="container">


        <div className="row">
          <div className="col-lg-4 col-12">
            <img src={picture} className="picture img-fluid" alt="" />
            <div className="SoftSkills">
            <h3 className=" text-center mt-5">Soft Skills </h3>
            
            <p className="text-center"><strong>Teamwork</strong></p>
            <p className="text-center"><strong>Adaptability</strong></p>
            <p className="text-center"><strong>Problem Solving</strong></p>
            <p className="text-center"><strong>Critical Thinking</strong></p>

            </div>
          </div>

          <div className="col-lg-8 col-12 mt-5 mt-lg-0">
            <div className="about-info">
              <div className="avatar-wrap d-flex justify-content-end align-items-center mb-4">
                <h2 className="text-white me-4 mb-0">About me</h2>
                <img src={avatar} className="avatar img-fluid" alt="" />
              </div>
              <h3 className="pt-2 mb-3">Who am I?</h3>
              <p>
                "I'm 25 years old and I really enjoy learning and growing. I
                always seek out challenges to improve myself. What drives me is
                my desire and excitement to take on new challenges. I truly
                believe that every experience is an opportunity to learn and
                progress.
              </p>
              <p>
                My positive attitude and my focus on becoming better in my
                personal and professional life inspire me to always give my best
                and enthusiastically embrace any project I undertake. My
                commitment is to keep getting better at what I do and working
                well with others to achieve important goals."
              </p>

              <h3 className="pt-2 mb-3">Why you should hire me?</h3>
              <p>
                "You should hire me because I'm passionate about learning and
                always seeking growth. My positive attitude and determination
                make me a valuable team player. Every experience is an
                opportunity to improve, and I'm committed to giving my best and
                working as a team to achieve goals. My energy and desire for
                continuous growth make me the ideal candidate."
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 col-12"></div>
            <h3 className="text-center mt-5"> Skills</h3>

            <div className=" ContainerSkill col-lg-4  col-12">
              <h4 className=" text-center"> Front End</h4>

              <div className="FrontEnd">
                <i className="fa-brands fa-html5 fa-2xl"></i>
                <i className="fa-brands fa-css3-alt fa-2xl"></i>
                <i className="fa-brands fa-square-js fa-2xl"></i>
                <i className="fa-brands fa-react fa-2xl"></i>
                <i class="fa-brands fa-bootstrap fa-2xl"></i>
              </div>

              <p className="text-center">
                <strong>Intermediate</strong>
              </p>
            </div>

            <div className=" ContainerSkill col-lg-4  col-12 ">
              <h4 className=" text-center"> Back End</h4>
              <div className="BackEnd">
                <i className="fa-brands fa-php fa-2xl"></i>
                <i className="fa-brands fa-laravel fa-2xl"></i>
                <i className="fa-solid fa-database fa-2xl"></i>
              </div>

              <p className="text-center">
                {" "}
                <strong>Basic</strong>
              </p>
            </div>

            <div className=" ContainerSkill col-lg-4  col-12">
              <h4 className=" text-center">Version Control</h4>

              <div className="VersionControl">
                <i className="fa-brands fa-git fa-2xl"></i>
                <i className="fa-brands fa-github fa-2xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
