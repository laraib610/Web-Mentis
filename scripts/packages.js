document.addEventListener('DOMContentLoaded', function () {
const packages=[
    {
        heading:"AGGRESSIVE",
    },
    {
        heading:"MARKET LEADER",

    },
    {
        heading:"ENTERPRISE",
    },
    {
        heading:"ENTERPRISE PLUS",
    }];
    
    const packageContainer = document.getElementById('package-container');

// Generate the HTML structure dynamically using a for loop
packages.forEach((package, index) => {
    const padding =index===0 || index==2 ?'p-text':'p-text-2';
    const cardHTML = `
                  <div class="col-lg-3 py-4 py-lg-0">
                    <div class="package-card py-4">
                        <div class="p-4">
                                <div class="heading pt-5 pb-2">
                                <h3 class=${padding}>${package.heading}</h3>

                            </div>
                            <div>
                            <p class="text-white m-0">What's included</p> 
                                <ul class="package-list">
                                    <li> Required Ad Spend Range
                                        $1,000 – $6,000 / month ad
                                        spend (paid to networks)</li>
                                    <li>Initial Setup $499</li>
                                    <li>Up to 10 Business Days for complete setup</li>
                                    <li>Social Media Platforms</li>
                                    <li>Ad Campaign Copywriting</li>
                                    <li>Ad Campaign Content Creation</li>
                                    <li> Images</li>
                                    <li>Videos</li>
                                    <li>Dedicated Campaign Manager</li>
                                    <li>Initial Campaign Strategy Development</li>
                                    <li>Number of Advertising Campaigns</li>
                                    <li> Up to 5</li>
                                    <li>Numbers of Ads SetUp to 20</li>
                                    <li>Audience Analysis</li>
                                    <li>Customer Support</li>
                                    <li>Email & Phone</li>

                                </ul>
                            </div>
                        </div>
                        <div class="package-button">
                            <a href="#">CHOOSE PLAN</a>

                        </div>
                    </div>

                </div>

    `;
    packageContainer.innerHTML += cardHTML;
});
});

