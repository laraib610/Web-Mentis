const webservices = [
    {
        heading: "Content management system",
        image: "/assets/web-Icons/CMS.png",
        description: "Empower businesses to take control of their digital presence by providing flexible platform for managing website content without the need for technical expertise."
    },
    {
        heading: "Ecommerce",
        image: "/assets/web-Icons/Ecommerce.png",
        description: "Designed to help businesses of all sizes build, launch, and optimize their online shops to drive sales, enhance customer experience"
    },
    {
        heading: "Website maintenance",
        image: "/assets/web-Icons/maintenance.png",
        description: "Keep your website fully functional, up-to-date, and optimized to meet the changing needs of your business and users."
    },
];
const UItechnology = [
    {
        id: 'frontend',
        heading: "Frontend",
        techs:[
            {
                heading: "Html 5",
                image: "/assets/UI-Icons/html-5.png",
                class: " col-lg-4 "
            },
            {
                heading: "CSS",
                image: "/assets/UI-Icons/testing.svg",
                class: " col-lg-4 "
            },
            {
                heading: "JS",
                image: "/assets/UI-Icons/testing.svg",
                class: " col-lg-4 "
            },
            {
                heading: "Bootstrap",
                image: "/assets/UI-Icons/bootstrap.png",
                class: " col-lg-4 "
            },
            {
                heading: "React",
                image: "/assets/UI-Icons/react.png",
                class: " col-lg-4"
            },
            {
                heading: "Angular",
                image: "/assets/UI-Icons/testing.svg",
                class: " col-lg-4"
            },
            {
                heading: "Vue JS",
                image: "/assets/UI-Icons/testing.svg",
                class: " col-lg-4"
            },
            
            {
                heading: "Figma",
                image: "/assets/UI-Icons/figma.svg",
                class: " col-lg-4"
            },
            {
                heading: "Adob XD",
                image: "/assets/UI-Icons/adobexd.svg",
                class: " col-lg-4"
            },
            {
                heading: "Tailwind CSS",
                image: "/assets/UI-Icons/testing.svg",
                class: " col-lg-6"
            },
        
        ],
    },
    {
        id: 'backend',
        heading: "Backend",
        techs: [
            {
                heading: "PHP",
                image: "/assets/UI-Icons/testing.svg",
                class: " col-lg-4 "
            },
            {
                heading: "Python",
                image: "/assets/software/python.png",
                class: " col-lg-4 "
            },
            {
                heading: "NodeJS",
                image: "/assets/UI-Icons/testing.svg",
                class: " col-lg-4 "
            },
            {
                heading: "Ruby",
                image: "/assets/UI-Icons/testing.svg",
                class: " col-lg-4 "
            },
            {
                heading: "Java",
                image: "/assets/software/java.png",
                class: " col-lg-4"
            },
            {
                heading: "Laravel",
                image: "/assets/UI-Icons/testing.svg",
                class: " col-lg-4"
            },
            {
                heading: "Django",
                image: "/assets/UI-Icons/testing.svg",
                class: " col-lg-4"
            },
            {
                heading: "Express.js",
                image: "/assets/UI-Icons/testing.svg",
                class: " col-lg-4"
            },
            {
                heading: "Spring Boot",
                image: "/assets/UI-Icons/testing.svg",
                class: " col-lg-4"
            },
            {
                heading: "Ruby on Rails",
                image: "/assets/UI-Icons/testing.svg",
                class: "col-lg-6"
            },
        
        ],
    },
    {
        id: 'Database',
        heading: "Database",
        techs:[
            {
                heading: "MySQL",
                image: "/assets/software/mysql-database.png",
                class: " col-lg-4 "
            },
            {
                heading: "PostgreSQL",
                image: "/assets/UI-Icons/testing.svg",
                class: " col-lg-4 "
            },
            {
                heading: "SQL Server",
                image: "/assets/UI-Icons/testing.svg",
                class: " col-lg-4 "
            },
            {
                heading: "MongoDB",
                image: "/assets/software/mongodb.svg",
                class: " col-lg-4 "
            },
            {
                heading: "Firebase",
                image: "/assets/software/firebase.png",
                class: " col-lg-4"
            },
            {
                heading: "Redis",
                image: "/assets/UI-Icons/testing.svg",
                class: " col-lg-4"
            },
        
        ],
    },
    {
        id: 'API',
        heading: "API & Communication",
        techs: [
            {
                heading: "RESTful APIs",
                image: "/assets/UI-Icons/testing.svg",
                class: " col-lg-4 "
            },
            {
                heading: "GraphQL",
                image: "/assets/UI-Icons/testing.svg",
                class: " col-lg-4 "
            },
            {
                heading: "WebSockets",
                image: "/assets/UI-Icons/testing.svg",
                class: " col-lg-4 "
            },
        
        ],

    },
    {
        id: 'deployment',
        heading: "DevOps & Deployment",
        techs: [
            {
                heading: "AWS",
                image: "/assets/saas/aws.png",
                class: " col-lg-4 "
            },
            {
                heading: "Azure",
                image: "/assets/saas/azure.png",
                class: " col-lg-4 "
            },
            {
                heading: "Google Cloud",
                image: "/assets/saas/google-cloud.png",
                class: " col-lg-4 "
            },
            {
                heading: "DigitalOcean",
                image: "/assets/UI-Icons/testing.svg",
                class: " col-lg-4 "
            },
            {
                heading: "Docker",
                image: "/assets/software/docker.png",
                class: " col-lg-4"
            },
            {
                heading: "Kubernetes",
                image: "/assets/UI-Icons/testing.svg",
                class: " col-lg-4"
            },
            {
                heading: "Jenkins",
                image: "/assets/UI-Icons/testing.svg",
                class: " col-lg-4"
            },
            
            {
                heading: "GitHub Actions",
                image: "/assets/UI-Icons/testing.svg",
                class: " col-lg-4"
            },
            {
                heading: "Git",
                image: "/assets/UI-Icons/testing.svg",
                class: " col-lg-4"
            },
            {
                heading: "GitHub",
                image: "/assets/UI-Icons/testing.svg",
                class: " col-lg-4"
            },
            {
                heading: "GitLab",
                image: "/assets/UI-Icons/testing.svg",
                class: " col-lg-4"
            },
            {
                heading: "Bitbucket",
                image: "/assets/UI-Icons/testing.svg",
                class: " col-lg-4"
            },
        
        ],

    },
    {
        id: 'security',
        heading: "Security & Performance",
        techs: [
            {
                heading: "SSL",
                image: "/assets/UI-Icons/testing.svg",
                class: " col-lg-4 "
            },
            {
                heading: "OAuth",
                image: "/assets/UI-Icons/testing.svg",
                class: " col-lg-4 "
            },
            {
                heading: "JWT",
                image: "/assets/UI-Icons/testing.svg",
                class: " col-lg-4 "
            },
            {
                heading: "Firewall Protection",
                image: "/assets/UI-Icons/testing.svg",
                class: " col-lg-4 "
            },
            {
                heading: "Load Balancers",
                image: "/assets/UI-Icons/testing.svg",
                class: " col-lg-4 "
            },
        
        ],

    },

];

