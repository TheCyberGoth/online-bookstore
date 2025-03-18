const books = [
    // Horror
    {
        title: "Dracula",
        author: "Bram Stoker",
        genre: "Horror",
        description: "A classic Gothic horror about the notorious vampire Count Dracula.",
        price: 7.99,
        language: "English",
        year: 1897
    },
    {
        title: "Frankenstein",
        author: "Mary Shelley",
        genre: "Horror",
        description: "A scientist’s quest to create life leads to tragic consequences.",
        price: 6.49,
        language: "English",
        year: 1818
    },
    {
        title: "The Shining",
        author: "Stephen King",
        genre: "Horror",
        description: "A chilling tale of a haunted hotel and a family’s descent into madness.",
        price: 8.99,
        language: "English",
        year: 1977
    },
    {
        title: "It",
        author: "Stephen King",
        genre: "Horror",
        description: "An evil entity terrorizes children in the town of Derry, Maine.",
        price: 9.99,
        language: "English",
        year: 1986
    },
    {
        title: "The Haunting of Hill House",
        author: "Shirley Jackson",
        genre: "Horror",
        description: "A psychological horror exploring the mystery of a haunted mansion.",
        price: 7.49,
        language: "English",
        year: 1959
    },
    // Fiction
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Fiction",
        description: "A timeless romantic tale of love and social standing.",
        price: 5.99,
        language: "English",
        year: 1813
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        description: "A powerful story about racial injustice in the Deep South.",
        price: 6.99,
        language: "English",
        year: 1960
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Fiction",
        description: "A tragic story of love, wealth, and the American Dream in the Jazz Age.",
        price: 6.49,
        language: "English",
        year: 1925
    },
    {
        title: "Jane Eyre",
        author: "Charlotte Brontë",
        genre: "Fiction",
        description: "A tale of love, independence, and resilience in Victorian England.",
        price: 7.49,
        language: "English",
        year: 1847
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre: "Fiction",
        description: "A coming-of-age story about teenage rebellion and identity.",
        price: 6.99,
        language: "English",
        year: 1951
    },
    // Sci-Fi
    {
        title: "Dune",
        author: "Frank Herbert",
        genre: "Sci-Fi",
        description: "An epic story of politics, religion, and adventure set on the desert planet Arrakis.",
        price: 9.99,
        language: "English",
        year: 1965
    },
    {
        title: "Neuromancer",
        author: "William Gibson",
        genre: "Sci-Fi",
        description: "A cyberpunk classic that explores artificial intelligence and virtual reality.",
        price: 10.99,
        language: "English",
        year: 1984
    },
    {
        title: "The Martian",
        author: "Andy Weir",
        genre: "Sci-Fi",
        description: "A stranded astronaut must use his ingenuity to survive on Mars.",
        price: 9.49,
        language: "English",
        year: 2011
    },
    {
        title: "Ender's Game",
        author: "Orson Scott Card",
        genre: "Sci-Fi",
        description: "A young genius is trained to command Earth's fleets in a war against alien invaders.",
        price: 8.49,
        language: "English",
        year: 1985
    },
    {
        title: "Fahrenheit 451",
        author: "Ray Bradbury",
        genre: "Sci-Fi",
        description: "In a dystopian world where books are banned, one man begins to question the system.",
        price: 7.99,
        language: "English",
        year: 1953
    },
    // Mystery
    {
        title: "The Hound of the Baskervilles",
        author: "Arthur Conan Doyle",
        genre: "Mystery",
        description: "Sherlock Holmes tackles a supernatural mystery in the English moors.",
        price: 6.49,
        language: "English",
        year: 1902
    },
    {
        title: "Gone Girl",
        author: "Gillian Flynn",
        genre: "Mystery",
        description: "A psychological thriller about a marriage gone terribly wrong.",
        price: 7.49,
        language: "English",
        year: 2012
    },
    {
        title: "The Girl with the Dragon Tattoo",
        author: "Stieg Larsson",
        genre: "Mystery",
        description: "A gripping tale of murder, corruption, and family secrets.",
        price: 8.49,
        language: "English",
        year: 2005
    },
    {
        title: "In the Woods",
        author: "Tana French",
        genre: "Mystery",
        description: "A detective delves into a cold case that may be connected to a recent murder.",
        price: 8.99,
        language: "English",
        year: 2007
    },
    {
        title: "Big Little Lies",
        author: "Liane Moriarty",
        genre: "Mystery",
        description: "A murder mystery unravels in an affluent suburban neighborhood.",
        price: 9.99,
        language: "English",
        year: 2014
    }
];

document.getElementById("find-books").addEventListener("click", function() {
    const genre = document.getElementById("genre").value;
    const maxPrice = document.getElementById("price-range").value;
    const recommendations = books.filter(book => {
        return (genre === "All" || book.genre === genre) && (!maxPrice || book.price <= maxPrice);
    });

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Clear previous results

    if (recommendations.length === 0) {
        resultsDiv.innerHTML = "<p>No books found matching your criteria.</p>";
        return;
    }

    recommendations.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.innerHTML = `
            <h2>${book.title}</h2>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Genre:</strong> ${book.genre}</p>
            <p><strong>Description:</strong> ${book.description}</p>
            <p><strong>Price:</strong> £${book.price}</p>
            <button class="add-to-cart">★ Add to Cart</button>
        `;
        resultsDiv.appendChild(bookDiv);
    });

    const bestBook = recommendations.reduce((best, current) => (best.price < current.price ? best : current));
    resultsDiv.innerHTML += `<h3>Best Match: ${bestBook.title}</h3>`;

    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            alert(`${recommendations[index].title} has been added to your cart!`);
            addToCart(recommendations[index]); // Pass the book to the cart function
        });
    });
});

const cartItems = [];
const cartItemsDiv = document.getElementById("cart-items");
const totalPriceDiv = document.getElementById("total-price");

function updateCart() {
    cartItemsDiv.innerHTML = ""; // Clear previous cart items
    let totalPrice = 0;

    cartItems.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.title} - £${item.price.toFixed(2)}`;
        cartItemsDiv.appendChild(listItem);
        totalPrice += item.price;
    });

    totalPriceDiv.textContent = totalPrice.toFixed(2);
}

function addToCart(book) {
    cartItems.push(book); // Add book to cart
    updateCart(); // Refresh the cart display
}

// Secure Checkout Without Redirection
document.getElementById("proceed-to-checkout").addEventListener("click", function() {
    if (cartItems.length === 0) {
        alert("Your cart is empty. Add some books before proceeding to checkout.");
    } else {
        alert("Secure Checkout functionality will go here!");
        // You can add custom logic here, like displaying a summary or a modal popup
    }
});

