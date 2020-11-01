import firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyDlpgQx-VGg90za2X9_znkDUlZk_fDdsPE",
    authDomain: "expensify-1f6c8.firebaseapp.com",
    databaseURL: "https://expensify-1f6c8.firebaseio.com",
    projectId: "expensify-1f6c8",
    storageBucket: "expensify-1f6c8.appspot.com",
    messagingSenderId: "899647438914",
    appId: "1:899647438914:web:c1c815e9af975b3181eddb"
};

// Initialize Firebase
firebase.initializeApp(config);

const database = firebase.database();
////////////////////////////////////////////////////////////////
//////////// CREATE
////////////////////////////////////////////////////////////////

// database.ref().set({
//     name: 'Mike',
//     age: 35,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     isMarried: true,
//     location: {
//         city: 'Boston',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('Data Saved')
// }).catch((e) => {
//     console.log('This failed', e)
// });

///////////////////
/////// Adding
///////////////////
// database.ref('attributes').set({
//     height: 170,
//     weight: 65
// }).then(() => {
//     console.log('Attributes Added');
// }).catch((e) => {
//     console.log('This failed', e);
// })

//database.ref().set('Tests');


////////////////////////////////////////////////////////////////
/////////////// DELETE/REMOVE
////////////////////////////////////////////////////////////////

// database.ref('isMarried')
//     .remove()
//     .then(() => {
//         console.log("Removed successfully")
//     })
//     .catch((e) => {
//         console.log("Something went wrong", e)
//     })

// // OR

// database.ref('isMarried')
//     .set(null)
//     .then(() => {
//         console.log("Removed successfully")
//     })
//     .catch((e) => {
//         console.log("Something went wrong", e)
//     })


////////////////////////////////////////////////////////////////
//////////////// Updating
////////////////////////////////////////////////////////////////

// database.ref('age').set(37)
// database.ref('location/city').set('Minnesota');

// database.ref().update({
//     name: 'Kyle',
//     age: 38,
//     job: 'Software Engineer',
//     isMarried: null
// });

// database.ref()
//     .update({
//         //job: 'Manager',
//         // Update will overwrite nested objects
//         // location: { 
//         //     city: 'Bostong'
//         // }
//         stressLevel: 9,
//         'location/city': 'Seattle',
//         'job/company': 'Amazon'
//     })
//     .then(() => {
//         console.log('Updated Successfuly')
//     })
//     .error((e) => {
//         console.log('Something went wrong' , e)
//     })


////////////////////////////////////////////////////////////////
////////////////// READ
////////////////////////////////////////////////////////////////

//////////////
// Once
//////////////

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val)
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e)
//     })


/////////////
// Subscripte - On - Runs onload and when data changes
/////////////

// database.ref()
//     .on('value', (snapshot) => { // Not using promises because the can be resolved or rejectde only once
//         console.log(snapshot.val());
//     })

// database.ref('age').set(35);
// setTimeout(() => {
//     database.ref('age').set(37);
// }, 3500);

// setTimeout(() => { // Turns off the stream updaing
//     database.ref().off();
// }, 7000);

// setTimeout(() => { // Still changes but doesn't show the update
//     database.ref('age').set(38);
// }, 10500);


/////////////
////// Setting a specific subscription
/////////////
// const onValueChange = (snapshot) => {
//     console.log(snapshot.val());
// }
// database.ref()
//     .on('value', onValueChange); 

// OR
// const onValueChange = database.ref()
//     .on('value', (snapshot) => { 
//         console.log(snapshot.val());
//     }, (error) => { // 3rd function for Errors
//         console.log('Error with data fetching', error)
//     })

// database.ref('age').set(35);
// setTimeout(() => {
//     database.ref('age').set(37);
// }, 3500);

// setTimeout(() => { 
//     database.ref().off(onValueChange);// Turns off the specific subscription
// }, 7000);

// setTimeout(() => { // Still changes but doesn't show the update
//     database.ref('age').set(38);
// }, 10500);


////////////////////////////////////////////////////////////////
////////////////// Printing and updating example
////////////////////////////////////////////////////////////////

// <NAME> is a <JOB> at <COMPANY>
// database.ref()
//     .on('value', (snapshot) => { 
//         const user = snapshot.val();
//         console.log(`${user.name} is a ${user.job.title} at ${user.job.company}`);
//     })

// setTimeout(() => {
//     database.ref().update({
//         'job/title': 'Software Developer',
//         'job/company': 'Amazone'
//     });
// }, 1000);


////////////////////////////////////////////////////////////////
////////////////// Firebase Data structure
////////////////////////////////////////////////////////////////

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, HTML, CSS'
// })

// database.ref('expenses').push({
//     description: 'Gum',
//     note: 'Bubble',
//     amount: 195,
//     createdAt: -5454227
// });


/////////////
// Fetching data and manipulate to array
/////////////

// Using once
// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses)
//     });


// Using on (subscription)
// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses)
// });


// // child_removed - fires when a child is removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val()); // Console logs the removed child
// });

// // child_changed - fires when one the children changes
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val()); // Console logs the removed child
// });

// // child_added - fires for each existing child on expenses and run again every time a new child is added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val()); // Console logs the removed child
// });