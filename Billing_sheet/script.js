const usersList = document.getElementById("usersList");
const totalWealth = document.getElementById("totalWealth");
const addUserBtn = document.getElementById("addUserBtn");
const doubleMoneyBtn = document.getElementById("doubleMoneyBtn");
const showMillionairesBtn = document.getElementById("showMillionairesBtn");
const sortRichestBtn = document.getElementById("sortRichestBtn");
const calculateWealthBtn = document.getElementById("calculateWealthBtn");
let users = [];

const addUser = async () => {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();
  const user = data.results[0];
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    wealth: Math.floor(Math.random() * 1000000),
  };
  users.push(newUser);
  showUsers();
};

const showUsers = () => {
  usersList.innerHTML = "";
  users.forEach((user) => {
    const userRow = document.createElement("div");
    userRow.classList.add("user-row");
    userRow.innerHTML = `
            <span>${user.name}</span>
            <span>$${user.wealth.toLocaleString()}</span>
        `;
    usersList.appendChild(userRow);
  });
};

const doubleMoney = () => {
  users = users.map((user) => ({
    ...user,
    wealth: user.wealth * 2,
  }));
  showUsers();
};

const showMillionaires = () => {
  const millionaires = users.filter((user) => user.wealth >= 1000000);
  usersList.innerHTML = "";
  millionaires.forEach((user) => {
    const userRow = document.createElement("div");
    userRow.classList.add("user-row");
    userRow.innerHTML = `
            <span>${user.name}</span>
            <span>$${user.wealth.toLocaleString()}</span>
        `;
    usersList.appendChild(userRow);
  });
};

const sortByRichest = () => {
  users.sort((a, b) => b.wealth - a.wealth);
  showUsers();
};

const calculateTotalWealth = () => {
  const total = users.reduce((acc, user) => acc + user.wealth, 0);
  totalWealth.innerText = `Total Wealth: $${total.toLocaleString()}`;
};

for (let index = 0; index < 3; index++) {
    addUser();  
}

addUserBtn.addEventListener("click", addUser);
doubleMoneyBtn.addEventListener("click", doubleMoney);
showMillionairesBtn.addEventListener("click", showMillionaires);
sortRichestBtn.addEventListener("click", sortByRichest);
calculateWealthBtn.addEventListener("click", calculateTotalWealth);
