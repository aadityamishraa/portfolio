const projectsContainer = document.querySelector('.projects');
    const projectsURL = 'https://raw.githubusercontent.com/aadityamishraa/portfolio/master/data/project.json';

    fetch(projectsURL)
        .then(response => response.json())
        .then(data => {
            
        })
           