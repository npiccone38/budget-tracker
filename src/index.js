import "./style.css";

const atl = document.querySelector("#atl");
atl.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(atl);
    const history_container = document.querySelector(".history-container");

    const entry = document.createElement("div");
    entry.classList.add("entry-container");

    const entry_location = document.createElement("div");
    entry_location.classList.add("entry-location");
    entry_location.textContent = fd.get("location");

    const entry_amount = document.createElement("div");
    entry_amount.classList.add("entry-amount");
    entry_amount.textContent = "$" + fd.get("amount");

    const entry_date = document.createElement("div");
    entry_date.classList.add("entry-date");
    entry_date.textContent = fd.get("date");

    history_container.prepend(entry);

    entry.appendChild(entry_location);
    entry.appendChild(entry_amount);
    entry.appendChild(entry_date);

    document.getElementById("atl").reset();
});

