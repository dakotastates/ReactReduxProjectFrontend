import React from 'react'
import { Card } from 'semantic-ui-react'
import ProfileCard from './ProfileCard'
//import ProfileForm from './ProfileForm'
import { connect } from "react-redux";
import { storeUsers } from "../actions/UserActions";

class Profiles extends React.Component {

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
        //console.log(this.props.users)
        this.setState({users: this.props.users})
        //console.log(this.state)

       })
       .catch((error) => console.log(error));

   }


  render(){
    const userDist = []
    const {longitude, latitude} = this.props.user
    const u = this.state.users.map((user) => {
      let distance = getDistance(latitude, longitude, user.latitude, user.longitude)
      userDist.push({
        user: user,
        distance: distance
      })

      // debugger
    });
    const sortedByDist = userDist.sort((a,b) => a.distance - b.distance)
    //console.log(sortedByDist)
    //console.log(u)
    //Use Haversine formula to get distance
      function getDistance(lat1, lon1, lat2, lon2) {
        var R = 6371; // km
        var dLat = toRad(lat2-lat1);
        var dLon = toRad(lon2-lon1);
        var lat1 = toRad(lat1);
        var lat2 = toRad(lat2);

        var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        var d = R * c;
        return d;
      }

      // Converts numeric degrees to radians
      function toRad(Value)
      {
          return Value * Math.PI / 180;
      }

      // debugger

    //filter by nearest user
    return(
      <Card.Group itemsPerRow={6}>
        {sortedByDist.map( user=> <ProfileCard key={user.user.id}{...user.user}/>)}
      </Card.Group>
    )
  }

}

const mapStateToProps = (state) => ({
  user: state.usersStore.user,
  users: state.usersStore.users

});

export default connect(mapStateToProps, { storeUsers })(Profiles)
