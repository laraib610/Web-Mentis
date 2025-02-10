document.addEventListener('DOMContentLoaded', function () {
    // Array for content to be inserted into the elements

  // Projects Cards
const projectTexts = [
    {
        heading:"UI/UX",
        heading2:"Design",
        image:"/assets/ui-service.png",
        color:"#DAE810",
        description:"Creating user-centric designs and strong brand identities that resonate with audiences."
    },
    {
        heading:"Web",
        heading2:"Development",
        image:"/assets/web-service.png",
        color:"#161737",
        description:"Building scalable, innovative websites that drive engagement and conversions."
    },
    {
        heading:"Cyber ",
        heading2:"Security",
        image:"/assets/cyber-service.png",
        color:"#DAE810",
        description:"Safeguarding your digital assets with state-of-the-art security solutions."
    },
    {
        heading:"Digital & Multimedia",
        heading2:"Marketing",
        image:"/assets/digital-service.png",
        color:"#DAE810",
        description:"Amplifying your presence with targeted campaigns across social media, email, and other platforms."
    },
    {
        heading:"Software & App ",
        heading2:"Development",
        image:"/assets/software-service.png",
        color:"#161737",
        description:"Delivering robust, intuitive software and mobile applications tailored to your needs."
    },
    {
        heading:"SaaS",
        heading2:"Solutions",
        image:"/assets/saas-service.png",
        color:"#DAE810",
        description:"Streamlining business operations with cloud-based applications."
    },
    {
        heading:"Event & Corporate",
        heading2:"Management",
        image:"/assets/event-service.png",
        color:"#161737",
        description:"Orchestrating seamless events that leave lasting impressions."
    },
    {
        heading:"CRM Integration ",
        heading2:"& Cloud Services ",
        image:"/assets/crm-service.png",
        color:"#DAE810",
        description:"Enhancing customer relationships and operational efficiency."
    },
    
    {
        heading:"Artificial Intelligence",
        heading2:"Intelligence",
        image:"/assets/artificial-service.png",
        color:"#DAE810",
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
     <div class="col-lg-4 col-12 d-flex justify-content-center">
       <div class="flip-card my-4">
                            <div class="flip-card-inner" >
                                <div class="flip-card-front "
                                 style="background:url('${projectTexts[index]?.image}'); background-size:cover; background-repeat:no-repeat">
                                 <div class="p-3">
                                    <h4 class="w-50 m-0 text-light ">${projectTexts[index]?.heading}</h4>
                                    <h4 class="w-50 " style="color:${projectTexts[index]?.color}" >${projectTexts[index]?.heading2}</h4>
                                 </div>
                                    
                                </div>
                                <div class="flip-card-back flex align-items-center">
                                    <p class="my-3 text-center mx-2">${projectTexts[index]?.description}
                                </div>
                            </div>
                        </div>
            </div>
    `;
}


    // community blobs cards

    const blogPosts = [
        {
            title: "NanoSoft",
            description: "NanoSoft specializes in software development for robotics, particularly in industrial automation. The project focuses on real-time motion control systems, optimizing sensor fusion for feedback loops, and ensuring that robotic arms and drones function with maximum precision, safety, and efficiency.",
            ceoQuote: "\"At NanoSoft, we’re empowering robots with the intelligence to make real-time decisions. Our low-level software ensures that every sensor reading, every movement, and every task is executed with perfect precision. The future of robotics is here, and we’re proud to be leading the way.\" - Mike Cannon-Brookes",
            author: "Mike Cannon-Brookes",
            imgSrc: "/assets/nanosoft.jpg"
        },
        {
            title: "Castlepoint",
            description: "Castlepoint Systems offers a platform that promotes secure data storage using ethical AI. It ensures organizations can manage and protect their information assets while complying with regulatory requirements.",
            ceoQuote: "\"We are committed to providing organizations with the tools to manage their data securely and ethically, leveraging AI to uphold the highest standards of information governance.\" - Ryan Edwards-Tierney",
            author: " Ryan Edwards-Tierney",
            imgSrc: "/assets/castlepoint.jpeg"
        },
        {
            title: "SmartStudy",
            description: "SmartStudy is an educational app for students, offering interactive lessons, quizzes, and resources across various subjects. The app utilizes low-level software to ensure real-time progress tracking, offline access to content, and seamless synchronization across devices, providing a highly responsive and engaging learning experience",
            ceoQuote: "\"SmartStudy is transforming the way students learn by focusing on real-time performance improvements and user-friendly features. Our low-level optimizations ensure that students have uninterrupted access to educational content wherever they are, on any device.\" - Greg Ellis",
            author: "Greg Ellis",
            imgSrc: "/assets/smartstudy.jpeg"
        }
    ];

    // Select the container where content will be injected
    const container2 = document.getElementById('blog-container');

    blogPosts.forEach(post => {
        const cardHTML = `
            <div role="listitem" class="blob_item w-dyn-item col-lg-4">
                <div class="blob_item p-2">
                    <div class="py-5">
                        <a aria-label="Blog Image Link" class="blog_image-link w-inline-block">
                            <div class="blog_image-wrapper">
                                <img loading="lazy"  src="${post.imgSrc}" loading="lazy" width="100%" alt="" class="blog_image">
                            </div>
                        </a>
                    </div>
                    <div>
                        <h5 class="text-pink">${post.title}</h5>
                        <p class="blob-heading">${post.description}</p>
                        <p class="blob-text">${post.ceoQuote}</p>

                        <div class="d-flex align-items-center">
                            <img loading="lazy"  src="/assets/pink-circle.png" alt="">
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
            subheading:"Built on Trust",
            description:"Reliable, high-quality digital solutions backed by expertise and innovation."
        },
        {
            heading:"02.",
            subheading:"Custom Strategies",
            description:"Tailored solutions to match your business goals for lasting success."
        },
        {
            heading:"03.",
            subheading:"Latest Technology",
            description:"Secure, scalable, and high-performance solutions with cutting-edge tools."
        },
        {
            heading:"04.",
            subheading:"Ongoing Support",
            description:"Continuous updates, expert guidance, and dedicated customer care."
        },


    ]
    // Select the container where content will be injected
    const serviceContainer = document.getElementById('services');

    // Generate the HTML structure dynamically using a for loop
    services.forEach(service => {
        const cardHTML = `
            <div class="col-lg-3 p-3 ">
                    <div class="expertise-card p-4">
                        <h3 class="text-pink m-0">${service.heading}</h3>
                        <h5 class="text-white">${service.subheading}</h5>
                        <p class="text-white">${service.description}</p>
                    </div>

                </div>
        `;
        serviceContainer.innerHTML += cardHTML;
    });




    
    
});