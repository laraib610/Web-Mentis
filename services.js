$(function() {
    // Load header content
    $("#header").load("../shared/header/header.html", function() {
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
  

    // Load footer content
    $("#footer").load("../shared/footer/footer.html");
  
    // Add active class to clicked navbar item
  
  });