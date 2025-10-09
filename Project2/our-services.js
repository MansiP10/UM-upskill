const services = [
  {
    id: 1,
    name: "Dry Cleaning",
    price: 200,
    img: "laundry.png",
  },
  {
    id: 2,
    name: "Wash And Fold",
    price: 100,
    img: "wash.png",
  },
  {
    id: 3,
    name: "Ironing",
    price: 30,
    img: "iron.png",
  },
  {
    id: 4,
    name: "Stain Removal",
    price: 500,
    img: "spot.png",
  },
  {
    id: 5,
    name: "Leather & Suede Cleaning",
    price: 999,
    img: "leather.png",
  },
  {
    id: 6,
    name: "Wedding Dress Cleaning",
    price: 2400,
    img: "wedding-dress.png",
  },
];

let cartItems = [];
let totalAmount = 0;

const cartItemsTable = document.getElementById("cart-items");
const totalAmountDisplay = document.getElementById("total-amount");
const serviceDisplay = document.getElementById("service-display");

// Display all services
function displayAllServices() {
  serviceDisplay.innerHTML = "";
  services.forEach((service, index) => {
    const serviceHTML = `
            <div class="service-item">
                <img src="images/${service.img}" class="item-img" alt="${
      service.name
    }">
                <div class="service-name">${service.name}</div>
                <div class="service-amt service-name">₹${service.price.toFixed(
                  2
                )}</div>
                <div class="service-info">
                    <button class="action add-btn" data-index="${index}">Add Item <i class="bi bi-plus-circle"></i></button>
                </div>
            </div>`;
    serviceDisplay.innerHTML += serviceHTML;
  });
  const serviceHTML = `<hr><p id="item-msg"><i class="bi bi-info-circle"></i> Add the items to the cart and book now</p>`;
  serviceDisplay.innerHTML += serviceHTML;

  document.querySelectorAll(".add-btn").forEach((button) => {
    button.addEventListener("click", () => toggleCartItem(button));
  });
}

function toggleCartItem(button) {
  const index = parseInt(button.getAttribute("data-index"));
  const service = services[index];
  const cartItemIndex = cartItems.findIndex((item) => item.id === service.id);

  if (cartItemIndex === -1) {
    // Add to cart
    cartItems.push(service);
    totalAmount += service.price;
    button.innerHTML = `Remove Item <i class="bi bi-dash-circle"></i>`;
    button.classList.remove("add-btn");
    button.classList.add("remove-btn");
  } else {
    // Remove from cart
    cartItems.splice(cartItemIndex, 1);
    totalAmount -= service.price;
    button.innerHTML = `Add Item <i class="bi bi-plus-circle"></i>`;
    button.classList.remove("remove-btn");
    button.classList.add("add-btn");
  }

  renderCart();
}

// Render cart
function renderCart() {
  const bookNowBtn = document.getElementById("book-now-button");
  cartItemsTable.innerHTML = ""; // Clear previous content
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
  bookNowBtn.style.opacity = totalAmount ? "1" : "0.5";

  if (cartItems.length === 0) {
    cartItemsTable.innerHTML = `
            <tr>
                <td colspan="3">
                    <div class="no-item"><img src="images/information.png" alt="help icon"><p>No Items Added</p><p>Add items to the cart from the services bar</p></div>
                </td>
            </tr>`;
  }
}

displayAllServices();

document.getElementById("book-now-button").addEventListener("click", () => {
  const name = document.getElementById("full-name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const bookStatus = document.getElementById("book-status");
  const amount = parseInt(document.getElementById("total-amount").textContent);

  if (name && email && phone && amount) {
    emailjs.init({
      publicKey: "7FQnPI2Eyo-WNYVu0",
    });
    emailjs.send('service_0h7y0ww', 'template_6xwrhvh', {
      to_name: name,
      reply_to: email,
      message: `Your total amount of services booked is ${amount} Rupees.`
  }).then(function(response) {
      bookStatus.classList.remove("hidden");
      bookStatus.innerHTML = `<span class="status-success"><i class="bi bi-info-circle"></i> Email Has been sent successfully.</span>`;
      displayAllServices();
      cartItems = [];
      renderCart();
    }, function(error) {
        alert('Failed to send email:', error);

    });
  } else {
    bookStatus.classList.remove("hidden");
    bookStatus.innerHTML = `<span class="status-error"><i class="bi bi-info-circle"></i> Add the items to the cart to book.</span>`;
  }
});

document
  .getElementById("subscription-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("subscribe-full-name").value;
    const email = document.getElementById("subscribe-email").value;

    if (name && email) {
      alert(
        `Thank you, ${name}! You have subscribed successfully with email: ${email}`
      );
      document.getElementById("subscription-form").reset();
    } else {
      alert("Please fill in both fields before subscribing.");
    }
  });

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }