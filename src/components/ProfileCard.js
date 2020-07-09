import React from 'react'
import { Card } from 'semantic-ui-react'
import {BrowserRouter, Link} from 'react-router-dom'
//import ProfileShow from './ProfileShow'
//import { useHistory } from "react-router-dom";



export default class ProfileCard extends React.Component {


  state={
    avatar: "https://thumbs.dreamstime.com/b/guest-avatar-vector-illustration-default-male-profile-icon-image-profile-guest-avatar-vector-illustration-default-male-profile-182095612.jpg",
    bio: "",

  }

  // handleShow=(props)=>{
  //
  //   props.history.push(`/users/${props.id}`);
  //   debugger
  // }



  render(){

    const {id, username, bio, avatar} = this.props


    return(

      <Card>
          <div className="image" >
            <img alt="default" src={this.state.avatar} />
          </div>
          <div className="headline">

             <Link to={`/users/${id}`}><h3>{username}</h3></Link>

          </div>

      </Card>

    )
  }
}
