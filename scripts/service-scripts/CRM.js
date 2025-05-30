    const CRMservices=[
        {
            heading:"CRM",
            image:"/assets/CRM/CRM.png",
            description:"Businesses subscribe to a cloud-based CRM solution, which allows for easy access, real-time updates, and seamless integration with other tools and services."
        },
        {
            heading:"RealTime Customer Analytics",
            image:"/assets/CRM/realtime.png",
            description:"Collecting, analyzing, and acting on customer data as it is generated in real-time."
        },
        {
            heading:"Work Flow Automation",
            image:"/assets/CRM/automation.png",
            description:"Streamline operations, improve efficiency, reduce human error, and ensure that tasks are completed consistently and on time."
        },
    ];

    const processes=[
        {
            id:'01',
            img :'/assets/CRM/requirement.png',
            heading:'Requirement Analysis & CRM Selection  '
        },
        {
            id:'02',
            img :'/assets/CRM/data-migration.png',
            heading:'Data Migration & Cleaning  '
        },
        {
            id:'03',
            img :'/assets/CRM/API-integration.png',
            heading:'API Integration & Customization '
        },
        {
            id:'04',
            img :'/assets/CRM/user.png',
            heading:'User Authentication & Role-Based Access   '
        },
        {
            id:'05',
            img :'/assets/CRM/automation-process.png',
            heading:'Automation & Workflow Setup '
        },
        {
            id:'06',
            img :'/assets/CRM/email.png',
            heading:'Email & Communication Integration '
        },
        {
            id:'07',
            img :'/assets/CRM/analytics.png',
            heading:'Analytics & Reporting '
        },
        {
            id:'08',
            img :'/assets/CRM/testing.png',
            heading:'Testing & Security Compliance  '
        },
        {
            id:'09',
            img :'/assets/CRM/deployment.png',
            heading:'Deployment & Training   '
        },
        {
            id:'10',
            img :'/assets/CRM/maintenance.png',
            heading:'Maintenance & Optimization '
        },
    ];
    

    
    const CRMtechnology=[
        {
            id:'CRM',
            heading:"Popular CRM Platforms",
            techs:[
                {
                    heading:"Salesforce",
                    image:"/assets/Logo/salesforce.png",
                    class:"col-lg-4",
                    width:"15%"
                },
                {
                    heading:"Zoho CRM",
                    image:"/assets/Logo/zoho.jpg",
                    class:"col-lg-4",
                    width:"15%"
                },
                {
                    heading:"Pipedrive",
                    image:"/assets/Logo/pipe.png",
                    class:"col-lg-4",
                    width:"23%"
                },
                {
                    heading:"Hubspot",
                    image:"/assets/Logo/hubspot.png",
                    class:"col-lg-4",
                    width:"15%"
                },
                {
                    heading:"Microsoft Dynamics 365",
                    image:"/assets/Logo/dynamics.png",
                    class:"col-lg-8",
                    width:"15%"
                },
                {
                    heading:"SugarCRM",
                    image:"/assets/Logo/sugarcrm.png",
                    class:"col-lg-6",
                    width:"15%"
                },
            
            ]
        },
        {
            id:'integration',
            heading:"Integration & APIs ",
            techs:[
                {
                    heading:" Zapier",
                    image:"/assets/Logo/zapier.png",
                    class:"col-lg-4",
                    width:"15%"
                },
                {
                    heading:"MuleSoft",
                    image:"/assets/Logo/mulesoft.png",
                    class:"col-lg-4",
                    width:"15%"
                },
                {
                    heading:"REST API's",
                    image:"/assets/Logo/rest.png",
                    class:"col-lg-6",
                    width:"23%"
                },
                {
                    heading:"GraphQL APIs",
                    image:"/assets/Logo/graphql.png",
                    class:"col-lg-6",
                    width:"15%"
                },
                {
                    heading:"Apache Camel",
                    image:"/assets/Logo/apache-camel.png",
                    class:"col-lg-6",
                    width:"15%"
                },
                {
                    heading:"OAuth 2.0",
                    image:"/assets/Logo/O-auth.png",
                    class:"col-lg-6",
                    width:"15%"
                },
                {
                    heading:"JWT",
                    image:"/assets/Logo/jwt.png",
                    class:" col-lg-4",
                    width:"15%"
                },
                {
                    heading:" SAML",
                    image:"/assets/Logo/Saml.png",
                    class:" col-lg-4",
                    width:"15%"
                },
            
            ]
        },
        {
            id: 'Database',
            heading: "Database & Storage",
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
            ],
        },
        {
            id:'automation',
            heading:"Automation & AI",
            techs:[
                {
                    heading:" UiPath",
                    image:"/assets/Logo/Ui-path.png",
                    class:"col-lg-6",
                    width:"15%"
                },
                {
                    heading:"Salesforce Einstein",
                    image:"/assets/Logo/salesforce.png",
                    class:"col-lg-6",
                    width:"15%"
                },
                {
                    heading:"HubSpot AI",
                    image:"/assets/Logo/hubspot.png",
                    class:"col-lg-6",
                    width:"23%"
                },
                {
                    heading:"Microsoft AI for Dynamics",
                    image:"/assets/Logo/dynamics.png",
                    class:"col-lg-6",
                    width:"15%"
                },
                {
                    heading:"Automation Anywhere",
                    image:"/assets/Logo/automation.png",
                    class:"col-lg-6",
                    width:"15%"
                },
               
            
            ]
        },
        {
            id:'email ',
            heading:"Email & Communication Integration",
            techs:[
                {
                    heading:"SendGrid",
                    image:"/assets/Logo/sendgrid.png",
                    class:"col-lg-6",
                    width:"15%"
                },
                {
                    heading:" Mailgun",
                    image:"/assets/Logo/mailgun.png",
                    class:"col-lg-6",
                    width:"15%"
                },
                // {
                //     heading:"Postmark",
                //     image:"/assets/Logo/testing.svg",
                //     class:"col-lg-6",
                //     width:"23%"
                // },
                {
                    heading:"Twilio",
                    image:"/assets/Logo/twillio.png",
                    class:"col-lg-6",
                    width:"15%"
                },
                {
                    heading:"Vonage",
                    image:"/assets/Logo/vonage.png",
                    class:"col-lg-6",
                    width:"15%"
                },
                {
                    heading:" WhatsApp Business API",
                    image:"/assets/Logo/whatsapp-business.png",
                    class:"col-lg-8",
                    width:"15%"
                },
                {
                    heading:" Slack",
                    image:"/assets/Logo/slack.png",
                    class:"col-lg-4",
                    width:"15%"
                },
               
            
            ]
        },

        {
            id:'analytics',
            heading:"Analytics & Reporting",
            techs:[
                {
                    heading:"Power BI",
                    image:"/assets/Logo/power-bi.png",
                    class:"col-lg-6",
                    width:"15%"
                },
                {
                    heading:"Google Data Studio",
                    image:"/assets/Logo/google-data.png",
                    class:"col-lg-6",
                    width:"15%"
                },
                {
                    heading:"Tableau",
                    image:"/assets/Logo/tableau.png",
                    class:"col-lg-6",
                    width:"23%"
                },
                {
                    heading:"Google Analytics",
                    image:"/assets/Logo/google-analytics.png",
                    class:"col-lg-6",
                    width:"15%"
                },
                // {
                //     heading:"Mixpanel",
                //     image:"/assets/Logo/mixpanel.png",
                //     class:"col-lg-6",
                //     width:"15%"
                // },
                {
                    heading:"Segment",
                    image:"/assets/Logo/segments.png",
                    class:"col-lg-6",
                    width:"15%"
                },
            
            ]
        },

    ];

