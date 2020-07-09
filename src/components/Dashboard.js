import React from 'react'
import { connect } from "react-redux";
import { logout } from "../actions/Auth";
import { Switch} from "react-router-dom";
import PRoute from "../helpers/PRoute";
import GoogleMap from "./GoogleMap";
import Profiles from "./Profiles";
import About from "./About";
import ProfileShow from "./ProfileShow";
import Home from "./Home";
import ProfileCard from './ProfileCard'

import Navbar from "./Navbar";
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
          <div className="header">
          <Navbar />
            <div className="logout">
            <br/>
              <button onClick={handleLogout}>Logout</button>
            </div>
          <br/>

          </div>

          <Switch>
            <PRoute path="/users/:id" component={ProfileShow} />
            <PRoute path="/about" component={About} />

            <PRoute path="/profiles" component={Profiles} />
            <PRoute path="/map" component={GoogleMap} />

            <PRoute path="/" component={Home} />

          </Switch>



        </div>
    )

}


export default connect(null, { logout })(Dashboard);
