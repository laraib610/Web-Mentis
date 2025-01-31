document.addEventListener('DOMContentLoaded', function () {
    // Array for content to be inserted into the elements

  // Projects Cards
const projectTexts = [
    {
        heading:"UI/UX Design & Branding",
        image:"/assets/phone.png",
        description:"Creating user-centric designs and strong brand identities that resonate with audiences."
    },
    {
        heading:"Web Development",
        image:"/assets/mobile-enterprise.png",
        description:"Building scalable, innovative websites that drive engagement and conversions."
    },
    {
        heading:"Digital & Multimedia Marketing",
        image:"/assets/web-design.png",
        description:"Amplifying your presence with targeted campaigns across social media, email, and other platforms."
    },
    {
        heading:"Software & App Development",
        image:"/assets/ios-dev.png",
        description:"Delivering robust, intuitive software and mobile applications tailored to your needs."
    },
    {
        heading:"SaaS Solutions",
        image:"/assets/legacy-app.png",
        description:"Streamlining business operations with cloud-based applications."
    },
    {
        heading:"Cybersecurity",
        image:"/assets/platform.png",
        description:"Safeguarding your digital assets with state-of-the-art security solutions."
    },
    {
        heading:"CRM Integration & Cloud Services: ",
        image:"/assets/phone.png",
        description:"Enhancing customer relationships and operational efficiency."
    },
    {
        heading:"Event & Corporate Management",
        image:"/assets/mobile-enterprise.png",
        description:"Orchestrating seamless events that leave lasting impressions."
    },
    {
        heading:"Artificial Intelligence (AI) Services",
        image:"/assets/mobile-enterprise.png",
        description:"Integrating AI to automate processes, enhance decision-making, and improve user experiences."
    },


];


// Select the container element where content will be inserted
const service_container = document.getElementById('services_card');

// Group size for each carousel item (3 cards per slide)
const cardsPerSlide = 3;

for (let i = 0; i < projectTexts.length; i += cardsPerSlide) {
    // For each group of 3 cards, create a single carousel item
    const activeClass = i === 0 ? 'active' : ''; // Set the first item as active for carousel

    // Create the carousel item and group 3 cards inside it
    const cardHTML2 = `
        <div class="carousel-item ${activeClass}">
            <div class="d-flex justify-content-between">
               
                ${ createCard(i)}
                ${ createCard(i + 1)}
                ${ createCard(i + 2) }
            </div>
        </div>
    `;
    service_container.innerHTML += cardHTML2;
}

// Function to create an individual card
function createCard(index) {
    return `
     <div class="col-lg-4 d-flex justify-content-center">
       <div class="flip-card my-4">
                            <div class="flip-card-inner">
                                <div class="flip-card-front ">
                                    <img src=${projectTexts[index]?.image} alt="Avatar" >
                                    <p class="w-75 text-center py-2">${projectTexts[index]?.heading}</p>
                                </div>
                                <div class="flip-card-back flex align-items-center">
                                    <p class="my-3 mx-2">${projectTexts[index]?.description}
                                </div>
                            </div>
                        </div>
            </div>
    `;
}


    // community blobs cards

    const blogPosts = [
        {
            title: "Atlassian Jira Software",
            description: "Atlassian Jira is a popular project management tool designed for teams to plan, track, and release software.",
            ceoQuote: "\"At Atlassian, our mission is to unleash the potential of every team. We believe that software should be intuitive and powerful.\" - Mike Cannon-Brookes",
            author: "Mike Cannon-Brookes",
            imgSrc: "/assets/group-coworkers.png"
        },
        {
            title: "Swyftx Cryptocurrency Exchange",
            description: "Swyftx is an Australian cryptocurrency exchange platform offering low fees and secure transactions.",
            ceoQuote: "\"We're committed to providing the best cryptocurrency exchange experience in Australia.\" - Ryan Edwards-Tierney",
            author: " Ryan Edwards-Tierney",
            imgSrc: "/assets/group-coworkers.png"
        },
        {
            title: "MYOB",
            description: "MYOB provides accounting, payroll, and business management software for small to medium-sized businesses.",
            ceoQuote: "\"We are focused on delivering software solutions that help Australian businesses thrive.\" - Greg Ellis",
            author: "Greg Ellis",
            imgSrc: "/assets/group-coworkers.png"
        }
    ];

    // Select the container where content will be injected
    const container2 = document.getElementById('blog-container');
    // if (!container) {
    //     console.error('Project container not found');
    //     return;  // Exit if the container doesn't exist
    // }

    // Generate the HTML structure dynamically using a for loop
    blogPosts.forEach(post => {
        const cardHTML = `
            <div role="listitem" class="blob_item w-dyn-item col-lg-4">
                <div class="blob_item p-2">
                    <div class="py-5">
                        <a aria-label="Blog Image Link" class="blog_image-link w-inline-block">
                            <div class="blog_image-wrapper">
                                <img src="${post.imgSrc}" loading="lazy" width="100%" alt="" class="blog_image">
                            </div>
                        </a>
                    </div>
                    <div>
                        <h5 class="text-pink">${post.title}</h5>
                        <p class="blob-heading">${post.description}</p>
                        <p class="blob-text">${post.ceoQuote}</p>

                        <div class="d-flex align-items-center">
                            <img src="/assets/pink-circle.png" alt="">
                            <sub class="text-secondary m-0 mx-2">By <a class="text-secondary text-decoration-underline">${post.author}</a></sub>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container2.innerHTML += cardHTML;
    });

    // SERVICES CARDS

    const services=[
        {
            heading:"01.",
            subheading:"You can trust",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            heading:"02.",
            subheading:"You can trust",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            heading:"03.",
            subheading:"You can trust",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            heading:"04.",
            subheading:"You can trust",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },


    ]
    // Select the container where content will be injected
    const serviceContainer = document.getElementById('services');

    // Generate the HTML structure dynamically using a for loop
    services.forEach(service => {
        const cardHTML = `
            <div class="col-lg-3 p-3 ">
                    <div class=" p-4">
                        <h3 class="text-pink m-0">${service.heading}</h3>
                        <h5 class="text-white">${service.subheading}</h5>
                        <p class="text-white">${service.description}</p>
                    </div>

                </div>
        `;
        serviceContainer.innerHTML += cardHTML;
    });




    
    
});