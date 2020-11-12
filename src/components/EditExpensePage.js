import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import ConfirmRemoveModal from './ExpenseRemoveModal';

export class EditExpensePage extends React.Component {
    state = {
        removeExpenseModal: undefined
    }

    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };

    handleRemoveExpense = () => {
        this.setState(() => ({ approveDeleteModal: true }));
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/');

        this.setState(() => ({ removeExpenseModal: undefined }));
    };

    handleCancelRemove = () => {
        this.setState(() => ({ removeExpenseModal: undefined }));
    }

    onRemove = () => {
        this.setState(() => ({ removeExpenseModal: true }));
    }

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm 
                        onSubmit={this.onSubmit}
                        expense={this.props.expense}
                    />
                    <button className="button button--secondary" onClick={this.onRemove}>Remove Expense</button>
                </div>
                <ConfirmRemoveModal 
                    removeExpenseModal={this.state.removeExpenseModal}
                    removeExpenseObject={this.props.expense}
                    handleRemoveExpense = {this.handleRemoveExpense}
                    handleCancelRemove = {this.handleCancelRemove}
                />
            </div>
        )
    };
}
const mapStateToProps = (state, props) => ({
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))    
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);