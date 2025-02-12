document.addEventListener('DOMContentLoaded', function () {
  
    const eventservices=[
        {
            heading:"Creative Reel Making",
            image:"/assets/event/reel-making.png",
            description:"Allows businesses to capture the attention of their audience through short, dynamic, and impactful videos."
        },
        {
            heading:"Professional Product Photography",
            image:"/assets/event/photography.png",
            description:"Allows businesses to display their products in the best possible light, ensuring that they stand out to potential buyers and highlight their features."
        },
        {
            heading:"Videos and Event Coverage",
            image:"/assets/event/event-coverage.png",
            description:"Designed to capture the essence of your events and transform them into compelling, engaging videos that you can share on your website, social media, or marketing materials."
        },
    ];
    
        const eventserviceContainer = document.getElementById('event-service-container');
    
    // Generate the HTML structure dynamically using a for loop
    eventservices.forEach(service => {
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
        eventserviceContainer.innerHTML += cardHTML;
    });

    const eventtechnology=[
        {
            id:'event',
            heading:"Event & Corporate Management",
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
    eventtechnology.forEach(tech => {
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
 
const eventApps=[
    {
        heading:"Premiere Pr",
        image:"/assets/event/premiere-pro.png",
        class:" col-lg-4 ",
        width:"20%"
    },
    {
        heading:"Final Cut Pro ",
        image:"/assets/event/final-cut.png",
        class:" col-lg-4 ",
        width:"20%"
    },
    {
        heading:"After Effects",
        image:"/assets/event/after-effects.png",
        class:" col-lg-4 ",
        width:"20%"
    },

];
 
 

// Move the function OUTSIDE the event listener
function getApps() {
    let link = document.getElementById('UI');

    let data = '';
        eventApps.forEach(app => {
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
