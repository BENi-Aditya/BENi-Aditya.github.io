const projects = {
    python: [
        {
            name: 'BENi AI',
            description: 'AI-powered assistant designed for academic queries and personal tasks.',
            image: 'https://github.com/BENi-Aditya/BENi-AI/raw/main/README_files/beni-ai.jpg',
            link: 'https://github.com/BENi-Aditya/BENi-AI'
        },
        {
            name: 'NutriScan AI',
            description: 'Scan food items to get nutritional details and allergen information.',
            image: 'https://github.com/BENi-Aditya/BENi-AI-Nutritional-Tracker/raw/main/README_files/nutriscan-ai.jpg',
            link: 'https://github.com/BENi-Aditya/BENi-AI-Nutritional-Tracker'
        }
    ],
    javascript: [
        {
            name: 'Include.AI',
            description: 'A personal assistant with chat, weather, and gesture-based interaction features.',
            image: 'https://github.com/BENi-Aditya/Include.AI/raw/main/README_files/include-ai.jpg',
            link: 'https://github.com/BENi-Aditya/Include.AI'
        }
    ],
    cpp: [
        {
            name: 'Vision Pro',
            description: 'Gesture-based control system for enhanced computer interactions.',
            image: 'https://github.com/BENi-Aditya/Vision-Pro/raw/main/README_files/vision-pro.jpg',
            link: 'https://github.com/BENi-Aditya/Vision-Pro'
        }
    ]
};

function filterProjects(language) {
    const projectContainer = document.getElementById('projects');
    projectContainer.innerHTML = ''; // Clear previous projects

    projects[language].forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');

        projectElement.innerHTML = `
            <h3>${project.name}</h3>
            <img src="${project.image}" alt="${project.name}">
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View on GitHub</a>
        `;

        projectContainer.appendChild(projectElement);
    });
}
