const currencies = [
  {
    title: "US Dollar",
    sub: "$",
    text: "USD",
  },
  {
    title: "Euro",
    sub: "€",
    text: "EUR",
  },
  {
    title: "Chinese Yuan",
    sub: "¥",
    text: "CNY",
  },
  {
    title: "Thai Baht",
    sub: "฿",
    text: "THB",
  },
  {
    title: "British Pound Sterling",
    sub: "£",
    text: "GBP",
  },
  {
    title: "Ghanaian Cedi",
    sub: "₵",
    text: "GHS",
  },
  {
    title: "Japanese Yen",
    sub: "￥",
    text: "JPY",
  },
  {
    title: "Polish Zloty",
    sub: "zł",
    text: "PLN",
  },
];

let currenciesHTML = "";
currencies.map((currency, i) => {
  currenciesHTML += `
    <div class="currency-card">
      <div class="sub-container">
      <p class="currency-sub">${currency.sub}</p>
      </div>
      <p class="currency-title">${currency.title}</p>
      <p class="currency-text">${currency.text}</p>
      <button class="save-button">
      Save
      <span id="arrow" class="material-icons"> arrow_forward </span>
    </button>
    </div>
  `;
});

function loadEvent() {
  document
    .querySelector(".cards-container")
    .insertAdjacentHTML("beforeend", currenciesHTML);
}
window.addEventListener("load", loadEvent);
