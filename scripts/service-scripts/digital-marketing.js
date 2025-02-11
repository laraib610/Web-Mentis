document.addEventListener('DOMContentLoaded', function () {
  
    const digitalservices=[
        {
            heading:"PPC campaigns",
            image:"/assets/digital-marketing/PPC.png",
            description:"Create, optimize, and manage highly successful PPC campaigns that deliver results. "
        },
        {
            heading:"SEO OPtimization",
            image:"/assets/digital-marketing/CEO.png",
            description:"Improve your website’s rankings, visibility, and overall online presence."
        },
        {
            heading:"Email Marketing",
            image:"/assets/digital-marketing/email-marketing.png",
            description:"Create personalized, engaging, and impactful email campaigns."
        },

    ];
    
        const digitalserviceContainer = document.getElementById('digital-service-container');
    
    // Generate the HTML structure dynamically using a for loop
    digitalservices.forEach(service => {
        const cardHTML = `
                    <div class="col-lg-3 d-flex justify-content-center" data-aos="fade-left" data-aos-duration="3000">
                            <div class="flip-card my-4">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front ">
                                        <img loading="lazy" width="30%"  src=${service.image} alt="Avatar" >
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
        digitalserviceContainer.innerHTML += cardHTML;
    });
    const UItechApps=[
        {
            heading:"Google Ads",
            image:"/assets/digital-marketing/adwords.png",
            class:" col-lg-4 "
        },
        {
            heading:"Hubspot",
            image:"/assets/digital-marketing/hubspot.png",
            class:" col-lg-4 "
        },
        {
            heading:"SEMrush",
            image:"/assets/digital-marketing/semrush_logo.jpg",
            class:" col-lg-4 "
        },
      
    
    ];

    const UItechnology=[
        {
            id:'UI',
            heading:"Digital Multimedia Marketing",
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
    `
  TechContainer.innerHTML += techHtml;

    

function getTechs(){
   let data=''
    UItechnology.forEach(tech => {
       const cardHTML = `
        <div>
                  <a href="#UI/UX" id="UI" class="tech-link d-flex justify-content-between active" >${tech.heading} <img loading="lazy"  src="/assets/UI-Icons/arrow.svg" alt=""></a>
                 <hr>
        </div>
    
        `;
        data+=cardHTML
    });
    return data

}



// Move the function OUTSIDE the event listener
function getApps() {
    
    let link = document.getElementById('UI');
 
    let data = '';
        link?.classList?.add('active');  
        UItechApps.forEach(app => {
            data += `
                <div class="${app.class.trim()} p-2">
                    <div class="app py-1 px-1 d-flex align-items-center">
                        <img loading="lazy"  width="20%" src="${app.image}" alt="">
                        <h5 class="m-0 px-1">${app.heading}</h5>
                    </div>
                </div>
            `;
        });
    return data;
}

const processes=[
    {
        id:'01',
        img :'/assets/digital-marketing/calendar.png',
        heading:'Creative Content Calender'
    },
    {
        id:'02',
        img :'/assets/digital-marketing/Paid-ad.png',
        heading:'Paid ad campaigns'
    },
    {
        id:'03',
        img :'/assets/digital-marketing/video-reels.png',
        heading:'Video Reels Posts Design'
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
                        <img loading="lazy" width="30%" src="${processes[0].img }" alt="Avatar" >
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
                        <img loading="lazy" width="30%"  src="${processes[1].img}" alt="Avatar" >
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
                        <img loading="lazy" width="30%" src="${processes[2].img}" alt="Avatar" >
                        <p class="w-75 text-center px-4 py-2 m-0">${processes[2].heading}</p>
                    </div> 
                </div>
            </div>
        </div>       
    </div>   
`



processContainer.innerHTML+=processHtml;

    



 });

 

