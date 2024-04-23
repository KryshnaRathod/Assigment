// actions/usersActions.js
export const fetchUsers = () => {
    return async (dispatch) => {
      dispatch({ type: 'FETCH_USERS_REQUEST' });
      try {
        const response = await fetch('https://api.github.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        dispatch({ type: 'FETCH_USERS_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'FETCH_USERS_FAILURE', payload: error.message });
      }
    };
  };
  
  export const toggleBookmark = (userId) => {
    return { type: 'TOGGLE_BOOKMARK', payload: userId };
  };
  