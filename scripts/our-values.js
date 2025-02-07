document.addEventListener('DOMContentLoaded', function () {
    // Array for content to be inserted into the elements
    const valuesTexts = [
        {
            heading: "Innovation & Excellence 🚀",
            description: "We push the boundaries of technology to create cutting-edge solutions in mobile apps, UI/UX, web development, AI, cybersecurity, and cloud services. Every project we undertake is crafted with precision and innovation."
        },
        {
            heading: "Customer-Centric Approach 🤝",
            description: "Our clients are at the heart of everything we do. We take time to understand their needs and deliver customized, scalable, and future-proof solutions that help them achieve success."
        },
        {
            heading: "Integrity & Transparency 🔍",
            description: "We believe in building trust through honesty, transparency, and ethical business practices. Whether it's a startup or an enterprise, we maintain open communication and accountability."
        },
        {
            heading: "Security & Reliability 🔒",
            description: "Cybersecurity and data protection are at our core. Our solutions are designed with robust security protocols, ensuring that businesses stay protected in an evolving digital landscape."
        },
        {
            heading: "Collaboration & Growth 🤝",
            description: "We foster a culture of teamwork, creativity, and continuous learning—both within our team and with our clients. Success is a journey we take together."
        },
        {
            heading: "Adaptability & Future-Readiness 🌍",
            description: "Technology evolves rapidly, and so do we. From AI-driven automation to SaaS solutions and CRM integrations, we embrace change and empower businesses to stay ahead of the curve."
        }
    ];

    // Select the container element where content will be inserted
    const service_container = document.getElementById('values_card');

    // Loop through the array and create cards without using a carousel
    valuesTexts.forEach((valueText, index) => {
        // Create the individual card
        const cardHTML = createCard(index);
        service_container.innerHTML += cardHTML;
    });

    // Function to create an individual card
    function createCard(index) {
        // Check if the index is valid before accessing the array
        if (index < valuesTexts.length) {
            return `
                <div class="col-lg-4 col-12 d-flex justify-content-center">
                    <div class="flip-card my-4">
                        <div class="flip-card-inner" style="border:1px solid #902D88">
                            <div class="flip-card-front ">
                                <p class="w-75 text-center py-2" style="color: #262a82; font-weight:bold">${valuesTexts[index]?.heading}</p>
                            </div>
                            <div class="flip-card-back flex align-items-center">
                                <p class="my-3 mx-2" style="color: #262a82;">${valuesTexts[index]?.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else {
            return ''; // Return an empty string if the index is out of bounds
        }
    }
});
