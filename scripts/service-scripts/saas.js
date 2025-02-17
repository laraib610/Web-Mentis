  
    const saasservices=[
        {
            heading:"Cloud Base Saas",
            image:"/assets/saas/cloud.png",
            description:"Offers a wide range of website-building, hosting, and management tools through a subscription-based service model."
        },
        {
            heading:"MicroServices",
            image:"/assets/saas/micro-services.png",
            description:"Approach to software development where a large application is built as a collection of small, independently deployable services."
        },
        {
            heading:"Subscription Billing Integration",
            image:"/assets/saas/billing-integration.png",
            description:"Implementing a system or service that manages the billing, invoicing, and payments for users who subscribe to a product or service."
        },
    ];

    const saastechnology=[
        {
            id: 'frontend',
            heading: "Frontend Development",
            techs:[
               
                {
                    heading: "React",
                    image: "/assets/Logo/react.png",
                    class: " col-lg-4"
                },
                {
                    heading: "Angular",
                    image: "/assets/Logo/testing.svg",
                    class: " col-lg-4"
                },
                {
                    heading: "Vue JS",
                    image: "/assets/Logo/testing.svg",
                    class: " col-lg-4"
                },
                {
                    heading: "Svelte",
                    image: "/assets/Logo/html-5.png",
                    class: " col-lg-4 "
                },
                {
                    heading: "Bootstrap",
                    image: "/assets/Logo/bootstrap.png",
                    class: " col-lg-4 "
                },
                
                {
                    heading: "Material UI",
                    image: "/assets/Logo/testing.svg",
                    class: " col-lg-4"
                },
            
                {
                    heading: "Tailwind CSS",
                    image: "/assets/Logo/testing.svg",
                    class: " col-lg-4"
                },
                {
                    heading: "Redux",
                    image: "/assets/Logo/testing.svg",
                    class: " col-lg-4"
                },
                {
                    heading: "Vuex",
                    image: "/assets/Logo/testing.svg",
                    class: " col-lg-4"
                },
                {
                    heading: "Zustand",
                    image: "/assets/Logo/testing.svg",
                    class: " col-lg-4"
                },
            
            ],
        },
        {
            id: 'backend',
            heading: "Backend Development",
            techs: [
                {
                    heading: "PHP",
                    image: "/assets/Logo/testing.svg",
                    class: " col-lg-4 "
                },
                {
                    heading: "Python",
                    image: "/assets/Logo/python.png",
                    class: " col-lg-4 "
                },
                {
                    heading: "NodeJS",
                    image: "/assets/Logo/testing.svg",
                    class: " col-lg-4 "
                },
                {
                    heading: "Ruby",
                    image: "/assets/Logo/testing.svg",
                    class: " col-lg-4 "
                },
                {
                    heading: "Java",
                    image: "/assets/Logo/java.png",
                    class: " col-lg-4"
                },
                {
                    heading: "Laravel",
                    image: "/assets/Logo/testing.svg",
                    class: " col-lg-4"
                },
                {
                    heading: "Django",
                    image: "/assets/Logo/testing.svg",
                    class: " col-lg-4"
                },
                {
                    heading: "Express.js",
                    image: "/assets/Logo/testing.svg",
                    class: " col-lg-4"
                },
                {
                    heading: "Spring Boot",
                    image: "/assets/Logo/testing.svg",
                    class: " col-lg-4"
                },
                {
                    heading: "Ruby on Rails",
                    image: "/assets/Logo/testing.svg",
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
                    image: "/assets/Logo/mysql-database.png",
                    class: " col-lg-4 "
                },
                {
                    heading: "PostgreSQL",
                    image: "/assets/Logo/postgree.png",
                    class: " col-lg-4 "
                },
                {
                    heading: "Microsoft SQL Server",
                    image: "/assets/Logo/sql.png",
                    class: " col-lg-4 "
                },
                {
                    heading: "MongoDB",
                    image: "/assets/Logo/mongodb.svg",
                    class: " col-lg-4 "
                },
                {
                    heading: "Firebase",
                    image: "/assets/Logo/firebase.png",
                    class: " col-lg-4"
                },
                {
                    heading: "DynamoDB",
                    image: "/assets/Logo/dynamodb.png",
                    class: " col-lg-4"
                },
                {
                    heading: "Redis",
                    image: "/assets/Logo/redis.png",
                    class: " col-lg-4"
                },
                {
                    heading: "Memcached",
                    image: "/assets/Logo/testing.svg",
                    class: " col-lg-4"
                },
            
            ],
        },
        {
            id: 'cloudComp',
            heading: "Cloud Computing & Hosting",
            techs:[
                {
                    heading: "AWS (EC2, S3, RDS)",
                    image: "/assets/Logo/aws.png",
                    class: " col-lg-4 "
                },
                {
                    heading: "Google Cloud",
                    image: "/assets/Logo/google-cloud.png",
                    class: " col-lg-4 "
                },
                {
                    heading: "Microsoft Azure",
                    image: "/assets/Logo/azure.png",
                    class: " col-lg-4 "
                },
                {
                    heading: "DigitalOcean",
                    image: "/assets/Logo/digital-ocean.png",
                    class: " col-lg-4 "
                },
                {
                    heading: "AWS Lambda",
                    image: "/assets/Logo/testing.svg",
                    class: " col-lg-4"
                },
                {
                    heading: "Firebase Functions",
                    image: "/assets/Logo/firebase.png",
                    class: " col-lg-4"
                },
                {
                    heading: "Azure Functions",
                    image: "/assets/Logo/testing.svg",
                    class: " col-lg-4"
                },
                {
                    heading: "Docker",
                    image: "/assets/Logo/docker.png",
                    class: " col-lg-4"
                },
                {
                    heading: "Kubernetes",
                    image: "/assets/Logo/kubernets.png",
                    class: " col-lg-4"
                },
            
            ],
        },

    ];
    const processes=[
        {
            id:'01',
            img :'/assets/Logo/market-research.png',
            heading:'Market Research & Requirement Analysis  '
        },
        {
            id:'02',
            img :'/assets/saas/product-planning.png',
            heading:'Product Planning & Design   '
        },
        {
            id:'03',
            img :'/assets/saas/frontend-development.png',
            heading:'Frontend Development  '
        },
        {
            id:'04',
            img :'/assets/saas/backend-development.png',
            heading:'Backend Development '
        },
        {
            id:'05',
            img :'/assets/saas/database-management.png',
            heading:'Database Management  '
        },
        {
            id:'06',
            img :'/assets/saas/cloud-hosting.png',
            heading:'Cloud Hosting & Deployment  '
        },
        {
            id:'07',
            img :'/assets/saas/security-compliance.png',
            heading:'Security & Compliance '
        },
        {
            id:'08',
            img :'/assets/saas/subscription-billing.png',
            heading:'Subscription & Billing Integration  '
        },
        {
            id:'09',
            img :'/assets/saas/monitoring.png',
            heading:'Monitoring & Performance Optimization  '
        },
        {
            id:'10',
            img :'/assets/saas/continuous-updates.png',
            heading:'Continuous Updates & Maintenance  '
        },
    ];


