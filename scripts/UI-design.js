document.addEventListener('DOMContentLoaded', function () {
    const UIservices=[
        {
            heading:"UX Design",
            image:"/assets/UI-Icons/UX-design.svg",
            description:"process of enhancing user satisfaction by improving the usability, accessibility, and interaction between the user and a product, service, or system"
        },
        {
            heading:"UI Design",
            image:"/assets/UI-Icons/UI-design.svg",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            heading:"MOBILE APP UI/UX DESIGN",
            image:"/assets/web-design.png",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            heading:"IOS APP DEVELOPMENT",
            image:"/assets/ios-dev.png",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            heading:"LEGACY APP MODERNIZATION",
            image:"/assets/legacy-app.png",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            heading:"MOBILE APP SUPPORT & MAINTENANCE",
            image:"/assets/platform.png",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
    ];
    
        const UIserviceContainer = document.getElementById('UI-service-container');
    
    // Generate the HTML structure dynamically using a for loop
    UIservices.forEach(service => {
        const cardHTML = `
                    <div class="col-lg-3 d-flex justify-content-center">
                            <div class="flip-card my-4">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front ">
                                        <img src=${service.image} alt="Avatar" >
                                        <p class="w-75 text-center py-2 m-0">${service.heading}</p>
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
    });