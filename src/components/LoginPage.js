import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';


export class LoginPage extends React.Component {
    onClick = (e) => {
        this.props.startLogin(e.target.value);
    };
//export const LoginPage = ({startLogin}) => (
    render() {
        return (
            <div className="box-layout">
                <div className="box-layout__box">
                    <h1 className="box-layout__title">Expensify</h1>
                    <p>It's time to get your expenses under control</p>
                    <button className="button" onClick={this.onClick} value="googleAuthProvider">Login with Google</button>
                    <button className="button" onClick={this.onClick} value="githubAuthProvider">Login with GitHub</button>
                    <button className="button" onClick={this.onClick} value="twitterAuthProvider">Login with Twitter</button>
                </div>
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch) => ({
    startLogin: (provider) => dispatch(startLogin(provider))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);