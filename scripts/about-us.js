document.addEventListener('DOMContentLoaded', function () {
    const gallery_images=[
        {
            img_src:"/assets/placeholder-image.jpg",
        },
        {
            img_src:"/assets/placeholder-image.jpg",
        },
        {
            img_src:"/assets/placeholder-image.jpg",
        },
        {
            img_src:"/assets/placeholder-image.jpg",
        },
        {
            img_src:"/assets/placeholder-image.jpg",
        },
        {
            img_src:"/assets/placeholder-image.jpg",
        },
        {
            img_src:"/assets/placeholder-image.jpg",
        },
        {
            img_src:"/assets/placeholder-image.jpg",
        },
        {
            img_src:"/assets/placeholder-image.jpg",
        },
        {
            img_src:"/assets/placeholder-image.jpg",
        },
        {
            img_src:"/assets/placeholder-image.jpg",
        },
        {
            img_src:"/assets/placeholder-image.jpg",
        },
        {
            img_src:"/assets/placeholder-image.jpg",
        },
        {
            img_src:"/assets/placeholder-image.jpg",
        },
        {
            img_src:"/assets/placeholder-image.jpg",
        },
    
    ];
        
        const galleryContainer = document.getElementById('gallery');
    
    // Generate the HTML structure dynamically using a for loop
    gallery_images.forEach((gallery, index) => {
        const cardHTML = `
                     <div class="col-lg-2 mx-2 col-md-2 col-sm-4 ">
                       <a href="#" id="" class="m-2">
                            <div class="">
                                <img src=${gallery.img_src}
                                alt="" class="w-100">
                            </div>
                        </a> 
                    </div>
    
        `;
        galleryContainer.innerHTML += cardHTML;
    });
    const values=[
        {
            heading:"lorem ipsum",
            description:"",
            img_src:"/assets/image-placeholder-icon.png",
        },
        {
            heading:"lorem ipsum",
            description:"",
            img_src:"/assets/image-placeholder-icon.png",
        },
        {
            heading:"lorem ipsum",
            description:"",
            img_src:"/assets/image-placeholder-icon.png",
        },
        {
            heading:"lorem ipsum",
            description:"",
            img_src:"/assets/image-placeholder-icon.png",
        },
        {
            heading:"lorem ipsum",
            description:"",
            img_src:"/assets/image-placeholder-icon.png",
        },
       

    
    ];
        
        const valuesContainer = document.getElementById('values');
    
    // Generate the HTML structure dynamically using a for loop
    values.forEach((value, index) => {
        const cardHTML = `
                    <div class="col-md-4 my-3">
                           <div class="location_item m-2">
                                <div class="d-flex justify-content-center">
                                    <img src=${value.img_src}  width="20%" alt="" class="">
                                </div>
                                <div class="margin-bottom margin-small-2">
                                    <h5 class="text-white poppins-semibold text-center">${value.heading}</h5>
                                    <p class="text-white text-center">We believe the act of creating together amplifies possibilities.</p>
                                </div>
                            </div> 
                        </div>
    
        `;
        valuesContainer.innerHTML += cardHTML;
    });
    });