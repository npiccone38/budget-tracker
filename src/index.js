import "./style.css";

// payment object factory
function createPayment(amount, date, location){
    return {amount, date, location};
}

const atl = document.querySelector("#atl");
atl.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(atl);
    const hist_container = document.querySelector(".history-container");

    const entry = document.createElement("div");
    entry.classList.add("entry-container");
    entry.textContent = "Amount: " + fd.get("amount") + " Date: " + fd.get("date") + " Location: " + fd.get("location");
    hist_container.prepend(entry);
});

