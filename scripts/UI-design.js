document.addEventListener('DOMContentLoaded', function () {
  
    const UIservices=[
        {
            heading:"UX Design",
            image:"/assets/UI-Icons/UX-design.svg",
            description:"Enhancing user satisfaction by improving the usability, accessibility, and interaction between the user and a product, service, or system."
        },
        {
            heading:"UI Design",
            image:"/assets/UI-Icons/UI-design.svg",
            description:"Creating visually appealing, interactive, and user-friendly interfaces for digital products such as websites, mobile apps, and software."
        },
        {
            heading:"UI/UX Wireframing",
            image:"/assets/UI-Icons/wireframing.svg",
            description:"Simplified visual representation of a digital product’s layout, structure, and functionality. It serves as a blueprint that outlines the placement of key elements."
        },
        {
            heading:"Prototyping",
            image:"/assets/UI-Icons/wireframing.svg",
            description:"Creating interactive models of a digital product to simulate user experience, test functionality, and refine design concepts before development."
        },
        {
            heading:"Ecommerce UI/UX Design",
            image:"/assets/UI-Icons/ecommerce.svg",
            description:"Creating a seamless, intuitive, and engaging shopping experience that encourages users to browse, add products to their cart, and complete purchases efficiently."
        },
        {
            heading:"WEB APP <br> UI/UX",
            image:"/assets/UI-Icons/webapp.svg",
            description:"Creating a seamless, user-friendly, and visually appealing interface for web-based applications. A well-designed web app enhances usability."
        },
        {
            heading:"UI/UX CONSULTING",
            image:"/assets/UI-Icons/consulting.svg",
            description:"Strategic service that helps businesses enhance their digital products by improving usability, accessibility, and overall user experience."
        },
        {
            heading:"UI/UX TESTING",
            image:"/assets/UI-Icons/testing.svg",
            description:"Evaluating a digital product’s user interface (UI) and user experience (UX) to ensure it is functional, intuitive, and user-friendly."
        }
    ];
    
        const UIserviceContainer = document.getElementById('UI-service-container');
    
    // Generate the HTML structure dynamically using a for loop
    UIservices.forEach(service => {
        const cardHTML = `
                    <div class="col-lg-3 d-flex justify-content-center" data-aos="fade-left" data-aos-duration="3000">
                            <div class="flip-card my-4">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front ">
                                        <img loading="lazy"  src=${service.image} alt="Avatar" >
                                        <p class="w-75 text-center px-4 py-2 m-0">${service.heading}</p>
                                    </div> 
                                    <div class="flip-card-back ">
                                        <p class="my-3 mx-2">${service.description}
                                        </p> 
                                    </div>
                                </div>
                            </div>
                        </div>       
                    </div>   
    
        `;
        UIserviceContainer.innerHTML += cardHTML;
    });

    const UItechnology=[
        {
            id:'UI',
            heading:"UI/UX",
            // image:"/assets/UI-Icons/UX-design.svg",
        },
        {
            id:'web',
            heading:"Web Front-End",
            // image:"/assets/UI-Icons/UX-design.svg",
        },

    ];

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
    `
    
    // Generate the HTML structure dynamically using a for loop
  TechContainer.innerHTML += techHtml;
  window.getApps = getApps; // Attach to global scope
    getApps('UI/UX');
    

function getTechs(){
   let data=''
    UItechnology.forEach(tech => {
       const cardHTML = `
        <div>
                  <a href="#UI/UX" id="UI" class="tech-link d-flex justify-content-between"  onclick="getApps('${tech.heading}')">${tech.heading} <img loading="lazy"  src="/assets/UI-Icons/arrow.svg" alt=""></a>
                 <hr>
        </div>
    
        `;
        data+=cardHTML
    });
    return data

}

const processes=[
    {
        id:'01',
        img :'/assets/UI-Icons/research.svg',
        heading:'Research & Strategy'
    },
    {
        id:'02',
        img :'/assets/UI-Icons/architecture.svg',
        heading:'Information Architecture'
    },
    {
        id:'03',
        img :'/assets/UI-Icons/wfp.svg',
        heading:'Wireframe & Prototype'
    },
    {
        id:'04',
        img :'/assets/UI-Icons/visuals.svg',
        heading:'Visual Design'
    },
    {
        id:'05',
        img :'/assets/UI-Icons/development.svg',
        heading:'UI Development'
    },
    {
        id:'06',
        img :'/assets/UI-Icons/usability.svg',
        heading:'Usability Testing'
    },
];

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
                        <img loading="lazy" src="${processes[0].img }" alt="Avatar" >
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
                        <img loading="lazy"  src="${processes[1].img}" alt="Avatar" >
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
                        <img loading="lazy"  src="${processes[2].img}" alt="Avatar" >
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
                        <img loading="lazy"  src="${processes[3].img}" alt="Avatar" >
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
                        <img loading="lazy"  src="${processes[4].img}" alt="Avatar" >
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
                        <img loading="lazy"  src="${processes[5].img}" alt="Avatar" >
                        <p class="w-75 text-center px-4 py-2 m-0">${processes[5].heading}</p>
                    </div> 
                </div>
            </div>
        </div>       
    </div> 
`



processContainer.innerHTML+=processHtml;

    



 });

 
 const UItechApps=[
    {
        heading:"Figma",
        image:"/assets/UI-Icons/figma.svg",
        class:" col-lg-4 "
    },
    {
        heading:"Adobe XD",
        image:"/assets/UI-Icons/adobexd.svg",
        class:" col-lg-4 "
    },
    {
        heading:"Sketch",
        image:"/assets/UI-Icons/sketch.svg",
        class:" col-lg-4 "
    },
    {
        heading:"Photoshop",
        image:"/assets/UI-Icons/photoshop.svg",
        class:" col-lg-6"
    },
    {
        heading:"Illustrator",
        image:"/assets/UI-Icons/illustrator.svg",
        class:" col-lg-6"
    },

];
 
