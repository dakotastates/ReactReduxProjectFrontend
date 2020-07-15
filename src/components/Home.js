import React from 'react'
import { connect } from "react-redux";
import ProfileCard from './ProfileCard'
import EditProfile from './EditProfile'
import { updateUser } from "../actions/UserActions";



class Home extends React.Component {

constructor(props){
  super(props)
  this.state={
    displayEdit:false
  }
}

toggleEdit=() =>{
  this.setState((prevState)=>({displayEdit:!prevState.displayEdit}))
}



    render(){
      const { user, updateUser } = this.props;
      // debugger
        return(
            <div>
              <h1>Welcome {user.username}</h1>

              {this.state.displayEdit ? < EditProfile user={user} updateUser={updateUser}/> : <ProfileCard key={user.id}{...user}/>}

              

              <button onClick={this.toggleEdit}>{this.state.displayEdit ? "Back to Profile" : "Edit Profile"}</button>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
  user: state.usersStore.user,
});

export default connect(mapStateToProps, {updateUser})(Home);
