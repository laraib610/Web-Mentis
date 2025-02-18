const cyberservices=[
    {
        heading:"Cloud Migration",
        image:"/assets/cyber/cloud-migration.png",
        description:"Moving a business’s data, applications, and other digital assets from on-premises infrastructure or legacy systems to a cloud-based environment"
    },
    {
        heading:"Cloud storage Management",
        image:"/assets/cyber/cloud-storage.png",
        description:"Organizing, storing, and maintaining data on cloud platforms. It involves ensuring that data is securely stored, easily accessible in the cloud environment."
    },
    {
        heading:"Disaster Recovery",
        image:"/assets/cyber/disaster-recovery.png",
        description:"Comprehensive solution for protecting and recovering your organization's IT infrastructure and data after an unexpected disruption."
    },
    {
        heading:"Remote Desktop Solution",
        image:"/assets/cyber/remote-desktop.png",
        description:"Helps streamline processes and information across an organization, integrating various departments like finance, HR, supply chain, procurement"
    },

];

const cybertechnology=[
    {
        id:'network',
        heading:"Network Security",
        techs:[
            {
                heading: "Cisco ASA",
                image: "/assets/Logo/cisco-asa.png",
                class: " col-lg-4 "
            },
            {
                heading: "Palo Alto",
                image: "/assets/Logo/palo.png",
                class: " col-lg-4 "
            },
            {
                heading: "Fortinet",
                image: "/assets/Logo/fortinet.png",
                class: " col-lg-4 "
            },
            {
                heading: "pfSense",
                image: "/assets/Logo/pfSense.png",
                class: " col-lg-4 "
            },
            // {
            //     heading: "Snort",
            //     image: "/assets/Logo/testing.svg",
            //     class: " col-lg-4 "
            // },
            {
                heading: "Suricata",
                image: "/assets/Logo/suricata.png",
                class: " col-lg-4 "
            },
            {
                heading: "OpenVPN",
                image: "/assets/Logo/openVpn.svg",
                class: " col-lg-4 "
            },
            {
                heading: "Cisco AnyConnect",
                image: "/assets/Logo/anyConnect.png",
                class: " col-lg-4 "
            },
        
        
        ]
    },
    {
        id:'endpoint',
        heading:"Endpoint Security",
        techs:[
            {
                heading: "Symantec",
                image: "/assets/Logo/symantic.png",
                class: " col-lg-4 "
            },
            {
                heading: "CrowdStrike",
                image: "/assets/Logo/crowdstrike.png",
                class: " col-lg-4 "
            },
            {
                heading: "McAfee",
                image: "/assets/Logo/mcafee.png",
                class: " col-lg-4 "
            },
            {
                heading: "Bitdefender",
                image: "/assets/Logo/bitdefender.png",
                class: " col-lg-4 "
            },
            {
                heading: "Microsoft Intune",
                image: "/assets/Logo/intune.png",
                class: " col-lg-4 "
            },
            {
                heading: "Jamf",
                image: "/assets/Logo/jamf.png",
                class: " col-lg-4 "
            },
            {
                heading: "OpenVPN",
                image: "/assets/Logo/openvpn.svg",
                class: " col-lg-4 "
            },
        ]
    },
    {
        id:'identity',
        heading:"Identity & Access Management (IAM)",
        techs:[
            {
                heading: "Google Authenticator",
                image: "/assets/Logo/Google-Authenticator.png",
                class: " col-lg-6 "
            },
            {
                heading: "Duo Security",
                image: "/assets/Logo/Duo-Security.png",
                class: " col-lg-6 "
            },
            {
                heading: "Okta",
                image: "/assets/Logo/okta.png",
                class: " col-lg-6 "
            },
            {
                heading: "Microsoft Azure AD",
                image: "/assets/Logo/azure-ad.png",
                class: " col-lg-6 "
            },
          
        ]
    },
    {
        id:'hacking',
        heading:"Penetration Testing & Ethical Hacking",
        techs:[
            {
                heading: "Metasploit",
                image: "/assets/Logo/metasploit.png",
                class: " col-lg-4 "
            },
            {
                heading: "Burp Suite",
                image: "/assets/Logo/burp-suite.png",
                class: " col-lg-4 "
            },
            {
                heading: "Kali Linux",
                image: "/assets/Logo/kali-linux.png",
                class: " col-lg-4 "
            },
            {
                heading: " Wireshark",
                image: "/assets/Logo/wireshark.svg",
                class: " col-lg-4 "
            },
            {
                heading: "Nessus",
                image: "/assets/Logo/nessus.svg",
                class: " col-lg-4 "
            },
          
        ]
    },
    {
        id:'cloudSecurity',
        heading:"Cloud Security",
        techs:[
            {
                heading: "AWS Security Hub",
                image: "/assets/Logo/Security-Hub.png",
                class: " col-lg-6 "
            },
            {
                heading: "Microsoft Defender for Cloud",
                image: "/assets/Logo/defender-cloud.png",
                class: " col-lg-6 "
            },
            {
                heading: "Google Chronicle",
                image: "/assets/Logo/Google-Chronicle.png",
                class: " col-lg-6 "
            },
            {
                heading: "Docker Security",
                image: "/assets/Logo/docker-cloud.png",
                class: " col-lg-6 "
            },
            {
                heading: "Kubernetes RBAC",
                image: "/assets/Logo/kubernetes-color.svg",
                class: " col-lg-6 "
            },
          
        ]
    },
    {
        id:'security',
        heading:"Security Information & Event Management (SIEM)",
        techs:[
            {
                heading: "Splunk",
                image: "/assets/Logo/splunk.png",
                class: " col-lg-4 "
            },
            {
                heading: " IBM QRadar",
                image: "/assets/Logo/qradar-seek.png",
                class: " col-lg-4 "
            },
            {
                heading: "ArcSight",
                image: "/assets/Logo/arcsight-seek.png",
                class: " col-lg-4 "
            },
            {
                heading: "ELK Stack",
                image: "/assets/Logo/elk.svg",
                class: " col-lg-4 "
            },
          
        ]
    },
    {
        id:'compliance',
        heading:"Regulatory & Compliance",
        techs:[
            {
                heading: "ISO 27001",
                image: "/assets/Logo/iso-27001.png",
                class: " col-lg-4 "
            },
            {
                heading: "NIST",
                image: "/assets/Logo/nist.png",
                class: " col-lg-4 "
            },
            {
                heading: "GDPR",
                image: "/assets/Logo/gdpr.png",
                class: " col-lg-4 "
            },
            {
                heading: "HIPAA",
                image: "/assets/Logo/hipaa.jpg",
                class: " col-lg-4 "
            },
          
        ]
    },

];
const processes=[
    {
        id:'01',
        img :'/assets/cyber/risk.png',
        heading:'Risk Assessment & Management  '
    },
    {
        id:'02',
        img :'/assets/cyber/policy.png',
        heading:'Security Policy Development   '
    },
    {
        id:'03',
        img :'/assets/cyber/network-security.png',
        heading:'Network Security Implementation '
    },
    {
        id:'04',
        img :'/assets/cyber/endpoint-protection.png',
        heading:'Endpoint Protection  '
    },
    {
        id:'05',
        img :'/assets/cyber/identity-access.png',
        heading:'Identity & Access Management (IAM) '
    },
    {
        id:'06',
        img :'/assets/cyber/penetration.png',
        heading:'Penetration Testing & Ethical Hacking '
    },
    {
        id:'07',
        img :'/assets/cyber/incident-detection.png',
        heading:'Incident Detection & Response '
    },
    {
        id:'08',
        img :'/assets/cyber/data-encryption.png',
        heading:'Data Encryption & Protection '
    },
    {
        id:'09',
        img :'/assets/cyber/compliance.png',
        heading:'Compliance & Regulatory Audits '
    },
    {
        id:'10',
        img :'/assets/cyber/security.png',
        heading:'Security Awareness Training'
    },
];


