// import moment from 'moment'; // Won't work! Will try to load the mock.
const moment = jest.requireActual('moment');

// Mocks the moment library to export a specific timestamp so the same result will be the same when testing
export default (timestamp = 0) => {
    return moment(timestamp);
}