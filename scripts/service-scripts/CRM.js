document.addEventListener('DOMContentLoaded', function () {
  
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

    const CRMtechnology=[
        {
            id:'CRM',
            heading:"CRM Integration & Cloud Services ",
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
    CRMtechnology.forEach(tech => {
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
        image:"/assets/digital-marketing/hubspot.png",
        class:" col-lg-6",
        width:"15%"
    },

];
 
 

// Move the function OUTSIDE the event listener
function getApps() {
    let link = document.getElementById('UI');

    let data = '';
        CRMApps.forEach(app => {
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
