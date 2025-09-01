// import React, { useState } from "react";
// import Project from "./project";
// import INFO from "../../data/user";
// import "./styles/allProjects.css";

// const AllProjects = () => {
//   const [selectedProject, setSelectedProject] = useState(null);

//   return (
//     <div className="all-projects-container">
    
//       {INFO.projects.map((project, index) => (
//         <div
//           className="all-projects-project"
//           key={index}
//           onClick={() => setSelectedProject(project)}
//           style={{ cursor: "pointer" }}
//         >
//           <Project
//             logo={project.logo}
//             title={project.title}
//             description={project.shortDescription} 
//           />
//         </div>
//       ))}

     
//       {selectedProject && (
//         <div className="project-details-overlay">
//           <div className="project-details">	
//             <button
//               className="close-btn"
//               onClick={() => setSelectedProject(null)}
//             >
//               ✖
//             </button>
//             <h2>{selectedProject.title}</h2>
//             <img
//               src={selectedProject.logo}
//               alt={selectedProject.title}
//               className="project-logo"
//             />
//           <div
//   className="project-readme"
//   dangerouslySetInnerHTML={{ __html: selectedProject.fullDescription }}
// 			/>
//             <a
//               href={selectedProject.link}
//               target="_blank"
//               rel="noreferrer"
//               className="project-link"
//             >
//               {selectedProject.linkText}
//             </a>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AllProjects;

import React from "react";
import Project from "./project";
import INFO from "../../data/user";
import "./styles/allProjects.css";

const AllProjects = () => {
  return (
    <div className="all-projects-container">
      {INFO.projects.map((project, index) => (
        <div className="all-projects-project" key={index}>
          <Project
            id={index} // 🔑 pass index as id
            logo={project.logo}
            title={project.title}
            description={project.shortDescription}
          />
        </div>
      ))}
    </div>
  );
};

export default AllProjects;
