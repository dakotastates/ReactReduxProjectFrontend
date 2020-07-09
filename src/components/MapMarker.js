import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
//import {Link} from 'react-router-dom'


export class MapMarker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      longitude:"",
      latitude:""
    };
  }



  render() {
    const {longitude, latitude} = this.props
    return (

      <Marker position={{ lat: this.state.latitude, lng: this.state.longitude}} />

    )
  }
}

export default MapMarker
