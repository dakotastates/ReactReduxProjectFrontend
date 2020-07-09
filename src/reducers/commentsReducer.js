export default function commentsReducers(
  state = { comment: {}, comments: [] },
  { type, payload }
) {
  switch (type) {

    case "STORAGE_COMMENT":
    // debugger
    return {
      ...state,
      comment: payload,
    };

    case "CREATE_COMMENT":
    // debugger
      return {
        ...state,
        comment: payload,
      };

      case "STORAGE_COMMENTS":
      // debugger
      return {
        ...state,
        comments: payload,
      };

      
    default:
      return state;
  }
}
