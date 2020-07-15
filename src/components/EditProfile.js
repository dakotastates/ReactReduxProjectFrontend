import React from 'react'
import ProfileCard from './ProfileCard'


class EditProfile extends React.Component {

  state={
    avatar: "https://thumbs.dreamstime.com/b/guest-avatar-vector-illustration-default-male-profile-icon-image-profile-guest-avatar-vector-illustration-default-male-profile-182095612.jpg",
    bio: "",

  }

  handleOnChange = (event) => {
    // debugger
    this.setState({
      [event.target.name]: event.target.value,

    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    // debugger
    this.props.updateUser(this.state, this.props.user)


  };

  render(){
    // debugger
    return(
      <div>
      <h1>Edit your Profile</h1>


      <form onSubmit={(event) => this.onSubmit(event)}>
        <input type="text" name="avatar"
          placeholder="image url"
          value={this.state.avatar}
          onChange={this.handleOnChange}
        /><br/>
        <input type="text" name="bio"
          placeholder="headline"
          value={this.state.bio}
          onChange={this.handleOnChange}
        />
        <br/>
        <input
            type="submit"
            value="Edit"
        />
      </form>
      </div>
    )
  }

}



export default EditProfile
