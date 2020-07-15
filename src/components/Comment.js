import React from 'react'


class Comment extends React.Component {


    render(){
      const {id, comment, user_id, user} = this.props

      // debugger
        return(
            <div>
            {user.username} says: {comment}
            </div>
        )
    }
}


export default Comment
