import React from 'react'
import { Card } from 'semantic-ui-react'
//import MapMarker from './MapMarker'



export default class ProfileCard extends React.Component {

  state={
    image: "https://thumbs.dreamstime.com/b/guest-avatar-vector-illustration-default-male-profile-icon-image-profile-guest-avatar-vector-illustration-default-male-profile-182095612.jpg",
    bio: "",

  }



  render(){

    const {username, bio, avatar} = this.props


    return(
      <Card>

          <div className="image">
            <img alt="default" src={this.state.image} />
          </div>
          <div className="headline">
            <h3>{username}</h3>

          </div>

      </Card>
    )
  }
}