document.addEventListener('DOMContentLoaded', function () {
    
        const CRMserviceContainer = document.getElementById('CRM-service-container');
    
    // Generate the HTML structure dynamically using a for loop
    CRMservices.forEach(service => {
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
        CRMserviceContainer.innerHTML += cardHTML;
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
    getApps(CRMtechnology[0].id); // Default call to load 'front-end'

    function getTechs() {
        let data = '';
        CRMtechnology.forEach(tech => {
            const cardHTML = `
            <div>
             <a href="javascript:void(0);" id="${tech.id}" class="tech-link d-flex justify-content-between" onclick="event.preventDefault(); getApps('${tech.id}')">
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
                            <img loading="lazy"  class="w-25" src="${processes[0].img }" alt="Avatar" >
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
                            <img loading="lazy"  class="w-25" src="${processes[1].img}" alt="Avatar" >
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
                            <img loading="lazy"  class="w-25" src="${processes[2].img}" alt="Avatar" >
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
                            <img loading="lazy"  class="w-25" src="${processes[3].img}" alt="Avatar" >
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
                            <img loading="lazy" class="w-25"  src="${processes[4].img}" alt="Avatar" >
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
                            <img loading="lazy"  class="w-25" src="${processes[5].img}" alt="Avatar" >
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
                            <img loading="lazy" class="w-25"  src="${processes[6].img}" alt="Avatar" >
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
                            <img loading="lazy"  class="w-25" src="${processes[7].img}" alt="Avatar" >
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
                            <img loading="lazy"  class="w-25" src="${processes[8].img}" alt="Avatar" >
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
                            <img loading="lazy"  class="w-25" src="${processes[9].img}" alt="Avatar" >
                            <p class="w-75 text-center px-4 py-2 m-0">${processes[9].heading}</p>
                        </div> 
                    </div>
                </div>
            </div>  
        </div>
    `
    
    
    
    processContainer.innerHTML+=processHtml;
    
        
    
 });
 
const CRMApps=[
    {
        heading:"Salesforce",
        image:"/assets/CRM/salesforce.png",
        class:" col-lg-6 ",
        width:"15%"
    },
    {
        heading:"Zoho CRM",
        image:"/assets/CRM/zoho.jpg",
        class:" col-lg-6 ",
        width:"15%"
    },
    {
        heading:"Pipedrive",
        image:"/assets/CRM/pipedrive.jpg",
        class:" col-lg-6 ",
        width:"23%"
    },
    {
        heading:"Hubspot",
        image:"/assets/Logo/hubspot.png",
        class:" col-lg-6",
        width:"15%"
    },

];
 
 

// Move the function OUTSIDE the event listener
function getApps(techId) {
    let tech = CRMtechnology.find(t => t.id === techId);
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
                    <img loading="lazy" width="${app.class==='col-lg-6'?'13%':app.class=='col-lg-12'?'6%':app.class=='col-lg-8'?'10%':'20%'}" src="${app.image}" alt="${app.heading}">
                    <h5 class="m-0 px-1">${app.heading}</h5>
                </div>
            </div>
        `;
    });

    container.innerHTML = data;
    return data;
}