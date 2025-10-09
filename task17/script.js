// Services Data
const services = [
    {
        id: 1,
        name: "Dry Cleaning",
        price: 200,
        img: "https://media.istockphoto.com/id/1160418064/vector/laundry-and-dry-cleaning-clothes-service-steps-illustration-vector-flat-cartoon-graphic.jpg?s=612x612&w=0&k=20&c=BhjfCkFHCg2YwZowsmUq2YErf-HhqggGVYMsWYk-ssI="
    },
    {
        id: 2,
        name: "Leather & Suede Cleaning",
        price: 999,
        img: "https://www.pixiescleaning.co.uk/wp-content/uploads/2022/01/leather-restoration-cleaning.jpg"
    },
    {
        id: 3,
        name: "Ironing",
        price: 30,
        img: "https://media.istockphoto.com/id/1410409636/vector/household-chores-the-girl-is-doing-household-chores-ironing-clothes-on-an-ironing-board.jpg?s=612x612&w=0&k=20&c=GYDx6oJ-XxZcTtpJkzcoQ_-OBeYtKh-ytCtIqFPWa9E="
    },
    {
        id: 4,
        name: "Wedding Dress Cleaning",
        price: 2400,
        img: "https://www.wikihow.com/images/thumb/b/bc/Clean-a-Wedding-Gown-Step-8-Version-3.jpg/v4-460px-Clean-a-Wedding-Gown-Step-8-Version-3.jpg.webp"
    },
    {
        id: 5,
        name: "Wash And Fold",
        price: 140,
        img: "https://fcdrycleaners.com/wp-content/uploads/2021/08/Whats-the-Difference-Between-Wash-and-Fold-and-Wash-and-Press-885x570.jpg"
    },
    {
        id: 6,
        name: "Stain Removal",
        price: 500,
        img: "https://static.vecteezy.com/system/resources/previews/023/248/158/non_2x/washing-clothes-in-basin-of-soapy-water-hands-holding-t-shirt-household-chores-clean-and-wash-stain-removal-flat-cartoon-illustration-vector.jpg"
    }
];

let cartItems = [];
let totalAmount = 0;
let currentServiceIndex = 0;

const cartItemsTable = document.getElementById("cart-items");
const totalAmountDisplay = document.getElementById("total-amount");
const serviceDisplay = document.getElementById("service-display");

// Show next service
function showNextService() {
    if (currentServiceIndex < services.length) {
        const service = services[currentServiceIndex];
        serviceDisplay.innerHTML = `
            <img src="${service.img}" class="item-img" alt="${service.name}">
            <div class="service-info"><div class="service-name">${service.name}</div><div class="service-amt service-name">₹${service.price.toFixed(2)}</div></div>
            <div class="service-info">
            <button class="skip-btn" onclick="skipItem()"> Skip Item <i class="bi bi-dash-circle"></i> </button>
            <button class="add-btn" onclick="addToCart(${currentServiceIndex})">Add Item <i class="bi bi-plus-circle"></i> </button></div>
            <hr><p class="item-msg"><i class="bi bi-info-circle"></i> Add the items to the cart and book now</p>
            
        `;
    } else {
        serviceDisplay.innerHTML = `<p>No more services to display.</p>`;
    }
}

// Add service to cart
function addToCart(index) {
    const service = services[index];
    cartItems.push(service);
    totalAmount += service.price;
    currentServiceIndex++;
    renderCart();
    showNextService();
}

// Skip service
function skipItem() {
    currentServiceIndex++;
    showNextService();
}

// Render cart
function renderCart() {
    const bookNowBtn = document.getElementById("book-now-button");
    cartItemsTable.innerHTML = "";
    cartItems.forEach((item, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>₹${item.price.toFixed(2)}</td>
        `;
        cartItemsTable.appendChild(row);
    });
    totalAmountDisplay.textContent = totalAmount.toFixed(2);
    if(totalAmount){
        bookNowBtn.style.opacity = "1";
    }else{
        bookNowBtn.style.opacity = "0.5";
    }
}

showNextService();
document.getElementById("book-now-button").addEventListener("click", () => {
    const name = document.getElementById("full-name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const bookStatus = document.getElementById("book-status");
    const amount = parseInt(document.getElementById("total-amount").textContent);

    if (name && email && phone && amount) {
        bookStatus.classList.remove('hidden');
        bookStatus.innerHTML = `<span class="status-success"><i class="bi bi-info-circle"></i> Thank you for contacting, we will get back to you soon.</span>`;
    } else {
        bookStatus.classList.remove('hidden');
        bookStatus.innerHTML = `<span class="status-error" ><i class="bi bi-info-circle"></i> Add the items to the cart to book.<span>`;
    }
});