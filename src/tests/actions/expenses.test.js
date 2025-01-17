import configureMockStock from 'redux-mock-store';
import thunk from 'redux-thunk';
import { 
        startAddExpense, 
        addExpense, 
        editExpense, 
        removeExpense, 
        setExpenses, 
        startSetExpenses, 
        startRemoveExpense,
        startEditExpense
    } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const uid = 'testUserId';
const defaultAuthState = { auth: {uid}};
const createMockStore = configureMockStock([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt };
    })
    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
});


////////////////////
// Remove Expense

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should remove expense from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[2].id;
    store.dispatch(startRemoveExpense({id}))
        .then(() => { 
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'REMOVE_EXPENSE',
                id
            });

            return database.ref(`users/${uid}/expenses/${id}`).once('value');
        })
        .then((snapshot) => {
            expect(snapshot.val()).toBeFalsy();
            done();
        });
});


////////////////////
// Edit Expense

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', {note: 'abc'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'abc'
        }
    });
});

test('should edit expense from firebase', (done) => { // Done is added for async tests
    const store = createMockStore(defaultAuthState);
    const id = expenses[0].id;
    const updates = {
        amount: 21045
    }
    store.dispatch(startEditExpense(id, updates))
        .then(() => { 
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'EDIT_EXPENSE',
                id,
                updates
            });
            return database.ref(`users/${uid}/expenses/${id}`).once('value');
        })
        .then((snapshot) => {
            expect(snapshot.val().amount).toBe(updates.amount);
            done();
        });
});

////////////////////
// Add Expense

test('should setup the add expense action object with provided values', () => {
    const expenseData = expenses[2];
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
});

test('should add expense to DB and store', (done) => { // Done is added for async tests
    const store = createMockStore(defaultAuthState);
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData))
        .then(() => { 
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(String), // Making sure there's a string value for id
                    ...expenseData
                }
            });
            return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
        })
        .then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData);
            done();
        });
});

test('should add expense with defaults to DB and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseDefault = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    }
    store.dispatch(startAddExpense(defaultAuthState))
        .then(() => { 
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(String), // Making sure there's a string value for id
                    ...expenseDefault
                }
            });
            return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
        })
        .then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseDefault);
            done();
        });
}) 


////////////////////
// Set Expenses

test('should setup set expenses action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
});


test('should fetch the expenses from firebase', (done) => { 
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpenses())
        .then(() => { 
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'SET_EXPENSES',
                expenses
            });
            done();
        });
});