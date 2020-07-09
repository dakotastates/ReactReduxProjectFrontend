import React from 'react'
import { connect } from "react-redux";
import {  createComment } from "../actions/CommentActions";
import {  storeUser } from "../actions/UserActions";
//import { Button, Comment, Form, Header } from 'semantic-ui-react'


class CommentForm extends React.Component {
  state = {
    comment:"",
    user_id:[],
    recipient_id:[]
  }



  handleOnChange = (e) => {

    this.setState({
      [e.target.name]: e.target.value,
      user_id: this.props.user.id,
      recipient_id: this.props.id
    });
  };

  onSubmit = (e) => {
    // debugger
    e.preventDefault();
    this.props
       .createComment(this.state)
       debugger
  }


  render(){
    return(
      <form onSubmit={this.onSubmit}>
        <label for="comment">Comment:</label><br/><br/>
        <textarea id="comment" name="comment" rows="4" cols="50" onChange={this.handleOnChange} />
        <br/>
        <input type="Submit" value="Comment"/>
        <br/>
      </form>
    )
  }
}
// const CommentForm = () => (
//   <Comment.Group>
//     <Header as='h3' dividing>
//       Comments
//     </Header>
//
//     <Comment>
//       <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
//       <Comment.Content>
//         <Comment.Author as='a'>Matt</Comment.Author>
//         <Comment.Metadata>
//           <div>Today at 5:42PM</div>
//         </Comment.Metadata>
//         <Comment.Text>How artistic!</Comment.Text>
//         <Comment.Actions>
//           <Comment.Action>Reply</Comment.Action>
//         </Comment.Actions>
//       </Comment.Content>
//     </Comment>
//
//     <Comment>
//       <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
//       <Comment.Content>
//         <Comment.Author as='a'>Elliot Fu</Comment.Author>
//         <Comment.Metadata>
//           <div>Yesterday at 12:30AM</div>
//         </Comment.Metadata>
//         <Comment.Text>
//           <p>This has been very useful for my research. Thanks as well!</p>
//         </Comment.Text>
//         <Comment.Actions>
//           <Comment.Action>Reply</Comment.Action>
//         </Comment.Actions>
//       </Comment.Content>
//       <Comment.Group>
//         <Comment>
//           <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
//           <Comment.Content>
//             <Comment.Author as='a'>Jenny Hess</Comment.Author>
//             <Comment.Metadata>
//               <div>Just now</div>
//             </Comment.Metadata>
//             <Comment.Text>Elliot you are always so right :)</Comment.Text>
//             <Comment.Actions>
//               <Comment.Action>Reply</Comment.Action>
//             </Comment.Actions>
//           </Comment.Content>
//         </Comment>
//       </Comment.Group>
//     </Comment>
//
//     <Comment>
//       <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
//       <Comment.Content>
//         <Comment.Author as='a'>Joe Henderson</Comment.Author>
//         <Comment.Metadata>
//           <div>5 days ago</div>
//         </Comment.Metadata>
//         <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
//         <Comment.Actions>
//           <Comment.Action>Reply</Comment.Action>
//         </Comment.Actions>
//       </Comment.Content>
//     </Comment>
//
//     <Form reply>
//       <Form.TextArea />
//       <Button content='Add Reply' labelPosition='left' icon='edit' primary />
//     </Form>
//   </Comment.Group>
// )

const mapStateToProps = (state) => ({
  user: state.usersStore.user
});

export default connect(mapStateToProps, { storeUser, createComment })(CommentForm)
