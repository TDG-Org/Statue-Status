// Functions to use anywhere 

module.exports = {
  // Funtion that sorts Data my property (money)
  moneySorter: (a, b) => {
    if (a.money < b.money) {
      return -1;
    }
    if (a.money > b.money) {
      return 1;
    }
    return 0;
  }
};