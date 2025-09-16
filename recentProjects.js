const projects = [
    {
      title: "GIS",
      shortDescription: "A geographical information system application for navigation.",
      longDescription: "Part of a small team that designed, developed, and delivered a fully implemented GIS with a user interface in C++. Utilized OpenStreetMap (OSM) database to provide detailed and accurate mapping data. Applied and optimized Dijkstra’s and A* algorithms to calculate the shortest path between a series of points. Utilized Git for version control, enabling seamless collaboration and various code tracks and branches within the project.",
      tools: "C++",
      img: "/assets/img/project-blog-logo.jpg",
      linkLive: "",
      linkSource: ""
    },
    {
      title: "Game Design",
      shortDescription: "Video game created in CPUlator using C.",
      longDescription: "Designed and developed a fully functional game in C, integrating external hardware components such as switches, push buttons, and a hex display to control and interact with the game, highlighting expertise in hardware-software interfacing.",
      tools: "C, CPUlator",
      img: "/assets/img/project-music-player.png",
      linkLive: "",
      linkSource: ""
    },
    {
      title: "Item Tracker",
      shortDescription: "Application to store Item data.",
      longDescription: "Developed an application, using C++, designed to track and manage comprehensive home item and appliance information. Implemented an interface enabling users to input, store, filter, and search appliance information based on various criteria.",
      tools: "C++",
      img: "/assets/img/project-quizup-logo-1.png",
      linkLive: "",
      linkSource: ""
    },
    {
      title: "Library Database",
      shortDescription: "Database for storing information on books and clients.",
      longDescription: "Designed and implemented a database that stores information on books and user book interactions.",
      tools: "Database design",
      img: "/assets/img/project-aim_bert-bias.png",
      linkLive: "",
      linkSource: ""
    }
  ];
  
  let currentIndex = 0;
  
  function displayProject(project) {
    const container = document.getElementById("projects-row");
  
    const projectHTML = `
      <div class="col s12 m6 l4">
        <div class="card medium">
          <div class="card-image waves-effect waves-block waves-light">
            <img alt="${project.title}" src="${project.img}" style="height: 100%; width: 100%" class="activator" />
          </div>
          <div class="card-content">
            <span class="card-title activator teal-text hoverline">
              ${project.title}
              <i class="mdi-navigation-more-vert right"></i>
            </span>
            <p>${project.shortDescription}</p>
          </div>
          <div class="card-reveal">
            <span class="card-title teal-text">
              <small>Accomplishments</small>
              <i class="mdi-navigation-close right"></i>
            </span>
            <p>${project.longDescription}</p>
            <ul>
              <li><b>Tools:</b> ${project.tools}</li>
            </ul>
            <div class="card-action">
              ${project.linkLive ? 
                `<a href="${project.linkLive}" target="_blank" class="btn-floating btn-large waves-effect waves-light blue-grey">
                  <i class="fa fa-external-link"></i>
                </a>` 
                : ""
              }
              ${project.linkSource ? 
                `<a href="${project.linkSource}" target="_blank" class="btn-floating btn-large waves-effect waves-light blue-grey">
                  <i class="fa fa-github"></i>
                </a>` 
                : ""
              }
            </div>
          </div>
        </div>
      </div>
    `;
  
    container.insertAdjacentHTML("beforeend", projectHTML);
  }
  
  function loadNextProject() {
    if (currentIndex < projects.length) {
      displayProject(projects[currentIndex]);
      currentIndex++;
    } else {
      document.getElementById("load-more-btn").disabled = true;
      document.getElementById("load-more-btn").innerText = "No More Projects";
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    loadNextProject(); // display the first project initially
  });
  