import React from 'react'
import { connect } from "react-redux";
import {  storeComments } from "../actions/CommentActions";
import {  storeUser } from "../actions/UserActions";
import Comment from './Comment'
//import { Button, Comment, Form, Header } from 'semantic-ui-react'
import CommentForm from './CommentForm'


class CommentShow extends React.Component {

  state={
    comments:[]
  }

  componentDidUpdate() {

     this.props
       .storeComments()
       .then(() => {
        console.log(this.props.comments)
        // debugger
        this.setState({comments: this.props.comments})
        console.log(this.state)

       })
       .catch((error) => console.log(error));

   }

   // addComment = (comment)=>{
   //   this.setState((prevState)=>{
   //     //const copyComment = {...comment}
   //     return{comments:[...prevState.comments, ...comment]}
   //   })
   //
   // }

// componentDidUpdate(){
//   this.state()
// }

   // filter=()=>{
   //
   //   const filteredUser = this.state.comments.filter(comment => comment.recipient_id === this.props.id)
   //   debugger
   // }


  render(){
    const filteredUser = this.state.comments.filter(comment => comment.recipient_id === this.props.id)
    console.log(filteredUser)
    return(
      <div>
    <h1>Comments</h1>
    {filteredUser.map( comment=> <Comment key={comment.id}{...comment}/>)}



    </div>


    )
  }
}


const mapStateToProps = (state) => ({
  comments: state.commentsStore.comments
});

export default connect(mapStateToProps, { storeComments })(CommentShow)
