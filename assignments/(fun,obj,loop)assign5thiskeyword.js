const wallet = {
  owner: 'John Doe',
  balance: 0,
  lastTransaction: null,

  deposit: function(amount) {
    if (typeof amount !== 'number' || amount <= 0) {
      console.log('Invalid deposit amount.');
      return;
    }
    this.balance += amount;
    this.lastTransaction = {
      type: 'DEPOSIT',
      amount: amount,
      balanceAfter: this.balance
    };
    console.log(`Deposited ${amount}. New balance: ${this.balance}`);
  },

  withdraw: function(amount) {
    if (typeof amount !== 'number' || amount <= 0) {
      console.log('Invalid withdrawal amount.');
      return;
    }
    if (amount > this.balance) {
      console.log('Insufficient funds.');
      return;
    }
    this.balance -= amount;
    this.lastTransaction = {
      type: 'WITHDRAW',
      amount: amount,
      balanceAfter: this.balance
    };
    console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
  }
};

// Example usage:
wallet.deposit(200);
wallet.deposit(50);
wallet.withdraw(100);
wallet.withdraw(500); // Should fail due to insufficient funds
wallet.deposit(-50); // Should fail due to invalid amount

console.log('\nFinal Wallet State:');
console.log(wallet);
