$(function(){
    $("#header").load("shared/header/header.html"); 
    $("#partners").load("/shared/partners/partners.html", function() {
      // This callback function ensures that the partners.html content is loaded before running your script
     if(window.location.href.includes('/ind')||window.location.href.includes('/team')){
        console.log('working')
        const wave = document.getElementById('wave-pink');
        const wavehtml=` <img src="/assets/pink-wave.svg" class="purple-wave" style="z-index:1" alt="">
        `
        wave.innerHTML +=wavehtml;
      } 
       if(window.location.href.includes('package'))
        {
        const wave = document.getElementById('wave');
        const wavehtml=`<img src="/assets/purple-wave.svg" class="purple-wave" alt="">
        `
        wave.innerHTML +=wavehtml;
      }
      if(window.location.href.includes('contact') ||
       window.location.href.includes('service') || window.location.href.includes('project'))
        {
        const wave = document.getElementById('wave-white');
        const wavehtml=`<img src="/assets/white-wave.svg" class="purple-wave" alt="">
        `
        wave.innerHTML +=wavehtml;
      }
      
      // Now you can safely run your JavaScript to modify #partners-container
      const partnerImgUrls = [
          { src: "/assets/samsung.png", width:"60%" },
          { src: "/assets/amazon.png", width:"60%"},
          { src: "/assets/apple.png" },
          { src: "/assets/samsung.png", width:"60%" }
      ];

      // Select the container element where content will be inserted
      const partnerContainer = document.getElementById('partners-container');

      // Check if the partnerContainer exists before trying to modify it
      if (partnerContainer) {
          // Generate the HTML structure dynamically using a for loop
          for (let i = 0; i < partnerImgUrls.length; i++) {
              const cardHTML = `
                  <div class="p-3">
                    <div class=" d-flex justify-content-center" >
                      <img src="${partnerImgUrls[i].src}" width=${partnerImgUrls[i].width} alt="">
                    </div>
                      
                  </div>
              `;
              partnerContainer.innerHTML += cardHTML;
          }
      } else {
          console.error("Element with id 'partners-container' not found!");
      }

      const globalOffices=[
        {
            heading:"PAKISTAN",
            image:"/assets/pakistan.png",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            imagesize:"60%"
        },
        {
            heading:"USA OFFICE",
            image:"/assets/usa.png",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            imagesize:"79%"
        },
        {
            heading:"UK OFFICE",
            image:"/assets/uk.png",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            imagesize:"30%"
        },
        {
            heading:"AUSTRALIA",
            image:"/assets/australia.png",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            imagesize:"57%"
        },
        {
          heading:"UAE OFFICE",
          image:"/assets/uae.png",
          description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            imagesize:"57%"
      }
      ];

        const globalContainer = document.getElementById('global-office');

    // Generate the HTML structure dynamically using a for loop
    globalOffices.forEach(office => {
        const cardHTML = `
                     <div class=" p-3">
                            <div class="">
                                <div class="">
                                    <img src="${office.image}" width=${office.imagesize} alt="">

                                </div>
                                <div class="py-2">
                                    <h6 class="text-white">${office.heading}</h6>
                                    <p class="text-white">${office.description}</p>
                                </div>
                                <span class="text-white">+92 123 145 4469</span>

                            </div>

                        </div>              

        `;
        globalContainer.innerHTML += cardHTML;
    });

  });
    $("#footer").load("shared/footer/footer.html"); 
  });