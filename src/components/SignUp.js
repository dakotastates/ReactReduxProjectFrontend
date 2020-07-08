import React from 'react'
import { connect } from "react-redux";
import { storeUser, createUser } from "../actions/UserActions";
import { login } from "../actions/Auth";

class SignUp extends React.Component {
  state = {
      username:"",
      password: "",
      confirmPassword: "",



    };

    handleOnChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };


    onSubmit = (e) => {
      e.preventDefault();
      this.props
         .createUser(this.state)
         .then(() => this.props.login())
         .catch((error) => {
           alert(error);
           console.log(error);
         });
    };

    render(){
        return(
            <div>
                <h1>SignUp Form</h1>
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleOnChange}
                    />
                    <br/>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleOnChange}
                    />
                    <br/>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={this.state.confirmPassword}
                        onChange={this.handleOnChange}
                    />


                    <br/>
                    <input
                        type="submit"
                        value="SignUp"
                    />
                </form>

            </div>
        )
    }
}



export default connect(null, { storeUser, login, createUser })(SignUp);
