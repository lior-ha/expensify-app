import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal, filteredExpenseCount, totalFilteredExpenses }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const totalExpenseWord = totalFilteredExpenses === 1 ? 'expense' : 'expenses';
    const formattedExpenseTotal = numeral(expensesTotal / 100).format('$0,0.00');
    const formattedtotalExpenses = numeral(totalFilteredExpenses / 100).format('$0,0.00');
    return (
        <div className="page-header">
            <div className="content-container">
            <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totaling <span>{formattedExpenseTotal}</span></h1>
                {
                    filteredExpenseCount > 0 ? (
                        <p className="page-header__title">Not showing <span>{filteredExpenseCount}</span> {totalExpenseWord} due to filtering, totaling <span>{formattedtotalExpenses}</span></p>
                    ) : (  
                        <p className="page-header__title">Showing all expenses. There are no filtered expenses</p>
                    )
                }
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    )    
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    const totalExpenses = selectExpensesTotal(state.expenses)

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses),
        filteredExpenseCount: state.expenses.length - visibleExpenses.length,
        totalFilteredExpenses: totalExpenses - selectExpensesTotal(visibleExpenses)
    }
};

export default connect(mapStateToProps)(ExpensesSummary);