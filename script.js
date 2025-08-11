function calculateInterest() {
    let principal = parseFloat(document.getElementById("principal").value);
    let startDate = new Date(document.getElementById("startDate").value);
    let endDate = new Date(document.getElementById("endDate").value);
    let rate = parseFloat(document.getElementById("rate").value);
    let rateType = document.getElementById("rateType").value;

    if (isNaN(principal) || isNaN(rate) || startDate == "Invalid Date" || endDate == "Invalid Date") {
        document.getElementById("result").innerHTML = "Please fill all fields correctly.";
        return;
    }

    if (endDate <= startDate) {
        document.getElementById("result").innerHTML = "End date must be after start date.";
        return;
    }

    // Calculate days difference
    let daysDiff = (endDate - startDate) / (1000 * 60 * 60 * 24);
    let totalYears = daysDiff / 365.25;
    let totalMonths = daysDiff / 30.4375; // Average month length

    let interest;
    if (rateType === "monthly") {
        interest = principal * (rate / 100) * totalMonths;
    } else {
        interest = principal * (rate / 100) * totalYears;
    }

    let totalAmount = principal + interest;

    document.getElementById("result").innerHTML =
        `Interest: ₹${interest.toFixed(2)}<br>Total Amount: ₹${totalAmount.toFixed(2)}`;
}