const webApps=[
    {
        heading:"Html 5",
        image:"/assets/UI-Icons/html-5.png",
        class:" col-lg-4 "
    },
    {
        heading:"Bootstrap",
        image:"/assets/UI-Icons/bootstrap.png",
        class:" col-lg-4 "
    },
    {
        heading:"Wordpress",
        image:"/assets/UI-Icons/wordpress.png",
        class:" col-lg-4 "
    },
    {
        heading:"React",
        image:"/assets/UI-Icons/react.png",
        class:" col-lg-6"
    },
    {
        heading:"Drupal",
        image:"/assets/UI-Icons/drupal.png",
        class:" col-lg-6"
    },

];
 
 

// Move the function OUTSIDE the event listener
function getApps(tech) {
    
    let link = document.getElementById('UI');
    let container= document.getElementById("tech-app");
    console.log(link, container)
    if (!container) {
        
    };

    let data = '';

    if (tech === 'UI/UX') {
        link?.classList?.add('active');  
        UItechApps.forEach(app => {
            data += `
                <div class="${app.class.trim()} p-2">
                    <div class="app py-1 px-1 d-flex align-items-center">
                        <img loading="lazy"  src="${app.image}" alt="">
                        <h5 class="m-0 px-1">${app.heading}</h5>
                    </div>
                </div>
            `;
        });
    } else if(tech === 'Web Front-End'){
        link.classList.remove('active');
        webApps.forEach(app => {
            data += `
                <div class="${app.class.trim()} p-2">
                    <div class="app py-1 px-1 d-flex align-items-center">
                        <img loading="lazy" width="20%"  src="${app.image}" alt="">
                        <h5 class="m-0 px-1">${app.heading}</h5>
                    </div>
                </div>
            `;
        });

    }
    
    else {
        link.classList.remove('active');
    }

    container.innerHTML = data;
}
