function compute()
{
    // Input values
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    // Compute
    interest = principal * years * rate / 100;
    endYear = new Date().getFullYear() + parseInt(years);

    // Display the Result
    el = document.getElementById("result");
    if (principal==0 || principal<0) {
        alert("Enter a positive number!")
    }
    else{
    el.innerHTML = "If you deposit " + principal + "<br/>";
    el.innerHTML += "at an interest rate of " + rate + "%." + "<br/>";
    el.innerHTML += "You will recieve an amount of " + interest + ",<br/>";
    el.innerHTML += "in the year " + endYear + ".<br/>";
    el.innerHTML = "If you deposit <span class='highlight'>" + principal + "</span><br/>";
    el.innerHTML += "at an interest rate of <span class='highlight'>" + rate + "%." + "</span><br/>";
    el.innerHTML += "You will recieve an amount of <span class='highlight'>" + interest + "</span>,<br/>";
    el.innerHTML += "in the year <span class='highlight'>" + endYear + "</span>.<br/>";
}
}

function rateUpdate() {
    rate = document.getElementById("rate").value;
    document.getElementById("rate-update").innerHTML = rate + "%";
}