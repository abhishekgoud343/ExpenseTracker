var expenses = [];

const amount = document.getElementById('amount');
const category = document.getElementById('category');

const button = document.getElementById('add-entry');
button.addEventListener('click', () => addExpense());

const tableContainer = document.getElementById('table-container');
// table.classList.add('table');

function addExpense() {
    const amt = parseInt(amount.value);
    if (!amt || amt <= 0) return;
    
    var ctgry = category.value.trim();
    if (ctgry === '') ctgry = 'Uncategorized';

    var categoryExists = false;
    
    for (var expense of expenses) {
        if (expense.category == ctgry) {
            categoryExists = true;
            expense.amount += amt;
            break;
        }
    }

    if (!categoryExists)
        expenses.push({category: ctgry, amount: amt});

    renderTable();
}

function renderTable() {
    tableContainer.innerHTML = '<h2>List of expenses</h2>';
    var index = 1;

    const table = document.createElement('table');

    const th1 = document.createElement('th');
    th1.innerText = 'S. No.';
    const th2 = document.createElement('th');
    th2.innerText = 'Category';
    const th3 = document.createElement('th');
    th3.innerText = 'Expense';

    table.append(th1, th2, th3);
    tableContainer.appendChild(table);

    var totalExpense = 0;

    expenses.forEach(expense => {
        totalExpense += expense.amount;

        var row = document.createElement('tr');
        
        var c1 = document.createElement('td');
        var c2 = document.createElement('td');
        var c3 = document.createElement('td');

        c1.innerText = index++;
        c2.innerText = expense.category;
        c3.innerText = expense.amount;

        row.appendChild(c1);
        row.appendChild(c2);
        row.appendChild(c3);

        table.appendChild(row);
    });

    var row = document.createElement('tr');
        
    var a = document.createElement('td');
    var b = document.createElement('td');
    var c = document.createElement('td');

    b.innerHTML = `<b>Total</b>`
    c.innerText = totalExpense;

    row.append(a, b, c);

    table.appendChild(row);
}

renderTable();