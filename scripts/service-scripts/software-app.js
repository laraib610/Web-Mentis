document.addEventListener('DOMContentLoaded', function () {
  
    const softwareservices=[
        {
            heading:"App updates and maintenance",
            image:"/assets/software/app-maintenance.png",
            description:"Improving, fixing, and updating a software application (whether it’s a mobile app, web app, or desktop app) after its initial release."
        },
        {
            heading:"CRM",
            image:"/assets/software/CRM.png",
            description:"Strategy and software solution designed to help businesses manage and analyze customer interactions and data throughout the customer lifecycle."
        },
        {
            heading:"Cross Platform",
            image:"/assets/software/cross-platform.png",
            description:"Software application or system to run on multiple platforms or operating systems without requiring significant modifications"
        },
        {
            heading:"Enterprise Resource Planning",
            image:"/assets/software/ERP.png",
            description:"Helps streamline processes and information across an organization, integrating various departments like finance, HR, supply chain, procurement"
        },
        {
            heading:"Native IOS & Android",
            image:"/assets/software/native.png",
            description:"Developing mobile applications specifically tailored for iOS and Android platforms using their respective programming languages."
        },
        {
            heading:"Workflow",
            image:"/assets/software/workflow.png",
            description:"Processes are carried out to achieve a specific business goal or outcome."
        },
        
    ];
    
        const softwareserviceContainer = document.getElementById('software-service-container');
    
    // Generate the HTML structure dynamically using a for loop
    softwareservices.forEach(service => {
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
        softwareserviceContainer.innerHTML += cardHTML;
    });

    const softwaretechnology=[
        {
            id:'software',
            heading:"software & App Development",
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
    softwaretechnology.forEach(tech => {
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
 
const softwareApps=[
    {
        heading:"C#",
        image:"/assets/software/c-sharp.png",
        class:" col-lg-4 ",
        width:"20%"
    },
    {
        heading:"Java",
        image:"/assets/software/java.png",
        class:" col-lg-4 ",
        width:"20%"
    },
    {
        heading:"Python",
        image:"/assets/software/python.png",
        class:" col-lg-4 ",
        width:"20%"
    },
    {
        heading:"MySql",
        image:"/assets/software/mysql-database.png",
        class:" col-lg-4",
        width:"20%"
    },
    {
        heading:"Mongodb",
        image:"/assets/software/mongodb.svg",
        class:" col-lg-4",
        width:"20%"
    },
    {
        heading:"Kotlin",
        image:"/assets/software/kotlin.png",
        class:" col-lg-4",
        width:"20%"
    },
    {
        heading:"Swift",
        image:"/assets/software/swift.png",
        class:" col-lg-4",
        width:"20%"
    },
    {
        heading:"Docker",
        image:"/assets/software/docker.png",
        class:" col-lg-4",
        width:"20%"
    },
    {
        heading:"Firebase",
        image:"/assets/software/firebase.png",
        class:" col-lg-4",
        width:"20%"
    },

];
 
 

// Move the function OUTSIDE the event listener
function getApps() {
    let link = document.getElementById('UI');

    let data = '';
        softwareApps.forEach(app => {
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
