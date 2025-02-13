document.addEventListener('DOMContentLoaded', function () {

const Testimonials = [
    {
        heading:"Jane Copper",
        image:"/assets/jane-copper.png",
        rating:4,
        description:"OHHHH Thanks god !!!! Finally there is someone making it for me to use on my projects. Love ya "
    },
    {
        heading:"Michael Thomas",
        image:"/assets/michael-thomas.png",
        rating:4,
        description:"WebMantis is fantastic at developing creative, innovative IT solutions that help businesses grow. Their expertise in IT strategy and implementation is impressive, and their support is always on point."
    },
    {
        heading:"Liam Walker",
        image:"/assets/liam-walker.png",
        rating:3,
        description:"Cybersecurity is a major concern for our company, and WebMantis helped us enhance our security. Their team conducted thorough audits and provided solutions that have significantly reduced our risks."
    },
    {
        heading:"Sarah Johnson",
        image:"/assets/sarah-johnson.png",
        rating:5,
        description:" Their team is highly professional, reliable, and always available to resolve any issues quickly. Highly recommend them for any business looking to streamline their IT infrastructure"
    },
    {
        heading:"James Lee",
        image:"/assets/james-lee.png",
        rating:5,
        description:"The customer service at WebMantis is second to none. Their attention to detail and commitment to client satisfaction make them stand out in the IT industry."
    },
    {
        heading:"Emma Robinson",
        image:"/assets/emma-robhinson.png",
        rating:4,
        description:"We partnered with WebMantis for a website overhaul, and they delivered excellent results on time and within budget. The team is incredibly responsive and provides great value for the price."
    },


];


    ///Testimonials
    
    
    // Select the container element where content will be inserted
    const testimonials_container = document.getElementById('testimonialss_card');
    // Group size for each carousel item (3 cards per slide for large screens, 1 card per slide for small screens)
const cardsPerSlideLg = 3; // For large screens, 3 cards per slide
const cardsPerSlideSm = 1; // For small screens, 1 card per slide

// Check for screen size to determine how many cards to display per slide
const isLargeScreen = window.innerWidth >= 992; // Bootstrap's breakpoint for large screens is 992px

// Determine the number of cards per slide based on the screen size
const cardsPerSlide = isLargeScreen ? cardsPerSlideLg : cardsPerSlideSm;
    
    for (let i = 0; i < Testimonials.length; i += cardsPerSlide) {
        // For each group of 3 cards, create a single carousel item
        const activeClass = i === 0 ? 'active' : ''; // Set the first item as active for carousel
    
        // Create the carousel item and group 3 cards inside it
        const cardHTML2 = `
            <div class="carousel-item ${activeClass}">
                <div class="d-flex justify-content-between align-items-stretch">
                   
                    ${ createCard(i , 'col-lg-4 col-12')}
                    ${ createCard(i + 1, 'col-lg-4 col-12')}
                    ${ createCard(i + 2, 'col-lg-4 col-12')}
                </div>
            </div>
        `;
        testimonials_container.innerHTML += cardHTML2;
    }
    
    // Function to create an individual card
    function createCard(index, colClass) {
        if (index >= Testimonials.length) return ''; // Avoid accessing out-of-bound indices

        return `
         <div class="${colClass} d-flex justify-content-center ">
           <div class="testimonial-card my-4">
                <p class="text-white py-3 px-1">${Testimonials[index]?.description}
                <div class="d-flex justify-content-center">
                   <div class="ratings d-flex">
                    ${createRating(Testimonials[index]?.rating)}
                    </div>
                </div>
                
                <div class="d-flex py-3 justify-content-center align-items-center px-3 py-1">
                    <img loading="lazy"  src=${Testimonials[index]?.image} width="30%" alt="Avatar" >
                    
                    <p class="w-75 text-center py-2 m-0 text-white">${Testimonials[index]?.heading}
                    <br>
                    </p>
                   
                </div>
                
                                        
                                   
                            </div>
                </div>
        `;
    }
    function createRating(rating) {
        var innerHTML='';
        var  innerHTML2='';
        for(let i=0; i<rating; i++){
           innerHTML+=  `<i class="fa fa-star rating-color m-1"></i>`
        }
        for(let i=0; i<5-rating; i++){
            innerHTML2+=  `<i class="fa fa-star-o rating-color m-1"></i>`

        }

        return innerHTML+innerHTML2


    }
});