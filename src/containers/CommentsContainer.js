import React, { Component } from 'react'
import CommentForm from '../components/CommentForm';
import CommentShow from '../components/CommentShow';
import { connect } from 'react-redux'
import {  storeComments, createComment } from "../actions/CommentActions";
import {  storeUser } from "../actions/UserActions";


class CommentsContainer extends Component {

  render() {
    // debugger
    return (
      <div>

        <CommentShow comments={this.props.comments}/>
        <CommentForm createComment={this.props.createComment} user={this.props.user} profile={this.props.profile}/>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  comments: state.commentsStore.comments,
  user: state.usersStore.user
});

//const mapDispatchToProps = dispatch => ({ createComment: comment => dispatch({ type: "CREATE_COMMENT", comment }) })

export default connect(mapStateToProps, {storeComments, createComment, storeUser})(CommentsContainer)
