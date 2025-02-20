$(function() {
  // Load header content
  $("#header").load("shared/header/header.html", function() { 
      // Callback logic for header load (if necessary)
      const navItems = document.querySelectorAll('.navbar-nav .nav-link');
      console.log(navItems)
if (navItems.length > 0) {
    navItems.forEach(item => {
      console.log(item, item.href)
      console.log(window.location.href.includes(item.href))
      if(window.location.href.includes(item.href)){
      console.log(item.classList)
      // Add 'active' class to clicked item
      item.classList.add('active');
      }
    
    });
} else {
    console.error('No navigation items found.');
}
  });

  // Load partners content

  $("#partners").load("/shared/partners/partners.html", function() {
    const partnerimgUrls = [
      { src: "/assets/softosol.png", width: "60%", class:"partner-img"},
      { src: "/assets/Nexa.png", width: "70%", class:"partner-img-2"},
      // Add more images as needed
  ];

  const partnerContainer = document.getElementById('partners-container');
  const isLargeScreen = window.innerWidth >= 992;
  
  if (partnerContainer) {
    let firstSlide = true; // Flag to apply "active" class to the first slide
    for (let i = 0; i < partnerimgUrls.length; i++) {
      const activeClass = firstSlide ? 'active' : ''; 
      firstSlide = false; // After the first slide, set the flag to false

      // Generate the HTML for each carousel slide
      if(!isLargeScreen){
        const cardHTML = `
                <div class="carousel-item ${activeClass}">
                  <div class="d-flex justify-content-between">
                    ${createCard(i, 'col-lg-4 col-12')} <!-- Col for large and small screens -->
                  </div>
                </div>
              `;
              partnerContainer.insertAdjacentHTML('beforeend', cardHTML);
      }else{
        const cardHTML = `
        <div class="carousel-item ${activeClass}">
          <div class="d-flex justify-content-between">
            ${createCard(i, 'col-lg-4 col-12')} <!-- Col for large and small screens -->
            ${createCard(i+1, 'col-lg-4 col-12')} <!-- Col for large and small screens -->
          </div>
        </div>
      `;
      partnerContainer.insertAdjacentHTML('beforeend', cardHTML);

      }
      
    }
  }

  function createCard(index, colClass) {
    // Check if the index is within the bounds of the array
    if (index < partnerimgUrls.length) {
      return `
        <div class="${colClass} d-flex justify-content-center">
          <div class=" d-flex justify-content-center">
            <img loading="lazy" src="${partnerimgUrls[index].src}" class="${partnerimgUrls[index].class}" alt="Partner Image">
          </div>
        </div>
      `;
    }
    return ''; // Return empty string if index is out of bounds
  }
      // Dynamically populate global offices
      const globalOffices = [
          { heading: "PAKISTAN", image: "/assets/pakistan.png", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", imagesize: "60%" },
          { heading: "USA OFFICE", image: "/assets/usa.png", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", imagesize: "79%" },
          { heading: "UK OFFICE", image: "/assets/uk.png", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", imagesize: "30%" },
          { heading: "AUSTRALIA", image: "/assets/australia.png", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", imagesize: "57%" },
          { heading: "UAE OFFICE", image: "/assets/uae.png", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", imagesize: "57%" }
      ];

      const globalContainer = document.getElementById('global-office');
      if (globalContainer) {
          globalOffices.forEach(office => {
              const cardHTML = `
                  <div class="p-3">
                      <div class="d-flex justify-content-center justify-content-lg-start">
                          <img loading="lazy"  src="${office.image}" width="${office.imagesize}" alt="">
                      </div>
                      <div class="py-2 d-flex flex-column justify-content-center justify-content-lg-start">
                          <h6 class="text-white mob-text">${office.heading}</h6>
                          <p class="text-white mob-text">${office.description}</p>
                      </div>
                      <div d-flex justify-content-center justify-content-lg-start>
                        <p class="text-white mob-text">+92 123 145 4469</p>
                      </div>
                      
                  </div>
              `;
              globalContainer.insertAdjacentHTML('beforeend', cardHTML);
          });
      }
  });

  // Load footer content
  $("#footer").load("shared/footer/footer.html");

  // Add active class to clicked navbar item

});
