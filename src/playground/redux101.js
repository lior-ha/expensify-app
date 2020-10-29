import { createStore } from 'redux';

// Action Generators - functions that return action onjects
const incrementCount = ( { incrementBy = 1 } = {} ) => ({
    type: 'INCREMENT',
    incrementBy
});

const decremnetCount = ( { decremnetBy = 1 } = {} ) => ({
    type: 'DECREMENT',
    decremnetBy
});

const setCount = (({ count }) => ({
    type: 'SET',
    count
}));

const resetCount = (() => ({
    type: 'RESET'
}));

// Reducers
// 1. Reducers are pure functions (output determined only by input - doesn't rely or change outside variables)
// 2. Never change state or action - Should return them on new objects instead

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };

        case 'DECREMENT':
            return {
                count: state.count - action.decremnetBy
            };

        case 'RESET':
            return {
                count: 0
            };

        case 'SET':
            return {
                count: action.count
            };
        default: 
        
        return state;
    }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// Actions - an object that gets sent to the store

// I'd like to increment the count
// store.dispatch({ 
//     type: 'INCREMENT',
//     incrementBy: 5
// });

//unsubscribe();

store.dispatch(incrementCount({ incrementBy : 5}));

store.dispatch(incrementCount());

// I'd like to reset the count to zero
store.dispatch(resetCount());
store.dispatch(decremnetCount());

store.dispatch(decremnetCount({ decremnetBy: 10 }));

store.dispatch(setCount({ count: 111 }));