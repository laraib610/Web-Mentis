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
        // navItems.forEach(navItem => navItem.classList.remove('active'));
      console.log(item.classList)
      // Add 'active' class to clicked item
      item.classList.add('active');
      }
      
        // item.addEventListener('click', function() {
        //     // Remove 'active' class from all nav items
        //     navItems.forEach(navItem => navItem.classList.remove('active'));
        //     console.log(item)
        //     // Add 'active' class to clicked item
        //     item.classList.add('active');
        // });
    });
} else {
    console.error('No navigation items found.');
}
  });

  // Load partners content
  $("#partners").load("/shared/partners/partners.html", function() {
      // Dynamically add waves based on URL
      const wave = document.getElementById(window.location.pathname.includes('package') ? 'wave' :
                                            window.location.pathname.includes('contact') || window.location.pathname.includes('service') || window.location.pathname.includes('projects.html') ? 'wave-white' : 'wave-pink');
      if (wave) {
          const wavehtml = `<img src="${window.location.pathname.includes('package') ? '/assets/purple-wave.svg' : (window.location.pathname.includes('contact') || window.location.pathname.includes('service') || window.location.pathname.includes('projects.html') ? '/assets/white-wave.svg' : '/assets/pink-wave.svg')}" class="purple-wave" style="z-index:1" alt="">`;
          wave.insertAdjacentHTML('beforeend', wavehtml);
      }

      // Dynamically populate partner logos
      const partnerImgUrls = [
          { src: "/assets/samsung.png", width: "60%",  class:"partner-img"},
          { src: "/assets/amazon.png", width: "60%" ,  class:"partner-img-2"},
          { src: "/assets/apple.png", class:"partner-img-1" },
          { src: "/assets/samsung.png", width: "60%" ,  class:"partner-img"}
      ];

      const partnerContainer = document.getElementById('partners-container');
      if (partnerContainer) {
          partnerImgUrls.forEach(partner => {
              const cardHTML = `
              <div class="d-flex justify-content-center align-items-lg-start py-2 py-lg-0">
                          <img src="${partner.src}" class=${partner.class} alt="">
              </div>
                 
              `;
              partnerContainer.insertAdjacentHTML('beforeend', cardHTML);
          });
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
                          <img src="${office.image}" width="${office.imagesize}" alt="">
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
