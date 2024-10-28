const teamMembers = [
    {
        name: "Marco Bianchi",
        role: "Designer",
        email: "marcobianchi@team.com",
        img: "img/male1.png"
    },
    {
        name: "Laura Rossi",
        role: "Front-end Developer",
        email: "laurarossi@team.com",
        img: "img/female1.png"
    },
    {
        name: "Giorgio Verdi",
        role: "Back-end Developer",
        email: "giorgioverdi@team.com",
        img: "img/male2.png"
    },
    {
        name: "Marta Ipsum",
        role: "SEO Specialist",
        email: "martarossi@team.com",
        img: "img/female2.png"
    },
    {
        name: "Roberto Lorem",
        role: "SEO Specialist",
        email: "robertolorem@team.com",
        img: "img/male3.png"
    },
    {
        name: "Daniela Amet",
        role: "Analyst",
        email: "danielaamet@team.com",
        img: "img/female3.png"
    }
];


// Funzione per generare una card del team

function createMemberCard(member) {
    const card = document.createElement('div');

    // Creiamo l'elemento per l'immagine

    const img = document.createElement('img');
    img.src = member.img;
    img.alt = `Foto di ${member.name}`;
    card.appendChild(img);

    // Creiamo il contenuto della card

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    // Nome e ruolo

    const name = document.createElement('h2');
    nome.textContent = member.name;
    const role = document.createElement('p');
    ruolo.textContent = member.role;

    // Email

    const email = document.createElement('p');
    email.textContent = member.email;

    // Aggiungiamo nome, ruolo e email al contenuto della card

    cardContent.appendChild(name);
    cardContent.appendChild(role);
    cardContent.appendChild(email);

    // Aggiungiamo il contenuto della card alla card principale

    card.appendChild(cardContent);

    return card;
}
