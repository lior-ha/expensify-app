import React from 'react';
import { DateRangePicker } from 'react-dates';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setEndDate, setStartDate } from '../actions/filters'

export class ExpenseListFilters extends React.Component{
    state = {
        calendarFocused: null
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    }
    onSortChange = (e) => {
        if (e.target.value === 'date') {
            this.props.sortByDate();
        } else if (e.target.value === 'amount') {
            this.props.sortByAmount();
        }
    }

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.props.filters.text} 
                    onChange={this.onTextChange} 
                />
                <select 
                    value={this.props.filters.sortBy} 
                    onChange={this.onSortChange}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>            
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    startDateId="your_unique_start_date_id"
                    endDate={this.props.filters.endDate} 
                    startDateId="your_unique_send_date_id"
                    onDatesChange={this.onDatesChange} 
                    focusedInput={this.state.calendarFocused} 
                    onFocusChange={this.onFocusChange} 
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
        </div>
    )};
};

const mapStateToProps = (state) => ({
    filters: state.filters
})

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setStartDate(endDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters); 