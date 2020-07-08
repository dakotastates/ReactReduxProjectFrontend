export default function userReducers(
  state = { user: {}, users: [], filterUsers: [] },
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

    default:
      return state;
  }
}
