document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const balanceAmount = document.querySelector('.balance-amount');
    const moneyIncome = document.querySelector('.money.plus');
    const moneyExpense = document.querySelector('.money.minus');
    const transactionForm = document.getElementById('transaction-form');
    const transactionList = document.getElementById('transaction-list');
    const themeToggle = document.querySelector('.theme-toggle');
    const categoryChartCtx = document.getElementById('categoryChart').getContext('2d');
    
    // Initialize transactions from localStorage or empty array
    let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    
    // Initialize Chart
    let categoryChart = new Chart(categoryChartCtx, {
        type: 'pie',
        data: {
            labels: ['Salary', 'Freelance', 'Food', 'Transport', 'Entertainment', 'Other'],
            datasets: [{
                data: [0, 0, 0, 0, 0, 0],
                backgroundColor: [
                    '#4e73df',
                    '#1cc88a',
                    '#36b9cc',
                    '#f6c23e',
                    '#e74a3b',
                    '#858796'
                ],
                hoverBackgroundColor: [
                    '#2e59d9',
                    '#17a673',
                    '#2c9faf',
                    '#dda20a',
                    '#be2617',
                    '#6c757d'
                ],
                hoverBorderColor: "rgba(234, 236, 244, 1)",
            }]
        },
        options: {
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        color: getComputedStyle(document.body).getPropertyValue('--dark-color')
                    }
                }
            }
        }
    });

    // Theme Toggle
    themeToggle.addEventListener('click', function() {
        document.body.setAttribute('data-theme', 
            document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
        );
        
        const icon = this.querySelector('i');
        if (document.body.getAttribute('data-theme') === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
        
        // Update chart text colors
        updateChartColors();
    });

    function updateChartColors() {
        const textColor = getComputedStyle(document.body).getPropertyValue('--dark-color');
        categoryChart.options.plugins.legend.labels.color = textColor;
        categoryChart.update();
    }

    // Add transaction
    transactionForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const text = document.getElementById('text').value;
        const amount = +document.getElementById('amount').value;
        const type = document.getElementById('type').value;
        const category = document.getElementById('category').value;
        
        const transaction = {
            id: generateID(),
            text,
            amount,
            type,
            category,
            date: new Date().toLocaleDateString()
        };
        
        transactions.push(transaction);
        updateLocalStorage();
        updateUI();
        
        this.reset();
    });

    // Generate random ID
    function generateID() {
        return Math.floor(Math.random() * 100000000);
    }

    // Update localStorage
    function updateLocalStorage() {
        localStorage.setItem('transactions', JSON.stringify(transactions));
    }

    // Update all UI elements
    function updateUI() {
        updateBalance();
        updateIncomeExpense();
        updateTransactionList();
        updateChartData();
    }

    // Update balance
    function updateBalance() {
        const amounts = transactions.map(transaction => 
            transaction.type === 'income' ? transaction.amount : -transaction.amount
        );
        
        const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);
        
        balanceAmount.textContent = `$${total}`;
    }

    // Update income and expense
    function updateIncomeExpense() {
        const income = transactions
            .filter(transaction => transaction.type === 'income')
            .reduce((acc, transaction) => acc + transaction.amount, 0)
            .toFixed(2);
        
        const expense = transactions
            .filter(transaction => transaction.type === 'expense')
            .reduce((acc, transaction) => acc + transaction.amount, 0)
            .toFixed(2);
        
        moneyIncome.textContent = `+$${income}`;
        moneyExpense.textContent = `-$${expense}`;
    }

    // Update transaction list
    function updateTransactionList() {
        transactionList.innerHTML = '';
        
        transactions.forEach(transaction => {
            const sign = transaction.type === 'income' ? '+' : '-';
            const item = document.createElement('li');
            item.classList.add(transaction.type);
            
            item.innerHTML = `
                <span>${transaction.text} <small>${transaction.date}</small></span>
                <span>${sign}$${Math.abs(transaction.amount)} <small>${transaction.category}</small></span>
                <button class="delete-btn" onclick="removeTransaction(${transaction.id})">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            
            transactionList.appendChild(item);
        });
    }

    // Update chart data
    function updateChartData() {
        const categories = ['salary', 'freelance', 'food', 'transport', 'entertainment', 'other'];
        const expenseData = categories.map(category => {
            return transactions
                .filter(t => t.type === 'expense' && t.category === category)
                .reduce((acc, t) => acc + t.amount, 0);
        });
        
        categoryChart.data.datasets[0].data = expenseData;
        categoryChart.update();
    }

    // Remove transaction
    window.removeTransaction = function(id) {
        transactions = transactions.filter(transaction => transaction.id !== id);
        updateLocalStorage();
        updateUI();
    };

    // Initialize UI
    updateUI();
});