// Your GitHub username
const username = 'NissanChowdhury-dev';  // Replace with your actual GitHub username

// The URL for the GitHub API to get repositories
const apiUrl = `https://api.github.com/users/NissanChowdhury-dev/repos`;

// Function to fetch and display repositories
function fetchRepositories() {
    fetch(apiUrl)
        .then(response => response.json())  // Parse the JSON response
        .then(repositories => {
            const projectList = document.getElementById('project-list');  // Get the project list container

            // Loop through each repository and create a project card
            repositories.forEach(repo => {
                const projectCard = document.createElement('div');
                projectCard.classList.add('project-card'); // Add class for styling

                // Set the inner HTML of the card with the repository name, description, and link
                projectCard.innerHTML = `
                    <h3>${repo.name}</h3>
                    <p>${repo.description || 'No description available'}</p>
                    <a href="${repo.html_url}" target="_blank">View on GitHub</a>
                `;

                // Append the project card to the project list
                projectList.appendChild(projectCard);
            });

            // Manually insert your specific project (Responsive Web Design)
            const customProjectCard = document.createElement('div');
            customProjectCard.classList.add('project-card');
            customProjectCard.innerHTML = `
                <h3>Responsive Web Design</h3>
                <p>This repository showcases responsive web design projects with various layout techniques.</p>
                <a href="https://github.com/NissanChowdhury-dev/Responsive-Web-Design" target="_blank">View on GitHub</a>
            `;
            projectList.appendChild(customProjectCard);  // Append custom project card
        })
        .catch(error => {
            console.error('Error fetching repositories:', error);
            // Show a message if there's an error fetching the data
            const projectList = document.getElementById('project-list');
            projectList.innerHTML = '<p>Failed to load repositories. Please try again later.</p>';
        });
}

// Call the function to fetch and display repositories when the page loads
window.onload = fetchRepositories;
