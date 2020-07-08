import React, { useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'




function Authenticate(props) {

 const [toggle, setToggle] = useState(true);

        return(
            <div>
              <h1>Authenticate Page</h1>
              {toggle ? (
                <Login {...props} toggle={setToggle} />
              ) : (
                <SignUp {...props} toggle={setToggle} />
              )}
            </div>
        )

}


export default Authenticate
