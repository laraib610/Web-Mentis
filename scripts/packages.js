document.addEventListener('DOMContentLoaded', function () {
    const packages = [
        { heading: "Offline Business Package" ,
            list:[
                {
                   item:'Branding (logo, banners, business cards, flyers)'

                },
                {
                    item:'Web Development (basic website with up to 10 pages)'
 
                 },
                 {
                    item:'Digital Marketing (Google Ads and social media campaigns)'
 
                 },
                 {
                    item:'Social Media Management (content creation and account handling for Facebook, Instagram, and LinkedIn)'
 
                 },
                 {
                    item:'Photography and Video Shoots (5 professional photoshoots or promotional videos per year)'
 
                 },
            ]
        },
        { heading: "Online Business Package",
            list:[
                {
                   item:'UI/UX Design (custom design for apps and websites)'

                },
                {
                    item:'Digital Marketing (advanced SEO, Google Ads, social media campaigns, and email marketing)'
 
                 },
                 {
                    item:'Social Media Management (content creation, engagement, and analytics tracking for 3 platforms)'
 
                 },
                 {
                    item:'Web and App Development (fully responsive e-commerce website or basic app)'
 
                 },
                 {
                    item:'Multimedia Marketing (promo videos, explainer videos, and infographics)'
 
                 },
            ]
         },
        { heading: "Corporate Business Package",
            list:[
                {
                   item:'Multi-region Web and App Development (e.g., multilingual or country-specific versions)'

                },
                {
                    item:'Advanced SEO Strategies (keyword optimization for multiple markets)'
 
                 },
                 {
                    item:'SaaS Solutions (custom software for business operations)'
 
                 },
                 {
                    item:'Cybersecurity (network and data security solutions)'
 
                 },
                 {
                    item:'CRM Integration (streamlined customer relationship management systems)'
 
                 },
                 {
                    item:'Product Launch Event (videography, photography, and digital outreach)'
 
                 },
                 {
                    item:'Cloud Services (data storage, backups, and cloud hosting)'
 
                 },
            ]
         },
        { heading: "Industrial or Large-Scale Business Package",
            list:[
                {
                   item:'SaaS Solutions (custom industrial management software)'

                },
                {
                    item:'Industrial Automation Tools (integration with ERP systems)'
 
                 },
                 {
                    item:'CloudCare (24/7 cloud monitoring and management)'
 
                 },
                 {
                    item:'Cloud Services (data hosting and business continuity solutions)'
 
                 },
                 {
                    item:'Cybersecurity Solutions (advanced network and industrial system protection)'
 
                 },
                 {
                    item:'CRM Customization for Large Teams (multi-tier access and region-specific features)'
 
                 },
            ]
         }
    ];

    const packageContainer = document.getElementById('package-container');

// Generate the HTML structure dynamically using a for loop
packages.forEach((package, index) => {
    const padding =index===0 || index==2 ?'p-text':'p-text-2';
    const cardHTML = `
                  <div class="col-lg-3 py-4 py-lg-0">
                    <div class="package-card py-4" style="animation-delay: ${0.2 + index * 0.2}s">
                        <div class="p-4 pkg">
                                <div class="heading pt-5 pb-2">
                                <h3 class=${padding}>${package.heading}</h3>

                            </div>
                            <div>
                            <p class="text-white m-0">What's included</p> 
                                <ul class="package-list">
                                   ${getList(package.list)}

                                </ul>
                            </div>
                        </div>
                        <div class="package-button">
                            <a href="/contact-us.html">CHOOSE PLAN</a>

                        </div>
                    </div>
                </div>
            </div>
        `;
        packageContainer.innerHTML += cardHTML;

        function getList(list){
           let data=''
            list.forEach(item => {
                const cardHTML = `
                <li>${item.item}</li>
                `;
                data += cardHTML;
            });
            return data;
        }
    });
});
