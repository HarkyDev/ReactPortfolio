import React from 'react';
import "../styles/Project.css"
import { FaGithub, FaGlobe } from 'react-icons/fa';




export default function ProjectList({ projects  }) {

  
  return (
    <div class="projectContainer">
      {projects.map((project) => (
        <div class="projectCard" id="Projects"> 
         <p class="projectName">{`${project.name}`} </p>
         <p class="projectLink">{`${project.about}`} </p>
         <div class="buttonCon">
          {project.site !== "" && <a href={project.site} class="siteLink">
          <FaGlobe />
          </a>}
          

          <a href={project.git} class="gitLink">
          <FaGithub />
          </a>

         </div>
        </div>
        ))}
    </div>
  );
}