document.addEventListener('DOMContentLoaded', function () {
        const cyberserviceContainer = document.getElementById('cyber-service-container');
    // Generate the HTML structure dynamically using a for loop
    cyberservices.forEach(service => {
        const cardHTML = `
                    <div class="col-lg-3 d-flex justify-content-center" data-aos="fade-left" data-aos-duration="3000">
                            <div class="flip-card my-4">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front ">
                                        <img loading="lazy" width="20%"  src=${service.image} alt="Avatar" >
                                        <p class="w-75 text-center px-4 py-2 m-0">${service.heading}</p>
                                    </div> 
                                    <div class="flip-card-back ">
                                        <p class="my-3 mx-2">${service.description}
                                        </p> 
                                    </div>
                                </div>
                            </div>
                        </div>       
                    
    
        `;
        cyberserviceContainer.innerHTML += cardHTML;
    });

    

    const TechContainer=document.getElementById('technology');
    const techHtml=`
    <div class="col-lg-6 pl-5" data-aos="fade-right" data-aos-duration="3000">
        ${getTechs()}      
    </div>
    <div class="col-lg-6 pr-0" data-aos="fade-left" data-aos-duration="3000">
        <div class="tech-apps" >
            <div id="tech-app" class="d-flex flex-wrap align-items-lg-stretch justify-content-between align-content-stretch">
            </div>
        </div>
    </div>`;
    
    TechContainer.innerHTML +=techHtml;
    // Generate the HTML structure dynamically using a for loop

    window.getApps = getApps; // Attach to global scope
    getApps(cybertechnology[0].id); // Default call to load 'front-end'

    function getTechs() {
        let data = '';
        cybertechnology.forEach(tech => {
            const cardHTML = `
            <div>
                <a href="#${tech.id}" id="${tech.id}" class="tech-link d-flex justify-content-between" onclick="getApps('${tech.id}')">
                    ${tech.heading} <img loading="lazy" src="/assets/UI-Icons/arrow.svg" alt="">
                </a>
                <hr>
            </div>
            `;
            data += cardHTML;
        });
        return data;
    }


    const processContainer=document.getElementById('process');
    const processHtml=`
    <div class="d-lg-flex flex-wrap justify-content-between align-items-center" >
        <div class="col-lg-3 d-flex justify-content-center" data-aos="fade-right" data-aos-duration="1000">
            <div class="flip-card my-4">
                <div class="process-card">
                    <h1 class="h1-gradient">
                    ${processes[0].id}
                    </h1>
                    <div class="data d-flex flex-column justify-content-center">
                        <img loading="lazy" class="w-25" src="${processes[0].img }" alt="Avatar" >
                        <p class="w-75 text-center px-4 py-2 m-0">Research & Strategy</p>
                    </div> 
                </div>
            </div>
        </div>  
        <div class="col-lg-1 p-0 d-none d-lg-block"  data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000">
            <img loading="lazy"  src="/assets/UI-Icons/arrow-line.svg" width="100%"  alt="">

        </div>
        <div class="col-lg-3 d-flex justify-content-center" data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000">
            <div class="flip-card my-4">
                <div class="process-card">
                    <h1 class="h1-gradient">
                    ${processes[1].id}
                    </h1>
                    <div class="data d-flex flex-column justify-content-center">
                        <img loading="lazy" class="w-25" src="${processes[1].img}" alt="Avatar" >
                        <p class="w-75 text-center px-4 py-2 m-0">${processes[1].heading}</p>
                    </div> 
                </div>
            </div>
        </div>   
        <div class="col-lg-1 p-0 d-none d-lg-block"  data-aos="fade-right" data-aos-delay="1500" data-aos-duration="1500">
            <img loading="lazy"  src="/assets/UI-Icons/arrow-line.svg" width="100%"  alt="">

        </div>
        <div class="col-lg-3 d-flex justify-content-center" data-aos="fade-right" data-aos-delay="1500" data-aos-duration="1500">
            <div class="flip-card my-4">
                <div class="process-card">
                    <h1 class="h1-gradient">
                    ${processes[2].id}
                    </h1>
                    <div class="data d-flex flex-column justify-content-center">
                        <img loading="lazy" class="w-25" src="${processes[2].img}" alt="Avatar" >
                        <p class="w-75 text-center px-4 py-2 m-0">${processes[2].heading}</p>
                    </div> 
                </div>
            </div>
        </div>       
    </div>   
    <div class="arrow pt-2 d-none d-lg-block" data-aos="fade-down" data-aos-delay="2000" data-aos-duration="2000">
        <img loading="lazy"  src="/assets/UI-Icons/hori-line.svg" width="100%" alt="">
    </div>
    <div class="d-lg-flex flex-wrap justify-content-between align-items-center" data-aos="fade-right" data-aos-delay="2000" data-aos-duration="2000">
        <div class="col-lg-3 d-flex justify-content-center">
            <div class="flip-card my-4">
                <div class="process-card">
                    <h1 class="h1-gradient">
                       ${processes[3].id}
                    </h1>
                    <div class="data d-flex flex-column justify-content-center">
                        <img loading="lazy" class="w-25" src="${processes[3].img}" alt="Avatar" >
                        <p class="w-75 text-center px-4 py-2 m-0">${processes[3].heading}</p>
                    </div> 
                </div>
            </div>
        </div>  
        <div class="col-lg-1 p-0 d-none d-lg-block" data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000" >
            <img loading="lazy"  src="/assets/UI-Icons/arrow-line.svg" width="100%"  alt="">

        </div>
        <div class="col-lg-3 d-flex justify-content-center" data-aos="fade-right" data-aos-delay="2500" data-aos-duration="2500">
            <div class="flip-card my-4">
                <div class="process-card">
                    <h1 class="h1-gradient">
                    ${processes[4].id}
                    </h1>
                    <div class="data d-flex flex-column justify-content-center">
                        <img loading="lazy" class="w-25" src="${processes[4].img}" alt="Avatar" >
                        <p class="w-75 text-center px-4 py-2 m-0">${processes[4].heading}</p>
                    </div> 
                </div>
            </div>
        </div>   
        <div class="col-lg-1 p-0 d-none d-lg-block" data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000" >
            <img loading="lazy"  src="/assets/UI-Icons/arrow-line.svg" width="100%"  alt="">

        </div>
        <div class="col-lg-3 d-flex justify-content-center" data-aos="fade-right" data-aos-delay="3000" data-aos-duration="3000">
            <div class="flip-card my-4">
                <div class="process-card">
                    <h1 class="h1-gradient">
                    ${processes[5].id}
                    </h1>
                    <div class="data d-flex flex-column justify-content-center">
                        <img loading="lazy" class="w-25" src="${processes[5].img}" alt="Avatar" >
                        <p class="w-75 text-center px-4 py-2 m-0">${processes[5].heading}</p>
                    </div> 
                </div>
            </div>
        </div>       
    </div> 
     <div class="arrow pt-2 d-none d-lg-block" data-aos="fade-down" data-aos-delay="2000" data-aos-duration="2000">
        <img loading="lazy"  src="/assets/UI-Icons/hori-line.svg" width="100%" alt="">
    </div>
    <div class="d-lg-flex flex-wrap justify-content-between align-items-center" data-aos="fade-right" data-aos-delay="2000" data-aos-duration="2000">
        <div class="col-lg-3 d-flex justify-content-center">
            <div class="flip-card my-4">
                <div class="process-card">
                    <h1 class="h1-gradient">
                       ${processes[6].id}
                    </h1>
                    <div class="data d-flex flex-column justify-content-center">
                        <img loading="lazy" class="w-25" src="${processes[6].img}" alt="Avatar" >
                        <p class="w-75 text-center px-4 py-2 m-0">${processes[6].heading}</p>
                    </div> 
                </div>
            </div>
        </div>  
        <div class="col-lg-1 p-0 d-none d-lg-block" data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000" >
            <img loading="lazy"  src="/assets/UI-Icons/arrow-line.svg" width="100%"  alt="">

        </div>
        <div class="col-lg-3 d-flex justify-content-center" data-aos="fade-right" data-aos-delay="2500" data-aos-duration="2500">
            <div class="flip-card my-4">
                <div class="process-card">
                    <h1 class="h1-gradient">
                    ${processes[7].id}
                    </h1>
                    <div class="data d-flex flex-column justify-content-center">
                        <img loading="lazy" class="w-25" src="${processes[7].img}" alt="Avatar" >
                        <p class="w-75 text-center px-4 py-2 m-0">${processes[7].heading}</p>
                    </div> 
                </div>
            </div>
        </div>   
        <div class="col-lg-1 p-0 d-none d-lg-block" data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000" >
            <img loading="lazy"  src="/assets/UI-Icons/arrow-line.svg" width="100%"  alt="">

        </div>
        <div class="col-lg-3 d-flex justify-content-center" data-aos="fade-right" data-aos-delay="3000" data-aos-duration="3000">
            <div class="flip-card my-4">
                <div class="process-card">
                    <h1 class="h1-gradient">
                    ${processes[8].id}
                    </h1>
                    <div class="data d-flex flex-column justify-content-center">
                        <img loading="lazy" class="w-25" src="${processes[8].img}" alt="Avatar" >
                        <p class="w-75 text-center px-4 py-2 m-0">${processes[8].heading}</p>
                    </div> 
                </div>
            </div>
        </div>       
    </div> 
    <div class="arrow pt-2 d-none d-lg-block" data-aos="fade-down" data-aos-delay="2000" data-aos-duration="2000">
        <img loading="lazy"  src="/assets/UI-Icons/hori-line.svg" width="100%" alt="">
    </div>
    <div class="d-lg-flex flex-wrap justify-content-between align-items-center" data-aos="fade-right" data-aos-delay="2000" data-aos-duration="2000">
        <div class="col-lg-3 d-flex justify-content-center">
            <div class="flip-card my-4">
                <div class="process-card">
                    <h1 class="h1-gradient">
                       ${processes[9].id}
                    </h1>
                    <div class="data d-flex flex-column justify-content-center">
                        <img loading="lazy" class="w-25" src="${processes[9].img}" alt="Avatar" >
                        <p class="w-75 text-center px-4 py-2 m-0">${processes[9].heading}</p>
                    </div> 
                </div>
            </div>
        </div>  
    </div>
`



processContainer.innerHTML+=processHtml;

    

 });
 
// Move the function OUTSIDE the event listener
function getApps(techId) {
    let tech = cybertechnology.find(t => t.id === techId);
    let link = document.getElementById(techId); // Get the link by its unique ID
    let container = document.getElementById("tech-app");
    if (!container) return;
    let data = '';
    document.querySelectorAll('.tech-link').forEach(link => link.classList.remove('active')); // Remove active class from all
    if (link) {
        link.classList.add('active'); // Add active class to the current tech
    }
    tech?.techs.forEach(app => {
        data += `
            <div class="${app.class.trim()} p-2">
                <div class="app py-1 px-1 d-flex align-items-center">
                    <img loading="lazy" width="20%"  src="${app.image}" alt="${app.heading}">
                    <h5 class="m-0 px-1">${app.heading}</h5>
                </div>
            </div>
        `;
    });

    container.innerHTML = data;
    return data;
}