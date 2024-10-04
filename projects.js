const projects = {
    python: [
        {
            name: 'BENi AI',
            description: 'AI-powered hardware assistant for academic and daily queries.',
            image: 'https://github.com/BENi-Aditya/BENi-AI/blob/main/README_files/beni-ai.jpg',
            link: 'https://github.com/BENi-Aditya/BENi-AI'
        },
        {
            name: 'NutriScan AI',
            description: 'Scan food for nutrition details and allergen alerts.',
            image: 'https://github.com/BENi-Aditya/BENi-AI-Nutritional-Tracker/blob/main/README_files/nutriscan-ai.jpg',
            link: 'https://github.com/BENi-Aditya/BENi-AI-Nutritional-Tracker'
        }
    ],
    javascript: [
        {
            name: 'Include.AI',
            description: 'Sign language translator using computer vision.',
            image: 'https://github.com/BENi-Aditya/Include.AI/blob/main/README_files/include-ai.jpg',
            link: 'https://github.com/BENi-Aditya/Include.AI'
        }
    ],
    cpp: [
        {
            name: 'Vision Pro',
            description: 'Advanced control system with gesture recognition.',
            image: 'https://github.com/BENi-Aditya/Vision-Pro/blob/main/README_files/vision-pro.jpg',
            link: 'https://github.com/BENi-Aditya/Vision-Pro'
        }
    ]
};

function filterProjects(language) {
    const projectSection = document.getElementById('projects');
    projectSection.innerHTML = ''; // Clear previous projects
    projects[language].forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');

        projectDiv.innerHTML = `
            <h3>${project.name}</h3>
            <img src="${project.image}" alt="${project.name}">
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View on GitHub</a>
        `;

        projectSection.appendChild(projectDiv);
    });
}
