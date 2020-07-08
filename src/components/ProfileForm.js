import React from 'react'
import { Card } from 'semantic-ui-react'


export default class ProfileForm extends React.Component {
constructor(props){
  super(props)
  this.formRef = React.createRef()
  this.state={
    image: "",
    headline: ""
  }
}

  handleSubmit=(e)=>{
    e.preventDefault()
    console.log(this)
    this.props.editProfile(this.state)
  }

handleChange = (e) =>{
  this.setState({[e.target.name]:e.target.value})
}

  render(){
    console.log(this.state)
    const {headline, image} = this.props
    return(
      <Card>
        <form id="profile-form" onSubmit={this.handleSubmit} ref={this.formRef}>
          <div className="image">
            <img alt="default" src={this.state.image} />
          </div>
          <div className="headline">
            <input type="text" placeholder="Headline" name="headline" onChange={this.handleChange} value={this.state.headline}/>
            <input type="submit" value="Edit Profile" />
          </div>
        </form>
      </Card>
    )
  }
}
