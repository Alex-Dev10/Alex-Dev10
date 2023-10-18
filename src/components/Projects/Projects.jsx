import React from "react";
import './styles.css'
import code from '../../Recursos/images/code.jpg'


import projects from '../../Recursos/images/projects.jpg'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import pokedex from '../../Recursos/images/pokedex.png'

export const Projects = () => {
  return (
    <section className="projects" id="section_3">
    <div className="container">
      <div className="row m-3">
        <div class="title_wrap col-lg-8 col-md-8 col-12 ms-auto">
          <div class="section-title-wrap d-flex justify-content-center align-items-center p-4">
            <img src={projects} class="avatar-image img-fluid" alt="" />
            <h2 class="ms-4 mb-0">Projects</h2>
          </div>
        </div>
      </div>
  
      <div class="row">
        <div class="  col-lg-4 col-md-6 col-sm-12">
          <div class="card mb-4">
            <img src={pokedex} class="card-img-top" alt="Pokedex Project" />
            <div class="card-body">
              <h5 class="card-title">Pokedex</h5>
              <p class="card-text">Description of the Pokedex project goes here.</p>
              <div className="Button_container"> 
               <a href="#" class="btn btn-primary">Learn More</a>
               <div className="button_code"> <img src={code} alt="" /> <a href="" className="code" > Code  </a> </div>
               </div>

            
            </div>
          </div>
        </div>
  
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="card mb-4">
            <img src={pokedex} class="card-img-top" alt="Form with Formik Project" />
            <div class="card-body">
              <h5 class="card-title">Form with Formik</h5>
              <p class="card-text">Description of the Form with Formik project goes here.</p>
              <div className="Button_container"> 
               <a href="#" class="btn btn-primary">Learn More</a>
               <div className="button_code"> <img src={code} alt="" /> <a href="" className="code" > Code  </a> </div>
               </div>
            </div>
          </div>
        </div>
  
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="card mb-4">
            <img src={pokedex} class="card-img-top" alt="Fake Store Project" />
            <div class="card-body">
              <h5 class="card-title">Fake Store</h5>
              <p class="card-text">Description of the Fake Store project goes here.</p>
              <div className="Button_container"> 
               <a href="#" class="btn btn-primary">Learn More</a>
               <div className="button_code"> <img src={code} alt="" /> <a href="" className="code" > Code  </a> </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
};
