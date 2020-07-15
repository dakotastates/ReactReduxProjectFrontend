import React from 'react'
//import { connect } from "react-redux";
//import {  storeComments } from "../actions/CommentActions";
//import {  storeUser } from "../actions/UserActions";
import Comment from './Comment'
//import { Button, Comment, Form, Header } from 'semantic-ui-react'
//import CommentForm from './CommentForm'
import { useParams} from "react-router";


//class CommentShow extends React.Component {
const CommentShow = props => {

  // state={
  //   comments:[]
  // }

  // componentDidMount() {
  //
  //    this.props
  //      .storeComments()
  //      .then(() => {
  //       console.log(this.props.comments)
  //       // debugger
  //       this.setState({comments: this.props.comments})
  //       console.log(this.state)
  //
  //      })
  //      .catch((error) => console.log(error));
  //
  //  }



   // addComment = (comment)=>{
   //   this.setState((prevState)=>{
   //     //const copyComment = {...comment}
   //     return{comments:[...prevState.comments, ...comment]}
   //   })
   //
   // }

// componentDidUpdate(){
//   console.log(this.props.comments)
// }

   // filter=()=>{
   //
   //   const filteredUser = this.state.comments.filter(comment => comment.recipient_id === this.props.id)
   //   debugger
   // }


  //render(){
    //const filteredUser = this.state.comments.filter(comment => comment.recipient_id === this.props.id)
    let { id } = useParams();
// debugger
    const filteredUser = props.comments.filter(comment => comment.recipient_id === parseInt(id))
    // debugger
    console.log(filteredUser)
    return(
      <div>
    <h1>Comments</h1>
    {filteredUser.map( comment=> <Comment key={comment.id}{...comment}/>)}



    </div>


    )
//  }
}


// const mapStateToProps = (state) => ({
//   comments: state.commentsStore.comments
// });

//export default connect(mapStateToProps, { storeComments })(CommentShow)
export default CommentShow;
