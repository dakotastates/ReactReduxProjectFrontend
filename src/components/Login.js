import React from 'react'
import { connect } from "react-redux";
import { storeUser } from "../actions/UserActions";
import { login } from "../actions/Auth";



class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props
      .storeUser(this.state)
      .then(() => {
        this.props.login();
      })
      .catch((error) => {
        alert(error);
      });
      // debugger
  };

    render(){

        return(
            <div>
                <h1>Login Form</h1>
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.email}
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
                        type="submit"
                        value="Login"
                    />
                </form>
                Need an account? <button onClick={()=>this.props.toggle(false)}>SignUp</button>
            </div>
        )
    }
}



export default connect(null, { storeUser, login })(Login)
