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

  // updateLocation(longitude, latitude){
  //   this.setState.location({
  //     longitude: longitude,
  //     latitude: latitude
  //   })
  // debugger
  // }

componentDidMount(){
  // debugger
  let currentComponent = this;
  navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      //currentComponent.updateLocation(position.coords.longitude, position.coords.latitude)
      currentComponent.setState({
        longitude: position.coords.longitude,
        latitude: position.coords.latitude
      })
      console.log(currentComponent.state)
      currentComponent.props.updateUser(currentComponent.state, currentComponent.props.user)
      //console.log(currentUser)
      //currentComponent.setState(()=>{
        //currentComponent.props.user.longitude = position.coords.longitude
        //currentComponent.props.user.latitude = position.coords.latitude
      //});
      //currentComponent.props.updateUser(currentComponent.props.user)
    });

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
