let balance = 50000; // Initial balance

function checkBalance() {
  alert("Your balance is:  ₦" + balance);
}

function deposit() {
  let amount = parseFloat(prompt("Enter amount to deposit:"));
  if (!isNaN(amount) && amount > 0) {
    balance += amount;
    updateBalance();
    alert("Deposit successful!");
  } else {
    alert("Invalid amount. Deposit failed.");
  }
}

function withdraw() {
  let amount = parseFloat(prompt("Enter amount to withdraw:"));
  if (!isNaN(amount) && amount > 0 && amount <= balance) {
    balance -= amount;
    updateBalance();
    alert("Withdrawal successful!");
  } else {
    alert("Go and enjoy your money!!.");
  }
}

function updateBalance() {
  document.getElementById("balance").textContent = "Your balance:  ₦" + balance;
}
