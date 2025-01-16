document.addEventListener('DOMContentLoaded', function () {
    // Array for content to be inserted into the elements

    // Projects Cards
    const projectTexts = [
        "LOREM IPSUM IS SIMPLY DUMMY TEXT",
        "LOREM IPSUM IS SIMPLY DUMMY TEXT",
        "LOREM IPSUM IS SIMPLY DUMMY TEXT",
        "LOREM IPSUM IS SIMPLY DUMMY TEXT",
        "LOREM IPSUM IS SIMPLY DUMMY TEXT"
    ];

    // Select the container element where content will be inserted
    const container = document.getElementById('project-container');
    // Generate the HTML structure dynamically using a for loop
    for (let i = 0; i < projectTexts.length; i++) {
        const colClass = i === 0  ? 'col-lg-5' : i===1?'col-lg-7': 'col-lg-4';
        const gridClass = (i === 0 || i === 4) ? 'grid_gradient' : '';
        const cardHTML = `
            <div class="${colClass} p-2">
                <div class="card-projects ${gridClass} d-flex justify-content-center align-items-end">
                    <p class="text-white mt-5">${projectTexts[i]}</p>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    }



    // community blobs cards

    const blogPosts = [
        {
            title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            category: "Community",
            author: "ALAN WALKER",
            date: "JANUARY 07, 2025",
            imgSrc: "/assets/group-coworkers.png"
        },
        {
            title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            category: "Community",
            author: "ALAN WALKER",
            date: "JANUARY 07, 2025",
            imgSrc: "/assets/group-coworkers.png"
        },
        {
            title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            category: "Community",
            author: "ALAN WALKER",
            date: "JANUARY 07, 2025",
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
                        <h5 class="text-pink">${post.category}</h5>
                        <h5 class="blob-heading">${post.title}</h5>
                        <p class="blob-text">${post.description}</p>
                        <div class="d-flex align-items-center">
                            <img src="/assets/pink-circle.png" alt="">
                            <sub class="text-secondary m-0 mx-2">By <a class="text-secondary text-decoration-underline">${post.author}&nbsp;&nbsp;&nbsp;&nbsp; ${post.date}</a></sub>
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
            heading:"WEB DEVELOPMENT",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            heading:"DESIGN",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            heading:"UI/UX DESIGN",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            heading:"APP DEVELOPMENT",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            heading:"WEB DEVELOPMENT",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            heading:"WEB DEVELOPMENT",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
    ]
    // Select the container where content will be injected
    const serviceContainer = document.getElementById('services');

    // Generate the HTML structure dynamically using a for loop
    services.forEach(service => {
        const cardHTML = `
            <div class="col-lg-4 p-3">
                    <div class="card p-4">
                        <h5 class="text-blue">${service.heading}</h5>
                        <p>${service.description}</p>
                    </div>

                </div>
        `;
        serviceContainer.innerHTML += cardHTML;
    });


    // Teams Cards
    const Teams=[
        {
            heading:"CEO",
            image:"/assets/employee.png",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            heading:"CEO",
            image:"/assets/employee.png",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            heading:"CEO",
            image:"/assets/employee.png",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            heading:"CEO",
            image:"/assets/employee.png",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }];

        const teamContainer = document.getElementById('team');

    // Generate the HTML structure dynamically using a for loop
    Teams.forEach(team => {
        const cardHTML = `
                     <div class="col-lg-3 p-3">
                            <div class="employee">
                                <div class="employee-image">
                                    <img src="${team.image}" width="100%" alt="">

                                </div>
                                <div class="py-2">
                                    <h6 class="text-white">${team.heading}</h6>
                                    <p class="text-white">${team.description}</p>
                                </div>

                            </div>

                        </div>              

        `;
        teamContainer.innerHTML += cardHTML;
    });

    
});