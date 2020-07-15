import React, {Component} from 'react'
//import { connect } from "react-redux";
//import {  createComment, storeComment } from "../actions/CommentActions";
//import {  storeUser } from "../actions/UserActions";
//import { Button, Comment, Form, Header } from 'semantic-ui-react'



class CommentForm extends Component {
//constructor(props){
  //super(props)
  //this.formRef=React.createRef()
  constructor(props){
    super(props);
    this.state = {
      comment:"",
      user_id:[],
      recipient_id:[]
  }
}
  //this.onSubmit = this.onSubmit.bind(this);

  // this.HandleOnChange = this.HandleOnChange.bind(this);
  //   this.onSubmit = this.onSubmit.bind(this);
//}


  handleOnChange = (e) => {

    this.setState({
      [e.target.name]: e.target.value,
      user_id: this.props.user.id,
      recipient_id: parseInt(this.props.profile)
    });
  };

  onSubmit = (event) => {
    // debugger
    event.preventDefault();
    this.props

       .createComment(this.state);
       //.then(() => {
         //this.props.storeComment(this.state)
        // debugger
        //this.props.addComment(this.state)
        this.setState({
          comment:"",
          user_id:"",
          recipient_id:""

       })
      //  })

       // debugger

  }






  render(){
    // debugger
    return(
      <form onSubmit={(event) => this.onSubmit(event)}>

        <textarea id="comment" value={this.state.comment} name="comment" rows="4" cols="50" onChange={this.handleOnChange} />
        <br/>
        <input type="Submit" defaultValue="Comment"/>
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



// const mapStateToProps = (state) => ({
//   user: state.usersStore.user,
//   comment: state.commentsStore.comment
// });

//export default connect(mapStateToProps, { storeUser, createComment, storeComment })(CommentForm)
export default CommentForm;
