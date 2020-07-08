import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Authenticate from "./components/Authenticate";
import Dashboard from "./components/Dashboard";
import { connect } from "react-redux";
import 'semantic-ui-css/semantic.min.css'

function App(props) {
  return (
    <Router>
      <div className="App">
        {props.auth ? (
          <Route
            render={(routeProps) => <Dashboard {...props} {...routeProps} />}
          />
        ) : (
          <Authenticate {...props} />
        )}
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(App);
