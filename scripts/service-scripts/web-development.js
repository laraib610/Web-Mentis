document.addEventListener('DOMContentLoaded', function () {
  
    const webservices=[
        {
            heading:"Content management system",
            image:"/assets/web-Icons/CMS.png",
            description:"Empower businesses to take control of their digital presence by providing flexible platform for managing website content without the need for technical expertise."
        },
        {
            heading:"Ecommerce",
            image:"/assets/web-Icons/Ecommerce.png",
            description:"Designed to help businesses of all sizes build, launch, and optimize their online shops to drive sales, enhance customer experience"
        },
        {
            heading:"Website maintenance",
            image:"/assets/web-Icons/maintenance.png",
            description:"Keep your website fully functional, up-to-date, and optimized to meet the changing needs of your business and users."
        },
    ];
    
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
                                        <p class="my-3 mx-2">${service.description}
                                        </p> 
                                    </div>
                                </div>
                            </div>
                        </div>       
                    
    
        `;
        webserviceContainer.innerHTML += cardHTML;
    });

    const UItechnology=[
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
                            
                                ${getApps()}
                                </div>
                       

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
                  <a href="#UI/UX" id="UI" class="tech-link d-flex justify-content-between active"  onclick="getApps('${tech.heading}')">${tech.heading} <img loading="lazy"  src="/assets/UI-Icons/arrow.svg" alt=""></a>
                 <hr>
        </div>
    
        `;
        data+=cardHTML
    });
    return data

}
 });
 
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
function getApps() {
    let link = document.getElementById('UI');

    let data = '';
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

   return data;
}
