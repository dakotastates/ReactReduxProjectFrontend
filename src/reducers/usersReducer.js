export default function userReducers(
  state = { user: {}, users: [], profile:{} },
  { type, payload }
) {
  switch (type) {

    case "STORAGE_USER":
    // debugger
    return {
      ...state,
      user: payload,
    };

    case "CREATE_USER":
    // debugger
      return {
        ...state,
        user: payload,
      };

      case "STORAGE_USERS":
      // debugger
      return {
        ...state,
        users: payload,
      };

      case "UPDATE_USER":
      // debugger
      return {
        ...state,
        user: payload,
        users: [],
      };

      case "SHOW_USER":
       // debugger
      return {
        ...state,
        profile: payload
      };

    default:
      return state;
  }
}