document.addEventListener('DOMContentLoaded', function () {
        const saasserviceContainer = document.getElementById('saas-service-container');
    
    // Generate the HTML structure dynamically using a for loop
    saasservices.forEach(service => {
        const cardHTML = `
                    <div class="col-lg-3 d-flex justify-content-center" data-aos="fade-left" data-aos-duration="3000">
                            <div class="flip-card my-4">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front ">
                                        <img loading="lazy" width="20%"  src=${service.image} alt="Avatar" >
                                        <p class="w-75 text-center px-4 py-2 m-0">${service.heading}</p>
                                    </div> 
                                    <div class="flip-card-back ">
                                        <p class="my-3 mx-2">${service.description}
                                        </p> 
                                    </div>
                                </div>
                            </div>
                        </div>       
                    
    
        `;
        saasserviceContainer.innerHTML += cardHTML;
    });
    const TechContainer=document.getElementById('technology');
    const techHtml=`
     <div class="col-lg-6 pl-5" data-aos="fade-right" data-aos-duration="3000">
        ${getTechs()}      
    </div>
    <div class="col-lg-6 pr-0" data-aos="fade-left" data-aos-duration="3000">
        <div class="tech-apps" >
            <div id="tech-app" class="d-flex flex-wrap align-items-lg-stretch justify-content-between align-content-stretch">
            </div>
        </div>
    </div>
    `
    TechContainer.innerHTML +=techHtml;
    // Generate the HTML structure dynamically using a for loop
    window.getApps = getApps; // Attach to global scope
    getApps(saastechnology[0].id); // Default call to load 'front-end'

    function getTechs() {
        let data = '';
        saastechnology.forEach(tech => {
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
    <div class="arrow pt-2 d-none d-lg-block" data-aos="fade-down" data-aos-delay="2000" data-aos-duration="2000">
        <img loading="lazy"  src="/assets/UI-Icons/hori-line.svg" width="100%" alt="">
    </div>
    <div class="d-lg-flex flex-wrap justify-content-between align-items-center" data-aos="fade-right" data-aos-delay="2000" data-aos-duration="2000">
        <div class="col-lg-3 d-flex justify-content-center">
            <div class="flip-card my-4">
                <div class="process-card">
                    <h1 class="h1-gradient">
                       ${processes[9].id}
                    </h1>
                    <div class="data d-flex flex-column justify-content-center">
                        <img loading="lazy" class="w-25" src="${processes[9].img}" alt="Avatar" >
                        <p class="w-75 text-center px-4 py-2 m-0">${processes[9].heading}</p>
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
    let tech = saastechnology.find(t => t.id === techId);
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
