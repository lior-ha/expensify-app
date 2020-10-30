import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFiltera from './ExpenseListFiltres';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
    <div>
        <ExpensesSummary />
        <ExpenseListFiltera />
        <ExpenseList />
    </div>
)

export default ExpenseDashboardPage;