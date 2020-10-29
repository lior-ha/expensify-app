// Higher Order Component (HOC) - A component(HOC) that renders another component
// The purpose of HOC is to reuse code
// Render hijacking
// Prop manipulation
// Abstarct state
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

//HOC
// Regular function:
// const withAdminWarning = (WrappedComponent) => {
//     return (props) => (
//         <div>
//             {props.isAdmin && <p>This is private info, please don't share</p>}
//             <WrappedComponent {...props} />
//         </div>
//     )
// };
// // The HOC:
// const AdminInfo = withAdminWarning(Info);

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p>Please login to view the info</p>
            )}
        </div>
    )
}
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="These are the details" />, document.querySelector('#app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the details" />, document.querySelector('#app'));

//Please login to view the info