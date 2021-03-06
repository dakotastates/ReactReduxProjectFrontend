import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { connect } from "react-redux";
import { storeUser, updateUser, storeUsers } from "../actions/UserActions";
import ProfileCard from './ProfileCard'
import {BrowserRouter, Link} from 'react-router-dom'
//import { Card } from 'semantic-ui-react'

const mapStyles = {
  width: '100%',
  height: '100%'
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
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    user:{},
    users:[]
  }

  componentDidMount(){
    // console.log(this.props);
    // let currentComponent = this;
    // navigator.geolocation.getCurrentPosition(function(position) {
    //     console.log("Latitude is :", position.coords.latitude);
    //     console.log("Longitude is :", position.coords.longitude);
    //     //currentComponent.setState(()=>{
    //       currentComponent.props.user.longitude = position.coords.longitude
    //       currentComponent.props.user.latitude = position.coords.latitude
    //     //});
    //     currentComponent.props.updateUser(currentComponent.props.user)
    //   });

      this.props
      .storeUsers()
      .then(() => {
       //console.log(this.props.users)
       this.setState({users: this.props.users})
       //console.log(this.state)
       // debugger
      })
      .catch((error) => console.log(error));
  }

  onMarkerClick=(props, marker, e) =>{
    console.log(props)
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      user: props.user

    })
// debugger

  }

displayMarkers = () =>{
  // debugger
  return this.state.users.map((user, index)=>{
    return <Marker
    key={index}
    position={{
      lat: user.latitude,
      lng: user.longitude
    }}
    user={user}
    onClick={this.onMarkerClick} />
  })
}




  render() {
 const currentUser = this.props.user
 const clickedUser = this.state.user
 // debugger
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

        <InfoWindow

          marker = { this.state.activeMarker }
          visible = { this.state.showingInfoWindow }>

        <BrowserRouter>
          <ProfileCard key={clickedUser.id}{...clickedUser}/>
        </BrowserRouter>
        </InfoWindow>

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
