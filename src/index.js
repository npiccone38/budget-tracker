import "./style.css";
/*
* Sets the starting value for the balance
*/
let balance = 0;
const balance_text = document.querySelector(".balance-text");
balance_text.textContent = "$" + balance;

/*
* Submits the info in the add to log form and creates
* a new entry in the log when the button is pressed
*/
const atl = document.querySelector("#atl");
atl.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(atl);

    //Creates the log entry
    const history_container = document.querySelector(".history-container");

    const entry = document.createElement("div");
    entry.classList.add("entry-container");

    const entry_location = document.createElement("div");
    entry_location.classList.add("entry-location");
    entry_location.textContent = fd.get("location");

    const entry_amount = document.createElement("div");
    entry_amount.classList.add("entry-amount");
    entry_amount.textContent = "-$" + fd.get("amount");

    const entry_date = document.createElement("div");
    entry_date.classList.add("entry-date");
    entry_date.textContent = fd.get("date");

    history_container.prepend(entry);

    entry.appendChild(entry_location);
    entry.appendChild(entry_amount);
    entry.appendChild(entry_date);

    //updates the balance
    balance -= fd.get("amount");
    balance_text.textContent = "$" + balance;

    document.getElementById("atl").reset();
});

/*
* Handles form to add income and update the balance
*/
const addIncome = document.querySelector("#add-income");
addIncome.addEventListener("submit", (e) => {
    e.preventDefault();
    const incomeFD = new FormData(addIncome);

    const history_container = document.querySelector(".history-container");

    const entry = document.createElement("div");
    entry.classList.add("entry-container");

    const entry_location = document.createElement("div");
    entry_location.classList.add("entry-location");
    entry_location.textContent = incomeFD.get("source");

    const entry_amount = document.createElement("div");
    entry_amount.classList.add("entry-amount");
    entry_amount.textContent = "+$" + incomeFD.get("amount");

    const entry_date = document.createElement("div");
    entry_date.classList.add("entry-date");
    entry_date.textContent = incomeFD.get("date");

    history_container.prepend(entry);

    entry.appendChild(entry_location);
    entry.appendChild(entry_amount);
    entry.appendChild(entry_date);

    //updates the balance, had to do double negative because of string concatenation issues
    balance -= -incomeFD.get("amount");
    balance_text.textContent = "$" + balance;

    document.getElementById("add-income").reset();
});