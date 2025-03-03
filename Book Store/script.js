document.getElementById('book-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const darkAuthor = document.getElementById('dark-author').value;
    const genre = document.getElementById('genre').value;
    const price = document.getElementById('price').value;
    const yearOfRebirth = document.getElementById('year-of-rebirth').value;

    const bookList = document.getElementById('book-list');
    bookList.innerHTML += `Tome: ${title}<br>Macabre Author: ${darkAuthor}<br>Genre: ${genre}<br>Cursed Price: $${price}<br>Year of Rebirth: ${yearOfRebirth}<br><br>`;

    document.getElementById('book-form').reset();
});

function pink() {
    let title = document.getElementById("heading");
    title.style.color = "pink";
    setTimeout(black, 1000);
}

function black() {
    let title = document.getElementById("heading");
    title.style.color = "black";
    setTimeout(pink, 1000);
}

pink(); // Start the color-changing cycle

// Style the button
const summonButton = document.querySelector('button[type="submit"]');
summonButton.style.backgroundColor = "black";
summonButton.style.color = "white";
summonButton.style.fontSize = "20px";
summonButton.style.padding = "15px 30px";
summonButton.style.border = "none";
summonButton.style.borderRadius = "50% 50% 0 0 / 100% 100% 0 0";
summonButton.style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
summonButton.style.cursor = "pointer";





