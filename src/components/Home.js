import React from 'react'
import { connect } from "react-redux";



class Home extends React.Component {



    render(){
      const { user } = this.props;
        return(
            <div>
              <h1>Home page</h1>
              Welcome {user.username}

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
  user: state.usersStore.user,
});

export default connect(mapStateToProps)(Home);
