import React from 'react'
import { connect } from "react-redux";
import { logout } from "../actions/Auth";
import { Switch } from "react-router-dom";
import PRoute from "../helpers/PRoute";
import GoogleMap from "./GoogleMap";
import Profiles from "./Profiles";

//import Home from "./Home";


function Dashboard(props) {

  const handleLogout = () => {
      props.logout();
      localStorage.removeItem("state");
      localStorage.removeItem("token");
      props.history.push("/");
    };


    return(
        <div>
          <h1>Dashboard</h1>
          <button onClick={handleLogout}>Logout</button>

          <Switch>
            <PRoute path="/profiles" component={GoogleMap} />
            <PRoute path="/" component={Profiles} />
          </Switch>
        </div>
    )

}


export default connect(null, { logout })(Dashboard);
