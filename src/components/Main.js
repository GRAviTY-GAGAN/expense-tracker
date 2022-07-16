import React, {Component} from "react";
import './Main.css';
import Login from './Forms/Login';
import Register from "./Forms/Register";

export default class Main extends Component {

    state = {
        user: 1,   //as long as it is 1 means user is not logged in.
        loading: true,  //as long as it is true that means we did not get response form firebase
        formSwitcher: false
    }

    formSwitcher = (action) => {
        console.log(action);
        this.setState({
            formSwitcher: action === 'register' ? true : false
         })
    }

    render(){

        const form = !this.state.formSwitcher ? <Login /> : <Register />;

        return(
            <> 
                <div className="mainBlock">
                {form}
                {!this.state.formSwitcher ?
                (<span className="underLine">
                    Not registered? <button onClick={() => this.formSwitcher(!this.state.formSwitcher ? 'register' : 'login')} className="linkBtn"> Create an account</button> 
                </span>) : (
                    <span className="underLine">
                    Have an account? <button onClick={() => this.formSwitcher(!this.state.formSwitcher ? 'register' : 'login')} className="linkBtn"> Sign in here</button> 
                </span>
                )
                }
            </div>
            </>
        );
    }
}