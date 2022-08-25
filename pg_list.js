import { projects } from "/ifc_files.js";

const imgLoc = ['./image/model1.png','./image/model2.png','./image/model3.png','./image/model4.png','./image/model5.png']

// Get all cards
const projectContainer = document.getElementById("example_files_container");
const projectCards = Array.from(projectContainer.children);

const templateProjectCard = projectCards[0];

const baseURL = './viewer.html';

for(let project of projects) {

    // Create a new card
    const newCard = templateProjectCard.cloneNode(true);

    // Add project name to card
    const cardTitle = newCard.querySelector('h3');
    cardTitle.textContent = project.name;

    const imgCard = newCard.querySelector('img')
    imgCard.src = imgLoc[parseInt(project.id)-1]

    // Add project URL to card
    const button = newCard.querySelector('a');
    button.href = baseURL + `?id=${project.id}`;

    // Add card to container
    projectContainer.appendChild(newCard);
    
}

templateProjectCard.remove();
