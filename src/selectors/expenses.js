import moment from 'moment';

// Get visible expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses
        .filter((expense) => {
            // Checks if there start/endDate exist, and if so, filters accordingly
            const createdAtMoment = moment(expense.createdAt)
            const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
            const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
            const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

            // Returns into a new array, if all are true
            return startDateMatch && endDateMatch && textMatch
        })
        .sort((a, b) => {
            if (sortBy === 'date') {
                return a.createdAt < b.createdAt ? 1 : -1;
              } else if (sortBy === 'amount') {
                return a.amount < b.amount ? 1 : -1;
              }
        });
};