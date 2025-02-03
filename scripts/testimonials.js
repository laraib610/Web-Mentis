document.addEventListener('DOMContentLoaded', function () {

const Testimonials = [
    {
        heading:"Jane Copper",
        image:"/assets/review.png",
        description:"OHHHH Thanks god !!!! Finally there is someone making it for me to use on my projects. Love ya "
    },
    {
        heading:"Jane Copper",
        image:"/assets/review.png",
        description:"OHHHH Thanks god !!!! Finally there is someone making it for me to use on my projects. Love ya"
    },
    {
        heading:"Jane Copper",
        image:"/assets/review.png",
        description:"OHHHH Thanks god !!!! Finally there is someone making it for me to use on my projects. Love ya"
    },
    {
        heading:"Jane Copper",
        image:"/assets/review.png",
        description:"OHHHH Thanks god !!!! Finally there is someone making it for me to use on my projects. Love ya"
    },
    {
        heading:"Jane Copper",
        image:"/assets/review.png",
        description:"OHHHH Thanks god !!!! Finally there is someone making it for me to use on my projects. Love ya"
    },
    {
        heading:"Jane Copper",
        image:"/assets/review.png",
        description:"OHHHH Thanks god !!!! Finally there is someone making it for me to use on my projects. Love ya"
    },


];


    ///Testimonials
    
    
    // Select the container element where content will be inserted
    const testimonials_container = document.getElementById('testimonialss_card');
    
    // Group size for each carousel item (3 cards per slide)
    const cardsPerSlide_testimonial = 3;
    
    for (let i = 0; i < Testimonials.length; i += cardsPerSlide_testimonial) {
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
        testimonials_container.innerHTML += cardHTML2;
    }
    
    // Function to create an individual card
    function createCard(index) {
        return `
         <div class="col-lg-4 col-12 d-flex justify-content-center">
           <div class="testimonial-card my-4">
                                
                <p class="text-white py-3 px-1">${Testimonials[index]?.description}
                <div class="d-flex justify-content-center">
                    <img src="/assets/Star.png" width="70%"  alt="Avatar" >
                </div>
                
                <div class="d-flex py-3 justify-content-center align-items-center px-5 py-1">
                    <img src=${Testimonials[index]?.image} width="30%" alt="Avatar" >
                    <p class="w-75 text-center py-2 m-0 text-white">${Testimonials[index]?.heading}
                     <sup class="text-secondary m-0">Lead designer</sup>
                    </p>
                   
                </div>
                
                                        
                                   
                            </div>
                </div>
        `;
    }
});