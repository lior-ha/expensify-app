export default (expenses) => {
    return expenses
            .map((expense) => expense.amount)
            .reduce((prev, amount) => prev + amount, 0);
}