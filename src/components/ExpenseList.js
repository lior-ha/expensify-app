import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// exported only for testing an unconnected version
export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length===0 ? (
                <p>No Expenses</p>
            ) : (
                props.expenses.map((expesnse) => {
                    return <ExpenseListItem key={expesnse.id} {...expesnse} />
                })
            )
        }
    </div>
);

// connect returns a function, so we need to run it with andother parathesis

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
};

// Usually exporting the connect as default instead of setting a variable
const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

export default ConnectedExpenseList;