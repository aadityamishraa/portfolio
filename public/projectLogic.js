const projectsContainer = document.querySelector('.projects');
    const projectsURL = 'https://raw.githubusercontent.com/aadityamishraa/portfolio/master/data/project.json';

    fetch(projectsURL)
        .then(response => response.json())
        .then(data => {
            data.forEach((project, index) => {
                const projectCard = document.createElement('div');
                projectCard.classList.add('project-card');
                projectCard.classList.add(index % 2 === 0 ? 'even' : 'odd'); // Add class for even or odd card

                const contentContainer = document.createElement('div');
                contentContainer.classList.add('content-container');

                const imageContainer = document.createElement('div');
                imageContainer.classList.add('image-container');

                // Check if imgURL is provided and create an image element if it exists
                if (project.imgURL) {
                    const imageElement = document.createElement('img');
                    imageElement.src = project.imgURL;
                    imageElement.alt = project.title;
                    imageContainer.appendChild(imageElement);
                }

                const infoContainer = document.createElement('div');
                infoContainer.classList.add('info-container');

                const titleElement = document.createElement('h3');
                titleElement.classList.add('project-title');
                titleElement.textContent = project.title;

                const descriptionElement = document.createElement('p');
                descriptionElement.classList.add('project-description');
                descriptionElement.textContent = project.description;

                const techElement = document.createElement('p');
                techElement.classList.add('project-tech');
                techElement.textContent = `Tech: ${project.tech}`;

                const linkElement = document.createElement('a');
                linkElement.classList.add('project-link');
                linkElement.href = project.githubLink;
                linkElement.textContent = 'View Project on GitHub';

                infoContainer.appendChild(titleElement);
                infoContainer.appendChild(descriptionElement);
                infoContainer.appendChild(techElement);
                infoContainer.appendChild(linkElement);

                contentContainer.appendChild(index % 2 === 0 ? imageContainer : infoContainer);
                contentContainer.appendChild(index % 2 === 0 ? infoContainer : imageContainer);

                projectCard.appendChild(contentContainer);

                projectsContainer.appendChild(projectCard);
            });
        })
        .catch(err => console.error('Error fetching projects data:', err));