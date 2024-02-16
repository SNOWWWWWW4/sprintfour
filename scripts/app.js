
let currentBudget = document.getElementById("currentBudget");
let budgetUpdateBtn = document.getElementById("budgetUpdateBtn");
let budget = "";

budgetUpdateBtn.addEventListener('click', async (event) => {
    
    let budgetEnter = document.getElementById("budgetEnter");
    currentBudget.textContent = "Current Budget: $ "+ budgetEnter.value;

    console.log(budgetEnter.value);
})

let expenseName = document.getElementById("expenseName");
let expenseAmount = document.getElementById("expenseAmount");

let addExpenseBtn = document.getElementById("addExpenseBtn");
let injectHere = document.getElementById("injectHere");