const processes=[
    {
        id:'01',
        img :'/assets/web-Icons/requirement.png',
        heading:'Requirement Analysis '
    },
    {
        id:'02',
        img :'/assets/web-Icons/planning.png',
        heading:'Planning & Wireframing  '
    },
    {
        id:'03',
        img :'/assets/web-Icons/frontend.png',
        heading:'Frontend Development '
    },
    {
        id:'04',
        img :'/assets/web-Icons/backend.png',
        heading:'Backend Development'
    },
    {
        id:'05',
        img :'/assets/web-Icons/database.png',
        heading:'Database Design & Integration '
    },
    {
        id:'06',
        img :'/assets/web-Icons/API.png',
        heading:'API Integration '
    },
    {
        id:'07',
        img :'/assets/web-Icons/testing.png',
        heading:'Testing & QA'
    },
    {
        id:'08',
        img :'/assets/web-Icons/deployment.png',
        heading:'Deployment & Hosting  '
    },
    {
        id:'09',
        img :'/assets/web-Icons/maintenance-process.png',
        heading:'Maintenance & Updates '
    },
];

document.addEventListener('DOMContentLoaded', function () {
    const webserviceContainer = document.getElementById('web-service-container');

    // Generate the HTML structure dynamically using a for loop
    webservices.forEach(service => {
        const cardHTML = `
            <div class="col-lg-3 d-flex justify-content-center" data-aos="fade-left" data-aos-duration="3000">
                <div class="flip-card my-4">
                    <div class="flip-card-inner">
                        <div class="flip-card-front ">
                            <img loading="lazy" width="20%"  src=${service.image} alt="Avatar" >
                            <p class="w-75 text-center px-4 py-2 m-0">${service.heading}</p>
                        </div> 
                        <div class="flip-card-back ">
                            <p class="my-3 mx-2">${service.description}</p> 
                        </div>
                    </div>
                </div>
            </div>       
        `;
        webserviceContainer.innerHTML += cardHTML;
    });

    const TechContainer = document.getElementById('technology');
    const techHtml = `
    <div class="col-lg-6 pl-5" data-aos="fade-right" data-aos-duration="3000">
        ${getTechs()}      
    </div>
    <div class="col-lg-6 pr-0" data-aos="fade-left" data-aos-duration="3000">
        <div class="tech-apps" >
            <div id="tech-app" class="d-flex flex-wrap align-items-lg-stretch justify-content-between align-content-stretch">
            </div>
        </div>
    </div>`;

    // Generate the HTML structure dynamically using a for loop
    TechContainer.innerHTML += techHtml;
    window.getApps = getApps; // Attach to global scope
    getApps(UItechnology[0].id); // Default call to load 'front-end'

    function getTechs() {
        let data = '';
        UItechnology.forEach(tech => {
            const cardHTML = `
            <div>
                <a href="#${tech.id}" id="${tech.id}" class="tech-link d-flex justify-content-between" onclick="getApps('${tech.id}')">
                    ${tech.heading} <img loading="lazy" src="/assets/UI-Icons/arrow.svg" alt="">
                </a>
                <hr>
            </div>
            `;
            data += cardHTML;
        });
        return data;
    }




    const processContainer=document.getElementById('process');
    const processHtml=`
    <div class="d-lg-flex flex-wrap justify-content-between align-items-center" >
        <div class="col-lg-3 d-flex justify-content-center" data-aos="fade-right" data-aos-duration="1000">
            <div class="flip-card my-4">
                <div class="process-card">
                    <h1 class="h1-gradient">
                    ${processes[0].id}
                    </h1>
                    <div class="data d-flex flex-column justify-content-center">
                        <img loading="lazy" class="w-25" src="${processes[0].img }" alt="Avatar" >
                        <p class="w-75 text-center px-4 py-2 m-0">Research & Strategy</p>
                    </div> 
                </div>
            </div>
        </div>  
        <div class="col-lg-1 p-0 d-none d-lg-block"  data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000">
            <img loading="lazy"  src="/assets/UI-Icons/arrow-line.svg" width="100%"  alt="">

        </div>
        <div class="col-lg-3 d-flex justify-content-center" data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000">
            <div class="flip-card my-4">
                <div class="process-card">
                    <h1 class="h1-gradient">
                    ${processes[1].id}
                    </h1>
                    <div class="data d-flex flex-column justify-content-center">
                        <img loading="lazy" class="w-25" src="${processes[1].img}" alt="Avatar" >
                        <p class="w-75 text-center px-4 py-2 m-0">${processes[1].heading}</p>
                    </div> 
                </div>
            </div>
        </div>   
        <div class="col-lg-1 p-0 d-none d-lg-block"  data-aos="fade-right" data-aos-delay="1500" data-aos-duration="1500">
            <img loading="lazy"  src="/assets/UI-Icons/arrow-line.svg" width="100%"  alt="">

        </div>
        <div class="col-lg-3 d-flex justify-content-center" data-aos="fade-right" data-aos-delay="1500" data-aos-duration="1500">
            <div class="flip-card my-4">
                <div class="process-card">
                    <h1 class="h1-gradient">
                    ${processes[2].id}
                    </h1>
                    <div class="data d-flex flex-column justify-content-center">
                        <img loading="lazy" class="w-25" src="${processes[2].img}" alt="Avatar" >
                        <p class="w-75 text-center px-4 py-2 m-0">${processes[2].heading}</p>
                    </div> 
                </div>
            </div>
        </div>       
    </div>   
    <div class="arrow pt-2 d-none d-lg-block" data-aos="fade-down" data-aos-delay="2000" data-aos-duration="2000">
        <img loading="lazy"  src="/assets/UI-Icons/hori-line.svg" width="100%" alt="">
    </div>
    <div class="d-lg-flex flex-wrap justify-content-between align-items-center" data-aos="fade-right" data-aos-delay="2000" data-aos-duration="2000">
        <div class="col-lg-3 d-flex justify-content-center">
            <div class="flip-card my-4">
                <div class="process-card">
                    <h1 class="h1-gradient">
                       ${processes[3].id}
                    </h1>
                    <div class="data d-flex flex-column justify-content-center">
                        <img loading="lazy" class="w-25" src="${processes[3].img}" alt="Avatar" >
                        <p class="w-75 text-center px-4 py-2 m-0">${processes[3].heading}</p>
                    </div> 
                </div>
            </div>
        </div>  
        <div class="col-lg-1 p-0 d-none d-lg-block" data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000" >
            <img loading="lazy"  src="/assets/UI-Icons/arrow-line.svg" width="100%"  alt="">

        </div>
        <div class="col-lg-3 d-flex justify-content-center" data-aos="fade-right" data-aos-delay="2500" data-aos-duration="2500">
            <div class="flip-card my-4">
                <div class="process-card">
                    <h1 class="h1-gradient">
                    ${processes[4].id}
                    </h1>
                    <div class="data d-flex flex-column justify-content-center">
                        <img loading="lazy" class="w-25" src="${processes[4].img}" alt="Avatar" >
                        <p class="w-75 text-center px-4 py-2 m-0">${processes[4].heading}</p>
                    </div> 
                </div>
            </div>
        </div>   
        <div class="col-lg-1 p-0 d-none d-lg-block" data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000" >
            <img loading="lazy"  src="/assets/UI-Icons/arrow-line.svg" width="100%"  alt="">

        </div>
        <div class="col-lg-3 d-flex justify-content-center" data-aos="fade-right" data-aos-delay="3000" data-aos-duration="3000">
            <div class="flip-card my-4">
                <div class="process-card">
                    <h1 class="h1-gradient">
                    ${processes[5].id}
                    </h1>
                    <div class="data d-flex flex-column justify-content-center">
                        <img loading="lazy" class="w-25" src="${processes[5].img}" alt="Avatar" >
                        <p class="w-75 text-center px-4 py-2 m-0">${processes[5].heading}</p>
                    </div> 
                </div>
            </div>
        </div>       
    </div> 
     <div class="arrow pt-2 d-none d-lg-block" data-aos="fade-down" data-aos-delay="2000" data-aos-duration="2000">
        <img loading="lazy"  src="/assets/UI-Icons/hori-line.svg" width="100%" alt="">
    </div>
    <div class="d-lg-flex flex-wrap justify-content-between align-items-center" data-aos="fade-right" data-aos-delay="2000" data-aos-duration="2000">
        <div class="col-lg-3 d-flex justify-content-center">
            <div class="flip-card my-4">
                <div class="process-card">
                    <h1 class="h1-gradient">
                       ${processes[6].id}
                    </h1>
                    <div class="data d-flex flex-column justify-content-center">
                        <img loading="lazy" class="w-25" src="${processes[6].img}" alt="Avatar" >
                        <p class="w-75 text-center px-4 py-2 m-0">${processes[6].heading}</p>
                    </div> 
                </div>
            </div>
        </div>  
        <div class="col-lg-1 p-0 d-none d-lg-block" data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000" >
            <img loading="lazy"  src="/assets/UI-Icons/arrow-line.svg" width="100%"  alt="">

        </div>
        <div class="col-lg-3 d-flex justify-content-center" data-aos="fade-right" data-aos-delay="2500" data-aos-duration="2500">
            <div class="flip-card my-4">
                <div class="process-card">
                    <h1 class="h1-gradient">
                    ${processes[7].id}
                    </h1>
                    <div class="data d-flex flex-column justify-content-center">
                        <img loading="lazy" class="w-25" src="${processes[7].img}" alt="Avatar" >
                        <p class="w-75 text-center px-4 py-2 m-0">${processes[7].heading}</p>
                    </div> 
                </div>
            </div>
        </div>   
        <div class="col-lg-1 p-0 d-none d-lg-block" data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000" >
            <img loading="lazy"  src="/assets/UI-Icons/arrow-line.svg" width="100%"  alt="">

        </div>
        <div class="col-lg-3 d-flex justify-content-center" data-aos="fade-right" data-aos-delay="3000" data-aos-duration="3000">
            <div class="flip-card my-4">
                <div class="process-card">
                    <h1 class="h1-gradient">
                    ${processes[8].id}
                    </h1>
                    <div class="data d-flex flex-column justify-content-center">
                        <img loading="lazy" class="w-25" src="${processes[8].img}" alt="Avatar" >
                        <p class="w-75 text-center px-4 py-2 m-0">${processes[8].heading}</p>
                    </div> 
                </div>
            </div>
        </div>       
    </div> 
 
`


processContainer.innerHTML+=processHtml;

    


});

// Move the function OUTSIDE the event listener
function getApps(techId) {
    let tech = UItechnology.find(t => t.id === techId);
    let link = document.getElementById(techId); // Get the link by its unique ID
    let container = document.getElementById("tech-app");
    if (!container) return;
    let data = '';
    document.querySelectorAll('.tech-link').forEach(link => link.classList.remove('active')); // Remove active class from all
    if (link) {
        link.classList.add('active'); // Add active class to the current tech
    }
    tech?.techs.forEach(app => {
        data += `
            <div class="${app.class.trim()} p-2">
                <div class="app py-1 px-1 d-flex align-items-center">
                    <img loading="lazy" width="20%"  src="${app.image}" alt="${app.heading}">
                    <h5 class="m-0 px-1">${app.heading}</h5>
                </div>
            </div>
        `;
    });

    container.innerHTML = data;
    return data;
}