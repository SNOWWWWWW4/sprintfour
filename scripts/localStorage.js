const saveToLocalStorage = (expense) => {
    let expenses = getlocalStorage();

    if(!expenses.includes(expense)) {
        expenses.push(expense);
    }

    localStorage.setItem("Expense", JSON.stringify(expenses));
}

const getlocalStorage = () => {
    let localStorageData = localStorage.getItem("Expense");

    if(localStorageData == null){
        return [];
    }

    return JSON.parse(localStorageData);
}

const removeFromLocalStorage = (expense) => {
    let expenses = getlocalStorage();
    let namedIndex = expenses.indexOf(expense);
    expenses.splice(namedIndex, 1);
    localStorage.setItem("Favorites", JSON.stringify(expenses))
}

export {saveToLocalStorage, getlocalStorage, removeFromLocalStorage};