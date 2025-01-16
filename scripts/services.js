document.addEventListener('DOMContentLoaded', function () {
const services=[
    {
        heading:"MOBILE APP DEVELOPMENT",
        image:"/assets/phone.png",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        heading:"ENTERPRISE APP DEVELOPMENT",
        image:"/assets/mobile-enterprise.png",
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

    const serviceContainer = document.getElementById('service-container');

// Generate the HTML structure dynamically using a for loop
services.forEach(service => {
    const cardHTML = `
                <div class="col-lg-4 d-flex justify-content-center">
                        <div class="flip-card my-4">
                            <div class="flip-card-inner">
                                <div class="flip-card-front ">
                                    <img src=${service.image} alt="Avatar" >
                                    <p class="w-75 text-center py-2">${service.heading}</p>
                                </div>
                                <div class="flip-card-back">
                                    <p class="my-3 mx-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                        when an unknown printer took a galley of type and scrambled it to make a type 
                                        specimen book. 
                                    </p> 
                                </div>
                            </div>
                        </div>
                    </div>       
                </div>   

    `;
    serviceContainer.innerHTML += cardHTML;
});
});