const trialForm = document.forms[0];

const range = document.querySelector('input[type="range"]');
const toggle = document.querySelector("input[type='checkbox'");
const page = document.querySelector(".page");
const priceEl = document.querySelector(".price");


let costChart = {
    priceAndDetails: [
        {pageViews: "10k", cost: 8, rangeValue: 0},
        {pageViews: "50k", cost: 12, rangeValue: 25},
        {pageViews: "100k", cost: 16, rangeValue: 50},
        {pageViews: "500k", cost: 24, rangeValue: 75},
        {pageViews: "1m", cost: 36, rangeValue: 100},
    ],

    discount: 25
}
// update Slider Fill
function fillRangeTrack() {
    const rangeTrack = "hsl(174, 86%, 45%)";
    const trackBackground = "hsl(223, 50%, 87%)";
    const trackProgress = `${(range.value - range.min)/ (range.max - range.min)*100}%`;
    range.style.backgroundImage = `linear-gradient(90deg, ${rangeTrack} ${trackProgress},${trackBackground} ${trackProgress})`;
}

function currencyFormat(amount) {
    const formatNum = new Intl.NumberFormat("en-us").format(amount);
    return formatNum;
}

// this function add discount to the actual price
function addDiscount(price, discount) {
    const totalDiscount = Math.floor((price * discount)/ 100);
    const diduct = price - totalDiscount;
    return diduct;
}


function selectPlan(rangeValue) {
    const trackValue = rangeValue;
    const billing = toggle.checked === true ? "yearly": "monthly";
    const index = costChart.priceAndDetails.findIndex((plan) => plan.rangeValue === trackValue);
    const pgViews = costChart.priceAndDetails[index].pageViews;
    const price = costChart.priceAndDetails[index].cost;

    if (billing === "yearly") {
        const applyDiscount = addDiscount(price, costChart.discount);
        priceEl.innerHTML = `$${currencyFormat(applyDiscount)}.00`;
    } else {
        priceEl.innerHTML = `$${currencyFormat(price)}.00`;
    }
}




fillRangeTrack();

range.addEventListener("input", fillRangeTrack);
trialForm.addEventListener("change", function() {
    const ranVal = Number(range.value);
    selectPlan(ranVal);
});

range.addEventListener("change", function() {
    const ranVal = Number(range.value);
    selectPlan(ranVal);
});

export default range;