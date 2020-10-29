import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFiltera from './ExpenseListFiltres';

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFiltera />
        <ExpenseList />
    </div>
)

export default ExpenseDashboardPage;