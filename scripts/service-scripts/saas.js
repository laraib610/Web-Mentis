document.addEventListener('DOMContentLoaded', function () {
  
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

    const saastechnology=[
        {
            id:'saas',
            heading:"Saas",
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
    TechContainer.innerHTML +=techHtml;
    // Generate the HTML structure dynamically using a for loop

function getTechs(){
   let data=''
    saastechnology.forEach(tech => {
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
 
const saasApps=[
    {
        heading:"AWS",
        image:"/assets/saas/aws.png",
        class:" col-lg-4 ",
        width:"20%"
    },
    {
        heading:"Azure",
        image:"/assets/saas/azure.png",
        class:" col-lg-4 ",
        width:"20%"
    },
    {
        heading:"G-Cloud",
        image:"/assets/saas/google-cloud.png",
        class:" col-lg-4 ",
        width:"20%"
    },
    {
        heading:"VMWare",
        image:"/assets/saas/VMware.jpg",
        class:" col-lg-6",
        width:"15%"
    },
    {
        heading:"Open Stack",
        image:"/assets/saas/open-stack.png",
        class:" col-lg-6",
        width:"15%"
    },

];
 
 

// Move the function OUTSIDE the event listener
function getApps() {
    let link = document.getElementById('UI');

    let data = '';
        saasApps.forEach(app => {
            data += `
                <div class="${app.class.trim()} p-2">
                    <div class="app py-1 px-1 d-flex align-items-center">
                        <img loading="lazy" width="${app.width}"  src="${app.image}" alt="">
                        <h5 class="m-0 px-1">${app.heading}</h5>
                    </div>
                </div>
            `;
        });

   return data;
}
