import React from 'react'
import { Card } from 'semantic-ui-react'
import ProfileCard from './ProfileCard'
//import ProfileForm from './ProfileForm'
import { connect } from "react-redux";
import { storeUsers } from "../actions/UserActions";
import { Marker } from 'google-maps-react';

class Markers extends React.Component {

  state={
    users:[]
  }

  // editProfile=(profile) =>{
  //   this.setState((prevState)=>{
  //     debugger
  //   })
  // }

  componentDidMount() {

     this.props
       .storeUsers()
       .then(() => {
        console.log(this.props.users)
        this.setState({users: this.props.users})
        console.log(this.state)

       })
       .catch((error) => console.log(error));

   }


  render(){
    return(
      <Marker>
        {this.state.users.map( user=> <ProfileCard key={user.id}{...user}/>)}
      </Marker>
    )
  }

}

const mapStateToProps = (state) => ({
  users: state.usersStore.users

});

export default connect(mapStateToProps, { storeUsers })(Markers)
