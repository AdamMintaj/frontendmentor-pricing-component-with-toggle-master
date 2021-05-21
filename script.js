var checkbox = document.getElementById("checkbox");
var toggle = document.getElementById("toggle");
var prices = document.getElementsByClassName("tariff__price");
var toggle__button = document.getElementById("toggle__button");
var tariffs = document.getElementsByClassName("tariff");

for(i=0; i<tariffs.length; i++)
{   
    tariffs[i].addEventListener("mouseover", function (){this.classList.add("tariff--active")});
    tariffs[i].addEventListener("mouseout", function (){this.classList.remove("tariff--active")});
}

function toggle_payment_plan()
{
    toggle__button.classList.toggle("toggle__button--monthly");

    for(i=0; i<prices.length; i++)
    {
        prices[i].classList.toggle("tariff__price--active");
    }   
}

checkbox.addEventListener("click", toggle_payment_plan);