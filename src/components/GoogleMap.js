import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { connect } from "react-redux";
import { storeUser, updateUser, storeUsers } from "../actions/UserActions";

const mapStyles = {
  width: '50%',
  height: '50%'
};

export class MapContainer extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     user:{
  //       longitude:0,
  //       latitude:0
  //   },
  //   users:{
  //     users:[]
  //   }
  //   };
  // }

  state={
    users:[]
  }

  componentDidMount(){
    console.log(this.props);
    let currentComponent = this;
    navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        //currentComponent.setState(()=>{
          currentComponent.props.user.longitude = position.coords.longitude
          currentComponent.props.user.latitude = position.coords.latitude
        //});
        currentComponent.props.updateUser(currentComponent.props.user)
      });

      this.props
      .storeUsers()
      .then(() => {
       console.log(this.props.users)
       this.setState({users: this.props.users})
       console.log(this.state)
       // debugger
      })
      .catch((error) => console.log(error));
  }

displayMarkers = () =>{
  // debugger
  return this.state.users.map((user)=>{
    return <Marker  position={{
      lat: user.latitude,
      lng: user.longitude
    }}
    onClick={()=> console.log("clicked")} />
  })
}


  render() {
 const currentUser = this.props.user

    return (

      <Map
        google={this.props.google}
        zoom={15}
        style={mapStyles}
        initialCenter={{
         lat: currentUser.latitude,
         lng: currentUser.longitude
        }}
      >
      <Marker position={{ lat: currentUser.latitude, lng: currentUser.longitude}}  />
      {this.displayMarkers()}
      </Map>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.usersStore.user,
  users: state.usersStore.users
});

export default connect(mapStateToProps, { storeUser, updateUser, storeUsers})(GoogleApiWrapper({
  apiKey: 'AIzaSyA7PogTaDvIRVW8jHj-st3fefaZdB72iiE'
})(MapContainer));
