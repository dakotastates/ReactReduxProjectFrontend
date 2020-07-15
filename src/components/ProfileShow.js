import React, { Component } from 'react'
import ProfileCard from './ProfileCard'
import { connect } from "react-redux";
import { showUser } from "../actions/UserActions";
//import CommentForm from './CommentForm'
//import CommentShow from './CommentShow'
import CommentsContainer from '../containers/CommentsContainer'


class ProfileShow extends React.Component {
  state={
    profile:{}
  }

componentDidMount(){
  // debugger
  this.props
  .showUser(this.props)
  .then(() => {
   console.log(this.props.user)
   this.setState({profile: this.props.profile})
   console.log(this.state)

  })
  .catch((error) => console.log(error));
}



    render(){
      console.log(this.state)

        return(

            <div>
              <h1>Profile Show Page</h1>
              {this.state.profile.username ? <ProfileCard {...this.state.profile}/>:<h1>ID not Found</h1>}

              <CommentsContainer profile={this.props.match.params.id}/>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
  profile: state.usersStore.profile

});

export default connect(mapStateToProps, { showUser })(ProfileShow)
