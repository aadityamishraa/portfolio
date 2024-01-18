const projectsContainer = document.getElementById('projectsContainer');
    const projectsURL = 'https://raw.githubusercontent.com/aadityamishraa/portfolio/master/data/project.json';

    fetch(projectsURL)
        .then(response => response.json())
        .then(data => {
            data.forEach(project => {
                const projectCard = document.createElement('div');
                projectCard.classList.add('card', 'w-4/5', 'm-auto', 'flex', 'flex-wrap', 'sm:flex-nowrap', 'space-y-4', 'sm:space-y-0', 'sm:space-x-12');

                const imageContainer = document.createElement('div');
                imageContainer.classList.add('w-1/2');

                // Check if imgURL is provided and create an image element if it exists
                if (project.imgURL) {
                    const imageElement = document.createElement('img');
                    imageElement.src = project.imgURL;
                    imageElement.alt = project.title;
                    imageElement.classList.add('w-full', 'h-full');
                    imageContainer.appendChild(imageElement);
                }

                const infoContainer = document.createElement('div');
                infoContainer.classList.add('w-1/2', 'h-full');

                const titleElement = document.createElement('p');
                titleElement.classList.add('font-sora', 'font-bold', 'text-2xl', 'text-white', 'mb-3');
                titleElement.textContent = project.title;

                const descriptionElement = document.createElement('p');
                descriptionElement.classList.add('text-justify', 'font-play', 'text-neutral-400', 'mb-2');
                descriptionElement.textContent = project.description;

                const techElement = document.createElement('p');
                techElement.classList.add('font-play', 'text-neutral-400', 'mb-4');
                techElement.textContent = `Tech: ${project.tech}`;

                const linkElement = document.createElement('a');
                linkElement.classList.add('text-white', 'font-play');
                linkElement.href = project.githubLink;
                linkElement.textContent = 'Open';
                linkElement.appendChild(document.createElement('i')).classList.add('fa-solid', 'fa-up-right-from-square');

                infoContainer.appendChild(titleElement);
                infoContainer.appendChild(descriptionElement);
                infoContainer.appendChild(techElement);
                infoContainer.appendChild(linkElement);

                projectCard.appendChild(imageContainer);
                projectCard.appendChild(infoContainer);

                projectsContainer.appendChild(projectCard);
            });
        }).catch(err => console.error('Error fetching projects data:', err));