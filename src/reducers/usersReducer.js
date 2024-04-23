// reducers/usersReducer.js
const initialState = {
    users: [],
    isLoading: false,
    error: null,
    bookmarkedUsers: [],
  };
  
  const usersReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_USERS_REQUEST':
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      case 'FETCH_USERS_SUCCESS':
        return {
          ...state,
          isLoading: false,
          users: action.payload,
        };
      case 'FETCH_USERS_FAILURE':
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      case 'TOGGLE_BOOKMARK':
        const userId = action.payload;
        const index = state.bookmarkedUsers.indexOf(userId);
        if (index === -1) {
          // Bookmark user
          return {
            ...state,
            bookmarkedUsers: [...state.bookmarkedUsers, userId],
          };
        } else {
          // Unbookmark user
          const updatedBookmarkedUsers = state.bookmarkedUsers.filter(
            (id) => id !== userId
          );
          return {
            ...state,
            bookmarkedUsers: updatedBookmarkedUsers,
          };
        }
      default:
        return state;
    }
  };
  
  export default usersReducer;
  