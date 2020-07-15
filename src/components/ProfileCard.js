import React from 'react'
import { Card } from 'semantic-ui-react'
import {BrowserRouter, Link} from 'react-router-dom'
//import ProfileShow from './ProfileShow'
//import { useHistory } from "react-router-dom";



export default class ProfileCard extends React.Component {


  // state={
  //   avatar: null,
  //   bio: "",
  //
  // }

  // handleShow=(props)=>{
  //
  //   props.history.push(`/users/${props.id}`);
  //   debugger
  // }

  // handleAvatar(){
  //   if (this.state.avatar === null){
  //       return "https://thumbs.dreamstime.com/b/guest-avatar-vector-illustration-default-male-profile-icon-image-profile-guest-avatar-vector-illustration-default-male-profile-182095612.jpg"
  //   } else {
  //       return this.props.avatar
  //   }
  // }

  handleAvatar(avatar){
    if (avatar === null){
      return "https://thumbs.dreamstime.com/b/guest-avatar-vector-illustration-default-male-profile-icon-image-profile-guest-avatar-vector-illustration-default-male-profile-182095612.jpg"
    } else{
      return avatar
    }
  }


  render(){

    const {id, username, bio, avatar} = this.props



    return(

      <Card>
          <div className="username">
             <Link to={`/users/${id}`}><h3>{username}</h3></Link>
          </div>

          <div className="image" >
            <img alt="default" src={this.handleAvatar(avatar)} />
          </div>

          <div className="bio">
          {bio}
          </div>

      </Card>

    )
  }
}
