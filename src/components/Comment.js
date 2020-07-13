import React from 'react'


class Comment extends React.Component {


    render(){
      const {id, comment, user} = this.props
        return(
            <div>
            {user} says: {comment}
            </div>
        )
    }
}


export default Comment
