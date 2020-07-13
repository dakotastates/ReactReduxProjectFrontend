const _userObject = (state) => ({
  user: {
    id: state.id,
    username: state.username,
    password: state.password,
    confirmPassword: state.confirmPassword,
    bio: state.bio,
    avatar: state.avatar,
    longitude: state.longitude,
    latitude: state.latitude

  },

});

export const createUser = (state) => {
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(_userObject(state)),
  };

   return async (dispatch) => {
     const res = await fetch("http://localhost:3000/api/v1/users", configObj);
     const json = await res.json();
     // debugger
     if (json.error) {
        throw new Error(json.error /*+ " " + json.message*/);
      }
      localStorage.setItem("token", json.jwt);
      dispatch({
        type: "CREATE_USER",
        payload: json.user,
      });
      // debugger
   }


};

export const storeUser = (user) => {
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
    // debugger
    if (json.error) {
      throw new Error(json.error /*+ " " + json.message*/);
    }
    localStorage.setItem("token", json.jwt);
    dispatch({
       type: "STORAGE_USER",
       payload: json.user,
     });
  }
};

export const storeUsers = () => {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  };
  return async (dispatch) => {

    const res = await fetch("http://localhost:3000/api/v1/users", options);
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

export const updateUser = (state) => {
  // debugger
  // console.log(state)
  let options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    },
    body: JSON.stringify(_userObject(state)),
  };

  return async (dispatch) => {
    const res = await fetch("http://localhost:3000/api/v1/users" + `/${state.id}`, options);

    const json = await res.json();
    // debugger
    if (json.error) {
      throw new Error(json.error + " " + json.message);
    }
    dispatch({
      type: "UPDATE_USER",
      payload: json,
    });
  };
};

export const showUser = (state) => {
  // debugger
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  };
  return async (dispatch) => {

    const res = await fetch("http://localhost:3000/api/v1/users" + `/${state.match.params.id}`, options);
    const json = await res.json();
    // debugger
    if (json.error) {
      // debugger
      throw new Error(json.error + " " + json.message);
    }
    dispatch({
      type: "SHOW_USER",
      payload: json,
    });
  };
};
