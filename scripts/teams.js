document.addEventListener('DOMContentLoaded', function () {
    const teams = [
        { heading: "Pakistan" },
        { heading: "US" },
        { heading: "UK" },
        { heading: "Australia" },
        { heading: "UAE" }
    ];

    const employees = [
        {
            heading: "CEO",
            image: "/assets/employee.png",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            heading: "CTO",
            image: "/assets/employee.png",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            heading: "CFO",
            image: "/assets/employee.png",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            heading: "COO",
            image: "/assets/employee.png",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            heading: "CMO",
            image: "/assets/employee.png",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            heading: "CMO",
            image: "/assets/employee.png",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            heading: "CMO",
            image: "/assets/employee.png",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            heading: "CMO",
            image: "/assets/employee.png",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }

    ];

    const teamContainer = document.getElementById('team');
    const employeeContainer = document.getElementById('employees');
    

    // Generate the HTML structure dynamically for teams and employees
    teams.forEach(team => {
        let teamHTML = `
            <div class="py-5">
                <div class="d-lg-flex justify-content-between align-items-center">
                    <div class="col-lg-3">
                        <h6 class="text-white">Team from ${team.heading}</h6>
                        <sup class="text-white">Lorem Ipsum is simply dummy text and typesetting industry.</sup>
                    </div>
                    <div class="col-lg-2">
                        <p class="text-white m-0">+92 123 145 4469</p>
                    </div>
                </div>
                <div class="d-lg-flex justify-content-center align-items-center flex-wrap">`;

        // Add the employee cards inside each team
        employees.forEach(employee => {
            teamHTML += `
                <div class="col-lg-3 p-3">
                    <div class="employee">
                        <div class="employee-image">
                            <img src="${employee.image}" width="100%" alt="">
                        </div>
                        <div class="py-2">
                            <h6 class="text-white">${employee.heading}</h6>
                            <p class="text-white">${employee.description}</p>
                        </div>
                    </div>
                </div>`;
        });

        teamHTML += `</div></div>`;  // Close the flex container and team div
        teamContainer.innerHTML += teamHTML;  // Append team with employees to the team container
    });

    // Now, add all employees to the employee container (if you want this part separately)
    employees.forEach(employee => {
        const employeeHTML = `
            <div class="col-lg-3 p-3">
                <div class="employee">
                    <div class="employee-image">
                        <img src="${employee.image}" width="100%" alt="">
                    </div>
                    <div class="py-2">
                        <h6 class="text-white">${employee.heading}</h6>
                        <p class="text-white">${employee.description}</p>
                    </div>
                </div>
            </div>`;
        employeeContainer.innerHTML += employeeHTML;  // Append each employee card
    });
});
