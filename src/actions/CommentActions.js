const _commentObject = (state) => ({
  comment: {

    comment: state.comment,
    user_id: state.user_id,
    recipient_id: state.recipient_id


  },

});

export const createComment = (state) => {
  // debugger
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(_commentObject(state)),
  };
  // debugger
   return async (dispatch) => {
     const res = await fetch("http://localhost:3000/api/v1/comments", configObj);
     const json = await res.json();
     // debugger
     if (json.error) {
        throw new Error(json.error + " " + json.message);
      }
      //localStorage.setItem("token", json.jwt);
      dispatch({
        type: "CREATE_COMMENT",
        payload: json.user,
      });
      // debugger
   }
};

export const storeComment = (user) => {
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({user}),
  };

  return async (dispatch) => {
    const res = await fetch("http://localhost:3000/api/v1/login", configObj);
    const json = await res.json();
    if (json.error) {
      throw new Error(json.error + " " + json.message);
    }
    localStorage.setItem("token", json.jwt);
    dispatch({
       type: "STORAGE_USER",
       payload: json.user,
     });
  }
};

export const storeComments = () => {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  };
  return async (dispatch) => {

    const res = await fetch("http://localhost:3000/api/v1/comments", options);
    const json = await res.json();
    // debugger
    if (json.error) {
      // debugger
      throw new Error(json.error + " " + json.message);
    }
    dispatch({
      type: "STORAGE_USERS",
      payload: json,
    });
  };
};
